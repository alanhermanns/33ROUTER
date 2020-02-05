import React from 'react';
import { useRouteMatch as match } from 'react-router-dom';
import setCharacterDetail from './RickAndMortyApiDetailHook';

const characterDetail = () => {
  console.log('here');
  const { character } = setCharacterDetail({ match });
  const episodes = character.episodes.map((episode, i) => {
    <li key={i}>{episode}</li>;
  });
  return (
    <>
      <h2>{character.name}</h2>
      {episodes}
    </>
  );
};

export default characterDetail;
