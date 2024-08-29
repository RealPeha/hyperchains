import React from 'react';
import { motion } from 'framer-motion';
import { Flex } from './Flex';
import styled from '@emotion/styled';
import { ChainTag } from '../constants';
import { Tag } from './Tag';

export interface TagSelectProps {
  value: ChainTag[];
  onChange: (value: ChainTag[]) => void;
}

export const TagSelect: React.FC<TagSelectProps> = ({ value, onChange }) => {
  const tags = Object.values(ChainTag);

  const handleSelect = (tag: ChainTag) => {
    const newValue = value.includes(tag)
      ? value.filter((t) => t !== tag)
      : [...value, tag];
    onChange(newValue);
  };

  return (
    <Wrapper gap="10px" as={motion.div} center="y">
      <OptionsList gap="5px" wrap>
        {tags
          .sort((a, b) => {
            if (value.includes(a) && !value.includes(b)) {
              return -1;
            }

            if (!value.includes(a) && value.includes(b)) {
              return 1;
            }

            return 0;
          })
          .map((tag) => (
            <motion.div
              key={tag}
              layoutId={tag}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
              }}
              onClick={() => handleSelect(tag)}
            >
              <TagStyled tag={tag} big={value.includes(tag)} />
            </motion.div>
          ))}
      </OptionsList>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 270px;
`;

const OptionsList = styled(Flex)`
  width: 210px;
`;

const TagStyled = styled(Tag)`
  cursor: pointer;
`;
