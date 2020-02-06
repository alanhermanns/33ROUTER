import React from 'react';
import { useParams } from 'react-router-dom';
import setCharacterDetail from './RickAndMortyApiDetailHook';

const characterDetail = () => {
  const { id } = useParams();
  const { character, loading } = setCharacterDetail(id);
  if(loading){
    return (
      <h1>Loading</h1>
    );
  }
  const episodes = character.episodes.map((episode, i) => {
    return <li key={i}>{episode}</li>;
  });
  return (
    <>
      <h2>{character.name}</h2>
      {episodes}
    </>
  );
};

export default characterDetail;
