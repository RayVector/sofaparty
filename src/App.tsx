import React from 'react';
import { Route, Routes} from 'react-router-dom'
import {TheHeader} from "./components/TheHeader";
import {Container} from "@mui/material";
import {Home} from "./pages/Home";
import {MyLibrary} from "./pages/MyLibrary";
import {Watch} from "./pages/Watch";

function App() {
  return (
    <>
      <TheHeader/>
      <Container className={'py-5'}>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/my-library'} element={<MyLibrary/>}/>
          <Route path={'/watch'} element={<Watch/>}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
