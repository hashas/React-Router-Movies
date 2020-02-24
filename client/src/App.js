import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { BrowserRouter as Router} from 'react-router-dom';
import { Movie, MovieList } from './Movies';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='./' component={MovieList}/>
      {/* <Route path='/movies/:id' component={Movie}/> */}
    </div>
  );
};

export default App;
