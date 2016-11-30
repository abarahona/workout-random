'use strict';
angular.module('Workout')
.controller('WorkoutController', ['$scope', '$interval',function($scope,$interval){
	var exercices = [];

	// start push exercices
	exercices.push({
		detail: new Exercices({
			name :"dog1",
			title : "jumping man",
			description : "is necesary jump",
			image : "https://media.giphy.com/media/eij3Aplt9hquI/giphy.gif",
			video: "https://www.youtube.com/watch?v=UT4X_2zKIyk",
			procedure: "ssume an erect position, with feet together and arms at your side.\
                            Slightly bend your knees, and propel yourself a few inches into the air.\
                            While in air, bring your legs out to the side about shoulder width or slightly wider.\
                            As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
                            Your feet should land shoulder width or wider as your hands meet above your head with arms slightly",


		}),
		duracion: 12
	});

	exercices.push({
		detail: new Exercices({
			name :"dog2",
			title : "jumping man",
			description : "is necesary jump",
			image : "https://media.giphy.com/media/lNC5gNYPyM8la/giphy.gif",
			video: "https://www.youtube.com/watch?v=UT4X_2zKIyk",
			procedure: "ssume an erect position, with feet together and arms at your side.\
                            Slightly bend your knees, and propel yourself a few inches into the air.\
                            While in air, bring your legs out to the side about shoulder width or slightly wider.\
                            As you are moving your legs outward, you should raise your arms up over your head; arms should be slightly bent throughout the entire in-air movement.\
                            Your feet should land shoulder width or wider as your hands meet above your head with arms slightly",


		}),
		duracion: 10
	});

	// end push exercices


	$scope.ejercicioActual = exercices.shift();


 function Exercices(args) {
          this.name = args.name;
          this.title = args.title;
          this.description = args.description;
          this.image = args.image;
          this.related = {};
          this.video = args.video;
          this.sound = args.sound;
          this.procedure = args.procedure;
      }

      var startExercice = function (planExercice){
      	$scope.ejercicioActual = planExercice;
      	$scope.duracionEjercicioActual = 0;
      	$interval(function(){
      		++$scope.duracionEjercicioActual;
      	}
      	, 1000
      	,$scope.duracionEjercicioActual.duracion
      	).then(function () {
            comenzarEjercicio(ejercicios.shift())
      };

      startExercice(exercices.shift());

}]);