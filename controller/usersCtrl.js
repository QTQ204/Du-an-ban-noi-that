var apiUrl = "http://localhost:3000/users"// URL của API JSON Server

// Quên mật khẩu
app.controller('Qmk', function($scope, $http) {
    // Biến lưu email người dùng nhập
    $scope.email = "";
    $scope.dangNhap="";
    // Biến lưu mật khẩu hoặc thông báo
    $scope.errEamil=""
    
    // Biến lưu dữ liệu người dùng
    $scope.user = [];

    // Hàm lấy dữ liệu từ tệp JSON nội bộ
    $scope.getUsers = function() {
        
        $http.get(apiUrl)
            .then(function(res) {
                $scope.user = res.data;
            },function(error) {
                console.error('Lỗi khi lấy dữ liệu:', error);
            });
    };
    // Gọi hàm để lấy dữ liệu khi controller được khởi tạo
    $scope.getUsers();

    // Hàm kiểm tra email và hiển thị mật khẩu
    $scope.checkEmail = function() {
      
        var found = $scope.user.find(user => user.email === $scope.email, user=>user.username === $scope.dangNhap);
        if (found) {
            // Email hợp lệ, hiển thị mật khẩu
            $scope.message = "Mật khẩu của bạn là: " + found.password;
        } else {
            // Email không hợp lệ
            $scope.message = "Tên đăng nhập hoặc Email không chính xác!";
        }
    };
});

// hiển thị
app.controller("listUS",function($scope, $http){
    $scope.arr = []
    $http.get(apiUrl).then(function(res){
        $scope.arr = res.data;
        console.log($scope.arr)
    },function(res){
        alert("lỗi tải dữ liệu!!!")  
     })
     $scope.xoaSP = function(id){
        $http.delete(apiUrl+ "/" + id).then(function(res){
         alert("xóa thành công!")   
        },function(res){
            alert("Xóa thất bại !!!")
        })
    }
})
// thêm mới
app.controller("addUS", function($scope, $http){
    // Biến lưu thông tin người dùng
    $scope.user = {
        username: "",
        email: "",
        sdt: "",
        diaChi: "",
        role: ""  // Vai trò của người dùng
    };
    $scope.addUser = function() {
        if (!$scope.newUser.username || !$scope.newUser.email || !$scope.newUser.sdt || !$scope.newUser.diaChi || !$scope.newUser.role) {
            $scope.message = "Vui lòng nhập đầy đủ thông tin!";
            return;
        }        
        $http.post(apiUrl, $scope.newUser)
            .then(function(res) {
                alert("thêm mới thành công")
                return  document.location = "#!listUser"
            })
            .catch(function(error) {
                $scope.message = "Đã xảy ra lỗi. Vui lòng thử lại.";
                console.error('Lỗi khi thêm user:', error);
            });
    };

})
// cập nhập
app.controller("editCtrl",function($scope, $http, $routeParams){
    $scope.id = $routeParams.id
    $scope.editOdj = {};
    // lấy dữ liệu 1 đối tượng
    $http.get(apiUrl+ "/" + $scope.id).then(function(res){
        $scope.editOdj = res.data;
    },function(res){
        alert("không hiển thị được đối tượng")
    })
    $scope.suaUser = function(){
        $http.put(apiUrl+ "/" + $scope.id, $scope.editOdj).then(function(res){
            alert("sửa thành côngg");
            return document.location = "#!listUser"
        },function(){
            alert("sửa thất bại")
        })
    }
})
// đăng ký
app.controller("dangky", function($scope, $http){
    // Biến lưu thông tin người dùng
    $scope.user = {
        username: "",
        email: "",
        sdt: "",
        diaChi: "",
        role: ""  // Vai trò của người dùng
    };
    $scope.addUser = function() {
        if (!$scope.newUser.username || !$scope.newUser.email || !$scope.newUser.sdt || !$scope.newUser.diaChi || !($scope.newUser.role= 'user')) {
            $scope.message = "Vui lòng nhập đầy đủ thông tin!";
            return;
        }        
        $http.post(apiUrl, $scope.newUser)
            .then(function(res) {
                alert("đăng ký thành công")
                return  document.location = "#!dangNhap"
            })
            .catch(function(error) {
                $scope.message = "Đã xảy ra lỗi. Vui lòng thử lại.";
                console.error('Lỗi khi thêm user:', error);
            });
    };

})