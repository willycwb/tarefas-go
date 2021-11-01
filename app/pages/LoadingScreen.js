import React, { useState } from "react";
import { Text, ActivityIndicator, View, Modal } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";

export default function LoadingScreen() {
  const loading = useSelector((state) => state.loading);
  return (
    <Modal animationType="slide" transparent={true} visible={loading.loading}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0009"
        }}
      >
        <ActivityIndicator size="large" color="#5D5A8B" />
      </View>
    </Modal>
  );
}
