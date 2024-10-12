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
  lukso: {
    addedAt: 1720194661000,
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
  mantapacific: {
    addedAt: 1710873111000,
  },
  fantom: {
    addedAt: 1728493308000,
  },
  fraxtal: {
    addedAt: 1718116503000,
  },
  kroma: {
    addedAt: 1722948900000,
  },
  astar: {
    addedAt: 1723239227000,
  },
  endurance: {
    addedAt: 1720717456000,
  },
  koitestnet: {
    addedAt: 1728576897000,
  },
  hyperliquidevmtestnet: {
    addedAt: 1727378000000,
  },
  coredao: {
    addedAt: 1724679974000,
  },
  lisk: {
    addedAt: 1722948900000,
  },
  dogechain: {
    addedAt: 1724679974000,
  },
  inevm: {
    addedAt: 1710873111000,
  },
  astarzkevm: {
    addedAt: 1724679974000,
  },
  kalychain: {
    addedAt: 1727967654000,
  },
  mantle: {
    addedAt: 1719932096000,
  },
  citreatestnet: {
    addedAt: 1727378000000,
  },
  euphoria: {
    addedAt: 1727955874000,
  },
  connextsepolia: {
    addedAt: 1720752748000,
  },
  cyber: {
    addedAt: 1722948900000,
  },
  base: {
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
  everclear: {
    addedAt: 1726065141000,
  },
  alephzeroevm: {
    addedAt: 1728043672000,
  },
  arbitrum: {
    addedAt: 1710873111000,
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
  berabartio: {
    addedAt: 1725117056000,
  },
  blast: {
    addedAt: 1714425949000,
  },
  basesepolia: {
    addedAt: 1719341681000,
  },
  chiliz: {
    addedAt: 1728043672000,
  },
  heneztestnet: {
    addedAt: 1725552663000,
  },
  formtestnet: {
    addedAt: 1727378000000,
  },
  bitlayer: {
    addedAt: 1724679974000,
  },
  camptestnet: {
    addedAt: 1727378000000,
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
  lumia: {
    addedAt: 1728043672000,
  },
  arcadiatestnet: {
    addedAt: 1728581730000,
  },
  eclipsemainnet: {
    addedAt: 1725270331000,
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
  metertestnet: {
    addedAt: 1728576900000,
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
  mint: {
    addedAt: 1722948900000,
  },
  xlayer: {
    addedAt: 1722416578000,
  },
  opbnb: {
    addedAt: 1728399410000,
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
  modetestnet: {
    addedAt: 1728586489000,
  },
  oortmainnet: {
    addedAt: 1726137449000,
  },
  wanchaintestnet: {
    addedAt: 1728493086000,
  },
  metis: {
    addedAt: 1722948900000,
  },
  polygonzkevm: {
    addedAt: 1710873111000,
  },
  moonbeam: {
    addedAt: 1710873111000,
  },
  moonbase: {
    addedAt: 1727880797000,
  },
  unichaintestnet: {
    addedAt: 1728581730000,
  },
  sei: {
    addedAt: 1718116503000,
  },
  soneiumtestnet: {
    addedAt: 1727378000000,
  },
  sanko: {
    addedAt: 1722948900000,
  },
  u2utestnet: {
    addedAt: 1728399410000,
  },
  tangletestnet: {
    addedAt: 1722948900000,
  },
  merlin: {
    addedAt: 1722948900000,
  },
  mantlesepolia: {
    addedAt: 1728576897000,
  },
  tangle: {
    addedAt: 1722948900000,
  },
  zetachain: {
    addedAt: 1716224404000,
  },
  mode: {
    addedAt: 1714425949000,
  },
  superpositiontestnet: {
    addedAt: 1721048842000,
  },
  taikohekla: {
    addedAt: 1728493787000,
  },
  neoxt4: {
    addedAt: 1725287193000,
  },
  neutron: {
    addedAt: 1710873111000,
  },
  superposition: {
    addedAt: 1728043672000,
  },
  proofofplay: {
    addedAt: 1722948900000,
  },
  polygonamoy: {
    addedAt: 1722948900000,
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
  odysseytestnet: {
    addedAt: 1728664767000,
  },
  optimismsepolia: {
    addedAt: 1723543214000,
  },
  osmosis: {
    addedAt: 1718120223000,
  },
  zircuit: {
    addedAt: 1722948900000,
  },
  sonictestnet: {
    addedAt: 1728581730000,
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
  zoramainnet: {
    addedAt: 1721210072000,
  },
  sepolia: {
    addedAt: 1710873111000,
  },
  suavetoliman: {
    addedAt: 1727378000000,
  },
  piccadilly: {
    addedAt: 1725982319000,
  },
  plumetestnet: {
    addedAt: 1710873111000,
  },
  rari: {
    addedAt: 1724679974000,
  },
  solanamainnet: {
    addedAt: 1725270331000,
  },
  solanatestnet: {
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
