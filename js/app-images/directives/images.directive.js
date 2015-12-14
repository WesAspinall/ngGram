let wesImage = function ( ImagesService){
    return {

      restrict: 'EAC',
      replace: true,
      scope: {
        img: '='
      },

      template:`
        <div class="imageContainer">
         <img ng-src="{{ img.url }}">
           <div class="title">
             {{img.title}}
           </div>
        </div>
      `,

      link: function(scope,element,attribue) {
        element.on('mousedown', function (){
          console.log('hello');
        });
        element.on('mouseup', function(){
          console.log('world');

        });
      }
    };
  };

wesImage.$inject = ['ImagesService'];
export default wesImage;