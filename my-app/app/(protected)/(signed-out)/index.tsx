import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AppContext } from "../../_layout";

export default function IndexScreen() {
  const { setIsLoggedIn } = useContext(AppContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>Welcome, signed out user</Text>
      <Button onPress={() => setIsLoggedIn(true)} title={"Log in"} />
    </View>
  );
}
