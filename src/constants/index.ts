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
  Starknet = 'Starknet',
}

export const protocolToTag: Record<ProtocolType, ChainTag> = {
  [ProtocolType.Ethereum]: ChainTag.EVM,
  [ProtocolType.Sealevel]: ChainTag.Solana,
  [ProtocolType.Cosmos]: ChainTag.Cosmos,
  [ProtocolType.CosmosNative]: ChainTag.Cosmos,
  [ProtocolType.Starknet]: ChainTag.Starknet,
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
  [ChainTag.Starknet]: 'starknet',
};

export const extraChainData: ChainMap<ExtraChainData> = {
  bsc: { addedAt: 1710873111000 },
  bsctestnet: { addedAt: 1710873111000 },
  base: { addedAt: 1710873111000 },
  arbitrum: { addedAt: 1710873111000 },
  celo: { addedAt: 1710873111000 },
  avalanche: { addedAt: 1710873111000 },
  alfajores: { addedAt: 1710873111000 },
  ethereum: { addedAt: 1710873111000 },
  gnosis: { addedAt: 1710873111000 },
  mantapacific: { addedAt: 1710873111000 },
  inevm: { addedAt: 1710873111000 },
  fuji: { addedAt: 1710873111000 },
  eclipsetestnet: { addedAt: 1710873111000 },
  injective: { addedAt: 1710873111000 },
  optimism: { addedAt: 1710873111000 },
  moonbeam: { addedAt: 1710873111000 },
  polygon: { addedAt: 1710873111000 },
  polygonzkevm: { addedAt: 1710873111000 },
  scrollsepolia: { addedAt: 1710873111000 },
  sepolia: { addedAt: 1710873111000 },
  neutron: { addedAt: 1710873111000 },
  viction: { addedAt: 1712428622000 },
  ancient8: { addedAt: 1713541564000 },
  blast: { addedAt: 1714425949000 },
  mode: { addedAt: 1714425949000 },
  holesky: { addedAt: 1716189243000 },
  redstone: { addedAt: 1716224404000 },
  sketchpad: { addedAt: 1716583202000 },
  fraxtal: { addedAt: 1718116503000 },
  linea: { addedAt: 1718116503000 },
  sei: { addedAt: 1718116503000 },
  osmosis: { addedAt: 1718120223000 },
  arbitrumsepolia: { addedAt: 1718717486000 },
  basesepolia: { addedAt: 1719341681000 },
  artheratestnet: { addedAt: 1719852062000 },
  bob: { addedAt: 1719932096000 },
  mantle: { addedAt: 1719932096000 },
  arthera: { addedAt: 1720111449000 },
  lukso: { addedAt: 1720194661000 },
  endurance: { addedAt: 1720717456000 },
  connextsepolia: { addedAt: 1720752748000 },
  fusemainnet: { addedAt: 1721210072000 },
  dodotestnet: { addedAt: 1721928760000 },
  cheesechain: { addedAt: 1722416578000 },
  xlayer: { addedAt: 1722416578000 },
  worldchain: { addedAt: 1722416578000 },
  cyber: { addedAt: 1722948900000 },
  degenchain: { addedAt: 1722948900000 },
  kroma: { addedAt: 1722948900000 },
  lisk: { addedAt: 1722948900000 },
  ecotestnet: { addedAt: 1722948900000 },
  mint: { addedAt: 1722948900000 },
  metis: { addedAt: 1722948900000 },
  merlin: { addedAt: 1722948900000 },
  sanko: { addedAt: 1722948900000 },
  proofofplay: { addedAt: 1722948900000 },
  polygonamoy: { addedAt: 1722948900000 },
  real: { addedAt: 1722948900000 },
  galadrieldevnet: { addedAt: 1723220538000 },
  astar: { addedAt: 1723239227000 },
  optimismsepolia: { addedAt: 1723543214000 },
  rootstocktestnet: { addedAt: 1723823685000 },
  forma: { addedAt: 1723836705000 },
  fhenixtestnet: { addedAt: 1724088664000 },
  molten: { addedAt: 1724668186000 },
  coredao: { addedAt: 1724679974000 },
  dogechain: { addedAt: 1724679974000 },
  astarzkevm: { addedAt: 1724679974000 },
  b3: { addedAt: 1724679974000 },
  arbitrumnova: { addedAt: 1724679974000 },
  bitlayer: { addedAt: 1724679974000 },
  flare: { addedAt: 1724679974000 },
  shibarium: { addedAt: 1724679974000 },
  orderly: { addedAt: 1724679974000 },
  pulsechain: { addedAt: 1724679974000 },
  ronin: { addedAt: 1724679974000 },
  eclipsemainnet: { addedAt: 1725270331000 },
  neoxt4: { addedAt: 1725287193000 },
  heneztestnet: { addedAt: 1725552663000 },
  everclear: { addedAt: 1726065141000 },
  oortmainnet: { addedAt: 1726137449000 },
  citreatestnet: { addedAt: 1727378000000 },
  hyperliquidevmtestnet: { addedAt: 1727378000000 },
  formtestnet: { addedAt: 1727378000000 },
  moonbase: { addedAt: 1727880797000 },
  kalychain: { addedAt: 1727967654000 },
  opbnb: { addedAt: 1728399410000 },
  fantom: { addedAt: 1728493308000 },
  koitestnet: { addedAt: 1728576897000 },
  mantlesepolia: { addedAt: 1728576897000 },
  metertestnet: { addedAt: 1728576900000 },
  unichaintestnet: { addedAt: 1728581730000 },
  modetestnet: { addedAt: 1728586489000 },
  odysseytestnet: { addedAt: 1728664767000 },
  canto: { addedAt: 1729091482000 },
  storytestnet: { addedAt: 1729098788000 },
  harmonytestnet: { addedAt: 1729517836000 },
  opbnbtestnet: { addedAt: 1729518595000 },
  blastsepolia: { addedAt: 1729526284000 },
  boba: { addedAt: 1729526334000 },
  bobabnbtestnet: { addedAt: 1729527007000 },
  bobabnb: { addedAt: 1729528136000 },
  cantotestnet: { addedAt: 1729528374000 },
  fraxtaltestnet: { addedAt: 1729528374000 },
  lisksepolia: { addedAt: 1729528374000 },
  humanitytestnet: { addedAt: 1729778973000 },
  euphoriatestnet: { addedAt: 1729850100000 },
  mantapacifictestnet: { addedAt: 1729850720000 },
  apechain: { addedAt: 1730130840000 },
  gravity: { addedAt: 1730130840000 },
  kaia: { addedAt: 1730130840000 },
  harmony: { addedAt: 1730130840000 },
  morph: { addedAt: 1730130840000 },
  zksync: { addedAt: 1730130840000 },
  zksyncsepolia: { addedAt: 1730471954000 },
  alephzeroevmtestnet: { addedAt: 1730920678000 },
  arcadiatestnet2: { addedAt: 1730920678000 },
  inksepolia: { addedAt: 1730920678000 },
  alephzeroevmmainnet: { addedAt: 1730990915000 },
  chilizmainnet: { addedAt: 1730990915000 },
  flowmainnet: { addedAt: 1730990915000 },
  immutablezkevmmainnet: { addedAt: 1730990915000 },
  lumiaprism: { addedAt: 1730990915000 },
  rootstockmainnet: { addedAt: 1730990915000 },
  metal: { addedAt: 1730990915000 },
  polynomialfi: { addedAt: 1730990915000 },
  flame: { addedAt: 1730999370000 },
  prom: { addedAt: 1730999370000 },
  abstracttestnet: { addedAt: 1731008339000 },
  cosmoshub: { addedAt: 1731604572000 },
  moonriver: { addedAt: 1731689316000 },
  metall2testnet: { addedAt: 1731689316000 },
  auroratestnet: { addedAt: 1731695814000 },
  duckchain: { addedAt: 1732213246000 },
  unichain: { addedAt: 1732213246000 },
  vana: { addedAt: 1732213246000 },
  bsquared: { addedAt: 1732619263000 },
  deepbrainchaintestnet: { addedAt: 1732705990000 },
  appchain: { addedAt: 1733423577000 },
  opengradienttestnet: { addedAt: 1733828041000 },
  mitosistestnet: { addedAt: 1733828920000 },
  gnosischiadotestnet: { addedAt: 1733829226000 },
  lineasepolia: { addedAt: 1733829226000 },
  inclusivelayertestnet: { addedAt: 1733849265000 },
  conflux: { addedAt: 1734444942000 },
  conwai: { addedAt: 1734444942000 },
  corn: { addedAt: 1734444942000 },
  aurora: { addedAt: 1734444942000 },
  form: { addedAt: 1734444942000 },
  evmos: { addedAt: 1734444942000 },
  ink: { addedAt: 1734444942000 },
  rivalz: { addedAt: 1734444942000 },
  telos: { addedAt: 1734444942000 },
  sonic: { addedAt: 1734444942000 },
  echos: { addedAt: 1734542021000 },
  artela: { addedAt: 1736602486000 },
  guru: { addedAt: 1736602486000 },
  hemi: { addedAt: 1736602486000 },
  nero: { addedAt: 1736602486000 },
  xpla: { addedAt: 1736602486000 },
  subtensor: { addedAt: 1736602486000 },
  flametestnet: { addedAt: 1737325631000 },
  abstract: { addedAt: 1737721644000 },
  matchain: { addedAt: 1737721644000 },
  glue: { addedAt: 1737721644000 },
  chronicleyellowstone: { addedAt: 1738147431000 },
  subtensortestnet: { addedAt: 1738681093000 },
  berachain: { addedAt: 1738775351000 },
  monadtestnet: { addedAt: 1739058184000 },
  sapphiretestnet: { addedAt: 1739384199000 },
  bouncebit: { addedAt: 1739838246000 },
  arcadia: { addedAt: 1739838246000 },
  hyperevm: { addedAt: 1739902573000 },
  taraxa: { addedAt: 1741298179000 },
  carrchaintestnet: { addedAt: 1741359344000 },
  infinityvmmonza: { addedAt: 1741359344000 },
  megaethtestnet: { addedAt: 1741359344000 },
  infinityvm: { addedAt: 1741877706000 },
  plume: { addedAt: 1741877706000 },
  coti: { addedAt: 1743185281000 },
  deepbrainchain: { addedAt: 1743185281000 },
  reactive: { addedAt: 1743185281000 },
  nibiru: { addedAt: 1743185281000 },
  cotitestnet: { addedAt: 1743202743000 },
  plumetestnet2: { addedAt: 1743202743000 },
  kyvetestnet: { addedAt: 1743502319000 },
  milkywaytestnet: { addedAt: 1745590327000 },
  milkyway: { addedAt: 1745682481000 },
  nobletestnet: { addedAt: 1746019396000 },
  hashkey: { addedAt: 1746191041000 },
  game7: { addedAt: 1746191041000 },
  infinityvmmainnet: { addedAt: 1746191041000 },
  fluence: { addedAt: 1746191041000 },
  ontology: { addedAt: 1746191041000 },
  peaq: { addedAt: 1746191041000 },
  miraclechain: { addedAt: 1746621655000 },
  bepolia: { addedAt: 1746633083000 },
  basecamptestnet: { addedAt: 1746633083000 },
  kyve: { addedAt: 1747213906000 },
};
