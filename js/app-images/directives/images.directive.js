let wesImage = function (ImagesService){
    return {

      restrict: 'EAC',
      replace: true,
      scope: {
        img: '='
      },

      template:`
        <div class="imageContainer" ng-click="vm.addLikes()">
        <heart class="hide"><img class="heart" ng-src ="http://rs1225.pbsrc.com/albums/ee389/sammiehollis/Decorated%20images/TransparentHeart.png~c200"></heart>
         <img ng-src="{{ img.url }}">
           <div class="title">
             {{img.title}}
           </div>
           <div class="likes">
              {{vm.count}} {{vm.word}}
           </div>
        </div>
      `,

      controller: 'HomeController as vm',

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

wesImage.$inject = ['ImagesService'];
export default wesImage;