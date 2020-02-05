import React from 'react';
import setApiCharacters from './RickAndMortyApiHook';
import Character from './Character';

const CharacterList = ({ pageNumber }) => {
  const { characters } = setApiCharacters(pageNumber);

  console.log('api?', characters);

  return characters.map(({ id, name, status, species }) => {
    return <Character key={id} id={id} name={name} status={status} species={species} />;
  });
};

export default CharacterList;
