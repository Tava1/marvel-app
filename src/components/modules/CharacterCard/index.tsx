import Link from 'next/link';

import { Container, Content } from './styles';

export default function CharacterCard({ image, name }) {
  return (
    <Container>
      <a href="">
        <Content>
          <div>
            <img src={image} alt={name} />
          </div>
          <h3>{name}</h3>
        </Content>
      </a>
    </Container>
  );
}