import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { AuthCredintialsDto } from './dto/auth-credintials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(authCredintialsDto: AuthCredintialsDto): Promise<void> {
    const { username, password } = authCredintialsDto;
    const user = new User();

    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('username aready exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(authCredintialsDto: AuthCredintialsDto): Promise<string | null> {
    const { username, password } = authCredintialsDto;
    const user = await this.findOne({ username });

    if (user && (await user.validatePassword(password))) {
      return username;
    }

    return null;
  }
}
