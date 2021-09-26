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
import { getDBConnection, createTable, insertTable } from "../db/db-service";

const QUERY_CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS task (id VARCHAR(16) PRIMARY KEY NOT NULL, descricao VARCHAR(16), vibrar INTEGER)';
const QUERY_INSERT = 'INSERT INTO task (id, descricao, vibrar) VALUES ( ?, ?, ?)';

export default function NovaTaskScreen({ navigation }) {
  const [descricao, setDescricao] = useState();
  const [vibrar, setVibrar] = useState(false);  
  const toggleSwitch = () => setVibrar(previousState => !previousState);

  async function salvarTask() {
    const tarefa = {
      id: generateUniqueKey(),
      descricao: descricao,
      vibrar: vibrar,
    };
    const db = await getDBConnection();
    await createTable(db, QUERY_CREATE_TABLE);
    console.log(tarefa);
    await insertTable(db, QUERY_INSERT, [tarefa.id, tarefa.descricao, tarefa.vibrar ? 1 : 0]);
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
