import { Container } from './styles';

export default function SectionTitle({ title }) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <div className="line"></div>
      </div>
    </Container>
  );
}