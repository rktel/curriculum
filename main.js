var ng = angular.module('App', []);
ng.controller('CV', ['$scope', function($scope){
	var foto = 'foto.png';
	var person = {
		firstName: 'RICARDO JAPHET',
		lastName: 'HERNÁNDEZ ORÉ',
		location : 'Mz. B Lt. 5 Coop. de Viv. Ciudad de Dios. San Juan de Miraflores.',
		phone: '5604019  / 980177668',
		email: 'compenetretion@gmail.com',
		age:'32 años',
		description: 'Profesional Ingeniero en Ingeniería Electrónica con experiencia laboral en los campos de electrónica, telecomunicaciones, informática, sistemas y aplicaciones móviles. Creativo e innovador, con capacidad analítica para el desarrollo de nuevos procesos. Aptitudes para trabajar y liderar equipos multidisciplinarios. Motivado por el aprendizaje de nuevas tecnologías.'
	};
	var titles = {
		perfil : 'PERFIL PROFESIONAL',
		formacion : 'FORMACIÓN ACADÉMICA',
		experiencia: 'EXPERIENCIA LABORAL',
		capacitacion: 'CAPACITACIÓN',
		idiomas : 'IDIOMAS',
		conocimientos : 'CONOCIMIENTOS',
		referencias : 'REFERENCIAS PERSONALES',
		adicional: 'INFORMACIÓN ADICIONAL'
	}
	$scope.foto = foto;
	$scope.person = person;
	$scope.titles = titles;

}])