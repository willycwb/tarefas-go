import React, { useState } from "react";
import {
  Alert,
  Text,
  View,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Switch
} from "react-native";
import * as Storage from "./Storage";
import { Tarefa } from "../objects/Tarefa";
import { generateUniqueKey } from "../utils/Utils";

export default function NovaTaskScreen({ navigation }) {
  const [descricao, setDescricao] = useState();
  const [vibrar, setVibrar] = useState(false);  
  const toggleSwitch = () => setVibrar(previousState => !previousState);

  async function salvarTask() {
    let tarefas = await Storage.getData("@tarefas");
    console.log(tarefas);

    const tarefa = {
      id: generateUniqueKey(),
      descricao: descricao,
      vibrar: vibrar,
    };
    console.log(tarefa);

    if (tarefas != null) {
        tarefas.push(tarefa);
    } else {
        tarefas = [];
        tarefas.push(tarefa);
    }

    console.log(tarefas);

    Storage.storeData("@tarefas", tarefas);
    navigation.navigate("Tasks");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setDescricao}
          placeholder="Descricao da tarefa"
          value={descricao}
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={vibrar ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={vibrar}
        />

        <Button
          onPress={salvarTask}
          title="SALVAR"
          color="#841584"
          accessibilityLabel="Nova task criada!"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
