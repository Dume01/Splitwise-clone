export interface Settlement {
  id: string;
  groupId: string;
  fromUser: string;
  toUser: string;
  amount: number;
  settledAt: Date;
}
