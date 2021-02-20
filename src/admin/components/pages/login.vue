<template lang="pug">
  
  .authorization
  	img(src="../../../images/content/admin-fon.jpg").authorization__fon
  	form(@submit.prevent='login').authorization-form
  		h1.authorization-form__title Авторизация
  		.authorization-form__content
  			label.authorization-form__box
  				h3.authorization-form__inp-title Логин
  				input(type="text" v-model="user.name").authorization-inp
  				.error-box {{ validation.firstError('user.login') }}
  				span.authorization-icon.authorization-icon_login
  			label.authorization-form__box
  				h3.authorization-form__inp-title Пароль
  				input(type="password" v-model="user.password").authorization-inp
  				.error-box {{ validation.firstError('user.password') }}
  				span.authorization-icon.authorization-icon_password

  			.authorization-form__box
  				button(type="submit").authorization-btn отправить
  
</template>







<script>
	import $axios from '../../requests';
	import SimpleVueValidator from 'simple-vue-validator';
	const Validator = SimpleVueValidator.Validator;
	
	export default {
		mixins: [SimpleVueValidator.mixin],
		validators:{
			'user.login': function(value){
				return Validator.custom(function(){
					if(value.length < 5){
						return 'Не менее 5 символов'
					}
				});
			},
			'user.password': function(value){
				return Validator.custom(function(){
					if(value.length < 8){
						return 'Не менее 8 символов'
					}
				});
			}
		},
		data(){
			return{
				user:{
					name: 'Alimbo-zzz',
					password: 'al886612345'
				}
			}
		},
		methods:{

			async login(){
				try{
					const response = await $axios.post('/login', this.user);
					const token = response.data.token;

					localStorage.setItem('token', token);
					$axios.defaults.headers["Authorization"] = `Bearer ${token}`;
					this.$router.replace('/');
				}
				catch(error){
					console.log(error)
					alert('Неверное имя или пароль')
				}
			}
		}

	}

</script>






<style lang="pcss">



	.error-box{
		position: absolute;
		bottom: -40px;left: 0;
		background-color: #DD3A31;
		color:white;
		padding: 0px 15px; 
		width: 100%;
		text-align:center;
		border-bottom-right-radius:50% ;
		border-bottom-left-radius:50% ;
		line-height: 40px;
	}

	.authorization{
		min-height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		&:before{
			content:'';
			position: absolute;
			left: 0;top: 0;
			display: block;
			width: 100%; height: 100%;
			background: rgba(255,130,27,0.2);
			z-index: 2;
		}
	}
  
	.authorization__fon{
		position: absolute;
		left: 0;top: 0;
		object-fit: cover;
		width: 100%; height: 100%;
		z-index:1;
	}

	.authorization-form{
		position: relative;
		width: 550px;	height: 600px;
		background-color: #fff;
		z-index: 10;
		padding: 0px 70px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius:10px;
	}

	@media(max-width: 480px){
		.authorization-form{
			padding: 0 30px;
			height: 100vh;
			width: 100%;
			background-color: rgba(255,255,255,0.9);
			border-radius:0px;
		}
	}


	.authorization-form__title{
		font-size: 36px;
		font-weight: 600;
		line-height: 60px;
		text-align: center;
		color: #323232;
		margin-bottom: 40px;
	}


	.authorization-form__box{
		display: flex;
		flex-direction:column;
		margin-bottom: 40px;
		position: relative;

		&:last-child{
			margin-bottom: 0;
		}

	}

	.authorization-form__inp-title{
		font-size: 16px;
		line-height: 30px;
		color:#B1B1B1;
		padding-left: 50px;
	}

	.authorization-inp{
		padding: 20px;
		padding-left: 52px;
		font-size: 18px;
		line-height: 40px;
		color: #222;
		font-weight: 700;
		display: block;
		width: 100%;
		border:none;
		outline: none;
		border-bottom: 2px solid #222;
		background: transparent;
	}


	.authorization-icon{
		position: absolute;
		display: block;
		width: 35px; height: 35px;
		background: #222;
		bottom: 23px;left: 0;
	}

	.authorization-icon_login{
		background: svg-load('user.svg', fill="#B1B1B1") center center no-repeat;
	}
	
	.authorization-icon_password{
		background: svg-load('key.svg', fill="#B1B1B1") center center no-repeat;
	}
	

	.authorization-btn{
		display: block;
		width: 80%;
		margin: 0 auto;
		padding: 30px 0px;
		border:none;
		outline: none;
		border-radius: 20px;
		text-transform: uppercase;
		font-weight: 600;
		color: white;
		background: rgb(201,80,1);
		margin-top: 15px;
        background: linear-gradient(90deg, rgba(201,80,1,1) 0%, rgba(254,126,38,1) 100%);
	}


	@media(max-width: 480px){

		.authorization-btn{
			padding: 25px;
			width: 70%;
		}

	}



</style>











