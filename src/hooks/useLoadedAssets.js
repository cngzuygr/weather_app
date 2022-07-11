import Ionicons from "@expo/vector-icons/Ionicons";
import * as Font from "expo-font";
import React from "react";

export function useLoadedAssets() {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				await Font.loadAsync(Ionicons.font);
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
