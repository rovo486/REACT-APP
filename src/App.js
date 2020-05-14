import React, { Component } from 'react';
import './App.css';

class Subject extends Component{
  render(){
    return (
      <header>
      <h1>{this.props.title}</h1>
          {this.props.sub}
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
    <nav>
        <ul>
            <li><a href="1.html">html</a></li>
            <li><a href="2.html">css</a></li>
            <li><a href="3.html">javascript</a></li>
        </ul>
    </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

function App() {
  return (
    <div className="App">
     <Subject title="WEB" sub="world wide web!"></Subject>
     <TOC></TOC>
     <Content title="HTML" desc="html is hypertext Markup Language"></Content>
    </div>
  );
}

export default App;
