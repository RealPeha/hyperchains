import React from 'react';
import styled from '@emotion/styled';
import { Flex } from '../../components/Flex';
import { Text } from '../../components/Text';
import { FaGithub } from 'react-icons/fa';
import { GithubLink } from '../../components/GitHubLink';
import { Search } from '../../components/Search';
import { TagSelect } from '../../components/TagSelect';
import { ChainTag } from '../../constants';

interface ChainsHeaderProps {
  search: string;
  onSearchChange: (value: string) => void;
  filterTags: ChainTag[];
  onTagChange: (tags: ChainTag[]) => void;
}

export const ChainsHeader: React.FC<ChainsHeaderProps> = ({
  search,
  onSearchChange,
  filterTags,
  onTagChange,
}) => {
  return (
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
            <a href="https://github.com/RealPeha/hyperchains" target="_blank">
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
        <Search value={search} onChange={onSearchChange} />
        <TagSelect value={filterTags} onChange={onTagChange} />
      </Flex>
    </Header>
  );
};

const Header = styled(Flex)`
  width: 100%;
  max-width: 1000px;
`;
