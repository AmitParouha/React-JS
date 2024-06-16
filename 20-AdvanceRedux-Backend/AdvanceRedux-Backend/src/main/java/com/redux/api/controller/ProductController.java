package com.redux.api.controller;

import com.redux.api.entity.Product;
import com.redux.api.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin("http://localhost:3000/")
public class ProductController {
    private ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        return ResponseEntity.ok(service.addProduct(product));
    }

    @DeleteMapping("/delete/{itemId}")
    public ResponseEntity<Product> deleteProduct(@PathVariable int itemId){
        return ResponseEntity.ok(service.deleteProduct(itemId));
    }

    @GetMapping("/get")
    public ResponseEntity<List<Product>> getAllProduct(){
        return ResponseEntity.ok(service.getAllProduct());
    }
}
