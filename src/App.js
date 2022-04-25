import React from 'react';
import './App.css';
import Topbar from './components/Topbar'

function App() {
  
  const [pageInfo] = React.useState({
      pageTitle: "Lists"
  })

  return (
    <div className="App">
        <Topbar title={pageInfo.pageTitle}/>      
    </div>
  );
}

export default App;
