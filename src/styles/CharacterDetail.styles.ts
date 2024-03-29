import styled from 'styled-components';

export const Container = styled.main`
  width: 992px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  .container-image {
    border: 4px solid #0a0f0d;
    height: 300px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

    img {
      height: 100%;
    }
  }

  .context {
    position: relative;

    .name {
      display: inline-flex;

      position: absolute;

      left: -25px;
      top: -20px;

      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

      h2 {
        padding: 0.5rem 0.8rem;
        background-color: #f9f9f9;
        border: 4px solid #0a0f0d;
        color: #0a0f0d;
        font-size: 1rem;
      }
    }

    .description {
      padding: 2.5rem;
      height: 200px;
      border-top: 4px solid #0a0f0d;
      border-right: 4px solid #0a0f0d;
      border-bottom: 4px solid #0a0f0d;
      color: #0a0f0d;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
