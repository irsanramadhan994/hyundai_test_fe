import { ThemeProvider,DarkTheme, DefaultTheme,  } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function TaskDetailLayout() {

  
    return <TaskDetailLayoutNav />;
  }
  
  function TaskDetailLayoutNav() {
    const colorScheme = useColorScheme();

  
    return (
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack initialRouteName='[task]'>
          <Stack.Screen name="[task]" options={{ header: () => null }} />
         


        </Stack>
      </ThemeProvider>
    );
  }