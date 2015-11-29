import angular from 'angular';

//sub-modules
import './app-core/index';
import './app-images/index';

angular
.module('app',['app.core', 'app.images'])
;