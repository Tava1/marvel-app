import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <a href="https://www.linkedin.com/in/gustavoczsantos/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/Tava1" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div>
        <p>Developed by Gustavo Santos</p>
      </Content>
    </Container>
  );
}