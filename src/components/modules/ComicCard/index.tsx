import Link from 'next/link';

import { Container } from './styles';

export default function ComicCard({ image, title }) {
  return (
    <Container>
      <div>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </Container>
  );
}