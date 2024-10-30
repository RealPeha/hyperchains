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
  bsc: {
    addedAt: 1710873111000,
  },
  bsctestnet: {
    addedAt: 1710873111000,
  },
  gnosis: {
    addedAt: 1710873111000,
  },
  mantapacific: {
    addedAt: 1710873111000,
  },
  inevm: {
    addedAt: 1710873111000,
  },
  base: {
    addedAt: 1710873111000,
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
  eclipsetestnet: {
    addedAt: 1710873111000,
  },
  injective: {
    addedAt: 1710873111000,
  },
  optimism: {
    addedAt: 1710873111000,
  },
  polygon: {
    addedAt: 1710873111000,
  },
  polygonzkevm: {
    addedAt: 1710873111000,
  },
  moonbeam: {
    addedAt: 1710873111000,
  },
  scroll: {
    addedAt: 1710873111000,
  },
  neutron: {
    addedAt: 1710873111000,
  },
  viction: {
    addedAt: 1710873111000,
  },
  scrollsepolia: {
    addedAt: 1710873111000,
  },
  sepolia: {
    addedAt: 1710873111000,
  },
  plumetestnet: {
    addedAt: 1710873111000,
  },
  solanatestnet: {
    addedAt: 1710873111000,
  },
  solanadevnet: {
    addedAt: 1710873111000,
  },
  ancient8: {
    addedAt: 1713541564000,
  },
  blast: {
    addedAt: 1714425949000,
  },
  mode: {
    addedAt: 1714425949000,
  },
  holesky: {
    addedAt: 1716189243000,
  },
  redstone: {
    addedAt: 1716224404000,
  },
  zetachain: {
    addedAt: 1716224404000,
  },
  sketchpad: {
    addedAt: 1716583202000,
  },
  stride: {
    addedAt: 1717038016000,
  },
  fraxtal: {
    addedAt: 1718116503000,
  },
  linea: {
    addedAt: 1718116503000,
  },
  sei: {
    addedAt: 1718116503000,
  },
  osmosis: {
    addedAt: 1718120223000,
  },
  arbitrumsepolia: {
    addedAt: 1718717486000,
  },
  basesepolia: {
    addedAt: 1719341681000,
  },
  artheratestnet: {
    addedAt: 1719852062000,
  },
  bob: {
    addedAt: 1719932096000,
  },
  mantle: {
    addedAt: 1719932096000,
  },
  taiko: {
    addedAt: 1719932096000,
  },
  arthera: {
    addedAt: 1720111449000,
  },
  lukso: {
    addedAt: 1720194661000,
  },
  endurance: {
    addedAt: 1720717456000,
  },
  connextsepolia: {
    addedAt: 1720752748000,
  },
  superpositiontestnet: {
    addedAt: 1721048842000,
  },
  fusemainnet: {
    addedAt: 1721210072000,
  },
  zoramainnet: {
    addedAt: 1721210072000,
  },
  dodotestnet: {
    addedAt: 1721928760000,
  },
  cheesechain: {
    addedAt: 1722416578000,
  },
  xlayer: {
    addedAt: 1722416578000,
  },
  worldchain: {
    addedAt: 1722416578000,
  },
  kroma: {
    addedAt: 1722948900000,
  },
  lisk: {
    addedAt: 1722948900000,
  },
  cyber: {
    addedAt: 1722948900000,
  },
  immutablezkevm: {
    addedAt: 1722948900000,
  },
  ecotestnet: {
    addedAt: 1722948900000,
  },
  degenchain: {
    addedAt: 1722948900000,
  },
  mint: {
    addedAt: 1722948900000,
  },
  metis: {
    addedAt: 1722948900000,
  },
  sanko: {
    addedAt: 1722948900000,
  },
  merlin: {
    addedAt: 1722948900000,
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
  tangletestnet: {
    addedAt: 1722948900000,
  },
  tangle: {
    addedAt: 1722948900000,
  },
  zircuit: {
    addedAt: 1722948900000,
  },
  xai: {
    addedAt: 1722948900000,
  },
  galadrieldevnet: {
    addedAt: 1723220538000,
  },
  astar: {
    addedAt: 1723239227000,
  },
  optimismsepolia: {
    addedAt: 1723543214000,
  },
  stridetestnet: {
    addedAt: 1723821623000,
  },
  rootstocktestnet: {
    addedAt: 1723823685000,
  },
  forma: {
    addedAt: 1723836705000,
  },
  fhenixtestnet: {
    addedAt: 1724088664000,
  },
  rootstock: {
    addedAt: 1724167734000,
  },
  molten: {
    addedAt: 1724668186000,
  },
  flare: {
    addedAt: 1724679974000,
  },
  coredao: {
    addedAt: 1724679974000,
  },
  dogechain: {
    addedAt: 1724679974000,
  },
  astarzkevm: {
    addedAt: 1724679974000,
  },
  b3: {
    addedAt: 1724679974000,
  },
  arbitrumnova: {
    addedAt: 1724679974000,
  },
  bitlayer: {
    addedAt: 1724679974000,
  },
  orderly: {
    addedAt: 1724679974000,
  },
  pulsechain: {
    addedAt: 1724679974000,
  },
  polynomial: {
    addedAt: 1724679974000,
  },
  shibarium: {
    addedAt: 1724679974000,
  },
  rari: {
    addedAt: 1724679974000,
  },
  berabartio: {
    addedAt: 1725117056000,
  },
  eclipsemainnet: {
    addedAt: 1725270331000,
  },
  solanamainnet: {
    addedAt: 1725270331000,
  },
  neoxt4: {
    addedAt: 1725287193000,
  },
  heneztestnet: {
    addedAt: 1725552663000,
  },
  piccadilly: {
    addedAt: 1725982319000,
  },
  everclear: {
    addedAt: 1726065141000,
  },
  oortmainnet: {
    addedAt: 1726137449000,
  },
  hyperliquidevmtestnet: {
    addedAt: 1727378000000,
  },
  citreatestnet: {
    addedAt: 1727378000000,
  },
  formtestnet: {
    addedAt: 1727378000000,
  },
  camptestnet: {
    addedAt: 1727378000000,
  },
  soneiumtestnet: {
    addedAt: 1727378000000,
  },
  suavetoliman: {
    addedAt: 1727378000000,
  },
  moonbase: {
    addedAt: 1727880797000,
  },
  kalychain: {
    addedAt: 1727967654000,
  },
  alephzeroevm: {
    addedAt: 1728043672000,
  },
  chiliz: {
    addedAt: 1728043672000,
  },
  lumia: {
    addedAt: 1728043672000,
  },
  superposition: {
    addedAt: 1728043672000,
  },
  opbnb: {
    addedAt: 1728399410000,
  },
  u2utestnet: {
    addedAt: 1728399410000,
  },
  wanchaintestnet: {
    addedAt: 1728493086000,
  },
  fantom: {
    addedAt: 1728493308000,
  },
  taikohekla: {
    addedAt: 1728493787000,
  },
  koitestnet: {
    addedAt: 1728576897000,
  },
  mantlesepolia: {
    addedAt: 1728576897000,
  },
  metertestnet: {
    addedAt: 1728576900000,
  },
  arcadiatestnet: {
    addedAt: 1728581730000,
  },
  unichaintestnet: {
    addedAt: 1728581730000,
  },
  sonictestnet: {
    addedAt: 1728581730000,
  },
  modetestnet: {
    addedAt: 1728586489000,
  },
  odysseytestnet: {
    addedAt: 1728664767000,
  },
  flow: {
    addedAt: 1728988808000,
  },
  metall2: {
    addedAt: 1728988808000,
  },
  canto: {
    addedAt: 1729091482000,
  },
  zoratestnet: {
    addedAt: 1729091482000,
  },
  storytestnet: {
    addedAt: 1729098788000,
  },
  harmonytestnet: {
    addedAt: 1729517836000,
  },
  opbnbtestnet: {
    addedAt: 1729518595000,
  },
  blastsepolia: {
    addedAt: 1729526284000,
  },
  boba: {
    addedAt: 1729526334000,
  },
  bobabnbtestnet: {
    addedAt: 1729527007000,
  },
  bobabnb: {
    addedAt: 1729528136000,
  },
  fraxtaltestnet: {
    addedAt: 1729528374000,
  },
  lisksepolia: {
    addedAt: 1729528374000,
  },
  cantotestnet: {
    addedAt: 1729528374000,
  },
  smartbch: {
    addedAt: 1729772001000,
  },
  humanitytestnet: {
    addedAt: 1729778973000,
  },
  superseedtestnet: {
    addedAt: 1729787922000,
  },
  euphoriatestnet: {
    addedAt: 1729850100000,
  },
  mantapacifictestnet: {
    addedAt: 1729850720000,
  },
  gravity: {
    addedAt: 1730130840000,
  },
  kaia: {
    addedAt: 1730130840000,
  },
  apechain: {
    addedAt: 1730130840000,
  },
  harmony: {
    addedAt: 1730130840000,
  },
  morph: {
    addedAt: 1730130840000,
  },
  zksync: {
    addedAt: 1730130840000,
  },
  snaxchain: {
    addedAt: 1730130840000,
  },
  zeronetwork: {
    addedAt: 1730130840000,
  },
};
