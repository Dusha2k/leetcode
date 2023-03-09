function maximumWealth(accounts: number[][]): number {
  const arr: number[] = [];
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      if (j === 0) {
        arr[i] = 0;
      }
      arr[i] = arr[i] + accounts[i][j];
    }
  }
  return Math.max(...arr);
}
