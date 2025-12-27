import { RequestStatus } from './requestStatus';

export interface FriendRequest {
  id: string;
  fromUser: string;
  toUser: string;
  status: RequestStatus;
  createdAt: Date;
}
