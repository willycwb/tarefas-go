import React, { useEffect, useState } from "react";
import { Alert, Text, View, Button } from "react-native";
import * as Storage from "./Storage";
import { useFocusEffect } from "@react-navigation/native";

export default function TaskScreen({ navigation }) {
  const [tarefas, setTarefas] = useState([]);
  const numbers = [1, 2, 3, 4, 5];

  useFocusEffect(
    React.useCallback(() => {
      async function fetchTarefas() {
        const resp = await Storage.getData("@tarefas");        
        setTarefas(resp != null ? resp : []);
      }
      fetchTarefas();
    }, [])
  );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      {tarefas.map((tarefa) => (
        <View key={tarefa.id}>
          <Text>{tarefa.descricao}</Text>
          <Text>{tarefa.vibrar?'🔔':''}</Text>
        </View>
      ))}

      <Button
        onPress={() => navigation.navigate("NewTask")}
        title="Nova Task"
        color="#841584"
        accessibilityLabel="Clique para add uma nova task!"
      />
    </View>
  );
}
