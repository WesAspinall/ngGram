import angular from 'angular';

// import sub-modules
import './app-core/index';
import './app-layout/index';
import './app-images/index';

angular
.module('app',['app.core','app.layout', 'app.images'])
;