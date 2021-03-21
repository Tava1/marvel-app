import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  0% {
      transform: scale(0.90);
  }
  50% {
      transform: scale(1.05);
  }
  100% {
      transform: scale(0.90);
  }
`
const firstDot = keyframes`
  0% {
      color: #0A0F0D;
  }
  50% {
      color: #f9f9f9;

  }
  100% {
      color: #0A0F0D;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  margin-bottom: 60vh;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100px;
    height: 100px;
    animation: ${rotation} 1s infinite linear;
    margin-bottom: 1rem;
  }

  div {

    span {
      color: #0A0F0D;
      font-size: 2rem;
      font-weight: 700;
    }

    #first-dot {
      animation: ${firstDot} 1.5s infinite linear;
    }

    #second-dot {
      animation: ${firstDot} 1.0s infinite linear;
    }

    #third-dot {
      animation: ${firstDot} 1.5s infinite linear;
    }
  }
`;

