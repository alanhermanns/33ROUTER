import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CharacterList from './CharacterList';
import Header from './Header';

const Home = () => {
  const [count, setCount] = useState(1);

  return <>
    <Header />
    <h1>Here You Are, Home</h1>
    <button onClick={() => setCount(count => count + 1)}>Next</button>
    <button onClick={() => {
      count > 1 && setCount(count => count - 1);
    }}>Previous</button>
    <CharacterList pageNumber={count}/>
  </>;
}; 

export default Home;
