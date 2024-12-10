var apiPro = "http://localhost:3000/products";
var apiCate = "http://localhost:3000/category";
app.controller("listProduct", function($scope, $http){
    $scope.arr = [];
    $scope.categories = [];
    
    // Lấy dữ liệu danh mục
    $http.get(apiCate).then(function(res){
        $scope.categories = res.data;
    }, function(){
        alert("Lỗi khi lấy danh mục");
    });
    
    // Lấy dữ liệu sản phẩm
    $http.get(apiPro).then(function(res){
        $scope.arr = res.data;
        console.log($scope.arr);
    }, function(){
        alert("Lỗi khi lấy sản phẩm");
    });
    
    // Xóa sản phẩm
    $scope.deleteSP = function(id){
        $http.delete(apiPro+"/"+id).then(function(res){
            alert("Xóa thành công");
            document.location = "#!listProducts";
        }, function(){
            alert("Xóa thất bại");
        });
    }
    
    // Hàm lấy tên danh mục từ ID
    $scope.getCategoryName = function(categoryId) {
        var category = $scope.categories.find(c => c.id === categoryId);
        return category ? category.name : 'Không rõ';
    };
});

//ADD

app.controller("addProduct", function($scope, $http) {
    $scope.name = "";
    $scope.price = "";
    $scope.quantity = "";
    $scope.selectedCategory = null;
    $scope.categories = [];

    // Lấy danh sách các danh mục
    $http.get(apiCate).then(function(res) {
        $scope.categories = res.data;
    }, function(res) {
        alert("Lỗi tải danh mục");
    });

    $scope.addProduct = function() {
        if ($scope.selectedCategory) {
            $http.post(apiPro, {
                "name": $scope.name,
                "price": $scope.price,
                "quantity": $scope.quantity,
                "categoryId": $scope.selectedCategory.id,
                "categoryName": $scope.selectedCategory.name
            }).then(function(res) {
                alert("Thêm thành công");
                return document.location = "#!listProducts";
            }, function() {
                alert("Thêm thất bại");
            });
        } else {
            alert("Vui lòng chọn danh mục");
        }
    };
});

app.controller("editProduct", function($scope, $http, $routeParams){
    $scope.id = $routeParams.id
    $scope.editObj = {}
    $scope.selectedCategory = null;
    $scope.categories = [];
  
   
    // Lấy danh sách các danh mục
    $http.get(apiCate).then(function(res) {
        $scope.categories = res.data;
    }, function(res) {
        alert("Lỗi tải danh mục");
    });
    //Lay du lieu tu 1 doi tuong.
    $http.get(apiPro+ "/" + $scope.id).then(function(res){
        $scope.editObj = res.data
    }, function(res){
        alert("KHông hiển thị được đối tượng")
    })

    //su kien click nut sua
    $scope.editProduct = function(){

        $http.put(apiPro+ "/" + $scope.id , $scope.editObj,).then(function(res){
            
            alert("Sua thanh cong")
            return document.location ="#!listProducts"
        }, function(res){
            alert("KHông sua được đối tượng")
        })
    
    }

})


