import React from 'react';
import styled from '@emotion/styled';
import * as ScrollArea from '@radix-ui/react-scroll-area';

interface ScrollableProps {
  children: React.ReactNode;
  className?: string;
}

export const Scrollable: React.FC<ScrollableProps> = ({
  children,
  className,
}) => {
  return (
    <Root scrollHideDelay={0} className={className}>
      <Viewport>{children}</Viewport>
      <Scrollbar orientation="vertical">
        <Thumb />
      </Scrollbar>
      <Scrollbar orientation="horizontal">
        <Thumb />
      </Scrollbar>
    </Root>
  );
};

const Root = styled(ScrollArea.Root)`
  overflow: hidden;
  height: 100%;
`;

const Viewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;

  > div {
    height: 100%;
  }
`;

const Scrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  background: rgba(0, 0, 0, 0.15);
  transition: all 160ms ease-out;

  :hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &[data-orientation='vertical'] {
    width: 5px;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 5px;
  }
`;

const Thumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;
`;
