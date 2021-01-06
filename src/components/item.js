import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Item extends Component {
  render() {
    console.log('método render');
    return (
      <View style={Estilos.item}>
        <View>
          <Image
            style={Estilos.imgItem}
            source={{uri: this.props.detalhes.foto}}
          />
        </View>
        <View style={Estilos.descricao}>
          <Text style={Estilos.tituloItem}>{this.props.detalhes.titulo}</Text>
          <Text>R$ {this.props.detalhes.valor}</Text>
          <Text>{this.props.detalhes.local_anuncio}</Text>
          <Text>{this.props.detalhes.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const Estilos = {
  imgItem: {
    height: 102,
    width: 102,
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#dadada',
    backgroundColor: '#efefef',
  },
  descricao: {
    paddingLeft: 10,
    flex: 1,
  },
  tituloItem: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
};

export default Item;
