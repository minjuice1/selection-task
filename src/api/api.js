import axios from "axios";

export const instance = axios.create({
	BASE_URL:
		"https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/",
});
