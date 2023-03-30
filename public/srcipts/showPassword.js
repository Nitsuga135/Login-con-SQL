window.addEventListener('load', () => {
	
		let ojo = document.querySelector('.ojo');
		let contrasena = document.querySelector('.contrasena');
		
		ojo.addEventListener('click', () => {
			if (contrasena.type === 'password') {
				contrasena.type = 'text';
				ojo.classList.add('fa-eye-slash');
				ojo.classList.remove('fa-eye');
			} else {
				contrasena.type = 'password';
				ojo.classList.remove('fa-eye-slash');
				ojo.classList.add('fa-eye');
			}
		});


});
