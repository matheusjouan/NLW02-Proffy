import {
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';
import Class from './Class';

@Entity('class_schedule')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  class_id: string;

  @JoinColumn({ name: 'class_id' })
  @ManyToOne(() => Class, leason => leason.classSchedule)
  // @ManyToOne(() => Class)
  leasson: Class;

  @Column('int')
  week_day: number;

  @Column('int')
  from: number;

  @Column('int')
  to: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
