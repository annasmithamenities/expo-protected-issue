import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import Header from "@/components/Header";

type OnboardingStep = "demographics" | "payment" | "complete";

export const AppContext = createContext<{
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  onboardingStep: OnboardingStep;
  setOnboardingStep: Dispatch<SetStateAction<OnboardingStep>>;
}>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  onboardingStep: "demographics",
  setOnboardingStep: () => {},
});

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onboardingStep, setOnboardingStep] =
    useState<OnboardingStep>("demographics");
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AppContext
      value={{ isLoggedIn, setIsLoggedIn, onboardingStep, setOnboardingStep }}
    >
      <Stack
        screenOptions={{
          header: (props) => <Header name={props.route.name} />,
        }}
      ></Stack>
      <StatusBar style="auto" />
    </AppContext>
  );
}
