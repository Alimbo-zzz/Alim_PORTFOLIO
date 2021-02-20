<template lang="pug">
  tr.A_about-item-box(v-if="editmodeOn")
    input.A_about-skill-title2(type="text" v-model="editedSkill.title") 
    td.A_about-percent-box 
      input.A_about-skill-percent(type="text" v-model="editedSkill.percent")
    td.A_btn-box
      button.A_btn-box__submit(type="button" @click="editCurrentSkill")
      button.A_btn-box__reset(type="button" @click="editmodeOn = false")
  tr.A_about-item-box(v-else)
    
    td.A_about-skill-title2 {{skill.title}} 
    .A_about-percent-box
      td.A_about-skill-percent {{skill.percent}}
    td.A_btn-box
      button.A_btn-box__edit(type="button" @click="editmodeOn = true")
      button.A_btn-box__trash(type="button" @click="removeCurrentSkill")

</template>


<script>
  import {mapActions} from "vuex";


  export default{
    props:{
      skill:{
        type: Object,
        default: ()=>{},
        required: true,
      }
    },
    data(){
      return{
        editmodeOn: false,
        editedSkill:{...this.skill}
      }
    },
    methods:{
      ...mapActions("skills", ["removeSkill", "editSkill"]),
      async removeCurrentSkill(){
        try{
          await this.removeSkill(this.skill);
        }catch{

        }
      },
      async editCurrentSkill(){
        try{
          await this.editSkill(this.editedSkill);
          this.editmodeOn = false;
          console.log(this.editedSkill)
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
  td{
    margin: 0;padding: 0;
  }
  td.A_about-skill-title2{
    border-bottom: none;

  }
  .A_about-skill-title2{
    margin-right: 20px;
    line-height: 28px;
  }

  td.A_about-skill-percent{
    border-bottom: none;
  }

  .A_btn-box{
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin-left: 20px;
    min-width:60px;
  }
 
  .A_about-item-box{
    display: flex;
    margin-bottom: 10px;
    align-items: bottom;
  }
  

</style>