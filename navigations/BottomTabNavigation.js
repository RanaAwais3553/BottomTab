import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import Home from "../screens/screen1/Home";
import { Ionicons } from "@expo/vector-icons";
import Notifications from "../screens/screen2/Notification";
import Primary from "../screens/screen3/Primary";
import React from "react";
import WavyHeader from "../component/WavyHeader";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 12,
          backgroundColor: "#fff",
          elevation: 0,
          borderRadius: 10,
          zIndex: 0,
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#748",
                top: 0,
                width: "100%",
                marginLeft: 20,
                //                alignSelf: "stretch",
                height: "100%",
              }}
            >
              <Svg
                // height="70%"
                //width="60%"

                viewBox="0 0 1440 320"
                style={{
                  zIndex: 0,
                  elevation: 0,
                  position: "absolute",
                  top: -30,
                }}
              >
                <Path
                  fill="#121212"
                  d="M0,0L120,42.7C240,85,480,171,720,202.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
              </Svg>
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Primary}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: -25,
                //  zIndex: 5,
                //  elevation: 20,
              }}
            >
              <View
                style={{
                  height: 120,
                  width: 120,
                  justifyContent: "center",
                  // position: "absolute",
                  alignItems: "center",
                  backgroundColor: "green",
                  borderWidth: 2,
                  borderColor: "#fff",
                  borderRadius: 60,
                  //  zIndex: 5,
                  //  elevation: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: focused ? "#e32f45" : "#fff",
                    textTransform: "uppercase",
                  }}
                >
                  Scan
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#748",
                top: 0,
                width: "100%",
                marginLeft: -20,
                //                alignSelf: "stretch",
                height: "100%",
              }}
            >
              <Svg
                // height="70%"
                //width="60%"

                viewBox="0 0 1440 320"
                style={{
                  zIndex: 0,
                  elevation: 0,
                  position: "absolute",
                  top: -30,
                }}
              >
                <Path
                  fill="#121212"
                  d="M0,0L120,42.7C240,85,480,171,720,202.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
              </Svg>
              <Text style={{ color: focused ? "#e32f45" : "#748c94" }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5d50",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  svgCurve: {
    backgroundColor: "#121212",
    position: "absolute",
    zIndex: 0,
    elevation: 0,
    width: Dimensions.get("window").width / 2.6,
  },
});
export default MyTabs;
