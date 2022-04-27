import React from "react";
import "./App.css";
import MenuAppBar from "./components/MenuAppBar";
import AppDrawer from "./components/AppDrawer";

function App() {
  const [pageInfo] = React.useState({
    pageTitle: "Lists",
    isDrawerOpen: false,
  });

  return (
    <div className="App">
      <MenuAppBar title={pageInfo.pageTitle} />
      <AppDrawer open={pageInfo.isDrawerOpen} />
    </div>
  );
}

export default App;
