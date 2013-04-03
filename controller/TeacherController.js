function TodoCtrl($scope) {
  $scope.todos = [
    {text:'lecture 1', done:true},
    {text:'lecture 2', done:false}];

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };


  
}