import Header from '../../components/modules/Header';
import SectionTitle from '../../components/modules/SectionTitle';

import { Container, Content } from './styles';
import { Grid } from '../../styles/grid';
import Footer from '../../components/modules/Footer';
import ComicCard from '../../components/modules/ComicCard';

export default function CharacterDetail() {
  return (
    <>
      <Header />
      <Container>

        <SectionTitle title="ABOUT" />

        <Content>
          <div className="container-image">
            <img src="/assets/images/535fecbbb9784.jpg" alt="3-D Man" />
          </div>

          <div className="context">
            <div className="name">
              <h2>3-D Man</h2>
            </div>
            <div className="description">
              <p>Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction!</p>
            </div>
          </div>
        </Content>

        <SectionTitle title="3-D Man's COMICS" />

        <Grid>
          <ComicCard image="/assets/images/5ba3bfcc55f5a.jpg" title="Hulk (2008) #53" />
          <ComicCard image="/assets/images/5ba3bfcc55f5a.jpg" title="Hulk (2008) #53" />
          <ComicCard image="/assets/images/5ba3bfcc55f5a.jpg" title="Hulk (2008) #53" />
          <ComicCard image="/assets/images/5ba3bfcc55f5a.jpg" title="Hulk (2008) #53" />
        </Grid>
      </Container>
      <Footer />
    </>
  )
}