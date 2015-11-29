let ImagesService = function($http, PARSE) {
  
  let url = PARSE.URL +'classes/images';

  this.getImages = getImages;
  this.addImage = addImage;

  function Image (obj) {
    this.url = obj.url;
    this.title = obj.title;
    this.description = obj.description;
  }

  function getImages (){
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (obj) {
    let i = new Image(obj);
    return $http.post(url, i, PARSE.CONFIG);
  }


};

ImagesService.$inject = ['$http', 'PARSE'];

export default ImagesService;