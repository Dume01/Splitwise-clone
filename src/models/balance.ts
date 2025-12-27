export interface UserBalance {
    userId: string,
    owesTo: { [otherUserId: string]: number }, // positive amounts this user owes to others
    owedBy: { [otherUserId: string]: number }, // positive amounts others owe to this user
}

export interface SimplifiedDebt {
    from: string,
    to: string,
    amount: number,
}