import React from 'react';
import './App.scss';
import Field from './components/field';
import Market from './components/market';
import Stock from './components/stock';
import Invent from './components/invent';
import Decorations from './components/decorations';

class App extends React.Component {
  state = {
    data: {
      id: '',
      username: '',
      password: ''
    }
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => {
        this.setState({ data: res })
      })
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend/users');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Decorations></Decorations>
        <Market></Market>
        <Field></Field>
        <Stock></Stock>
        <Invent></Invent>
        {this.state.data.id}
      </div>
    );
  }
}

export default App;
