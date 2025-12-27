import { Injectable } from '@nestjs/common';
import { User } from 'src/models';

@Injectable()
export class UsersService {
    private users: User[] = [];

    async createUser(user: User) {
        const existingUser = this.users.find((u) => u.username === user.username);
        if (existingUser) {
            throw new Error('User already exists');
        }
        this.users.push(user);
        return user;
    }

    async getUserByUsername(username: string) {
        const user = this.users.find((u) => u.username === username);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
}
