import { ThemeProvider,DarkTheme, DefaultTheme,  } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function TaskLayout() {

  
    return <TaskLayoutNav />;
  }
  
  function TaskLayoutNav() {
    const colorScheme = useColorScheme();

  
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='create'>
          <Stack.Screen name="create" options={{ headerShown: false }} />

        </Stack>
      </ThemeProvider>
    );
  }