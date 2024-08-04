import { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useClickAway } from 'react-use';
import { Flex } from './components/Flex';
import { Search } from './components/Search';
import { ChainTag } from './constants';
import { ChainCard } from './components/ChainCard';
import { Space } from './components/Space';
import { TagSelect } from './components/TagSelect';
import { useUrlState } from './hooks';
import { ChainDetails } from './components/ChainDetails';
import { ChainMetadata } from '@hyperlane-xyz/sdk';
import { getChainTags } from './utils';
import { Text } from './components/Text';
import { Oval } from 'react-loader-spinner';
import { GithubRegistry } from '@hyperlane-xyz/registry';

export const App = () => {
  const [chains, setChains] = useState<ChainMetadata[]>([]);
  const [metadataLoading, setMetadataLoading] = useState(true);
  const [selectedChainName, setSelectedChainName] = useUrlState<string>(
    'chain',
    '',
  );
  const [open, setOpen] = useState(!!selectedChainName);
  const ref = useRef<HTMLDivElement>(null);

  const [filterTag, setFilterTag] = useUrlState<ChainTag>('tag', ChainTag.All);

  const [query, setQuery] = useUrlState<string>('search', '', false);
  const [value, setValue] = useState(query);

  const handleSearchChange = (value: string) => {
    setQuery(value.trim().toLowerCase());
    setValue(value);
  };

  useEffect(() => {
    const registry = new GithubRegistry();

    registry.getMetadata().then((metadata) => {
      setChains(
        Object.values(metadata).sort(
          (a, b) => Number(a.chainId) - Number(b.chainId),
        ),
      );
      setMetadataLoading(false);
    });
  }, []);

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
    setSelectedChainName(chain.name);
  };

  const closeChainDetails = () => {
    setOpen(false);
    setSelectedChainName('');
  };

  useClickAway(ref, closeChainDetails);

  const selectedChain = chains.find(
    (chain) => chain.name === selectedChainName,
  );

  return (
    <Main center="x" isSearch={!!query} column gap="120px">
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
            <Text color="#6f6f6f" size={18}>
              A list of chains supported by{' '}
              <a href="https://hyperlane.xyz" target="_blank">
                Hyperlane
              </a>{' '}
              protocol
            </Text>
          </Flex>
          <Flex center="y" gap="10px">
            <Search value={value} onChange={handleSearchChange} />
            <TagSelect value={filterTag} onChange={setFilterTag} />
          </Flex>
        </Header>
        <Space height="70px" />
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
                  {metadataLoading ? (
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
        <Author center="y" gap="5px">
          <a href="https://github.com/RealPeha" target="_blank">
            <Flex center="y" gap="5px">
              <AuthorLogo
                width={24}
                height={24}
                src="https://avatars.githubusercontent.com/u/26817340"
              />
              <Text weight="bold" color="#111111">
                RealPeha
              </Text>
            </Flex>
          </a>
        </Author>
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

const Author = styled(Flex)`
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
