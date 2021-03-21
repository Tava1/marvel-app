import { Container, Content, Context } from './styles';

export default function Hero() {
  return (
    <Container>
      <Content>
        <div className="pop"></div>
        <div className="hero-mask"></div>
        <div>
          {/* <img src="/assets/images/hero-banner.jpeg" alt="Banner MARVEL" /> */}
        </div>
      </Content>

      <Context>
        <h2>MARVEL BOOK</h2>
        <p>A place to meet your favorite characters</p>
      </Context>
    </Container>
  );
}