import React from "react";
import {Text ,View , Image , StyleSheet} from 'react-native' ;

const AddGifImage = () => {
    return (
        <View style={Styles.container}>
          <Image
            style ={{width: 150, height:200}}
            source={require("./dragon.gif")}
          />
        </View>
      );
}

const Styles = StyleSheet.create({
    container :{
        alignContent:'center',
    }
})

export default AddGifImage;