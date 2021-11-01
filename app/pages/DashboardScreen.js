import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  Button,
  Appearance,
} from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import * as Storage from "../storage/Storage";
import {
  addConfig,
  darkMode,
  inicializado,
} from "../storage/actions/configAction";
import { removeNome } from "../storage/actions/usuarioAction";
import { startStopLoading } from "../storage/actions/loadingAction";
import Styles from "../Styles";

export default function DashboardScreen() {
  // const usuario = useSelector((state) => console.log('usuario', state.usuario));
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  // const config = useSelector((state) => state.config);
  useEffect(() => {
    async function fetchInit() {
      // const usuario2 = await Storage.getData("usuario");
      // if (configLoad) {
      //   dispatch(addConfig(configLoad));
      // }
      // const colorScheme = Appearance.getColorScheme();
      // dispatch(darkMode(colorScheme === "dark" ? true : false));
      // await Storage.storeData("config", config);
      // console.log('config', config);
      dispatch(startStopLoading(false));
    }
    fetchInit();
  }, []);
  const finalizarIntro = async () => {    
    dispatch(removeNome());
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Dashboard</Text>
      <Button
        onPress={finalizarIntro}
        title="LOG OUT"
        color={Styles.primaryColor}
        accessibilityLabel="Avançar"
      />
    </View>
  );
}
