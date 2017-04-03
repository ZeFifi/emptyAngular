// MAIN CONTROLLER
function mainController($scope) {
    $scope.people = [];

    $scope.addPerson = function() {
        $scope.people.push($scope.newPerson);
    };
}
