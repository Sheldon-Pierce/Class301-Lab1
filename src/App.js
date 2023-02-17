import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json'
import React from 'react';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render () {
    return (
      <div className="App">
        <Header />
        <Main data={data}/>
        <SelectedBeast />
        <Footer />
      </div>
    );
  }
}
export default App;
