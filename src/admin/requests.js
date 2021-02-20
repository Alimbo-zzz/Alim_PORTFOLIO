import axios from "axios";

const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');

const $axios = axios.create({
	baseURL:"https://webdev-api.loftschool.com/",
	headers: {
		"Authorization" : `Bearer ${token}`,
	},
})



/*Перезагрузка токена _______________*/



/*

$axios.interceptors.response.use(
	response => response,
	async error =>{

		const originalRequest = error.config;


		if(error.response.status === 401){
			const {data} = await requests.post("/refreshToken");
			const NewToken = data.token;

			localStorage.setItem("token", NewToken);
			requests.defaults.headers["Authorization"] = `Bearer ${NewToken}`;
			originalRequest.headers["Authorization"] = `Bearer ${NewToken}`;

			return axios(originalRequest);
		}


		return Promise.reject(error);
	}
)
*/




$axios.interceptors.response.use(function(response){
	return response;
},function(error){
	if(error.response.status === 401 || error.response.status === 500){
		return $axios.post('/refreshToken').then(({data})=>{
			localStorage.setItem('token', data.token);
			$axios.defaults.headers["Authorization"] = `Bearer ${data.token}`;
			error.config.headers["Authorization"] = `Bearer ${data.token}`;

			return $axios(error.config)
		})
	}

	return Promise.reject(error);
}
)







export default $axios;

