import React from 'react';
import {  Button } from 'react-native';
export default (props) => { 

    function executar(){
       console.warn("executando btn funcion Onpress")    
    }

    return <>
        <Button
            title="Btn1"
            onPress={executar}
        />

        <Button
            title="Btn2"
            onPress={function(){
                console.warn("Executando btn OnPress 2")
            }}
        />
        <Button
            title="Btn3"
            onPress={()=>{
                console.warn("Executando btn OnPress 3")
            }}
        />
        
        </>
}