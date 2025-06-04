import { View, Text } from "react-native";

export default function Public() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 32 }}>Public Page</Text>
    </View>
  );
}
