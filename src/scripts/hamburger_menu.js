function hamburger_menu(){

	const hamburger = document.querySelector('.hamburger');
	const drop_menu = document.querySelector('.drop-menu');
	const h_socials = document.querySelector('.header-socials');






	hamburger.onclick = function(e){
		e.preventDefault();
		hamburger.classList.toggle('hamburger_active');
		if(hamburger.classList.contains('hamburger_active')){
			drop_menu.classList.add('drop-menu_active');

			/*socials, tablets*/
			if(window.matchMedia("(max-width: 770px)").matches){
				h_socials.style.display = 'none';
			}

		}
		else{
			drop_menu.classList.remove('drop-menu_active');
			h_socials.style.display = 'flex';

			/*socials, phones*/
			if(window.matchMedia("(max-width: 480px)").matches){
				h_socials.style.display = 'none';
			}

		}

	}




}

hamburger_menu();