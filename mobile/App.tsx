import { StatusBar } from "expo-status-bar";
import React from "react";

// Caso a fonte não for carrega, loading
import { AppLoading } from "expo";

// Importa em um dos pacotes, tanto faz, useFonts
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import AppStack from "./src/routes/AppStack";

export default function App() {
  // Quando as fontes forem carregada, valor => true
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style='light' />
      </>
    );
  }
}
