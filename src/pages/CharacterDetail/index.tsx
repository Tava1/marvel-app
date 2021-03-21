import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Header from '../../components/modules/Header';
import SectionTitle from '../../components/modules/SectionTitle';
import Footer from '../../components/modules/Footer';
import ComicCard from '../../components/modules/ComicCard';
import Spinner from '../../components/elements/Spinner';

import { Grid } from '../../styles/grid';
import { Container, Content } from '../../styles/CharacterDetail.styles';

import api from '../../services/api';

interface Character {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface Comics {
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export default function CharacterDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [hasSpinner, setHasSpinner] = useState(false);
  const [characterDetails, setCharacterDetails] = useState<Character>();
  const [comics, setComics] = useState<Comics[]>([]);

  useEffect(() => {

    setHasSpinner(true);

    api.get(`characters/${id}?${process.env.MARVEL_API_KEY}`).then((response) => {
      setCharacterDetails(response.data.data.results[0]);
    }).catch((error) => {
      console.error(error)
    })

    api.get(`characters/${id}/comics?${process.env.MARVEL_API_KEY}`).then((response) => {
      setComics(response.data.data.results);
      setHasSpinner(false);
    }).catch((error) => {
      setHasSpinner(true);
      console.error(error)
    })

  }, [])

  console.log(comics);

  return (
    <>
      <Header />
      <Container>
        {hasSpinner ? (<Spinner />) :
          <>
            {characterDetails && (
              <>
                <SectionTitle title="ABOUT" />

                <Content>
                  <div className="container-image">
                    <img src={`${characterDetails.thumbnail.path}/standard_fantastic.${characterDetails.thumbnail.extension}`} alt="3-D Man" />
                  </div>

                  <div className="context">
                    <div className="name">
                      <h2>{characterDetails.name}</h2>
                    </div>
                    <div className="description">
                      <p>{characterDetails.description ? characterDetails.description : 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'}</p>
                    </div>
                  </div>
                </Content>

                <SectionTitle title={`${characterDetails.name}'s COMICS`} />

                <Grid>
                  {
                    comics.length > 0 && comics.map(comic => (
                      <ComicCard image={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} title={comic.title} />
                    ))
                  }
                </Grid>
              </>
            )}
          </>
        }
      </Container>
      <Footer />
    </>
  )
}