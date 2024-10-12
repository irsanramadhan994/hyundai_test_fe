import { StyleSheet, TextInput, TextProps } from "react-native";
import { Dimensions } from 'react-native'

const halfWindowsWidth = Dimensions.get('window').width / 1.5


type Props = {
    onChangeText: (val:string) => void;
    value:string,
    type?:string,
    placeholder?: string;
  };

export default function LoginTextInput ({onChangeText,placeholder,value,type}:Props){


    return(

        <TextInput  autoCapitalize={"none"} autoCorrect={false} secureTextEntry={type === 'password' ? true :false}   onChangeText={onChangeText} value={value} placeholder={placeholder} style={styles.input} />
    )
}



const styles = StyleSheet.create({

    input:{
    
        padding:20,
        backgroundColor:"#fff",
        borderRadius:10
        
    }
})