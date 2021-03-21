import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #0A0F0D;
  color: #F9F9F9;
  height: 120px;
  margin-top: 60px;

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 992px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    a {
      svg {
        transition: color 0.2s;
        color: #F9F9F9;
        margin: 0.5rem;
      }
    }
  }

  p {
    font-weight: 500;
  }
`;