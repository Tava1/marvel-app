import Header from '../../components/modules/Header';
import Hero from '../../components/modules/Hero';
import SectionTitle from '../../components/modules/SectionTitle';
import CharacterCard from '../../components/modules/CharacterCard';

import { Container } from './styles';
import { Grid } from '../../styles/grid';
import Footer from '../../components/modules/Footer';

export default function CharactersList() {

  return (
    <>
      <Header />
      <Hero />
      <Container>
        <SectionTitle title="CHARACTERS" />

        <Grid>
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
          <CharacterCard name="3-D Man" image="/assets/images/535fecbbb9784.jpg" />
        </Grid>

      </Container>

      <Footer />
    </>
  )
}