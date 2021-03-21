import styled from 'styled-components';

export const Container = styled.header`
  background-color: #0A0F0D;
  color: #F9F9F9;
  height: 75px;
  border-bottom: 2px solid #EC1D24;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 992px;
  margin: 0 auto;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  div { 
    h1 {
      font-style: italic;
      font-weight: 900;
      a {
        padding: 1rem 0;
      }
    }
  }

  nav {
    ul {
      li {
        font-weight: 700;
        transition: color 0.2s;
        a {
          padding: 0.7rem 0;
        }

        &:hover {
          color: #EC1D24;
        }
      }
    }
  }
`;