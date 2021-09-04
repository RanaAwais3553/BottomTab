import MyTabs from "./navigations/BottomTabNavigation";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
