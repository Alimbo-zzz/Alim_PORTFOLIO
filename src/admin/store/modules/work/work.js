/*
const userId = localStorage.getItem('userId');



export default{
  namespaced: true,
  state:{
    works: []
  },
  mutations:{
  	SET_WORKS(state, works){
  		state.works = works;
  	}
  },
  actions:{
  	async addWork(store, work){
  		try{
  			const response = await this.$axios.post('/works', {work});
 			console.log(response);			
  		}
  		catch{
  			throw new Error(error.response.data.error || error.response.data.message);
  		}
  	},
  	async fetchWorks({commit}){
  		try{
  			const {data} = await this.$axios.get(`/works/${userId}`);
  			commit("SET_WORKS", data);
  		}
  		catch(error){
  			console.log(error);
  		}
  	}
  },


}*/