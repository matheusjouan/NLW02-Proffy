import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Connection from '../models/Connection';
import User from '../models/User';

export default class ConnectionController {
  async index(request: Request, response: Response) {
    const connectionsRepository = getRepository(Connection);

    const totalConnections = await connectionsRepository.count();

    return response.json(totalConnections);
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    const connectionsRepository = getRepository(Connection);
    const usersRepository = getRepository(User);

    const userExists = await usersRepository.findOne({
      where: { id: user_id },
    });

    if (!userExists) {
      return response.status(400).json({ error: 'User does not exists' });
    }

    const connection = connectionsRepository.create({
      user_id,
    });

    await connectionsRepository.save(connection);

    return response.json(connection);
  }
}
