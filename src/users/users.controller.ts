import {
  Post,
  Body,
  Controller,
  Param,
  Get,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import type { User } from 'src/models';

@Controller('users')
export class UsersController {
  constructor() {}

  @Post('register')
  createUser(@Body() user: User) {
    // call service to register user
  }

  @Post('login')
  loginUser(@Body() body: { username: string; password: string }) {
    // call service to login user
  }

  @Get()
  getAllUsers(@Query('search') search?: string) {
    // call service to get all users (with optional search)
  }

  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    // call service to get user by username
  }

  // Friend Request Management
  @Post(':username/friends/request')
  sendFriendRequest(
    @Param('username') username: string,
    @Body() body: { toUsername: string },
  ) {
    // call service to send friend request
  }

  @Get(':username/friends/requests')
  getFriendRequests(
    @Param('username') username: string,
    @Query('type') type?: 'received' | 'sent',
  ) {
    // call service to get friend requests (received/sent)
  }

  @Put(':username/friends/requests/:requestId')
  handleFriendRequest(
    @Param('username') username: string,
    @Param('requestId') requestId: string,
    @Body() body: { action: 'accept' | 'reject' },
  ) {
    // call service to accept/reject friend request
  }

  // Friends Management
  @Get(':username/friends')
  getFriends(@Param('username') username: string) {
    // call service to get all friends
  }

  @Delete(':username/friends/:friendUsername')
  removeFriend(
    @Param('username') username: string,
    @Param('friendUsername') friendUsername: string,
  ) {
    // call service to remove friend
  }

  // User's Groups
  @Get(':username/groups')
  getUserGroups(@Param('username') username: string) {
    // call service to get user's groups
  }

  // User's Overall Balances
  @Get(':username/balances')
  getUserBalances(@Param('username') username: string) {
    // call service to get user's overall balance summary
  }
}
