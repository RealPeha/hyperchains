import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flex } from './Flex';
import styled from '@emotion/styled';
import { ChainTag } from '../constants';
import { Tag } from './Tag';

export interface TagSelectProps {
  value: ChainTag;
  onChange: (value: ChainTag) => void;
}

export const TagSelect: React.FC<TagSelectProps> = ({ value, onChange }) => {
  const [tags, setTags] = useState(() => Object.values(ChainTag));

  const currentIndex = tags.findIndex((tag) => tag === value);
  const selectedTag = tags[currentIndex];

  const handleSelect = (newIndex: number) => {
    const newTag = tags[newIndex];

    const newTags = [...tags];
    newTags[newIndex] = tags[currentIndex];
    newTags[currentIndex] = newTag;
    setTags(newTags);

    onChange(newTag);
  };

  return (
    <Wrapper gap="10px" as={motion.div} center="y">
      <motion.div key={selectedTag} layoutId={selectedTag}>
        <Tag tag={selectedTag} big />
      </motion.div>
      <OptionsList gap="5px" wrap>
        {tags.map((tag, index) => {
          if (tag === selectedTag) {
            return null;
          }

          return (
            <motion.div
              key={tag}
              layoutId={tag}
              transition={{
                type: 'spring',
                damping: 20,
                stiffness: 300,
              }}
              onClick={() => handleSelect(index)}
            >
              <TagStyled tag={tag} />
            </motion.div>
          );
        })}
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
