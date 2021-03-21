import { useEffect, useState } from 'react';

import api from '../../services/api';

import Header from '../../components/modules/Header';
import Hero from '../../components/modules/Hero';
import SectionTitle from '../../components/modules/SectionTitle';
import CharacterCard from '../../components/modules/CharacterCard';
import Spinner from '../../components/elements/Spinner';

import { Container } from './styles';
import { Grid } from '../../styles/grid';
import Footer from '../../components/modules/Footer';

const apiParams = {
  "tsKeyHash": "ts=1616179034&apikey=c22ba519d36ef5d64b7c341b94e6c7f9&hash=8a8b24fa59c32ba7bb0920b0c2721d86"
}

export default function CharactersList() {

  const [characters, setCharacters] = useState([]);
  const [hasSpinner, setHasSpinner] = useState(false);

  useEffect(() => {

    setHasSpinner(true);

    api.get(`characters?${apiParams.tsKeyHash}`).then((response) => {
      console.log(response.data.data.results);
      setCharacters(response.data.data.results);
      setHasSpinner(false);
    }).catch(() => {
      setHasSpinner(true);
    })

  }, []);

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
                  <CharacterCard name={character.name} image={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} />
                )) : <img src="/assets/images/"></img>
              }
            </Grid>
          </>
        }
      </Container>
      <Footer />
    </>
  )
}