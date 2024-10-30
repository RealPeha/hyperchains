import React from 'react';
import { Flex } from './Flex';
import { Text } from './Text';
import { useLocation, useRoute } from 'wouter';
import styled from '@emotion/styled';

export const HeaderMenu: React.FC = () => {
  return (
    <Flex center gap="30px" padding="20px 0 5px 5px">
      <MenuItem href="/chains">Chains</MenuItem>
      <MenuItem href="/routes">Warp Routes</MenuItem>
    </Flex>
  );
};

interface MenuItemProps {
  children: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, href }) => {
  const [isActive] = useRoute(href);
  const [, setLocation] = useLocation();

  const handleNavigate = () => {
    setLocation(href);
  };

  return (
    <MenuItemText
      size={isActive ? 20 : 18}
      weight={isActive ? 'bold' : undefined}
      color={isActive ? '#333' : '#6f6f6f'}
      onClick={handleNavigate}
    >
      {children}
    </MenuItemText>
  );
};

const MenuItemText = styled(Text)`
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;
