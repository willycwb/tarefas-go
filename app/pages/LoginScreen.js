import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { addNome } from "../storage/actions/usuarioAction";
import { useDispatch } from "react-redux";
import { startStopLoading } from "../storage/actions/loadingAction";
import Styles from "../Styles";

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const finalizarIntro = async () => {
    dispatch(startStopLoading(true));
    const res = {
      nome: nome,
    };
    dispatch(addNome(res));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={stylesIntro.textStyle}>Bem vindo</Text>
      <TextInput
        style={stylesIntro.input}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        value={nome}
      />
      <View style={stylesIntro.btn}>
        <Button
          style={stylesIntro.btn}
          onPress={finalizarIntro}
          title="AVANÇAR"
          color={Styles.primaryColor}
          accessibilityLabel="Avançar"
        />
      </View>
    </View>
  );
}

const stylesIntro = {
  textStyle: {
    color: Styles.primaryColor,
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "sans-serif",
    textTransform: "uppercase",
    textAlignVertical: "top",
  },
  input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
  },
  btn: {    
    margin: 20
  },
};
