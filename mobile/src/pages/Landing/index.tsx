import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import api from "../../services/api";

import landingImg from "../../assets/images/landing.png";
import studyingIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import styles from "./style";

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnection, setTotalConnection] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const total = response.data;

      setTotalConnection(total);
    });
  }, []);

  function handleNavigateToGiveClassesPage() {
    navigate("GiveClasses");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={() => navigate("Study")}
        >
          <Image source={studyingIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnection} conexões já realizadas{" "}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
