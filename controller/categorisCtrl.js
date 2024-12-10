var apiCate = "http://localhost:3000/category"


app.controller("listCategory", function ($scope, $http) {
    $scope.arr = []
    $http.get("http://localhost:3000/category").then(function (res) {
        $scope.arr = res.data
        console.log($scope.arr)
    }, function (res) {
        alert("loi tai du lieu")
    })
    $scope.deleteSP = function (id) {
        $http.delete(apiCate + "/" + id).then(function (res) {
            alert("Xoa san pham thanh cong")
            return document.location = "#!listCategory"
        }, function (res) {
            alert("Xoa san pham that bai")
        })
    }
})

//add
app.controller("addCategoris", function ($scope, $http) {
    $scope.name = ""
   

    $scope.addCategoris = function () {
        $http.post(apiCate, {
            "name": $scope.name,
           
        }).then(function (res) {
            alert("Them san pham thanh cong")
            return document.location = "#!listCategory"
        }, function () {
            alert("Them san pham that bai")
        }

        )}
})

//update
app.controller("editCategory", function ($scope, $http, $routeParams) {
    $scope.id = $routeParams.id
    $scope.editOpj = {}
      // lấy dữ liệu 
    $http.get(apiCate + "/" + $scope.id).then(function (res) {
        $scope.editOpj = res.data  
    }, function (res) {
        alert("khong hien thi du lieu")
    })

    // sửa 
    $scope.editCategory = function(){       
        $http.put(apiCate + "/" + $scope.id, $scope.editOpj)
        .then(function (res) {
            alert("sua san pham thanh cong")
            return document.location = "#!listCategory"
        }, function (res) {
            alert("sua san pham that bai")
        })
    }

})