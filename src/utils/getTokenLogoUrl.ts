import { WarpToken } from '../types';

export const getTokenLogoUrl = (token: WarpToken) => {
  return token.logoURI
    ? `https://cdn.jsdelivr.net/gh/hyperlane-xyz/hyperlane-registry${token.logoURI}`
    : 'https://chainlist.org/unknown-logo.png';
};
