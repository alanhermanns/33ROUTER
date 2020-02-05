import { useState, useEffect } from  'react';

const setCharacterDetail = ({ match }) => {
  const [character, setCharacter] = useState({});

  const id = match.params.id;

  useEffect(() => {
    console.log('load');
    rAndMDetail();
  }, []);

  const rAndMDetail = () => {
    console.log('detail');
    return fetch(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(response => ({
        name: response.name,
        episodes : response.episodes
      }))
      .then(res => {
        setCharacter(res);
      });
  };

  return { character, rAndMDetail };
};

export default setCharacterDetail;
