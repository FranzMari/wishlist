function Topbar(props) {
    return (
      <header className="topbar">
          <div id="menu-button">
              <hr />
              <hr />
              <hr />
          </div>
          <h1> {props.title} </h1>        
      </header>
    );
  }
  
  export default Topbar;
  