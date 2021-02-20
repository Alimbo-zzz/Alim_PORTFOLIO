

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);



import categories from "./modules/about/categories.js";
import skills from "./modules/about/skills.js";
import work from "./modules/work/work.js";



export default new Vuex.Store({
	modules:{
		categories, 
		skills,
		work,
	}
})













