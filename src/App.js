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
      selectedBeast: {},
      modalShow: false,
      setModalShow: false,
    }
  }


chooseBeast = (object) => {
  this.setState({
    selectedBeast: object
})
}

showModalClick = () => {
  this.setState({
    setModalShow: true,
    modalShow: true,
  })
}

closeModalClick = () => {
  this.setState({
    setModalShow: false,
    modalShow: false,
  })
}


  render () {
    console.log(this.state.selectedBeast)
    return (
      <div className="App">
        <Header />
        <Main data={data} chooseBeast={this.chooseBeast} showModalClick={this.showModalClick}/>
        <SelectedBeast chooseBeast={this.state.selectedBeast} show={this.state.modalShow} onHide={this.closeModalClick} />
        <Footer />
      </div>
    );
  }
}
export default App;
