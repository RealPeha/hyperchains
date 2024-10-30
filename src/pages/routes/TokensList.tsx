import styled from '@emotion/styled';
import { Flex } from '../../components/Flex';
import { useStore } from '../../store';
import { Scrollable } from '../../components/Scrollable';
import { WarpRoute, WarpToken } from '../../types';
import { Search } from '../../components/Search';
import { Text } from '../../components/Text';
import { motion } from 'framer-motion';
import { TokenRow } from './TokenRow';
import { isAddress, isAddressEvm } from '@hyperlane-xyz/utils';

interface TokensListProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export const TokensList: React.FC<TokensListProps> = ({
  search,
  onSearchChange,
}) => {
  const routes = useStore.use.routes();

  // 🤯
  /**
   * Filter routes based on search query
   * @example
   * 'eth:usdc' -> filter by chain and symbol
   * 'usdc' -> filter by symbol
   * '>usdc' -> filter by symbol in source
   * '<usdc' -> filter by symbol in destination
   * '>eth:' -> filter by chain in source
   * '<eth:' -> filter by chain in destination
   */
  const filteredRoutes = routes.filter((route: WarpRoute) => {
    let query = search;

    const direction = search.startsWith('>')
      ? 'from'
      : search.startsWith('<')
        ? 'to'
        : 'both';

    if (direction !== 'both') {
      query = search.slice(1);
    }

    let chain: string | undefined = undefined;
    let symbol: string | undefined = undefined;

    if (query.includes(':')) {
      [chain, symbol] = query.split(':');
    } else {
      symbol = query;
    }

    const matchSymbolOrAddress = (token: WarpToken) => {
      return (
        token.addressOrDenom?.toLowerCase() === symbol.toLowerCase() ||
        token.collateralAddressOrDenom?.toLowerCase() ===
          symbol.toLowerCase() ||
        token.symbol.toLowerCase().includes(symbol)
      );
    };

    if (direction === 'both') {
      return (
        (symbol
          ? matchSymbolOrAddress(route.from) || matchSymbolOrAddress(route.to)
          : true) &&
        (chain
          ? route.from.chainName.toLowerCase().includes(chain) ||
            route.to.chainName.toLowerCase().includes(chain)
          : true)
      );
    }

    return (
      (symbol ? matchSymbolOrAddress(route[direction]) : true) &&
      (chain ? route[direction].chainName.toLowerCase().includes(chain) : true)
    );
  });

  const handleTokenChainClick = (token: WarpToken, source: boolean) => {
    onSearchChange(`${source ? '>' : '<'}${token.chainName}:`);
  };

  return (
    <Wrapper column>
      <Flex padding="15px">
        <CustomSearch
          value={search}
          onChange={(value) => onSearchChange(value.toLowerCase())}
          placeholder="Search for tokens..."
        />
      </Flex>
      <Scrollable>
        <Flex column gap="10px" padding="10px 20px 10px 20px">
          {filteredRoutes.length ? (
            filteredRoutes.map((route) => {
              const key = [
                route.id,
                route.from.standard,
                route.from.chainName,
                route.to.standard,
                route.to.chainName,
              ].join(':');

              return (
                <TokenRow
                  onChainClick={handleTokenChainClick}
                  key={key}
                  route={route}
                />
              );
            })
          ) : (
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
              <Flex grow center column gap="40px">
                <Text color="#3e3e3e" size={80}>
                  ¯\_(ツ)_/¯
                </Text>
                <Text color="#3e3e3e" size={26}>
                  Not found
                </Text>
              </Flex>
            </motion.div>
          )}
        </Flex>
      </Scrollable>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 500px;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

const CustomSearch = styled(Search)`
  input {
    padding: 8px 22px 8px 8px;
    font-size: 16px;
  }
`;
