let HomeController = function(PARSE, ImagesService, $state) {

  let vm = this;
  
  vm.title = 'ngGram';
  vm.getImages = getImages;
  vm.addLikes = addLikes;
  vm.img = [];

  vm.word = 'likes';
  vm.count = 0;


  function addLikes(){
    vm.count = vm.count + 1;
    if(vm.count === 1){
      vm.word = 'like';
    } else {
      vm.word = 'likes';
    }
  }




  getImages();

  function getImages (obj){
    ImagesService.getImages(obj).then( (res) => {

      vm.img = res.data.results;
      console.log(vm.img);

    });

  }
};

HomeController.$inject = ['PARSE', 'ImagesService', '$state'];

export default HomeController;