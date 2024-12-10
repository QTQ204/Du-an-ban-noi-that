var app = angular.module("admin", ["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
    .when("/home", {
        templateUrl: "layout/home.html",
    })
    .when("/listUser",{
        templateUrl:"user/list.html",
        controller: "listUS"
    })
    .when("/listProducts",{
        templateUrl:"product/list.html",
        controller: "listProduct"
    })
    .when("/addProducts",{
        templateUrl:"product/add.html",
        controller: "addProduct"
    })
    .when("/updateProduct/:id",{
        templateUrl:"product/update.html",
        controller: "editProduct"
    })
    .when("/addUser",{
        templateUrl:"user/add.html",
        controller: "addUS"
    })
    .when("/update/:id",{
        templateUrl:"user/update.html",
        controller: "editCtrl"
    })
    .when("/listCategory",{
        templateUrl:"category/list.html",
        controller: "listCategory"
    })
    .when("/addCategory",{
        templateUrl:"category/add.html",
        controller: "addCategoris"
    })
    .when("/updateCategory/:id",{
        templateUrl:"category/update.html",
        controller: "editCategory"
    })
    .otherwise({
        redirectTo:"/home"
    })
})