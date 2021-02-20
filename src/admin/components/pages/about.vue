<template lang="pug">
  .A_sec-about
    .container
      .A_head-sec
        h1.A_title  Блок «Обо мне»
        form.A_create-category(
          @submit.prevent='createNewCategory'
          v-if="addModeOn"
        )
          input.A_create-category__title(
          type='text'
          v-model='category.title'
          placeholder="Имя категории:"
          )
          input.A_create-category__submit(type='submit' value='+')  
        button.A_btn-add(v-else @click="addModeOn = true")
          span.A_btn-add__plus +
          span.A_btn-add__title Добавить группу

      .A_about-content
        .A_about-content__block
          ul.A_about-skills
            li.A_about-item(v-for="cat in categories" :key="cat.id") 
              skillsGroup(
               :category='cat'
              )  

          
</template>




<script>
  
  import {mapActions, mapState} from 'vuex';
  import skillsGroup from '../about_comp/skillsGroup.vue';
    

    
  export default{

    data(){
      return{
        category:{
          title: '',
        },
        addModeOn:false,
      }
    },
    components:{
      skillsGroup
    },
    computed:{
      ...mapState('categories', {
        categories: state => state.categories
      })
    },
    created(){
      this.fetchCategories();
    },
    methods:{
      ...mapActions("categories", ['addCategory', 'fetchCategories']),
      async createNewCategory(){
        try{
          await this.addCategory(this.category.title);
          this.category.title = '';
          this.addModeOn = false;
        }
        catch(error){
          alert(error.message)
        }finally{
          this.addModeOn = false;
        }
        
      },
    }


  }

</script>



<style  scoped >

  /* A_head-about */



  /* _______________________________ */

  

</style>





