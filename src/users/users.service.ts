import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  user: User = {
    username: 'jose',
    password: '1234',
  };
  login(user: User): boolean {
    // TODO
    return true;
  }
  signup(user: User) {
    // TODO
    return true;
  }
}
