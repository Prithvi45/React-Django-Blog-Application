import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Blog from './containers/Blog/Blog';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
           <Blog />
        </Layout>
      </div>
    );
  }
}

export default App;
