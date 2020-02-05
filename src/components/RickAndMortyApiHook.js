import { useState, useEffect } from 'react';

const setApiCharacters = (pageNumber = 1) => {
    
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log('here');
    rAndMAPI();
  }, []);

  const rAndMAPI = () => {
    console.log('here');
    return fetch(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return Promise.resolve(res.results.map(item => ({
          id: item.id,
          name: item.name,
          status: item.status,
          species: item.species
        })))
          .then(results => {
            setCharacters(results);
          });
      });
      
  };
  return { characters, rAndMAPI };
};

export default setApiCharacters;
