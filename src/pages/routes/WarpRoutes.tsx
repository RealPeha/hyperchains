import React, { useEffect, useRef } from 'react';
import { type Orb as IOrb, OrbEventType } from '@memgraph/orb';
import { useStore } from '../../store';
import { Flex } from '../../components/Flex';
import { WarpToken } from '../../types';
import styled from '@emotion/styled';
import { HeaderMenu } from '../../components/HeaderMenu';
import { TokensList } from './TokensList';
import { getTokenLogoUrl } from '../../utils';
import { useUrlState } from '../../hooks';

const Orb = (window as any).Orb.Orb;

interface INode {
  id: string;
  label: string;
  token: WarpToken;
}

interface IEdge {
  id: string;
  start: string;
  end: string;
  label: string;
}

const getTokenId = (token: WarpToken) => {
  return `${token.standard}:${token.symbol}:${token.chainName}`;
};

export const WarpRoutes: React.FC = () => {
  const warpRoutes = useStore.use.warpRoutes();
  const isLoading = useStore.use.isLoading();

  const [search, setSearch] = useUrlState<string>('search', '');

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    container.current!.innerHTML = '';

    console.log(warpRoutes);

    const nodes = Object.values(warpRoutes).flatMap((route) =>
      route.tokens.map((token) => {
        return {
          id: getTokenId(token),
          label: `${token.symbol} (${token.chainName})`,
          token,
        } satisfies INode;
      }),
    );

    const edges = Object.entries(warpRoutes).flatMap(([routeId, route]) => {
      return route.tokens.flatMap((tokenFrom, i1) => {
        return route.tokens
          .flatMap((tokenTo, i2) => {
            if (tokenFrom === tokenTo) {
              return null;
            }

            return {
              id: `${routeId}:${i1}:${i2}`,
              start: getTokenId(tokenFrom),
              end: getTokenId(tokenTo),
              label: '',
            } satisfies IEdge;
          })
          .filter(Boolean);
      });
    });

    const orb: IOrb<INode, IEdge> = new Orb(container.current!);

    let nodeIsActive = false;
    let ignoreNextClick = false;

    orb.events.on(OrbEventType.NODE_CLICK, (event) => {
      nodeIsActive = true;
      ignoreNextClick = true;

      setTimeout(() => {
        ignoreNextClick = false;
      });

      const { token } = event.node.data;

      setSearch(`>${token.chainName}:${token.symbol}`.toLowerCase());
    });

    orb.events.on(OrbEventType.MOUSE_CLICK, () => {
      if (!ignoreNextClick && nodeIsActive) {
        nodeIsActive = false;
        setSearch('');
      }
    });

    orb.data.setDefaultStyle({
      getNodeStyle(node) {
        const { token, label } = node.data;

        return {
          size: 5,
          fontSize: 3,
          imageUrl: getTokenLogoUrl(token),
          label,
        };
      },
      getEdgeStyle(edge) {
        return {
          color: '#2362c0',
          width: 0.3,
          fontSize: 2,
          label: edge.data.label,
        };
      },
    });

    orb.data.setup({ nodes, edges });

    orb.view.render(() => {
      orb.view.recenter();
    });
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Main center="x" column>
      <HeaderMenu />
      <Content grow={1}>
        <TokensList search={search} onSearchChange={setSearch} />
        <Flex grow={1} ref={container}></Flex>
      </Content>
    </Main>
  );
};

const Main = styled(Flex)`
  width: 100vw;
  min-height: 100vh;

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
  padding-left: 500px;
`;
