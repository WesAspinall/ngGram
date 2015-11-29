let HomeController = function(ImagesService) {

  let vm = this;
  
  vm.title = 'ngGram';

  vm.getImages = getImages;

  vm.img = [];

  getImages();

  function getImages (obj){
    ImagesService.getImages(obj).then( (res) => {

      vm.img = res.data.results;
      console.log(vm.img);

    });

  }
};

HomeController.$inject = ['ImagesService'];

export default HomeController;