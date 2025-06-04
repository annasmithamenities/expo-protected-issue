import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AppContext } from "@/app/_layout";

export default function Payment() {
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
      <Text style={{ fontSize: 32 }}>Onboarding Step 2: Payment</Text>
      <Button onPress={() => setOnboardingStep("demographics")} title="Back" />
      <Button onPress={() => setOnboardingStep("complete")} title="Next" />
    </View>
  );
}
