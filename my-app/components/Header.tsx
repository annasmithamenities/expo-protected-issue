import { AppContext } from "@/app/_layout";
import { Link } from "expo-router";
import { useContext } from "react";
import { Button, View, Text } from "react-native";

export default function Header({ name }: { name: string }) {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

  return (
    <View
      style={{
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 18 }}>{name}</Text>
      <Link href="/home" style={{ fontSize: 18, color: "blue" }}>
        /home
      </Link>
      <Link href="/public" style={{ fontSize: 18, color: "blue" }}>
        /public
      </Link>
      <Button
        onPress={() => setIsLoggedIn(!isLoggedIn)}
        title={isLoggedIn ? "Log out" : "Log in"}
      />
    </View>
  );
}
