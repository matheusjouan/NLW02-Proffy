import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

/**
 * Não necessita o NavigationContainer, pois esta rota está dentro
 * da navegação de pilha
 */
function StudyTabs() {
  return (
    // tabBarOption => Estilizar a barra da navegação
    <Navigator
      tabBarOptions={{
        // Estilização do container das abas
        style: {
          shadowOpacity: 0, // Tira sombra no iOS
          elevation: 0, // Tira sombra no Android
          height: 64,
        },
        // Estilização de cada um das abas
        tabStyle: {
          // p/ por o icone do lado do texto
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        // Estilização dos icones
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        // Estilização do texto das abas
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        // A cor do fundo da aba qnd não/esta selecionada
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        // A cor do texto da aba qnd não/esta selecionada
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name='TeacherList'
        component={TeacherList}
        options={{
          // Qual o texto que na aba
          tabBarLabel: "Proffys",
          // Coloca o Icone
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name='ios-easel'
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name='Favorites'
        component={Favorites}
        options={{
          // Qual o texto que na aba
          tabBarLabel: "Favoritos",
          // Coloca o Icone
          tabBarIcon: ({ size, color, focused }) => {
            return (
              <Ionicons
                name='ios-heart'
                size={size}
                color={focused ? "#8257e5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;
