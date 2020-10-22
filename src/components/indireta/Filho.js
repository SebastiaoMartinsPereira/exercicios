import React from 'react';
import { View, Text, Button } from 'react-native'; 

export default (props) => {

    function gerarNumero(min,max){
           const fator = max - min + 1;
           return parseInt(Math.random()*fator) + min;
    }

    return (<>
        <View>
            <Button
                title="Executar"
                onPress={function () {
                    console.warn('chegeui aqui ')
                        const numero = gerarNumero(props.min,props.max);
                        props.callBackBtnPressed(numero);
                    }
                }
            />
        </View>
    </>)
}