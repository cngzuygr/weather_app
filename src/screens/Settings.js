import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const About = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				onPress={() => navigation.navigate("About")}
				style={styles.box}
			>
				<Ionicons name="information-circle-outline" size={32} color="white" />
				<Text style={styles.boxText}>About</Text>
			</TouchableOpacity>
			<StatusBar />
		</SafeAreaView>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	box: {
		height: 60,
		flexDirection: "row",
		backgroundColor: "#198754cc",
		padding: 5,
		paddingLeft: 15,
		margin: 20,
		borderRadius: 20,
		alignItems: "center",
	},
	boxText: {
		color: "white",
		fontSize: 18,
		marginLeft: 10,
	},
});
