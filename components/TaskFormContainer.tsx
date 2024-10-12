
import { StyleSheet } from "react-native";
import { View } from "./Themed";
import { Dimensions } from 'react-native'

const halfWindowsWidth = Dimensions.get('window').width / 1.25

export default function TaskFormContainer({children}:any){


    return(


        <View style={styles.container}>
                {children}
        </View>
    )



}


const styles = StyleSheet.create({

    container:{

        padding:20,
        width:300,
        backgroundColor:"#d4d4d4",
        flexDirection:'column',
        borderRadius:16,
        gap:20,
        minWidth:halfWindowsWidth,

    }

})