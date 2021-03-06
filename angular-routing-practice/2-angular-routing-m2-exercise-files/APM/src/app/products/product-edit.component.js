"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var message_service_1 = require('../messages/message.service');
var product_service_1 = require('./product.service');
var ProductEditComponent = (function () {
    function ProductEditComponent(productService, messageService, route, router) {
        this.productService = productService;
        this.messageService = messageService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Product Edit';
        this.dataIsValid = {};
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        // let id = +this.route.snapshot.params['id'];
        // this.getProduct(id);
        // this.route.params.subscribe(
        //     params => {
        //         console.log(params['id']);
        //         this.getProduct(+params['id']); 
        //     }
        // )
        var _this = this;
        // this.onProductRetrieved(this.route.snapshot.data['product']);
        this.route.data.subscribe(function (data) {
            _this.onProductRetrieved(data['product']);
        });
    };
    ProductEditComponent.prototype.validate = function () {
        // Clear the validation object
        this.dataIsValid = {};
        // info tab
        if (this.product.productName &&
            this.product.productName.length >= 3 &&
            this.product.productCode) {
            this.dataIsValid['info'] = true;
        }
        else {
            this.dataIsValid['info'] = false;
        }
        // tags tab
        if (this.product.category &&
            this.product.category.length >= 3) {
            this.dataIsValid['tags'] = true;
        }
        else {
            this.dataIsValid['tags'] = false;
        }
    };
    ProductEditComponent.prototype.isvalid = function (path) {
        var _this = this;
        this.validate();
        if (path) {
            return this.dataIsValid[path];
        }
        return (this.dataIsValid && Object.keys(this.dataIsValid).every(function (d) { return _this.dataIsValid[d] === true; }));
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.onProductRetrieved(product); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        if (this.product.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm("Really delete the product: " + this.product.productName + "?")) {
                this.productService.deleteProduct(this.product.id)
                    .subscribe(function () { return _this.onSaveComplete(_this.product.productName + " was deleted"); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        // if (true === true) {
        if (this.isvalid(null)) {
            this.productService.saveProduct(this.product)
                .subscribe(function () { return _this.onSaveComplete(_this.product.productName + " was saved"); }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function (message) {
        if (message) {
            this.messageService.addMessage(message);
        }
        // Navigate back to the product list
        this.router.navigateByUrl('/products');
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            templateUrl: './app/products/product-edit.component.html',
            styleUrls: ['./app/products/product-edit.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, message_service_1.MessageService, router_1.ActivatedRoute, router_1.Router])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map