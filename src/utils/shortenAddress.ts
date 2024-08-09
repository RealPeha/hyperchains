export const shortenAddress = (address: string, length = 3) => {
  return `${address.slice(0, length + 2)}...${address.slice(-length)}`;
};
