import { CSSProperties } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface TextProps {
  color?: string;
  size?: number;
  weight?: CSSProperties['fontWeight'];
  lineHeight?: CSSProperties['lineHeight'];
  align?: CSSProperties['textAlign'];
  wrap?: CSSProperties['textWrap'];
  ellipsis?: boolean;
}

/**
 * Text component for gigachads
 */
export const Text = styled.span<TextProps>(
  ({
    color = 'inherit',
    size = 16,
    weight = '500',
    align = 'left',
    lineHeight = 'normal',
    wrap = 'normal',
    ellipsis = false,
  }) => css`
    font-family: sans-serif;
    font-size: ${size}px;
    color: ${color};
    font-weight: ${weight};
    line-height: ${lineHeight};
    text-align: ${align};
    text-wrap: ${wrap};
    ${ellipsis &&
    `
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
  `,
);
