import angular from 'angular';
import '../app-core/index';


//import controllers
import ImagesController from './controllers/images.controller';
import AddImageController from './controllers/addImage.controller';

//import services
import ImagesService from './services/images.service';

//import directives
import wesImage from './directives/images.directive';

angular
  .module('app.images', ['app.core'])
  .controller('ImagesController', ImagesController)
  .controller('AddImageController', AddImageController)
  .service('ImagesService', ImagesService)
  .directive('wesImage', wesImage)
;