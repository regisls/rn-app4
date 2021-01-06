import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Item from './item';

class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaItens: [],
    };
  }

  componentWillMount() {
    // Requisição HTTP

    axios
      .get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((response) => {
        this.setState({listaItens: response.data});
      })
      .catch(() => {
        console.log('Erro ao recuperar os dados');
      });
  }

  render() {
    console.log('método render');
    return (
      <ScrollView>
        {this.state.listaItens.map((item, i) => {
          return <Item key={i} detalhes={item} />;
        })}
      </ScrollView>
    );
  }
}

export default ListaItens;
