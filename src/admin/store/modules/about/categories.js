

const userId = localStorage.getItem('userId');



export default{
  namespaced: true,
  state:{
    categories: []
  },
  mutations:{
    SET_CATEGORIES(state, categories){
      state.categories = categories;
    },
    ADD_CATEGORY(state, newCategory){
      state.categories.unshift(newCategory);
    },
    REMOVE_CATEGORY(state, catToRemove){
      state.categories = state.categories.filter(
        cat=> cat.id != catToRemove.id)
    },
    EDIT_CATEGORY(state, catToEdit){
      state.categories = state.categories.map(
        cat => cat.id === catToEdit.id ? catToEdit :cat
        )
    },
    ADD_SKILL(state, newSkill){
      state.categories = state.categories.map(category=>{
        if(category.id === newSkill.category){
          category.skills.push(newSkill)
        }
        return category;
      })
    },
    REMOVE_SKILL(state, skillToRemove){
      const removeSkillCategory = (category)=>{
        category.skills = category.skills.filter(
            (skill) => skill.id != skillToRemove.id
          );
      }
      const findCategory = (category)=>{
        if(category.id === skillToRemove.category){
          removeSkillCategory(category);
        }
        return category;
      }
      state.categories = state.categories.map(findCategory);

    },
    EDIT_SKILL(state, skillToEdit){
      const editSkillCategory = (category)=>{
        category.skills = category.skills.map(
          skill => skill.id === skillToEdit.id ? skillToEdit :skill
          );
      }
      const findCategory = (category)=>{
        if(category.id === skillToEdit.category){
          editSkillCategory(category);
        }
        return category;
      }
      state.categories = state.categories.map(findCategory);

    },

  },
  actions:{
    async addCategory({commit}, title){
      try{
        const {data} = await this.$axios.post('/categories', {title});
        commit("ADD_CATEGORY", data);
      }
      catch(error){
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories({commit}){
      try{
        const {data} = await this.$axios.get(`/categories/${userId}`);
        commit("SET_CATEGORIES", data);

      }catch(error){
        console.log(error)
      }
    },

    async removeCategories({commit}, category){
        const {data} = await this.$axios.delete(
          `/categories/${category.id}`);
        commit("REMOVE_CATEGORY", category);

    },
    async editCategories({commit}, editCat){
      try{
        const {data} = await this.$axios.post(
          `/categories/${editCat.id}`, {title:`${editCat.category}`});
        commit('EDIT_CATEGORY', editCat);

      }catch(error){
        console.log(error)
      }

    }


  },


};




/*

const removeCat = (category)=>{
        category = category.filter(
            (cat) => cat.id != catToRemove.id
          );
      }
      const findAllCategory = (category)=>{
        if(category.id === catToRemove.id){
          removeCat(category);
        }
        return category;
      }
      state.categories = state.categories.map(findAllCategory);

*/








