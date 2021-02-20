function form_active(){
	const inputs = document.querySelectorAll('.form__inp');
	const textArea = document.querySelector('.form__message');



	textArea.addEventListener("focus", () =>{
		textArea.parentElement.classList.add('form_cursor');
	});
		

	textArea.addEventListener("blur", () =>{
		textArea.parentElement.classList.remove('form_cursor');
	});


	inputs.forEach(function(item){
		item.addEventListener("focus", () =>{
			item.parentElement.classList.add('form_cursor');
		});

		item.addEventListener("blur", () =>{
			item.parentElement.classList.remove('form_cursor');
		});
	})
		



}

form_active();

