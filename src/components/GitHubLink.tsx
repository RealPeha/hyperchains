import styled from '@emotion/styled';
import { Flex } from './Flex';

export const GithubLink = styled(Flex)`
  border-radius: 10px;
  padding: 3px 6px 3px 0;
  transition: background 0.3s;

  a {
    text-decoration: none;
  }

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
