import { type WeatherCodesMapping, weatherImages } from '$models/weather-codes.model';

// Map the weather codes comming from the api to the custom weather images.
export const weatherCodesMapping: WeatherCodesMapping = {
	1000: {
		day: weatherImages.sun,
		night: weatherImages.moon
	},
	1003: {
		day: weatherImages.sunCloud,
		night: weatherImages.moonCloud
	},
	1006: {
		day: weatherImages.cloud,
		night: weatherImages.cloud
	},
	1009: {
		day: weatherImages.cloud,
		night: weatherImages.cloud
	},
	1030: {
		day: weatherImages.cloud,
		night: weatherImages.cloud
	},
	1063: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain
	},
	1066: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow
	},
	1069: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet
	},
	1072: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1087: {
		day: weatherImages.sunThunder,
		night: weatherImages.moonThunder
	},
	1114: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow
	},
	1117: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard
	},
	1135: {
		day: weatherImages.cloud,
		night: weatherImages.cloud
	},
	1147: {
		day: weatherImages.cloud,
		night: weatherImages.cloud
	},
	1150: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1153: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1168: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1171: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy
	},
	1180: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain
	},
	1183: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1186: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain
	},
	1189: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1192: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy
	},
	1195: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy
	},
	1198: {
		day: weatherImages.cloudRain,
		night: weatherImages.cloudRain
	},
	1201: {
		day: weatherImages.cloudRainHeavy,
		night: weatherImages.cloudRainHeavy
	},
	1204: {
		day: weatherImages.cloudSleet,
		night: weatherImages.cloudSleet
	},
	1207: {
		day: weatherImages.cloudSleet,
		night: weatherImages.cloudSleet
	},
	1210: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow
	},
	1213: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow
	},
	1216: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow
	},
	1219: {
		day: weatherImages.cloudSnow,
		night: weatherImages.cloudSnow
	},
	1222: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard
	},
	1225: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard
	},
	1237: {
		day: weatherImages.cloudBlizzard,
		night: weatherImages.cloudBlizzard
	},
	1240: {
		day: weatherImages.sunRain,
		night: weatherImages.moonRain
	},
	1243: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy
	},
	1246: {
		day: weatherImages.sunRainHeavy,
		night: weatherImages.moonRainHeavy
	},
	1249: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet
	},
	1252: {
		day: weatherImages.sunSleet,
		night: weatherImages.moonSleet
	},
	1255: {
		day: weatherImages.sunSnow,
		night: weatherImages.moonSnow
	},
	1258: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard
	},
	1261: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard
	},
	1264: {
		day: weatherImages.sunBlizzard,
		night: weatherImages.moonBlizzard
	},
	1273: {
		day: weatherImages.sunRainThunder,
		night: weatherImages.moonRainThunder
	},
	1276: {
		day: weatherImages.cloudRainThunder,
		night: weatherImages.cloudRainThunder
	},
	1279: {
		day: weatherImages.sunSnowThunder,
		night: weatherImages.moonSnowThunder
	},
	1282: {
		day: weatherImages.cloudSnowThunderHeavy,
		night: weatherImages.cloudSnowThunderHeavy
	}
};
