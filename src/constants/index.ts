import { ChainMap } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';
import { ExtraChainData } from '../types';

export enum ChainTag {
  All = 'All',
  Mainnet = 'Mainnet',
  Testnet = 'Testnet',
  Core = 'Core',
  Community = 'Community',
  EVM = 'EVM',
  Solana = 'Solana',
  Cosmos = 'Cosmos',
}

export const protocolToTag: Record<ProtocolType, ChainTag> = {
  [ProtocolType.Ethereum]: ChainTag.EVM,
  [ProtocolType.Sealevel]: ChainTag.Solana,
  [ProtocolType.Cosmos]: ChainTag.Cosmos,
};

export const tagToLabel: Record<ChainTag, string> = {
  [ChainTag.All]: 'all',
  [ChainTag.Mainnet]: 'mainnet',
  [ChainTag.Testnet]: 'testnet',
  [ChainTag.Core]: 'core',
  [ChainTag.Community]: 'community',
  [ChainTag.EVM]: 'EVM',
  [ChainTag.Solana]: 'solana',
  [ChainTag.Cosmos]: 'cosmos',
};

export const extraChainData: ChainMap<ExtraChainData> = {
  ethereum: {
    addedAt: 1710873111000,
  },
  flare: {
    addedAt: 1724679974000,
  },
  cronos: {
    addedAt: 1724679974000,
  },
  bsc: {
    addedAt: 1710873111000,
  },
  bsctestnet: {
    addedAt: 1710873111000,
  },
  gnosis: {
    addedAt: 1710873111000,
  },
  fusemainnet: {
    addedAt: 1721210072000,
  },
  fraxtal: {
    addedAt: 1718116503000,
  },
  kroma: {
    addedAt: 1722948900000,
  },
  filecoin: {
    addedAt: 1724679974000,
  },
  cronoszkevm: {
    addedAt: 1724679974000,
  },
  astar: {
    addedAt: 1723239227000,
  },
  endurance: {
    addedAt: 1720717456000,
  },
  confluxespace: {
    addedAt: 1724679974000,
  },
  coredao: {
    addedAt: 1724679974000,
  },
  dogechain: {
    addedAt: 1724679974000,
  },
  fractalconfluence: {
    addedAt: 1724679974000,
  },
  kava: {
    addedAt: 1724679974000,
  },
  inevm: {
    addedAt: 1710873111000,
  },
  astarzkevm: {
    addedAt: 1724679974000,
  },
  ham: {
    addedAt: 1724679974000,
  },
  connextsepolia: {
    addedAt: 1720752748000,
  },
  cyber: {
    addedAt: 1722948900000,
  },
  kinto: {
    addedAt: 1722948900000,
  },
  b3: {
    addedAt: 1724679974000,
  },
  base: {
    addedAt: 1710873111000,
  },
  clique: {
    addedAt: 1724679974000,
  },
  carbon: {
    addedAt: 1724679974000,
  },
  chiado: {
    addedAt: 1710873111000,
  },
  arthera: {
    addedAt: 1720111449000,
  },
  artheratestnet: {
    addedAt: 1719852062000,
  },
  immutablezkevm: {
    addedAt: 1722948900000,
  },
  holesky: {
    addedAt: 1716189243000,
  },
  funki: {
    addedAt: 1724679974000,
  },
  alephzero: {
    addedAt: 1724679974000,
  },
  arbitrum: {
    addedAt: 1710873111000,
  },
  arbitrumnova: {
    addedAt: 1724679974000,
  },
  celo: {
    addedAt: 1710873111000,
  },
  fuji: {
    addedAt: 1710873111000,
  },
  avalanche: {
    addedAt: 1710873111000,
  },
  alfajores: {
    addedAt: 1710873111000,
  },
  dodotestnet: {
    addedAt: 1721928760000,
  },
  linea: {
    addedAt: 1718116503000,
  },
  bob: {
    addedAt: 1719932096000,
  },
  blast: {
    addedAt: 1714425949000,
  },
  basesepolia: {
    addedAt: 1719341681000,
  },
  ebi: {
    addedAt: 1724679974000,
  },
  bitlayer: {
    addedAt: 1724679974000,
  },
  cheesechain: {
    addedAt: 1722416578000,
  },
  arbitrumsepolia: {
    addedAt: 1718717486000,
  },
  ecotestnet: {
    addedAt: 1722948900000,
  },
  galadrieldevnet: {
    addedAt: 1723220538000,
  },
  forma: {
    addedAt: 1723836705000,
  },
  fhenixtestnet: {
    addedAt: 1724088664000,
  },
  eclipsetestnet: {
    addedAt: 1710873111000,
  },
  degenchain: {
    addedAt: 1722948900000,
  },
  ancient8: {
    addedAt: 1713541564000,
  },
  eclipse: {
    addedAt: 1722959170000,
  },
  injective: {
    addedAt: 1710873111000,
  },
  optimism: {
    addedAt: 1710873111000,
  },
  rootstock: {
    addedAt: 1724167734000,
  },
  rootstocktestnet: {
    addedAt: 1723823685000,
  },
  lukso: {
    addedAt: 1720194661000,
  },
  viction: {
    addedAt: 1710873111000,
  },
  shibarium: {
    addedAt: 1724679974000,
  },
  polygon: {
    addedAt: 1710873111000,
  },
  mantapacific: {
    addedAt: 1710873111000,
  },
  mint: {
    addedAt: 1722948900000,
  },
  xlayer: {
    addedAt: 1722416578000,
  },
  orderly: {
    addedAt: 1724679974000,
  },
  molten: {
    addedAt: 1724668186000,
  },
  pulsechain: {
    addedAt: 1724679974000,
  },
  worldchain: {
    addedAt: 1722416578000,
  },
  redstone: {
    addedAt: 1716224404000,
  },
  metis: {
    addedAt: 1722948900000,
  },
  polygonzkevm: {
    addedAt: 1710873111000,
  },
  lisk: {
    addedAt: 1722948900000,
  },
  moonbeam: {
    addedAt: 1710873111000,
  },
  sei: {
    addedAt: 1718116503000,
  },
  tenet: {
    addedAt: 1724679974000,
  },
  mintsepoliatest: {
    addedAt: 1720717400000,
  },
  sanko: {
    addedAt: 1722948900000,
  },
  ronin: {
    addedAt: 1724679974000,
  },
  tangletestnet: {
    addedAt: 1722948900000,
  },
  merlin: {
    addedAt: 1722948900000,
  },
  luksotestnet: {
    addedAt: 1720194661000,
  },
  mantle: {
    addedAt: 1719932096000,
  },
  tangle: {
    addedAt: 1722948900000,
  },
  nautilus: {
    addedAt: 1710873111000,
  },
  mode: {
    addedAt: 1714425949000,
  },
  neutron: {
    addedAt: 1710873111000,
  },
  zetachain: {
    addedAt: 1716224404000,
  },
  polynomial: {
    addedAt: 1724679974000,
  },
  zircuit: {
    addedAt: 1722948900000,
  },
  proofofplay: {
    addedAt: 1722948900000,
  },
  polygonamoy: {
    addedAt: 1722948900000,
  },
  proteustestnet: {
    addedAt: 1710873111000,
  },
  superpositiontestnet: {
    addedAt: 1721048842000,
  },
  real: {
    addedAt: 1722948900000,
  },
  taiko: {
    addedAt: 1719932096000,
  },
  scrollsepolia: {
    addedAt: 1710873111000,
  },
  scroll: {
    addedAt: 1710873111000,
  },
  xai: {
    addedAt: 1722948900000,
  },
  sketchpad: {
    addedAt: 1716583202000,
  },
  saakuru: {
    addedAt: 1724679974000,
  },
  zoramainnet: {
    addedAt: 1721210072000,
  },
  sepolia: {
    addedAt: 1710873111000,
  },
  optimismsepolia: {
    addedAt: 1723543214000,
  },
  plumetestnet: {
    addedAt: 1710873111000,
  },
  solanatestnet: {
    addedAt: 1710873111000,
  },
  ngmi: {
    addedAt: 1724679974000,
  },
  osmosis: {
    addedAt: 1718120223000,
  },
  rari: {
    addedAt: 1724679974000,
  },
  solana: {
    addedAt: 1710873111000,
  },
  solanadevnet: {
    addedAt: 1710873111000,
  },
  stride: {
    addedAt: 1717038016000,
  },
  stridetestnet: {
    addedAt: 1723821623000,
  },
};
