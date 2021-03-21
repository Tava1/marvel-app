import GlobalStyle from '../styles/global';
import CharacterDetail from './CharacterDetail';
import CharactersList from './CharactersList';

export default function Home() {
  return (
    <>
      <CharactersList />
      <GlobalStyle />
    </>
  )
}