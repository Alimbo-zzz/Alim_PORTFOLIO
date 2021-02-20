


<template lang="pug">
  
  .maincontent__wrap

    template(v-if="$route.meta.login")
      .login
        router-view
    template(v-else)
      .admin            
        .sec-admin-header
          header.admin-header
            .container.admin-header__cont
              .admin-user-info
                .admin-user-logo
                  .admin-user-img
                .admin-user-name Алим Мамбетов
                .admin-title Панель администрирования
                  
              .admin-out(@click='admin_out')
                a.admin-out__link Выйти



          nav.admin-nav
            .container
              ul.admin-nav__list
                li.admin-nav__el
                  router-link(to="/" exact-active-class="active" data-text="Обо мне").admin-nav__link
                li.admin-nav__el
                  router-link(to="/_works" exact-active-class="active" data-text="Работы")#aw.admin-nav__link
                li.admin-nav__el
                  router-link(to="/_reviews" exact-active-class="active" data-text="Отзывы").admin-nav__link   
        
        router-view           

</template>




<script>

  
  export default {
    methods: {
      admin_out(){        
        localStorage.removeItem('token');
        location="../";
      }
    }

  }

</script>