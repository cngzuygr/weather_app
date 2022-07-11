import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window");

const DailyData = ({ dayData, tempData }) => {
	//(opacity = 1) => `rgba(255, 255, 255, ${opacity})`
	return (
		<View style={styles.main}>
			<LineChart
				data={{
					labels: dayData,
					datasets: [
						{
							data: tempData,
						},
					],
				}}
				width={width - 40}
				height={170}
				withInnerLines={false}
				yAxisInterval={1}
				chartConfig={{
					backgroundColor: "#e26a00",
					backgroundGradientFrom: "#198754",
					backgroundGradientTo: "#198754",
					decimalPlaces: 1,
					color: (opacity = 1) => "#FFFFFF",
					labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
					style: {
						borderRadius: 16,
					},
					propsForDots: {
						r: "4",
						strokeWidth: "2",
						stroke: "#198754",
					},
				}}
				bezier
				style={{
					borderRadius: 10,
					alignSelf: "center",
				}}
			/>
		</View>
	);
};

export default DailyData;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		marginHorizontal: "auto",
	},
});
