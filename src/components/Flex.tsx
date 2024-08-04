import { CSSProperties } from 'react';
import styled from '@emotion/styled';

type FlexProps = {
  inline?: boolean;
  column?: boolean;
  reverse?: boolean;
  full?: boolean;

  center?: 'x' | 'y' | true;

  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  alignSelf?: CSSProperties['alignSelf'];
  justifyItems?: CSSProperties['justifyItems'];
  justifyContent?: CSSProperties['justifyContent'];
  justifySelf?: CSSProperties['justifySelf'];

  grow?: boolean | CSSProperties['flexGrow'];
  shrink?: boolean | CSSProperties['flexShrink'];
  wrap?: boolean | 'reverse';
  gap?:
    | CSSProperties['gap']
    | [column: CSSProperties['gap'], row: CSSProperties['gap']];
  order?: CSSProperties['order'];

  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
};

const setProp = <T extends Record<string, any>>(
  prop: keyof T,
  cssProp?: string,
) => {
  return (props: T) =>
    prop in props && `${cssProp ?? String(prop)}: ${props[prop]};`;
};

/**
 * Flex component for gigachads
 */
export const Flex = styled.div<FlexProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ column, reverse }) => {
    return `${column ? 'column' : 'row'}${reverse ? '-reverse' : ''}`;
  }};

  ${({ column, center }) => {
    const centerX = center === 'x' || center === true;
    const centerY = center === 'y' || center === true;

    if (column) {
      return `
        align-items: ${centerX ? 'center' : 'normal'};
        justify-content:  ${centerY ? 'center' : 'normal'};
      `;
    }

    return `
      align-items: ${centerY ? 'center' : 'normal'};
      justify-content: ${centerX ? 'center' : 'normal'};
    `;
  }};

  ${({ gap }) => {
    if (typeof gap === 'undefined') {
      return '';
    }

    if (Array.isArray(gap)) {
      return `gap: ${gap[1]} ${gap[0]};`;
    }

    return `gap: ${gap};`;
  }}

  ${({ wrap }) => {
    if (!wrap) {
      return '';
    }

    if (wrap === true) {
      return `flex-wrap: wrap;`;
    }

    return `flex-wrap: wrap-reverse;`;
  }}

  ${({ grow }) => {
    if (typeof grow === 'undefined' || grow === false) {
      return '';
    }

    if (grow === true) {
      return `flex-grow: 1;`;
    }

    return `flex-grow: ${grow};`;
  }}

  ${({ shrink }) => {
    if (typeof shrink === 'undefined' || shrink === false) {
      return '';
    }

    if (shrink === true) {
      return `flex-shrink: 1;`;
    }

    return `flex-shrink: ${shrink};`;
  }}

  ${({ full }) => {
    if (!full) {
      return '';
    }

    return `
      width: 100%;
      height: 100%;
    `;
  }}

  ${setProp('alignItems', 'align-items')}
  ${setProp('alignContent', 'align-content')}
  ${setProp('alignSelf', 'align-self')}
  ${setProp('justifyItems', 'justify-items')}
  ${setProp('justifyContent', 'justify-content')}
  ${setProp('justifySelf', 'justify-self')}

  ${setProp('order')}
  ${setProp('margin')}
  ${setProp('padding')}
`;
