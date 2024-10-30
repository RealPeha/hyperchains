import React from 'react';
import styled from '@emotion/styled';
import { MdClear } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { Flex } from './Flex';

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder = '',
  className,
}) => {
  return (
    <Wrapper className={className} center="y" gap="5px">
      {value ? (
        <ClearIcon onClick={() => onChange('')} />
      ) : (
        <CiSearch size={24} color="#b3b3b3" />
      )}
      <Input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  max-height: 55px;
  padding: 0 10px;
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 16px 22px 16px 8px;
  font-size: 20px;

  ::placeholder {
    color: #b3b3b3;
  }
`;

const ClearIcon = styled(MdClear)`
  color: #b3b3b3;
  font-size: 20px;
  cursor: pointer;
`;
