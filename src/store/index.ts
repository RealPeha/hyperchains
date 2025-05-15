import { GithubRegistry, warpRouteConfigs } from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata, WarpCoreConfig } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';
import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';
import { WarpRoute } from '../types';

interface Store {
  isLoading: boolean;

  chains: ChainMetadata[];
  routes: WarpRoute[];
  addresses: ChainMap<Record<string, string>>;
  warpRoutes: Record<string, WarpCoreConfig>;

  init: () => Promise<void>;

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
    routes: [],
    addresses: {},
    warpRoutes: {},

    init: async () => {
      const registry = new GithubRegistry();

      const [metadata, addresses, warpRoutes] = await Promise.all([
        registry.getMetadata(),
        registry.getAddresses(),
        Promise.resolve(warpRouteConfigs), // registry.getWarpRoutes(),
      ]);
      const chains = Object.values(metadata)
        // Filter out EVM chains that don't have a mailbox address
        .filter((chain) =>
          chain.protocol === ProtocolType.Ethereum
            ? addresses[chain.name]?.mailbox
            : true,
        )
        .sort((a, b) => Number(a.chainId) - Number(b.chainId));

      const routes = Object.entries(warpRoutes).flatMap(([routeId, route]) => {
        return route.tokens.flatMap((tokenFrom) => {
          return route.tokens
            .flatMap((tokenTo) => {
              if (tokenFrom === tokenTo) {
                return null;
              }

              return {
                id: routeId,
                from: tokenFrom,
                to: tokenTo,
              } satisfies WarpRoute;
            })
            .filter(Boolean);
        });
      });

      set({
        isLoading: false,
        chains,
        routes,
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
