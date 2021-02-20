
<template lang="pug">
  tr.A_about-add-category__block(v-if="editmodeOn")
    td.A_about-add-category__box 
      input.A_about-skill-title(type="text" v-model='editedCategory.category') 
    td.A_btn-box
      button.A_btn-box__submit(type="button" @click="editCurrentCategory")
      button.A_btn-box__reset(type="button" @click="editmodeOn = false")
  tr.A_about-add-category__block(v-else)
    td.A_about-skill-title {{category.category}} 
    td.A_btn-box
      button.A_btn-box__remove(type="button" @click="removeCurrentCategory") ×
      button.A_btn-box__edit(type="button" @click="editmodeOn = true")

</template>


<script>

  import {mapActions} from "vuex";

  export default{
    props:{
      category:{
        type: Object,
        default: ()=>{},
        required: true,
      }
    },
    data(){
      return{
        editmodeOn: false,
        editedCategory:{...this.category},
      }
    },
    methods:{
       ...mapActions("categories", ["removeCategories", "editCategories"]),
      async removeCurrentCategory(){
        try{
          await this.removeCategories(this.category);
        }catch(error){
          console.log(error)
        }
      },
      async editCurrentCategory(){
        try{
          await this.editCategories(this.editedCategory);
          this.editmodeOn = false;
        }catch(error){
          console.log(error);
        }finally{          
          this.editmodeOn = false;
        }
      }
    }

  }

</script>




<style scoped>
  .A_btn-box__remove{
    background-color: #fff;

  }


  .A_btn-box__remove:hover{
    background-color: #C95048;

  }


</style>


