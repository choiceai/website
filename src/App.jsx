import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.scss';
import { Menu } from './components/element/Menu/Menu';


import { Main } from './components/pages/Main/Main';
import { About } from './components/pages/About/About';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Contact } from './components/pages/Contact/Contact';

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
          <Routes>
            <Route path='/' element={<Main toogleMenu={toogleMenu} />}/>
            <Route path='/about' element={<About toogleMenu={toogleMenu} />}/>
            <Route path='/contact' element={<Contact toogleMenu={toogleMenu} />}/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </>
  );
}

export default App;
