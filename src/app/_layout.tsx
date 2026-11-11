import { Tabs } from "expo-router";
import { Ionicons} from "@expo/vector-icons";
import { View,  StyleSheet } from "react-native";



export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#6C47FF",
        tabBarInactiveTintColor: "#555",
        tabBarStyle: styles.tabBar,
      }}
      >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={23} color={color as string} />
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: () => (
          <View style={styles.plus}>
            <Ionicons name="add" size={30} color="white" />
          </View>
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{ tabBarIcon: ({ color }) => <Ionicons name="calendar-outline" size={22} color={color as string} /> }}
      />
    </Tabs>
  );
}

const styles  = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    borderTopWidth: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  plus: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "balck",
    justifyContent: "center",
    alignItems: "center",
  }
});