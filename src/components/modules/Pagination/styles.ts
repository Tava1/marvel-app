import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;

    li {
      margin: 0 0.4rem;

      button {
        background: #0A0F0D;
        color: #F9F9F9;
        border: 1px solid #0A0F0D;
        padding: 0.5rem 0.7rem;
        border-radius: 7px;
        font-weight: 600;
        transition: background 0.2s;

        &:hover {
          background: #F9F9F9;
          color: #0A0F0D;
        }
      }

      .current-page {
        background: #F9F9F9;
        color: #0A0F0D;
      }
    }
  }
`;