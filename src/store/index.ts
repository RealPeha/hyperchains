import { GithubRegistry } from '@hyperlane-xyz/registry';
import { ChainMetadata } from '@hyperlane-xyz/sdk';
import { createSelectorFunctions } from 'auto-zustand-selectors-hook';
import { create } from 'zustand';

interface Store {
  chains: ChainMetadata[];
  chainsIsLoading: boolean;
  loadChains: () => Promise<void>;
  getChain: (chain: string) => ChainMetadata | undefined;
}

export const useStore = createSelectorFunctions(
  create<Store>((set, get) => ({
    chains: [],
    chainsIsLoading: true,
    loadChains: async () => {
      const registry = new GithubRegistry();

      const metadata = await registry.getMetadata();
      const chains = Object.values(metadata).sort(
        (a, b) => Number(a.chainId) - Number(b.chainId),
      );

      set({
        chains,
        chainsIsLoading: false,
      });
    },
    getChain: (chain: string) => {
      return get().chains.find((c) => c.name === chain);
    },
  })),
);
