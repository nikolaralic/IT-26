<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="">
  <form>
    First Name: <input type="text" ng-model="firstname">
  </form>
  <h1>You entered: {{firstname}}</h1>
</div>

<p>Change the name inside the input field, and you will see the name in the header changes accordingly.</p>

</body>
</html>