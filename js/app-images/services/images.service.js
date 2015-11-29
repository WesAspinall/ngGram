let ImagesService = function($http, PARSE) {
  
  let url = PARSE.URL +'classes/images';

  this.getImages = getImages;

  function Image (obj) {
    this.url = obj.url;
    this.title = obj.title;
    this.description = obj.description;
  }

  function getImages (){
    return $http.get(url, PARSE.CONFIG);
  }

};

ImagesService.$inject = ['$http', 'PARSE'];

export default ImagesService;