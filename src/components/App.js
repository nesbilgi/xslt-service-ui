import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import ConvertPage from './pages/ConvertPage';
import ValidatePage from './pages/ValidatePage';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Container text>
          <Route exact path="/convert" component={ConvertPage} />
          <Route exact path="/validate" component={ValidatePage} />
        </Container>

        <Footer />
      </div>
    );
  }
}

export default App;
