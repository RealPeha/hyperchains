import { ChainName, defaultMultisigConfigs, MultisigConfig } from '@hyperlane-xyz/sdk';

export function getValidators(chain: ChainName): MultisigConfig['validators'] | undefined {
  return defaultMultisigConfigs[chain]?.validators;
}
