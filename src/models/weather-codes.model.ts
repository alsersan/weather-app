export type WeatherCodesMapping = {
	[code in WeatherCodes]: Mapping;
};

type Mapping = {
	day: DayImages;
	night: NightImages;
};

// List of available images
enum SunImages {
	sun = 'sun',
	sunBlizzard = 'sun-blizzard',
	sunCloud = 'sun-cloud',
	sunRain = 'sun-rain',
	sunRainHeavy = 'sun-rain-heavy',
	sunRainThunder = 'sun-rain-thunder',
	sunSleet = 'sun-sleet',
	sunSnow = 'sun-snow',
	sunSnowThunder = 'sun-snow-thunder',
	sunThunder = 'sun-thunder'
}

enum MoonImages {
	moon = 'moon',
	moonBlizzard = 'moon-blizzard',
	moonCloud = 'moon-cloud',
	moonRain = 'moon-rain',
	moonRainHeavy = 'moon-rain-heavy',
	moonRainThunder = 'moon-rain-thunder',
	moonSleet = 'moon-sleet',
	moonSnow = 'moon-snow',
	moonSnowThunder = 'moon-snow-thunder',
	moonThunder = 'moon-thunder'
}

enum CloudImages {
	cloud = 'cloud',
	cloudBlizzard = 'cloud-blizzard',
	cloudRain = 'cloud-rain',
	cloudRainHeavy = 'cloud-rain-heavy',
	cloudRainThunder = 'cloud-rain-thunder',
	cloudSleet = 'cloud-sleet',
	cloudSnow = 'cloud-snow',
	cloudSnowThunderHeavy = 'cloud-snow-thunder-heavy'
}

type DayImages = SunImages | CloudImages;
type NightImages = MoonImages | CloudImages;
export const weatherImages = { ...SunImages, ...MoonImages, ...CloudImages };

// Possible weather codes provided by the api
type WeatherCodes =
	| 1000
	| 1003
	| 1006
	| 1009
	| 1030
	| 1063
	| 1066
	| 1069
	| 1072
	| 1087
	| 1114
	| 1117
	| 1135
	| 1147
	| 1150
	| 1153
	| 1168
	| 1171
	| 1180
	| 1183
	| 1186
	| 1189
	| 1192
	| 1195
	| 1198
	| 1201
	| 1204
	| 1207
	| 1210
	| 1213
	| 1216
	| 1219
	| 1222
	| 1225
	| 1237
	| 1240
	| 1243
	| 1246
	| 1249
	| 1252
	| 1255
	| 1258
	| 1261
	| 1264
	| 1273
	| 1276
	| 1279
	| 1282;
