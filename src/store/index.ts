import { GithubRegistry, warpRouteConfigs } from '@hyperlane-xyz/registry';
import type {
  ChainMap,
  ChainMetadata,
  WarpCoreConfig,
} from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';
import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { parseValidators } from '../utils';
import { ValidatorInfo } from '../types';

interface Store {
  isLoading: boolean;

  chains: ChainMetadata[];
  addresses: ChainMap<Record<string, string>>;
  warpRoutes: Record<string, WarpCoreConfig>;
  validators: ChainMap<ValidatorInfo[]>;

  load: () => Promise<void>;

  getChain: (chain: string) => ChainMetadata | undefined;
  getAddresses: (chain: string) => Record<string, string> | undefined;
  getWarpRoutes: (chain: string) => {
    warpRoutesArray: [string, WarpCoreConfig][];
    warpRoutes: Record<string, WarpCoreConfig>;
  };
  getValidators: (chain: string) => ValidatorInfo[] | undefined;
}

export const useStore = createSelectorFunctions(
  create<Store>((set, get) => ({
    isLoading: true,

    chains: [],
    addresses: {},
    warpRoutes: {},
    validators: {},

    load: async () => {
      const registry = new GithubRegistry();

      const [metadata, addresses, warpRoutes, validatorsFile] =
        await Promise.all([
          registry.getMetadata(),
          registry.getAddresses(),
          Promise.resolve(warpRouteConfigs), // registry.getWarpRoutes(),
          fetch(
            'https://raw.githubusercontent.com/hyperlane-xyz/hyperlane-monorepo/refs/heads/main/typescript/sdk/src/consts/multisigIsm.ts',
          )
            .then((res) => res.text())
            .catch(() => null),
        ]);
      const chains = Object.values(metadata)
        // Filter out EVM chains that don't have a mailbox address
        .filter((chain) =>
          chain.protocol === ProtocolType.Ethereum
            ? addresses[chain.name]?.mailbox
            : true,
        )
        .sort((a, b) => Number(a.chainId) - Number(b.chainId));

      const validators = validatorsFile ? parseValidators(validatorsFile) : {};

      set({
        isLoading: false,
        chains,
        addresses,
        warpRoutes,
        validators,
      });
    },
    getChain: (chain) => {
      return get().chains.find((c) => c.name === chain);
    },
    getAddresses: (chain) => {
      return get().addresses[chain];
    },
    getValidators: (chain) => {
      return get().validators[chain];
    },
    getWarpRoutes: (chain) => {
      const warpRoutesArray = Object.entries(get().warpRoutes).filter(
        ([id]) => {
          return id.split('/')[1].split('-').includes(chain);
        },
      );

      return {
        warpRoutesArray,
        warpRoutes: Object.fromEntries(warpRoutesArray),
      };
    },
  })),
);
