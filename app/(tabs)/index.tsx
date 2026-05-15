import useTheme from "@/hooks/useTheme";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  const { toggleDarkMode } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit screen.</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the mode</Text>
      </TouchableOpacity>

    </View>
  );
}
