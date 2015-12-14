let wesImage = function (ImagesService, $animate){
    return {

      restrict: 'EAC',
      replace: true,
      scope: {
        img: '='
      },

      template:`
        <div class="imageContainer">
        <heart class="hide"><img class="heart" ng-src ="http://rs1225.pbsrc.com/albums/ee389/sammiehollis/Decorated%20images/TransparentHeart.png~c200"></heart>
         <img ng-src="{{ img.url }}">
           <div class="title">
             {{img.title}}
           </div>
        </div>
      `,

      link: function(scope,element,attribute) {
        element.on('mousedown', function (){
          element.find('heart').removeClass('hide');
        });
        element.on('mouseup', function(){
          element.find('heart').addClass('hide');
        });
  
      }
    };
  };

wesImage.$inject = ['ImagesService', '$animate'];
export default wesImage;