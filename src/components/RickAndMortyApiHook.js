import { useState, useEffect } from 'react';

const setApiCharacters = (pageNumber) => {
    
  const [characters, setCharacters] = useState([]);

  const rAndMAPI = () => {
    return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then(res => {
        return res.results.map(item => ({
          id: item.id,
          name: item.name,
          status: item.status,
          species: item.species
        }))
          .then(res => {
            setCharacters(res);
          });
      });
      
  };
  return { characters, rAndMAPI };
};

export default setApiCharacters;
