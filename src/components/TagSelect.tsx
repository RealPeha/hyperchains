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

  const sortedTags = tags.sort((a, b) => {
    if (value.includes(a) && !value.includes(b)) {
      return -1;
    }

    if (!value.includes(a) && value.includes(b)) {
      return 1;
    }

    return 0;
  });

  const firstRow = sortedTags.slice(0, 4);
  const secondRow = sortedTags.slice(4);

  const renderTags = (tags: ChainTag[]) => {
    return (
      <Flex gap="5px" center="y">
        {tags.map((tag) => (
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
            <TagStyled tag={tag} isActive={value.includes(tag)} />
          </motion.div>
        ))}
      </Flex>
    );
  };

  return (
    <Flex gap="5px" column as={motion.div} center="y">
      {renderTags(firstRow)}
      {renderTags(secondRow)}
    </Flex>
  );
};

const TagStyled = styled(Tag)`
  cursor: pointer;
`;
