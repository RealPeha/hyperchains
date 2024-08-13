import type { warpRouteConfigs } from '@hyperlane-xyz/registry';

export type WarpToken = (typeof warpRouteConfigs)[string]['tokens'][number];

export interface ExtraChainData {
  addedAt: number;
}
