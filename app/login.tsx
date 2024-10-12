import LoginButton from "@/components/LoginButton";
import LoginFormContainer from "@/components/LoginFormContainer";
import LoginTextInput from "@/components/LoginTextInput";
import { Text, View } from "@/components/Themed";
import { login, signUp } from "@/services/AuthService";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isRegister,setIsRegister] = useState<boolean>(false);



    const handleSetIsRegister = () => { 

      setIsRegister(!isRegister)
     }
    const handleSubmit =async () => { 

      try {
        if (!isRegister) {
          const response = await login(email, password);
          await AsyncStorage.setItem('token', response.data.token);
          router.push("/(tabs)")
        } else {
          await signUp(email, password,confirmPassword);
          Alert.alert('User registered successfully');
          setIsRegister(true);
        }
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }

    
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> REACT NATIVE {isRegister ? "SIGNUP" :"LOGIN"}</Text>
      <Text style={styles.subtitle}> {isRegister? "Please Fill The Form" : "Please Sign In"}</Text>

      <LoginFormContainer>
        <LoginTextInput
          value={email}
          placeholder="email"
          onChangeText={(val: string) => setEmail(val)}
        />
        <LoginTextInput
          value={password}
          placeholder="Password"
          type="password"
          onChangeText={(val: string) => setPassword(val)}
        />
          {isRegister &&   <LoginTextInput
          value={confirmPassword}
          placeholder="Confirm Password"
          type="password"
          onChangeText={(val: string) => setConfirmPassword(val)}
        />}
        <LoginButton title="Submit" onClick={handleSubmit} />
        <LoginButton title={!isRegister? "SIGN UP":"LOGIN"} onClick={handleSetIsRegister} />

      </LoginFormContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#d4d4d4",
    gap:10,
    paddingTop:200,
    justifyContent:"flex-start"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily:"PoppinsBold",
    
  },
  subtitle: {
    fontSize: 20,
    fontFamily:"Poppins",
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default LoginScreen;
