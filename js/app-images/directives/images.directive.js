let wesImage = function ( ImagesService){
    return {

      restrict: 'E',
      replace: true,
      scope: {
        img: '='
      },

      template:`
        <div class="imageContainer">
         <img ng-src="{{ img.url }}">
         <div class="title">{{img.title}}</div>
        </div>
      `,

      link: function(scope,element,attribute) {
        element.on('click', function (){
          console.log('hi');
        });
      }

    };
  };

wesImage.$inject = ['ImagesService'];
export default wesImage;