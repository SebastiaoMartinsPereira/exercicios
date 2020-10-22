
import React from 'react';
import {Text, View } from 'react-native';
import Estilo from './components/estilos/app';
import Pai from './components/indireta/Pai';

export default () => {
  return <>
    <View style={Estilo.App}> 
      <Pai></Pai>
    </View>
  </>
}


/*
import Pai from './components/direta/Pai';
export default () => {
  return <>
    <View style={Estilo.App}>
      <Text>Occhente</Text>
      <Pai></Pai>
    </View>
  </>
}
*/

/*
import Botoes from './components/Botoes';
export default () => {
  return <>
    <View style={Estilo.App}>
       <Botoes></Botoes>
    </View>
  </>
}
*/
/*
  import Blabla from './components/primeiro';
  export default () => {
    return <>
    <View style={style.App}>
      <Text>Foi apenas um testes</Text>
      <Blabla></Blabla>
    </View>
    </>
  }
  const style = StyleSheet.create({
    App: {
      backgroundColor: '#A56',
      flexGrow: 1,
      justifyContent: "center",
      alignItems:"center"
    }
  });
*/


//gerando numeros aleatorios
/*import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
export default () => {
  return <>
    <View style={Estilo.App}>
      <Text>Foi apenas um testes</Text>
      <MinMax max={10} min={20}></MinMax>
      <MinMax max={30} min={20}></MinMax>
      <Aleatorio max={30} min={20}></Aleatorio>
      <Aleatorio max={1000} min={20}></Aleatorio>
    </View>
  </>
}
*/

