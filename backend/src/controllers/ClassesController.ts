import { Request, Response } from 'express';

import User from '../models/User';
import Class from '../models/Class';
import ClassSchedule from '../models/ClassSchedule';

import { getRepository } from 'typeorm';
import { ConvertHourToMinutes } from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  to: string;
  from: string;
}

export default class ClassController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    if (!filters.subject || !filters.week_day || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search class',
      });
    }

    const subject = filters.subject as string;
    const time = filters.time as string;
    const week_day = filters.week_day as string;

    const classRepository = getRepository(Class);

    const convertedTime = ConvertHourToMinutes(time);

    const filterClasses = await classRepository
      .createQueryBuilder('classes')
      .innerJoinAndSelect('classes.classSchedule', 'cs')
      .where('cs.class_id = classes.id')
      .innerJoinAndSelect('classes.user', 'user', 'classes.user_id = user.id')
      .andWhere('cs.week_day = :week_day', { week_day })
      .andWhere('cs.from <= :convertedTime', { convertedTime })
      .andWhere('cs.to > :convertedTime', { convertedTime })
      .andWhere('classes.subject = :subject', { subject })
      .getMany();

    return response.json(filterClasses);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      price,
      schedule,
    } = request.body;

    try {
      const userRepository = getRepository(User);
      const classRepository = getRepository(Class);
      const classScheduleRepository = getRepository(ClassSchedule);

      let user = userRepository.create({
        name,
        avatar,
        bio,
        whatsapp,
      });

      user = await userRepository.save(user);

      let leason = classRepository.create({
        subject,
        price,
        user_id: user.id,
      });

      leason = await classRepository.save(leason);

      const classScheduleFormatted = schedule.map(
        (scheduleItem: ScheduleItem) => {
          return {
            class_id: leason.id,
            week_day: scheduleItem.week_day,
            from: ConvertHourToMinutes(scheduleItem.from),
            to: ConvertHourToMinutes(scheduleItem.to),
          };
        },
      );

      let classSchedule = classScheduleRepository.create(
        classScheduleFormatted,
      );

      await classScheduleRepository.save(classSchedule);

      return response.json(classSchedule);
    } catch (err) {
      return response.status(400).json({ error: 'Unexpected error' });
    }
  }
}
