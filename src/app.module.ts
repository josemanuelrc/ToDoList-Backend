import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';
import { UsersService } from './users/users.service';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [UsersModule, TasksModule],
  controllers: [UsersController, TasksController],
  providers: [UsersService, TasksService],
})
export class AppModule {
}
