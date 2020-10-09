
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
//import Blabla from './components/primeiro';
import MinMax from './components/MinMax';
import Aleatorio from './components/Aleatorio';
import Estilo from './components/estilos/app';


// export default () => {
//   return <>
//   <View style={style.App}>
//     <Text>Foi apenas um testes</Text>
//     <Blabla></Blabla>
//   </View>
//   </>
// }
// const style = StyleSheet.create({
//   App: {
//     backgroundColor: '#A56',
//     flexGrow: 1,
//     justifyContent: "center",
//     alignItems:"center"
//   }
// });

export default () => {
  return <>
    <View style={Estilo.App}>
      <Text>Foi apenas um testes</Text>
      <MinMax max={10} min={20}></MinMax>
      <MinMax max={30} min={20}></MinMax>
      <Aleatorio max={30} min={20}></Aleatorio>
    </View>
  </>
}

