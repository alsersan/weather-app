import { type WeatherCodesMapping, weatherImages } from '$models/weather-codes.model';

// Map the weather codes comming from the api to the custom weather images.
export const weatherCodesMapping: WeatherCodesMapping = {
	1000: {
		day: weatherImages.sun,
		night: weatherImages.moon,
		backgroundColor: 'red'
	},
	1003: {
		day: weatherImages.sunCloud,
		night: weatherImages.moonCloud,
		backgroundColor: 'red'
	},
	1006: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'red'
	},
	1009: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'red'
	},
	1030: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'red'
	},
	1063: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'red'
	},
	1066: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'red'
	},
	1069: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet,
		backgroundColor: 'red'
	},
	1072: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1087: {
		day: weatherImages.sunThunder,
		night: weatherImages.moonThunder,
		backgroundColor: 'red'
	},
	1114: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow,
		backgroundColor: 'red'
	},
	1117: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard,
		backgroundColor: 'red'
	},
	1135: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'red'
	},
	1147: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'red'
	},
	1150: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1153: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1168: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1171: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy,
		backgroundColor: 'red'
	},
	1180: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'red'
	},
	1183: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1186: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'red'
	},
	1189: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1192: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy,
		backgroundColor: 'red'
	},
	1195: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy,
		backgroundColor: 'red'
	},
	1198: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'red'
	},
	1201: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy,
		backgroundColor: 'red'
	},
	1204: {
		day: weatherImages.cloudSleet,
		night: weatherImages.cloudSleet,
		backgroundColor: 'red'
	},
	1207: {
		day: weatherImages.cloudSleet,
		night: weatherImages.cloudSleet,
		backgroundColor: 'red'
	},
	1210: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'red'
	},
	1213: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow,
		backgroundColor: 'red'
	},
	1216: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'red'
	},
	1219: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow,
		backgroundColor: 'red'
	},
	1222: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'red'
	},
	1225: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard,
		backgroundColor: 'red'
	},
	1237: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard,
		backgroundColor: 'red'
	},
	1240: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'red'
	},
	1243: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy,
		backgroundColor: 'red'
	},
	1246: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy,
		backgroundColor: 'red'
	},
	1249: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet,
		backgroundColor: 'red'
	},
	1252: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet,
		backgroundColor: 'red'
	},
	1255: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'red'
	},
	1258: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'red'
	},
	1261: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'red'
	},
	1264: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'red'
	},
	1273: {
		day: weatherImages.sunRainThunder,
		night: weatherImages.moonRainThunder,
		backgroundColor: 'red'
	},
	1276: {
		day: weatherImages.cloudRainThunder,
		night: weatherImages.cloudRainThunder,
		backgroundColor: 'red'
	},
	1279: {
		day: weatherImages.sunSnowThunder,
		night: weatherImages.moonSnowThunder,
		backgroundColor: 'red'
	},
	1282: {
		day: weatherImages.cloudSnowThunderHeavy,
		night: weatherImages.cloudSnowThunderHeavy,
		backgroundColor: 'red'
	}
};
