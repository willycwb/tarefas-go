import { openDatabase, enablePromise } from "react-native-sqlite-storage";

export const getDBConnection = async () => {
  enablePromise(true);
  return openDatabase({ name: "tarefas-data.db", location: "default" });
};

export const createTable = async (db, query) => {
  await db.executeSql(query, []);
};

export const insertTable = async (db, query, params) => {
  await db.executeSql(query, params);
};

export const updateTable = async (db, query, params) => {
  await db.executeSql(query, params);
};

export const deleteTable = async (db, query, params) => {
  await db.executeSql(query, params);
};

export const selectQuery = async (db, query) => {
  const resp = await db.transaction(async (tx) => {
    const exec = await tx.executeSql(query, [], async (tx, results) => {
      let response = [];
      let len = results.rows.length;
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        console.log(`Task id: ${row.id}, Task Desc: ${row.descricao}`);
        response.push(row);
      }
      console.log('response', response);
      return response;
    });
    console.log('exec', exec);
    return exec;
  });
  console.log('resp', resp);
  return resp;
};
