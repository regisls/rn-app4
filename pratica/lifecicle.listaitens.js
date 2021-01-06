import React, {Component} from 'react';
import {Text} from 'react-native';

class ListaItens extends Component {
  constructor(props) {
    super(props);
    console.log('método Constuctor');
  }

  componentWillMount() {
    console.log('método componentWillMount');
  }

  componentDidMount() {
    console.log('método componentDidMount');
  }

  render() {
    console.log('método render');
    return (
      <Text>teste</Text>
    );
  }
}

export default ListaItens;
