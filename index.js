$(document).ready(function () {
	let correcto = true;
	$('#submit').click(function (event) {
		correcto = true;
		event.preventDefault();
		const numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
		if($('#nombre')[0].value.length === 0){
			$('#nombre').removeClass("campoCorrecto");
			$('#nombre').addClass("campoIncorrecto");
			$('#nombreIcon').removeClass("iconCorrecto");
			$('#nombreIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionNombre');
			createElemento('sectionNombre',"Rellene este campo");
		}else {
			let isValid = true;
			for (let i = 0; i < numeros.length; i++){
				if($('#nombre')[0].value.includes(numeros[i])){
					$('#nombre').removeClass("campoCorrecto");
					$('#nombre').addClass("campoIncorrecto");
					$('#nombreIcon').removeClass("iconCorrecto");
					$('#nombreIcon').addClass("iconIncorrecto");
					eliminaElemento('sectionNombre');
					createElemento('sectionNombre',"El nombre solo puede contener letras");
					i = numeros.length;
					isValid = false;
				}
			}
			if(isValid){
				$('#nombre').addClass("campoCorrecto");
				$('#nombreIcon').addClass("iconCorrecto");
				eliminaElemento('sectionNombre');
			}
		}
		if($('#email')[0].value.length === 0){
			$('#email').removeClass("campoCorrecto");
			$('#email').addClass("campoIncorrecto");
			$('#emailIcon').removeClass("iconCorrecto");
			$('#emailIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionEmail');
			createElemento('sectionEmail',"Rellene este campo");
		}else if(!$('#email')[0].value.includes('@')
			|| (!$('#email')[0].value.includes('.com')
			&& !$('#email')[0].value.includes('.es'))){
			$('#email').removeClass("campoCorrecto");
			$('#email').addClass("campoIncorrecto");
			$('#emailIcon').removeClass("iconCorrecto");
			$('#emailIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionEmail');
			createElemento('sectionEmail',"Formato incorrecto del correo");
		}
		else {
			$('#email').addClass("campoCorrecto");
			$('#emailIcon').addClass("iconCorrecto");
			eliminaElemento('sectionEmail');
		}
		if($('#clave')[0].value.length === 0){
			$('#clave').removeClass("campoCorrecto");
			$('#clave').addClass("campoIncorrecto");
			$('#claveIcon').removeClass("iconCorrecto");
			$('#claveIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionClave');
			createElemento('sectionClave',"Rellene este campo");
		}
		else if($('#clave')[0].value.length <= 7){
			$('#clave').removeClass("campoCorrecto");
			$('#clave').addClass("campoIncorrecto");
			$('#claveIcon').removeClass("iconCorrecto");
			$('#claveIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionClave');
			createElemento('sectionClave',"La clave debe tener una longitud minima de 8 caracteres");
		}
		else {
			$('#clave').addClass("campoCorrecto");
			$('#claveIcon').addClass("iconCorrecto");
			eliminaElemento('sectionClave');
		}
		if($('#claveConfirma')[0].value.length === 0){
			$('#claveConfirma').removeClass("campoCorrecto");
			$('#claveConfirma').addClass("campoIncorrecto");
			$('#claveConfirma').removeClass("iconCorrecto");
			$('#claveConfirmaIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionClaveConfirmacion');
			createElemento('sectionClaveConfirmacion',"Rellene este campo");
		}
		else if($('#claveConfirma')[0].value !== $('#clave')[0].value){
			$('#claveConfirma').removeClass("campoCorrecto");
			$('#claveConfirma').addClass("campoIncorrecto");
			$('#claveConfirmaIcon').removeClass("iconCorrecto");
			$('#claveConfirmaIcon').addClass("iconIncorrecto");
			eliminaElemento('sectionClaveConfirmacion');
			createElemento('sectionClaveConfirmacion',"Las clave no coinciden");
		}
		else {
			$('#claveConfirma').addClass("campoCorrecto");
			$('#claveConfirmaIcon').addClass("iconCorrecto");
			eliminaElemento('sectionClaveConfirmacion');
		}
		if(correcto) {
			alert('La inscripción se ha realizado correctamente');
		}
	});

	function createElemento(idPadre, mensaje) {
		let addElem=document.createElement('p');
		addElem.textContent=mensaje;
		addElem.className=idPadre;
		addElem.style.color="#cf5758";
		addElem.style.marginBottom="0";
		addElem.style.marginTop="0.2rem";
		document.getElementById(idPadre).appendChild(addElem);
		correcto = false;
	}
	function eliminaElemento(classToEliminar) {
		$('.'+classToEliminar).remove();
		
	}
});