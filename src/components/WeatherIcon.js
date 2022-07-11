import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const WeatherIcon = ({ main }) => {
	let weather = main;
	return (
		<View style={{ display: "flex", alignItems: "center", marginVertical: 30 }}>
			{weather === "Haze" ? (
				<Image
					style={{ height: 120, width: 160 }}
					source={require(`../../assets/weatherIcons/Haze.png`)}
				/>
			) : null}
			{weather === "Rain" ? (
				<Image
					style={{ height: 160, width: 160 }}
					source={require(`../../assets/weatherIcons/Rain.png`)}
				/>
			) : null}
			{weather === "Snow" ? (
				<Image
					style={{ height: 130, width: 160 }}
					source={require(`../../assets/weatherIcons/Snow.png`)}
				/>
			) : null}
			{weather === "Thunderstorm" ? (
				<Image
					style={{ height: 160, width: 160 }}
					source={require(`../../assets/weatherIcons/Thunderstorm.png`)}
				/>
			) : null}
			{weather === "Drizzle" ? (
				<Image
					style={{ height: 160, width: 160 }}
					source={require(`../../assets/weatherIcons/Drizzle.png`)}
				/>
			) : null}
			{weather === "Mist" ? (
				<Image
					style={{ height: 130, width: 170 }}
					source={require(`../../assets/weatherIcons/Mist.png`)}
				/>
			) : null}
			{weather === "Clouds" ? (
				<Image
					style={{ height: 130, width: 170 }}
					source={require(`../../assets/weatherIcons/Clouds.png`)}
				/>
			) : null}
			{weather === "Clear" ? (
				<Image
					style={{ height: 160, width: 160 }}
					source={require(`../../assets/weatherIcons/Clear.png`)}
				/>
			) : null}
		</View>
	);
};

export default WeatherIcon;

const styles = StyleSheet.create({});
