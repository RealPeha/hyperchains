import { ChainMap } from '@hyperlane-xyz/sdk';
import { ValidatorInfo } from '../types';

export const parseValidators = (fileContent: string) => {
  const result: ChainMap<ValidatorInfo[]> = {};

  const lines = fileContent.split('\n');

  let currentNetwork: string | undefined;

  lines.forEach((line) => {
    const networkMatch = line.match(/(\w+):\s*{/);
    if (networkMatch) {
      currentNetwork = networkMatch[1];
      result[currentNetwork] = [];
    }

    const validatorMatch = line.match(/'(0x[a-fA-F0-9]+)'(?:,|)(.*)/);
    if (validatorMatch && currentNetwork) {
      const address = validatorMatch[1];
      const nameMatch = validatorMatch[2].match(/\/\/\s*(.*)/);
      const name = nameMatch ? nameMatch[1].trim() : null;

      result[currentNetwork].push({
        address,
        name: name || 'Unknown',
      });
    }
  });

  return result;
};
