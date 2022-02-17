import React from 'react';
import { Page } from './Components/Page';
import { Header } from './Components/Header';
import { Content } from './Components/Content';
import { Footer } from './Components/Footer';
import 'antd/dist/antd.css';

function App() {
  return (
    <Page dataTestId="app">
      <Header />
      <Content />
      <Footer/>
    </Page>
  );
}

export default App;
