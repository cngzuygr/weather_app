import React, { useEffect, useState } from "react";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	ScrollView,
	Keyboard,
	ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
} from "@expo/vector-icons";
import { useWeather } from "../context/WeatherContext";
import Loading from "../components/Loading";
import WeatherIcon from "../components/WeatherIcon";

const { width } = Dimensions.get("window");

const Search = () => {
	const [cityVal, setCityVal] = useState("New York");
	const { cityWeatherData, getCityWeatherData } = useWeather();

	useEffect(() => {
		getCityWeatherData(cityVal);
	}, []);

	function handleSubmit() {
		getCityWeatherData(cityVal);
		setCityVal("");
		Keyboard.dismiss();
	}

	if (cityWeatherData?.cod === 200) {
		const { main } = cityWeatherData.weather[0];
		const { temp, pressure, humidity } = cityWeatherData.main;
		const { speed } = cityWeatherData.wind;
		return (
			<SafeAreaView style={styles.main}>
				<ScrollView>
					<View style={styles.searchCity}>
						<TextInput
							style={styles.search}
							placeholder="Search Cities"
							placeholderTextColor={"#ffffff77"}
							keyboardType="web-search"
							value={cityVal}
							onChangeText={(e) => setCityVal(e)}
						/>
						<TouchableOpacity onPress={handleSubmit} style={styles.searchBtn}>
							<Ionicons name="search" size={24} color="#fff" />
						</TouchableOpacity>
					</View>
					<WeatherIcon main={main} />
					<View>
						<Text style={styles.tempText}>
							{parseInt(temp)}
							<Text style={styles.tempmodeText}>°C</Text>
						</Text>
					</View>
					<View>
						<Text style={styles.weatherState}>{main}</Text>
					</View>
					<View style={styles.location}>
						<Ionicons name="md-location-outline" size={35} color="#3ddc84" />
						<Text style={styles.locationText}>{cityWeatherData.name}</Text>
					</View>
					<View style={styles.hwp}>
						<View style={styles.hwpContainer}>
							<MaterialCommunityIcons
								name="water-outline"
								size={36}
								color="white"
							/>
							<Text style={styles.hwpDataValueText}>
								{humidity} <Text style={styles.hwpUnitText}>%</Text>
							</Text>
							<Text style={styles.hwpDataText}>Humidity</Text>
						</View>
						<View style={styles.hwpContainer}>
							<MaterialCommunityIcons
								name="weather-windy"
								size={36}
								color="white"
							/>
							<Text style={styles.hwpDataValueText}>
								{speed} <Text style={styles.hwpUnitText}>km/h</Text>
							</Text>
							<Text style={styles.hwpDataText}>Wind</Text>
						</View>
						<View style={styles.hwpContainer}>
							<MaterialCommunityIcons
								name="weather-pouring"
								size={36}
								color="white"
							/>
							<Text style={styles.hwpDataValueText}>
								{pressure} <Text style={styles.hwpUnitText}>hPa</Text>
							</Text>
							<Text style={styles.hwpDataText}>pressure</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	} else if (cityWeatherData?.cod === "404" || cityWeatherData?.cod === "400") {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}
			>
				<View style={styles.searchCity}>
					<TextInput
						style={styles.search}
						placeholder="Search Cities"
						placeholderTextColor={"#ffffff77"}
						keyboardType="web-search"
						value={cityVal}
						onChangeText={(e) => setCityVal(e)}
					/>
					<TouchableOpacity onPress={handleSubmit} style={styles.searchBtn}>
						<Ionicons name="search" size={24} color="#fff" />
					</TouchableOpacity>
				</View>
				<View
					style={{
						flex: 1,
						marginTop: 25,
						alignContent: "center",
						alignItems: "center",
					}}
				>
					<Text style={{ color: "#800000", fontSize: 18 }}>
						The city you searched for was not found.
					</Text>
				</View>
				<StatusBar />
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}
			>
				<Loading />
				<StatusBar />
			</SafeAreaView>
		);
	}
};

export default Search;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	searchCity: {
		display: "flex",
		marginTop: "2%",
		flexDirection: "row",
		marginHorizontal: "4%",
		justifyContent: "center",
		alignItems: "center",
	},
	search: {
		backgroundColor: "#198754cc",
		padding: 10,
		flex: 1,
		borderRadius: 30,
		color: "white",
		paddingLeft: 25,
	},
	searchBtn: {
		height: 50,
		width: 50,
		backgroundColor: "#198754cc",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50,
		marginLeft: 10,
	},
	tempText: {
		color: "#198754",
		fontSize: 60,
		alignSelf: "center",
	},
	tempmodeText: {
		color: "#198754",
	},
	weatherState: {
		color: "black",
		fontSize: 16,
		alignSelf: "center",
		textTransform: "uppercase",
		fontWeight: "600",
		letterSpacing: 2,
	},
	location: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		marginBottom: 50,
	},
	locationText: {
		color: "#198754cc",
		fontSize: 30,
		fontWeight: "normal",
		marginLeft: 4,
		textTransform: "capitalize",
	},
	hwp: {
		flex: 0.6,
		flexDirection: "row",
		width: width - 30,
		alignSelf: "center",
		justifyContent: "space-between",
		marginVertical: 10,
		borderRadius: 30,
	},
	hwpContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: "100%",
		backgroundColor: "#198754cc",
		borderRadius: 25,
		marginHorizontal: 5,
	},
	hwpDataValueText: {
		fontSize: 14,
		color: "white",
	},
	hwpDataText: {
		fontSize: 14,
		color: "white",
		marginTop: 10,
		textTransform: "capitalize",
	},
	hwpUnitText: {
		fontSize: 11,
		color: "white",
	},
});
