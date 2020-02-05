import React from 'react';
import setApiCharacters from './RickAndMortyApiHook';
import Character from './Character';

const CharacterList = () => {
  const characters = setApiCharacters();
  return characters.map(({ id, name, status, species }) => {
    <Character id={id} name={name} status={status} species={species} />;
  });
};

export default CharacterList;
