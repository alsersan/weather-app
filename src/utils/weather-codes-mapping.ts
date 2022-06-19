import { type WeatherCodesMapping, weatherImages } from '$models/weather-codes.model';

// Map the weather codes comming from the api to the custom weather images.
export const weatherCodesMapping: WeatherCodesMapping = {
	1000: {
		day: weatherImages.sun,
		night: weatherImages.moon,
		backgroundColor: 'orange'
	},
	1003: {
		day: weatherImages.sunCloud,
		night: weatherImages.moonCloud,
		backgroundColor: 'orange'
	},
	1006: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'green'
	},
	1009: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'green'
	},
	1030: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'green'
	},
	1063: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'blue'
	},
	1066: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'blue'
	},
	1069: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet,
		backgroundColor: 'blue'
	},
	1072: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1087: {
		day: weatherImages.sunThunder,
		night: weatherImages.moonThunder,
		backgroundColor: 'orange'
	},
	1114: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow,
		backgroundColor: 'blue'
	},
	1117: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard,
		backgroundColor: 'blue'
	},
	1135: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'green'
	},
	1147: {
		day: weatherImages.cloud,
		night: weatherImages.cloud,
		backgroundColor: 'green'
	},
	1150: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1153: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1168: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1171: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy,
		backgroundColor: 'blue'
	},
	1180: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'blue'
	},
	1183: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1186: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'blue'
	},
	1189: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1192: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy,
		backgroundColor: 'blue'
	},
	1195: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy,
		backgroundColor: 'blue'
	},
	1198: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain,
		backgroundColor: 'blue'
	},
	1201: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy,
		backgroundColor: 'blue'
	},
	1204: {
		day: weatherImages.cloudSleet,
		night: weatherImages.cloudSleet,
		backgroundColor: 'blue'
	},
	1207: {
		day: weatherImages.cloudSleet,
		night: weatherImages.cloudSleet,
		backgroundColor: 'blue'
	},
	1210: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'blue'
	},
	1213: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow,
		backgroundColor: 'blue'
	},
	1216: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'blue'
	},
	1219: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow,
		backgroundColor: 'blue'
	},
	1222: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'blue'
	},
	1225: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard,
		backgroundColor: 'blue'
	},
	1237: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard,
		backgroundColor: 'blue'
	},
	1240: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain,
		backgroundColor: 'blue'
	},
	1243: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy,
		backgroundColor: 'blue'
	},
	1246: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy,
		backgroundColor: 'blue'
	},
	1249: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet,
		backgroundColor: 'blue'
	},
	1252: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet,
		backgroundColor: 'blue'
	},
	1255: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow,
		backgroundColor: 'blue'
	},
	1258: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'blue'
	},
	1261: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'blue'
	},
	1264: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard,
		backgroundColor: 'blue'
	},
	1273: {
		day: weatherImages.sunRainThunder,
		night: weatherImages.moonRainThunder,
		backgroundColor: 'blue'
	},
	1276: {
		day: weatherImages.cloudRainThunder,
		night: weatherImages.cloudRainThunder,
		backgroundColor: 'blue'
	},
	1279: {
		day: weatherImages.sunSnowThunder,
		night: weatherImages.moonSnowThunder,
		backgroundColor: 'blue'
	},
	1282: {
		day: weatherImages.cloudSnowThunderHeavy,
		night: weatherImages.cloudSnowThunderHeavy,
		backgroundColor: 'blue'
	}
};
