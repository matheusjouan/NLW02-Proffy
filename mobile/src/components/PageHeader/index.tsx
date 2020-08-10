import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

// Botão sem fundo utiliza BordlessButton, ReactButon com fundo
import { BorderlessButton } from "react-native-gesture-handler";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

import styles from "./styles";

interface PageHeaderProps {
  title: string;
  // pode receber um componente como propriedade
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoImg} resizeMode='contain' />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
  );
};

export default PageHeader;
