import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./src/hooks/useLoadedAssets";
import { useColorScheme } from "react-native";

import Navigation from "./src/navigation";

import WeatherContextProvider from "./src/context/WeatherContext";

export default function App() {
	const isLoadingComplete = useLoadedAssets();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<WeatherContextProvider>
				<Navigation colorScheme={colorScheme} />
			</WeatherContextProvider>
		);
	}
}
