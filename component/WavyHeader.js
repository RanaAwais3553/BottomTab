import Svg, { Path } from "react-native-svg";

import React from "react";
import { View } from "react-native";

export default function WavyHeader({ customStyles }) {
  return (
    <View style={customStyles}>
      <View
        style={{
          //          backgroundColor: "#121212",
          marginLeft: -20,
          zIndex: 0,
          elevation: 0,

          //  borderTopEndRadius: 40,
          height: 50,
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
      </View>
    </View>
  );
}
