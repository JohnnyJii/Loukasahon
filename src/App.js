import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Footer, FooterSection, FooterLinkList } from 'react-mdl'
import Main from './components/main'


class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
         <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#gray' }}></span><strong>Loukasahon Kennel</strong></span>}>
                <Navigation>
                    <a href="#">Koirat</a>
                    <a href="#">Toiminta</a>
                    <a href="#">Pentueet</a>
                    <a href="#">Muu</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Historia</a>
                    <a href="#">Tulevaisuus</a>
                    <a href="#">Muistossamme</a>
                    <a href="#">Ota yhteyttä</a>
                </Navigation>
            </Drawer>
          </Layout>
        <Main />
        <Footer size="mini">
            <FooterSection type="left" logo="Title">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    </div>
    )
  }
}


export default App;
