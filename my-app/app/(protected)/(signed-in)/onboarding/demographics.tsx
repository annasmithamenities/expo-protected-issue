import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AppContext } from "@/app/_layout";

export default function Demographics() {
  const { setOnboardingStep } = useContext(AppContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>Onboarding Step 1: Demographics</Text>
      <Button onPress={() => setOnboardingStep("payment")} title="Next" />
    </View>
  );
}
