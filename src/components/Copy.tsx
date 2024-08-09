import React, { useState } from 'react';
import styled from '@emotion/styled';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';
import copy from 'copy-to-clipboard';

interface CopyProps {
  value: string | number | boolean;
}

export const Copy: React.FC<CopyProps> = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();
    copy(value.toString());

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  if (copied) {
    return <CopySuccessIcon size={14} />;
  }

  return <CopyIcon onClick={handleCopy} size={14} />;
};

const CopyIcon = styled(LuCopy)`
  cursor: pointer;
  margin-left: 5px;
`;

const CopySuccessIcon = styled(LuCopyCheck)`
  color: green;
  margin-left: 5px;
`;
