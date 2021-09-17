import { Controller, Get, Post } from '@nestjs/common';
import { User } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getHello(): string {
    return 'Hola';
  }
  @Post('login')
  login(user: User): boolean {
    return this.usersService.login(user);
  }
  @Post('signup')
  sigup(user: User) {
    this.usersService.signup(user);
  }
}
