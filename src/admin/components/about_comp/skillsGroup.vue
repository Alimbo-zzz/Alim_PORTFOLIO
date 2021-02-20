<template lang="pug">
  .A_about-item__content
    table.A_about-add-category
      skill_title(
        :category="category"
      )
    .hr
    form.A_about-add-skill(@submit.prevent="addNewSkill")
      input.A_about-skill-title2(type='text'
        placeholder='Новый навык:'
        v-model="skill.title"
      )
      .A_about-percent-box
        input.A_about-skill-percent(type='text'
          v-model="skill.percent"
        )

      button.A_btn-add__plus(type="submit") +
    .hr
    table.A_about-item-skills
      skill_item(
        v-for="skill in category.skills" 
        :key="skill.id"
        :skill='skill'
      )
    

</template>



<script>
  import {mapActions} from "vuex";
  import skill_item from './skillsGroup_item.vue';
  import skill_title from './skillsGroup_title.vue';

  export default{
    props:{
      category:Object,
    },
    data(){
      return{
        skill:{
          title: '',
          percent: 0,
        }
      }
    },
    components:{
      skill_item,
      skill_title,
    },
    methods:{
      ...mapActions('skills', ["addSkill"]),
      async addNewSkill(){
        const skillData = {
          ...this.skill,
          category: this.category.id
        };
        try{
          await this.addSkill(skillData);
          this.skill.title = '';
          this.skill.percent = 0;
        }catch(error){
          console.log(error)
        }
      }
    }

  }
</script>




<style>
  
  table{
    display: block;
  }

  
</style>


<style scoped>
  
  .A_btn-add__plus{
    margin-right: 0;
    margin-left: 10px;
  }
  
</style>

