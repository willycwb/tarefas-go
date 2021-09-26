import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Alert,
  Text,
  View,
  Button,
  ScrollView,
} from "react-native";
import * as Storage from "./Storage";
import { useFocusEffect } from "@react-navigation/native";
import { getDBConnection, createTable, selectQuery } from "../db/db-service";

const QUERY_CREATE_TABLE =
  "CREATE TABLE IF NOT EXISTS task (id VARCHAR(16) PRIMARY KEY NOT NULL, descricao VARCHAR(16), vibrar INTEGER)";
const QUERY_SELECT_ALL = "SELECT * FROM task";

export default function TaskScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function fetchTarefas() {
        const db = await getDBConnection();
        await createTable(db, QUERY_CREATE_TABLE);
        db.transaction((tx) => {
          tx.executeSql("SELECT * FROM task", [], (tx, results) => {
            let response = [];
            var len = results.rows.length;
            for (let i = 0; i < len; i++) {
              let row = results.rows.item(i);
              response.push(row);
            }
            setTarefas(response);
          });
        });
        //const result = await selectQuery(db, QUERY_SELECT_ALL);
      }
      fetchTarefas();
    }, [])
  );

  return (
    <View style={{ flex: 1 }}>
      {/* {tarefas.map((tarefa) => (
        <View key={tarefa.id}>
          <Text>{tarefa.descricao}</Text>
          <Text>{tarefa.vibrar ? "🔔" : ""}</Text>
        </View>
      ))} */}
      <ScrollView removeClippedSubviews={false}>
        <View>
          <FlatList
            nestedScrollEnabled
            data={tarefas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.text}>{item.descricao}</Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>

      <Button
        onPress={() => navigation.navigate("NewTask")}
        title="Nova Task"
        color="#841584"
        accessibilityLabel="Clique para add uma nova task!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20,
  },
  text: {
    color: "#333333",
  },
});
