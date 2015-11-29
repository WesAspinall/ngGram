let AddImageController = function($state, ImagesService) {
  
  let vm = this;

  vm.addImage = addImage;

  function addImage (obj){
    ImagesService.addImage(obj).then((res) => {
      console.log(res);
      $state.go('root.home');
    });
  }

};

AddImageController.$inject = ['$state','ImagesService'];

export default AddImageController;