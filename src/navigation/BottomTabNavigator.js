import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ColorfulTabBar as TabBar } from "react-navigation-tabbar-collection";

import { Home, Search, Settings, About } from "../screens";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{ tabBarActiveTintColor: "#198754" }}
			tabBar={(props) => <TabBar maxWidth={320} height={65} {...props} />}
		>
			<BottomTab.Screen
				name="HomeTab"
				component={TabOneNavigator}
				options={{
					headerShown: false,
					title: "Home",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="cloud-outline" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="SearchTab"
				component={TabTwoNavigator}
				options={{
					headerShown: false,
					title: "Search",
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="ios-search-outline" color={color} />
					),
				}}
			/>
			<BottomTab.Screen
				name="SettingsTab"
				component={TabThreeNavigator}
				options={{
					title: "Settings",
					headerShown: false,
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="settings-outline" color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}

function TabBarIcon(props) {
	return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createNativeStackNavigator();

function TabOneNavigator() {
	return (
		<TabOneStack.Navigator screenOptions={{ headerShown: false }}>
			<TabOneStack.Screen
				name="Home"
				component={Home}
				options={{ headerTitle: "Tab One Title" }}
			/>
		</TabOneStack.Navigator>
	);
}

const TabTwoStack = createNativeStackNavigator();

function TabTwoNavigator() {
	return (
		<TabTwoStack.Navigator screenOptions={{ headerShown: false }}>
			<TabTwoStack.Screen
				name="Search"
				component={Search}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</TabTwoStack.Navigator>
	);
}

const TabThreeStack = createNativeStackNavigator();

function TabThreeNavigator() {
	return (
		<TabThreeStack.Navigator screenOptions={{ headerShown: false }}>
			<TabThreeStack.Screen
				name="Settings"
				component={Settings}
				options={{ headerTitle: "Tab Two Title" }}
			/>
			<TabThreeStack.Screen
				name="About"
				component={About}
				options={{ headerTitle: "Tab Two Title" }}
			/>
		</TabThreeStack.Navigator>
	);
}
