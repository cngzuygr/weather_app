import React from "react";
import LottieView from "lottie-react-native";

const Loading = () => {
	return (
		<LottieView
			source={require("../../assets/loadAnimation.json")}
			autoPlay
			loop
			style={{ backgroundColor: "white" }}
		/>
	);
};

export default Loading;
