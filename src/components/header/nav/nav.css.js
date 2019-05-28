import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      font-size: 2rem;

      & + li {
        margin-left: 4rem;
      }
    }

    ${MEDIA.TABLET`
      li {
        font-size: 1.5rem;

        & + li {
          margin-left: 2.5rem;
        }
      }
    `};
  }
`;
