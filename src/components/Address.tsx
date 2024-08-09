import React, { useState } from 'react';
import styled from '@emotion/styled';
import { RxExternalLink } from 'react-icons/rx';
import copy from 'copy-to-clipboard';
import { Flex } from './Flex';
import { shortenAddress } from '../utils';

interface AddressProps {
  address: string;
  explorer?: string;
  length?: number;
}

export const Address: React.FC<AddressProps> = ({
  address,
  explorer,
  length,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (copied) return;
    copy(address);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Flex center="y" gap="5px">
      <Wrapper center="y" onClick={handleCopy} copied={copied}>
        {length ? shortenAddress(address, length) : address}
      </Wrapper>
      {explorer && (
        <a href={`${explorer}/address/${address}`} target="_blank">
          <LinkIcon />
        </a>
      )}
    </Flex>
  );
};

const Wrapper = styled(Flex)<{ copied: boolean }>`
  font-family: monospace;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #fff;
  width: fit-content;
  border: 1px dashed #000;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #e9e9e9;
  }

  &::after {
    content: 'Copied!';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({ copied }) => (copied ? 1 : 0)};
    transition: opacity 0.2s;
  }
`;

const LinkIcon = styled(RxExternalLink)`
  cursor: pointer;
`;
