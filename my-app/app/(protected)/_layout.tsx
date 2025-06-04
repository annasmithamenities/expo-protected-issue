import { Stack } from "expo-router";
import "react-native-reanimated";

import { useContext } from "react";
import { AppContext } from "../_layout";

export default function ProfileLayout() {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(signed-in)" />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(signed-out)/index" />
      </Stack.Protected>
    </Stack>
  );
}
