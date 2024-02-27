import { useState } from 'react';
import './App.scss';
import { Menu } from './components/element/Menu/Menu';


import { Main } from './components/pages/Main/Main';

function App() {

  const [isMenuShow, setMenuShow] = useState(false);

  const toogleMenu = () => {
    setMenuShow(!isMenuShow)
  }

  console.log(isMenuShow)

  return (
      <>
        <Menu isMenuShow={isMenuShow} toogleMenu={toogleMenu}/>
        <div className="App" style={ isMenuShow ? {display: "none"} : {}}>
          <Main toogleMenu={toogleMenu}/>
        </div>
      </>
  );
}

export default App;
