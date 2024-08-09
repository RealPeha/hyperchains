import { GithubRegistry, warpRouteConfigs } from '@hyperlane-xyz/registry';
import type {
  ChainMap,
  ChainMetadata,
  WarpCoreConfig,
} from '@hyperlane-xyz/sdk';
import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';

interface Store {
  isLoading: boolean;

  chains: ChainMetadata[];
  addresses: ChainMap<Record<string, string>>;
  warpRoutes: Record<string, WarpCoreConfig>;

  load: () => Promise<void>;

  getChain: (chain: string) => ChainMetadata | undefined;
  getAddresses: (chain: string) => Record<string, string> | undefined;
  getWarpRoutes: (chain: string) => {
    warpRoutesArray: [string, WarpCoreConfig][];
    warpRoutes: Record<string, WarpCoreConfig>;
  };
}

export const useStore = createSelectorFunctions(
  create<Store>((set, get) => ({
    isLoading: true,

    chains: [],
    addresses: {},
    warpRoutes: {},

    load: async () => {
      const registry = new GithubRegistry();

      const [metadata, addresses, warpRoutes] = await Promise.all([
        registry.getMetadata(),
        registry.getAddresses(),
        Promise.resolve(warpRouteConfigs), // registry.getWarpRoutes(),
      ]);
      const chains = Object.values(metadata).sort(
        (a, b) => Number(a.chainId) - Number(b.chainId),
      );

      set({
        isLoading: false,
        chains,
        addresses,
        warpRoutes,
      });
    },
    getChain: (chain) => {
      return get().chains.find((c) => c.name === chain);
    },
    getAddresses: (chain) => {
      return get().addresses[chain];
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
