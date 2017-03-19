import React, { Component } from 'react';
import '../node_modules/prismjs/prism'
import '../node_modules/prismjs/themes/prism.css'
import Motivation from './motivation/Motivation';
import CssDisplay from './cssDisplay/CssDisplay';
import CssCenter from './cssCenter/CssCenter';
import CssSpecificity from './cssSpecificity/CssSpecificity';
import './App.css';
import './Utility.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="font-size-1 text-center">
            The basic of
          </div>
          <div className='font-size-4 text-center'>
            Cascading Style Sheets
          </div>
        </header>
        <Motivation/>
        <section>
          <div className="font-size-1">Content</div>
          <ol>
            <li>CSS attribute 'Display'</li>
            <li>Centering of element</li>
          </ol>
        </section>
        <hr/>
        <CssDisplay/>
        <CssCenter/>
        <CssSpecificity/>
      </div>
    );
  }
}

export default App;
