<template lang="pug">
  #sec-admin-works.sec-admin-works
    .container
      .A_head-sec
        h1.A_title  Блок «Работы»

      .admin-change
        .change-title Редактирование работы
        form.change-works__wrap
          .change-src
            p.text Перетащите или загрузите для загрузки изображения
            label.change-src__box
              input(type="file")#works-file.admin-inp-file
              a.src-img.btn.btn_admin Загрузить

          .chenge-content
            .chenge-content__block
              label.chenge-content__box
                .text Название
                input(type="text"  required).admin-inp-text
            .chenge-content__block
              label.chenge-content__box
                .text Ссылка
                input(type="text"  required).admin-inp-text  
            .chenge-content__block
              label.chenge-content__box
                .text Описание
                textarea(type="text" ).admin-textarea 
            .chenge-content__block
              label.chenge-content__box
                .text Добавление тэга
                input(type="text"  required).admin-inp-text
            .chenge-content__block
              input(type="reset", value="Отмена").btn_2.admin-reset   
              input(type="submit", value="Сохранить").admin-save.btn.btn_admin    

      //- content
      .admin-works-content
        .admin-works-content__list
          button.admin-add-btn.admin-add-btn_works
            span.admin-add-btn-plus +
            span.admin-add-btn-title Добавить группу
          .admin-works-content__el
            .admin-works-content__el-img
            .admin-works-content__el-wrap
              ul.tags.tags_admin
                li.tags__el HTML
                li.tags__el CSS
                li.tags__el JS
              .admin-works-content__el-title title
              .admin-works-content__el-text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos.
              a.admin-works-content__el-link  http/google.com
              .admin-works-content__el-block
                button.admin-works-content__el-box 
                  .text Править
                  span.admin-btn-mod.admin-btn-mod_fix  
                button.admin-works-content__el-box
                  .text Удалить
                  span.admin-btn-mod.admin-btn-mod_remove

          .admin-works-content__el
            .admin-works-content__el-img
            .admin-works-content__el-wrap
              ul.tags.tags_admin
                li.tags__el HTML
                li.tags__el CSS
                li.tags__el JS
              .admin-works-content__el-title title
              .admin-works-content__el-text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos.
              a.admin-works-content__el-link  http/google.com
              .admin-works-content__el-block
                button.admin-works-content__el-box 
                  .text Править
                  span.admin-btn-mod.admin-btn-mod_fix  
                button.admin-works-content__el-box
                  .text Удалить
                  span.admin-btn-mod.admin-btn-mod_remove

          .admin-works-content__el
            .admin-works-content__el-img
            .admin-works-content__el-wrap
              ul.tags.tags_admin
                li.tags__el HTML
                li.tags__el CSS
                li.tags__el JS
              .admin-works-content__el-title title
              .admin-works-content__el-text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos.
              a.admin-works-content__el-link  http/google.com
              .admin-works-content__el-block
                button.admin-works-content__el-box 
                  .text Править
                  span.admin-btn-mod.admin-btn-mod_fix  
                button.admin-works-content__el-box
                  .text Удалить
                  span.admin-btn-mod.admin-btn-mod_remove          
  
</template>



<script>
  /*import { mapActions, mapState } from "vuex";

 

  export default{
    data(){
      return{
        work:{
          title:"",
          description:"",
          link:"",
          techs:"",
          photo: "",
        }
      }
    },
    computed:{
      ...mapState("work", {
        works: state => state.works
      })
    },
    created(){
      this.fetchWorks();
    },
    methods:{
      ...mapActions("work", ["addWork"]),
      async createNewWork(){
        try{
          await this.addWork(this.work);
        }
        catch(error){
          console.log(error);
        }
      }
    }
  }*/
</script>