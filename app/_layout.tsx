import { CurrentRenderContext, DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { ImageBase, StyleSheet } from 'react-native';
import { ICats } from '@/interfaces/ICats.rdo';
import CatApi from '@/scripts/api';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [images, setImages] = useState<ICats[]>([])
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const fetchData = async () => {
        const catsimgs = await CatApi.fetchdata()
        catsimgs && setImages(catsimgs);
    }
    fetchData()
}, [])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <FlatList>
        data = {images}
        renderItem {({images},)
        <View style = {styles.cats}>

        </View>
        }
      </FlatList>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  cats : {

  }
})
