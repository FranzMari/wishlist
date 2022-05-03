import React from "react";
import "./App.css";
import MenuAppBar from "./components/MenuAppBar";
import AppDrawer from "./components/AppDrawer";
import Lists from "./components/Lists"

function App() {
  const [pageInfo, setPageInfo] = React.useState({
    pageTitle: "Lists",
    isDrawerOpen: false,
  });

  const setDrawerOpen = () => {
    setPageInfo(prevState =>  {
        return {
            ...prevState,
            isDrawerOpen: !prevState.isDrawerOpen
        }
    });
}

  return (
    <div className="App">
      <MenuAppBar title={pageInfo.pageTitle} handleClick={setDrawerOpen}/>
      <AppDrawer 
        isOpen={pageInfo.isDrawerOpen}
        handleOnClose={setDrawerOpen}
        handleOnOpen={setDrawerOpen} />
      <Lists />
    </div>
  );
}

export default App;
