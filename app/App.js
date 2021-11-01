import React, { useEffect, useCallback } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import configureStore from "./configureStore";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { addConfig } from "./storage/actions/configAction";
import * as Storage from "./storage/Storage";
import { startStopLoading } from "./storage/actions/loadingAction";
import RouteHandler from "./pages/RouteHandler";
import { addNome } from "./storage/actions/usuarioAction";
import LoadingScreen from "./pages/LoadingScreen";

const AppWrapper = () => {
  const store = configureStore();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startStopLoading(true));
  // }, []);
  return (
    <Provider store={store}>
      <LoadingScreen />
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();
  const tema = useSelector((state) => state.tema);
  // const config = useSelector((state) => state.config);
  const usuario = useSelector((state) => state.usuario);

  useEffect(() => {    
    loadLocal();
  }, []);

  const loadLocal = useCallback(async () => {
    const usuarioLoad = await Storage.getData("usuario");
    if (usuarioLoad) {
      dispatch(addNome(usuarioLoad));
    }
    dispatch(startStopLoading(false));

    // const colorScheme = Appearance.getColorScheme();
    // dispatch(darkMode(colorScheme === "dark" ? true : false));
  }, []);

  //deslogado
  useEffect(() => {
    !usuario.nome ? Storage.storeData("usuario", null) : null;
  }, [usuario]);

  // const setUsuario = async () => {
  //   await Storage.storeData("usuario", usuario);
  //   dispatch(startStopLoading(false));
  // };

  return <RouteHandler />;
};

export default AppWrapper;
