import { AppContext } from "@/app/_layout";
import { Stack } from "expo-router";
import { useContext } from "react";

export default function SignedInLayout() {
  const { onboardingStep } = useContext(AppContext);
  return (
    <Stack>
      <Stack.Protected guard={onboardingStep === "demographics"}>
        <Stack.Screen name="onboarding/demographics" />
      </Stack.Protected>
      <Stack.Protected guard={onboardingStep === "payment"}>
        <Stack.Screen name="onboarding/payment" />
      </Stack.Protected>
      <Stack.Protected guard={onboardingStep === "complete"}>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
