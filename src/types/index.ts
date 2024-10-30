import type { warpRouteConfigs } from '@hyperlane-xyz/registry';

export type WarpToken = (typeof warpRouteConfigs)[string]['tokens'][number];

export interface ExtraChainData {
  addedAt: number;
}

export interface ValidatorInfo {
  address: string;
  name: string;
}

export interface WarpRoute {
  id: string;
  from: WarpToken;
  to: WarpToken;
}
