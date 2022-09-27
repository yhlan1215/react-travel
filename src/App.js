import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, SignInPage, RegisterPage, DetailPage } from './pages';
import styled from 'styled-components';

const MainApp = styled.div`
  text-align: center;
`

function App() {
  return (
    <MainApp>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signIn' element={<SignInPage/>}/>
        <Route path='/Register' element={<RegisterPage/>}/>
        <Route path='/Detail/:id' element={<DetailPage/>}/>
        <Route path='*' element={<h1>404页面去火星了</h1>}/>
      </Routes>
      </BrowserRouter>
    </MainApp>
  );
}

export default App;
