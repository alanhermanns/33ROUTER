import { useState, useEffect } from  'react';

const useCharacterDetail = (id) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(id);

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
        episodes : response.episode
      }))
      .then(res => {
        setCharacter(res);
        setLoading(false);
      });
  };

  return { character, rAndMDetail, loading };
};

export default useCharacterDetail;
