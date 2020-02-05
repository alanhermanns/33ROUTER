import React from 'react'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import CharacterDetail from './CharacterDetail';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" componenet={CharacterDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );

}
  
