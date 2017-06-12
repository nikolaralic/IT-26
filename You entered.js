<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
Name: <input ng-model="name">
<h1>You entered: {{name}}</h1>
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "John Doe";
});
</script>

<p>Change the name inside the input field, and you will see the name in the header changes accordingly.</p>

</body>
</html>
