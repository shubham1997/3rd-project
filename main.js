//$('#user-email').on('input',function() {
//        var email = $('#user-email').val()
//        var message = 'Welcome Back, ' + email;
//        $('.welcome-message').text(message);
//    });
var foodieApp = angular.module('foodieApp',['ngRoute']);
console.log(foodieApp);
var list;

//function for routing

foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

//function for maincontroller

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
                          {
	name: 'Misso Hungry',
	address: 'Booth 41, Sector 34, Chandigarh',
	location: 'Chandigrah',
	category: '',
	vote: '4.6',
	cuisines: 'Rolls, Fast Food',
	cost: '1700',
	hours: '1 PM to 10:30 PM(Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k'
},
                          {
	name: 'dominoze',
	address: 'T 1-107, 1st Floor, One Horizon Centre, Golf Course Road, Gurgaon',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, Thai',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TN-R0OiyveXxPe2PQkcXsYOXdOm_1IwoLmt_B-FsaIylQ0is'
},
                          {
	name: 'Caffe Tonino',
	address: '1st Floor, One Horizon Center, Golf Course Road, Gurgaon',
	location: 'One Horizon Center, Golf Course',
	category: 'Casual Dining,Caffe',
	vote: '3.9',
	cuisines: 'Italian, Pizza, Cafe',
	cost: '1000',
	hours: '8:30Am to 9PM (Mon-Sun)',
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLzjuPjm8BslLlghSNxRKoCcgW9X_c_oAPr2cBUrUb4fo9yIPMQ',
},
    {
		name: 'Pirates',
		address: '38/39, Level 10, Block F , Inner Circle, Corol bagh',
		location: 'Connaught Place',
		category: 'Bakery',
		vote: '4.4',
		cuisines: 'Desert',
		cost: '200',
		hours: '12 Noon to 10 PM (Mon-Sun)',
		image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
		
		,                     
 }];

    console.log($scope.restaurants[0].name);
$scope.change = function(){
$scope.restaurants.push({
	name: 'dominoze',
	address: 'T 1-107, 1st Floor, One Horizon Centre, Golf Course Road, Gurgaon',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, Thai',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TN-R0OiyveXxPe2PQkcXsYOXdOm_1IwoLmt_B-FsaIylQ0is'
});

console.log($scope);
console.log($scope.$parent.restaurants);

}

})


// Controller for todolist page
foodieApp.controller("todo", function($scope) {
			$scope.list = list;
			$scope.x=1;
			console.log(list);
			$scope.grocery = [];
			//I need to create an array of object because we will need this for keeping track of which has been bought and which not
			for (var i = 0; i < list.length; i++) {
				var a = {
					id: i,
					name: list[i],
					buy: false
				};
				$scope.grocery.push(a);
			}
			console.log($scope);
			$scope.bought = [];
			$scope.nbought = [];

			$scope.toggle = function(num) {
				// we need to change value dependin
				$scope.grocery[num].buy = !$scope.grocery[num].buy;
				$scope.$parent.grocery[num].buy = !$scope.$parent.grocery[num].buy

			}
			$scope.one =function(){

				$scope.x=1;

			}
			$scope.two =function(){

				$scope.x=2;

			}
			$scope.three =function(){

				$scope.x=3;

			}
			$scope.filter = function() {
$scope.bought=[];
$scope.nbought=[];
				for (var i = 0; i < $scope.grocery.length; i++) {
					if ($scope.grocery[i].buy) {
						$scope.bought.push($scope.grocery[i]);
					} else {
						$scope.nbought.push($scope.grocery[i]);
					}
				}

				console.log($scope.bought);
			}


})
                          
//        function for logincontroller                  
                          
                          
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})

//function for restaurantcontroller


foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	$scope.ingredients = [];
	var restaurants =
     [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
    bestDish: {
	name: 'three bean salad',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
    },
         
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
                          {
	name: 'Misso Hungry',
	address: 'Booth 41, Sector 34, Chandigarh',
	location: 'Chandigrah',
	category: '',
	vote: '4.6',
	cuisines: 'Rolls, Fast Food',
	cost: '1700',
	hours: '1 PM to 10:30 PM(Mon-Sun)',
    bestDish: {
	name: 'vegetable Pizza',
	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb'
    },
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k'
},
                          {
	name: 'dominoze',
	address: 'T 1-107, 1st Floor, One Horizon Centre, Golf Course Road, Gurgaon',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, Thai',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
    bestDish: {
	name: 'Pasta',
	image: 'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TN-R0OiyveXxPe2PQkcXsYOXdOm_1IwoLmt_B-FsaIylQ0is'
},
                          {
	name: 'Caffe Tonino',
	address: '1st Floor, One Horizon Center, Golf Course Road, Gurgaon',
	location: 'One Horizon Center, Golf Course',
	category: 'Casual Dining,Caffe',
	vote: '3.9',
	cuisines: 'Italian, Pizza, Cafe',
	cost: '1000',
	hours: '8:30Am to 9PM (Mon-Sun)',
    bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k'
    },
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLzjuPjm8BslLlghSNxRKoCcgW9X_c_oAPr2cBUrUb4fo9yIPMQ',
}];
    
    
//    for creating ingredients list 
        
	$scope.x = 0;
				$scope.toggle=function(){
   			$scope.x = 1-$scope.x;
				console.log($scope.x);
				}
    
	$scope.restaurant = restaurants[$routeParams.id - 1];
   $scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key cb16853fb3d748d4999d863c4512cefa',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
				var ingredients = response.data.outputs[0].data.concepts;
				for (var i =0;i < ingredients.length;i++) {
				$scope.ingredients.push(ingredients[i].name);
				}
  			})
    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        }
})
                       