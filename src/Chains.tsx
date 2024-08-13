import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import dayjs from 'dayjs';
import { Flex } from './components/Flex';
import { Search } from './components/Search';
import { ChainTag, extraChainData, tagToLabel } from './constants';
import { ChainCard } from './components/ChainCard';
import { Space } from './components/Space';
import { TagSelect } from './components/TagSelect';
import { useUrlState } from './hooks';
import { ChainDetails } from './components/ChainDetails';
import type { ChainMetadata } from '@hyperlane-xyz/sdk';
import { getChainTags } from './utils';
import { Text } from './components/Text';
import { Oval } from 'react-loader-spinner';
import { FaGithub } from 'react-icons/fa';
import { useStore } from './store';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const processData = (chains: ChainMetadata[]) => {
  const dateCounts: Record<string, number> = {};

  Object.entries(extraChainData).forEach(([key, extra]) => {
    if (!chains.some((chain) => chain.name === key)) {
      return;
    }

    const date = dayjs(extra.addedAt).format('MM/DD/YYYY');
    dateCounts[date] = (dateCounts[date] ?? 0) + 1;
  });

  const result = Object.keys(dateCounts)
    .map((date) => ({
      date,
      count: dateCounts[date],
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  let cumulativeCount = 0;

  return result.map((entry) => {
    cumulativeCount += entry.count;
    return { date: entry.date, Chains: cumulativeCount };
  });
};

export const Chains = () => {
  const chains = useStore.use.chains();
  const isLoading = useStore.use.isLoading();
  const getChain = useStore.use.getChain();

  const [selectedChainName, setSelectedChainName] = useUrlState<string>(
    'chain',
    '',
  );
  const [open, setOpen] = useState(!!selectedChainName);
  const ref = useRef<HTMLDivElement>(null);

  const [filterTag, setFilterTag] = useUrlState<ChainTag>('tag', ChainTag.All);

  const [query, setQuery] = useUrlState<string>('search', '');
  const [value, setValue] = useState(query);

  const handleSearchChange = (value: string) => {
    setQuery(value.trim().toLowerCase(), false);
    setValue(value);
  };

  const filteredChains = chains
    .filter((chain) => {
      if (filterTag === ChainTag.All) {
        return true;
      }

      return getChainTags(chain).includes(filterTag);
    })
    .filter((chain) => {
      return (
        chain.name.toLowerCase().includes(query) ||
        chain.displayName?.toLowerCase().includes(query) ||
        chain.nativeToken?.symbol.toLowerCase().includes(query) ||
        chain.chainId.toString().includes(query) ||
        chain.domainId?.toString().includes(query)
      );
    });

  const openChainDetails = (chain: ChainMetadata) => {
    setOpen(true);
    setSelectedChainName(chain.name, false);
  };

  const closeChainDetails = () => {
    setOpen(false);
    setSelectedChainName('', false);
  };

  useClickAway(ref, closeChainDetails);

  const isSearch = !!query;
  const selectedChain = getChain(selectedChainName);

  return (
    <Main center="x" isSearch={isSearch} column gap="120px">
      <Content column center="x" grow>
        <Header gap="20px" column>
          <Flex column gap="10px">
            <Flex center="y" gap="10px">
              <img
                width={42}
                height={42}
                src="https://docs.hyperlane.xyz/img/logo.svg"
              />
              <Text size={40} weight="bold" color="#2362c0">
                Hyperlane Chains
              </Text>
            </Flex>
            <Flex center="y">
              <Flex grow>
                <Text color="#6f6f6f" size={18}>
                  A list of chains supported by{' '}
                  <a href="https://hyperlane.xyz" target="_blank">
                    Hyperlane
                  </a>{' '}
                  protocol
                </Text>
              </Flex>
              <GithubLink center="y" gap="5px" style={{ marginRight: '270px' }}>
                <a
                  href="https://github.com/RealPeha/hyperchains"
                  target="_blank"
                >
                  <Flex center="y" gap="5px">
                    <FaGithub size={16} color="#202020" />
                    <Text weight="bold" color="#202020">
                      RealPeha/hyperchains
                    </Text>
                  </Flex>
                </a>
              </GithubLink>
            </Flex>
          </Flex>
          <Flex center="y" gap="10px">
            <Search value={value} onChange={handleSearchChange} />
            <TagSelect value={filterTag} onChange={setFilterTag} />
          </Flex>
        </Header>
        <Space height="35px" />
        <Flex justifyContent="space-between" full padding="0 10px">
          {!isSearch && (
            <Text color="#6f6f6f" size={20}>
              The number of chains over time
            </Text>
          )}
          {filteredChains.length > 0 && (
            <Text color="#6f6f6f" size={20}>
              {isSearch ? 'Found ' : ''}
              {filteredChains.length}
              {filterTag === ChainTag.All ? ' ' : ` ${tagToLabel[filterTag]} `}
              {filteredChains.length === 1 ? 'chain' : 'chains'}
            </Text>
          )}
        </Flex>
        <Space height="20px" />
        <AnimatePresence initial={false}>
          {!isSearch && (
            <>
              <ChartWrapper
                as={motion.div}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ResponsiveContainer width="100%" aspect={3 / 1}>
                  <LineChart
                    data={processData(filteredChains)}
                    margin={{
                      top: 20,
                      right: 50,
                      left: 0,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid />
                    <XAxis dataKey="date" fontFamily="sans-serif" />
                    <YAxis fontFamily="sans-serif" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="Chains"
                      stroke="#2362c0"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartWrapper>
            </>
          )}
        </AnimatePresence>
        <Flex wrap gap="30px" grow={!filteredChains.length} center="x">
          <AnimatePresence initial={false} mode="popLayout">
            {filteredChains.length ? (
              filteredChains.map((chain) => {
                return (
                  <motion.div
                    id={chain.name}
                    key={chain.name}
                    layout
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    <ChainCard
                      chain={chain}
                      onClick={() => openChainDetails(chain)}
                    />
                  </motion.div>
                );
              })
            ) : (
              <Flex center>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  {isLoading ? (
                    <Oval
                      color="#2362c0"
                      secondaryColor="#4992ff"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Flex grow center column gap="40px">
                      <Text color="#3e3e3e" size={100}>
                        ¯\_(ツ)_/¯
                      </Text>
                      <Text color="#3e3e3e" size={26}>
                        Not found
                      </Text>
                    </Flex>
                  )}
                </motion.div>
              </Flex>
            )}
          </AnimatePresence>
        </Flex>
      </Content>
      <Flex center="y" gap="5px">
        <Text color="#6f6f6f">Brought to life by</Text>
        <GithubLink center="y" gap="5px">
          <a href="https://github.com/RealPeha" target="_blank">
            <Flex center="y" gap="5px">
              <AuthorLogo
                width={24}
                height={24}
                src="https://avatars.githubusercontent.com/u/26817340"
              />
              <Text weight="bold" color="#202020">
                RealPeha
              </Text>
            </Flex>
          </a>
        </GithubLink>
      </Flex>
      <AnimatePresence initial={false}>
        {open && selectedChain && (
          <ChainDetails chain={selectedChain} ref={ref} />
        )}
      </AnimatePresence>
    </Main>
  );
};

const Main = styled(Flex)<{ isSearch: boolean }>`
  width: 100vw;
  min-height: 100vh;
  transition: padding 0.3s;
  padding: ${(p) => (p.isSearch ? '60px' : '300px')} 24px 40px 24px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(at 27% 37%, #d631b9 0, transparent 50%),
      radial-gradient(at 97% 21%, #2764c1 0, transparent 50%),
      radial-gradient(at 27% 70%, #2764c1 0, transparent 50%),
      radial-gradient(at 77% 77%, #d631b9 0, transparent 50%);
    filter: blur(100px) saturate(150%);
    opacity: 0.5;
    z-index: -1;
  }
`;

const Content = styled(Flex)`
  width: 100%;
  max-width: 1300px;
`;

const Header = styled(Flex)`
  width: 100%;
  max-width: 1000px;
`;

const GithubLink = styled(Flex)`
  border-radius: 10px;
  padding: 3px 6px 3px 0;
  transition: background 0.3s;

  a {
    text-decoration: none;
  }

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const AuthorLogo = styled.img`
  border-radius: 50%;
`;

const ChartWrapper = styled.div<HTMLMotionProps<'div'>>`
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;
