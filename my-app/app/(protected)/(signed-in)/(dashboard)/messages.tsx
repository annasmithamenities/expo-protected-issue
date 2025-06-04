import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AppContext } from "../../../_layout";

export default function ProfileScreen() {
  const { setIsLoggedIn, setOnboardingStep } = useContext(AppContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>Messages</Text>
      <Button
        onPress={() => setOnboardingStep("demographics")}
        title={"Reset onboarding"}
      />
    </View>
  );
}
