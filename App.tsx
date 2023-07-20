import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles/style'
import { LoginView } from './pages/Login';
import { PaperProvider, MD3LightTheme, configureFonts } from 'react-native-paper';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_300Light, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AdminView } from './pages/Admin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { userStatus } from './pages/globalStore';

const fontConfig = {
  fontFamily: 'Poppins_500Medium'
};

const theme = {
  ...MD3LightTheme
  , fonts: configureFonts({ config: fontConfig })
}


const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_500Medium, Poppins_300Light, Poppins_600SemiBold, Poppins_700Bold })
  const [initialScreen, setinitialScreen] = useState('Login');
  
  useEffect(() => {
   (async () => {
    let item = await AsyncStorage.getItem('userStatus');
    const token = JSON.parse(item as string) as userStatus;
    if(token.isAuthenticated){
      axios.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
      //setinitialScreen('Admin')
    }
   })();
  }, [])
  
  
  return (
    <QueryClientProvider client={queryClient}>

      <SafeAreaProvider>
        <PaperProvider theme={theme} >
          <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginView} />
              <Stack.Screen name="Admin" component={AdminView} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </QueryClientProvider>




  );
}

