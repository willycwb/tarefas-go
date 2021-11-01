import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import LoggedRoutes from "./LoggedRoutes";
import LoginScreen from "./LoginScreen";
import * as Storage from "../storage/Storage";

export default function RouteHandler() {
  const usuario = useSelector((state) => state.usuario);
  return <>{usuario?.nome ? <LoggedRoutes></LoggedRoutes> : <LoginScreen></LoginScreen>}</>;
}
