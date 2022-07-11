import {
	Linking,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const About = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 0.5, justifyContent: "center" }}>
				<Text style={styles.text}>
					This app has been developed and published by Cengiz Uygur. Feel free
					to check my Github and Play Store page.
				</Text>
			</View>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<TouchableOpacity
					onPress={() => {
						Linking.openURL("https://github.com/cngzuygr");
					}}
					style={styles.githubButton}
				>
					<AntDesign name="github" size={24} color="white" />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						Linking.openURL(
							"https://play.google.com/store/apps/developer?id=Cengiz+Uygur"
						);
					}}
					style={styles.githubButton}
				>
					<Ionicons name="logo-google-playstore" size={24} color="white" />
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						marginTop: 20,
						backgroundColor: "red",
						height: 50,
						width: 50,
						borderRadius: 25,
						justifyContent: "center",
						alignItems: "center",
					}}
					onPress={() => navigation.goBack()}
				>
					<Ionicons name="arrow-back" size={24} color="white" />
				</TouchableOpacity>
			</View>
			<StatusBar />
		</SafeAreaView>
	);
};

export default About;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		padding: 20,
	},
	text: {
		textAlign: "justify",
		fontSize: 16,
	},
	githubButton: {
		flexDirection: "row",
		backgroundColor: "black",
		height: 50,
		width: "50%",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
		margin: 15,
	},
});
