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
       <span>{{img.title}}</span>
      </div>
      `,

      link: function(s,e,a){

      }

    };
  };

wesImage.$inject = ['ImagesService'];
export default wesImage;