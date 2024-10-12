import { Button, StyleSheet, TouchableOpacity,Text } from "react-native";

type Props = {
  title: string;
  onClick: () => void;
};

const CreateButton = ({ title, onClick }: Props) => {
  return (
        <TouchableOpacity  onPress={onClick} style={styles.button}>
                <Text style={styles.button_txt}>{title}</Text>
        </TouchableOpacity>


  );
};



const styles = StyleSheet.create({
    button:{
        fontFamily:"Poppins",
        backgroundColor:"blue",
        padding:20,
        borderRadius:10
    },
    button_txt:{
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center"
    }
})

export default CreateButton;
