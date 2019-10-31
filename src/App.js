import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataContainer from './Containers/DataContainer'
import FilterContainer from './Containers/FilterContainer'
import GraphContainer from './Containers/GraphContainer'

function App() {
  return (
    <div className="App">
      <div>
      < DataContainer />
      </div>
      <div>
      < FilterContainer />
      </div>
      <div>
      < GraphContainer />
      </div>
    </div>
  );
}

export default App;
