export interface Expense {
  id: string;
  groupId: string;
  description: string;
  amount: number;
  paidBy: string;
  splits: { [userId: string]: number };
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}
