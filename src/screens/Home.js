import {
	ActivityIndicator,
	Button,
	Dimensions,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWeather } from "../context/WeatherContext";
import Loading from "../components/Loading";
import WeatherIcon from "../components/WeatherIcon";
import DailyData from "../components/DailyData";

const { width } = Dimensions.get("window");

const Home = ({ navigation }) => {
	const date = new Date();
	const fullDate = date.toDateString();
	const { weatherData, cityWeatherData } = useWeather();

	if (weatherData) {
		const { temp, humidity, wind_speed, weather, pressure, dt } =
			weatherData.current;
		const { daily } = weatherData;
		const { main } = weather[0];
		const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		const daysData = [];
		const tempData = [];

		{
			daily.map((e, index) => {
				if (index >= 1) {
					const dd = new Date(e.dt * 1000).getUTCDay();
					daysData.push(days[dd]);
					tempData.push(e.temp["day"]);
				}
			});
		}

		return (
			<SafeAreaView style={styles.main}>
				<ScrollView>
					<View style={styles.date}>
						<Text style={styles.dateText}>{fullDate}</Text>
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
								{wind_speed} <Text style={styles.hwpUnitText}>km/h</Text>
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
					<View style={styles.dailyData}>
						<DailyData dayData={daysData} tempData={tempData} />
					</View>
					<StatusBar />
				</ScrollView>
			</SafeAreaView>
		);
	} else {
		return (
			<SafeAreaView
				style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
			>
				<Loading />
				<StatusBar />
			</SafeAreaView>
		);
	}
};

//haze rain snow thunderstorm drizzle mist clouds clear

export default Home;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	date: {
		marginTop: "5%",
		marginLeft: "7%",
	},
	dateText: {
		color: "#198754",
		fontSize: 14,
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
	dailyData: {
		flex: 1,
		width: width - 30,
		alignSelf: "center",
		borderRadius: 30,
		marginBottom: 25,
	},
});
