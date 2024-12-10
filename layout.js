var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html"
        })
        .when("/gioiThieu", {
            templateUrl: "templates/gioiThieu.html"
        })
        .when("/lienHe", {
            templateUrl: "templates/lienHe.html"
        })
        .when("/gopY", {
            templateUrl: "templates/gopY.html"
        })
        .when("/sanPham", {
            templateUrl: "templates/sanPham.html"
        })
        .when("/account/dangNhap", {
            templateUrl: "account/dangNhap.html"
        })
        .when("/account/dangKy", {
            templateUrl: "account/dangKy.html"
        })
        .when("/account/quenMatKhau", {
            templateUrl: "account/quenMatKhau.html"
        })
        .when("/account/capNhatHoSo", {
            redirectTo: "templates/capNhatHoSo.html"
        })
        .when("/account/donHang", {
            templateUrl: "account/donHang.html"
        })
        .when("/chiTietSanPham", {
            templateUrl: "templates/chiTietSanPham.html"
        })
        .when("/account/doiMatKhau", {
            templateUrl: "account/doiMatKhau.html"
        })
        // .when("/account/profile", {
        //     templateUrl: "account/profile.html"
        // })
        // .when("/account/orders", {
        //     templateUrl: "account/orders.html"
        // })
        // .when("/account/products", {
        //     templateUrl: "account/products.html"
        // })
        // .when("/category/:id", {
        //     templateUrl: "templates/ProductList.html",
        //     controller: "categoryCtrl"
        // })
        // .when("/supplier/:id", {
        //     templateUrl: "templates/ProductList.html",
        //     controller: "supplierCtrl"
        // })
        // .when("/special/:id", {
        //     templateUrl: "templates/ProductList.html",
        //     controller: "specialCtrl"
        // })
        .otherwise({
            redirectTo: "/home"
        });
});
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi");
    });
});
