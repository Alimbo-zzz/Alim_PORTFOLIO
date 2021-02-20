import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import axios from '../requests';
import store from '../store';

Vue.use(VueRouter)


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next)=>{
	if(to.meta.login){
		next();
	}
	else{
		axios.get('user').then(({data})=>{
			console.log(data);
			localStorage.setItem('userId', data.user.id)
			next();
		}).catch(error =>{
			console.log(error);
			localStorage.removeItem('token', 'userId');
			router.replace('/login'); 
		})
	}
})

export default router;