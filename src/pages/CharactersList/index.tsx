import { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/modules/Header';
import Hero from '../../components/modules/Hero';
import SectionTitle from '../../components/modules/SectionTitle';
import CharacterCard from '../../components/modules/CharacterCard';
import Spinner from '../../components/elements/Spinner';

import { Container } from '../../styles/CharactersList.styles';
import { Grid } from '../../styles/grid';
import Footer from '../../components/modules/Footer';
import Pagination from '../../components/modules/Pagination';

const LIMIT = 20;

interface Characters {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface RequestInfoPagination {
  total: number;
}

export default function CharactersList() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [requestInfo, setRequestInfo] = useState<RequestInfoPagination>();
  const [hasSpinner, setHasSpinner] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setHasSpinner(true);

    api.get(`characters?limit=${LIMIT}&offset=${offset}&${process.env.MARVEL_API_KEY}`).then((response) => {
      setRequestInfo(response.data.data);
      setCharacters(response.data.data.results);
      setHasSpinner(false);
    }).catch((error) => {
      setHasSpinner(true);
      console.error(error);
    })

  }, [offset]);

  return (
    <>
      <Header />
      <Hero />
      <Container>
        {hasSpinner ? (<Spinner />)
          :
          <>
            <SectionTitle title="CHARACTERS" />
            <Grid>
              {
                characters.length > 0 ? characters.map(character => (
                  <CharacterCard id={character.id} name={character.name} image={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} />
                )) : <img src="/assets/images/"></img>
              }
            </Grid>

            {requestInfo && (
              <Pagination
                limit={LIMIT}
                total={requestInfo.total}
                offset={offset}
                setOffset={setOffset}
              />
            )}
          </>
        }
      </Container>
      <Footer />
    </>
  )
}