import { Tabs } from "expo-router";

export default function DashboardLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="messages" />
    </Tabs>
  );
}
