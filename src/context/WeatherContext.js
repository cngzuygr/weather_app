import React, { createContext, useContext, useEffect, useState } from "react";
import * as Location from "expo-location";

import { openWeatherMap_API_KEY } from "../constants/keys";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

const WeatherContextProvider = ({ children }) => {
	const [weatherData, setWeatherData] = useState(null);
	const [cityWeatherData, setCityWeatherData] = useState(null);
	const [fetchError, setFetchError] = useState(false);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				alert("Location permission is required to use this service.");
				return;
			} else {
				let location = await Location.getCurrentPositionAsync({
					enableHighAccuracy: true,
					accuracy: Location.Accuracy.BestForNavigation,
					maximumAge: 1000,
				});
				let data = "Waiting..";
				let longitude_latitude = null;
				data = JSON.stringify(location.coords);
				longitude_latitude = JSON.parse(data);

				const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${longitude_latitude["latitude"]}&lon=${longitude_latitude["longitude"]}&units=metric&appid=${openWeatherMap_API_KEY}`;
				try {
					const res = await fetch(URL);
					const data = await res.json();
					setWeatherData(data);
				} catch (e) {
					setFetchError(true);
				}
			}
		})();
	}, []);

	const getCityWeatherData = async (cityValue) => {
		try {
			const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${openWeatherMap_API_KEY}`;
			const res = await fetch(URL);
			const data = await res.json();
			setCityWeatherData(data);
		} catch (e) {
			setFetchError(true);
		}
	};

	return (
		<WeatherContext.Provider
			value={{ weatherData, cityWeatherData, fetchError, getCityWeatherData }}
		>
			{children}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;
