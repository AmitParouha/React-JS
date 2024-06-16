package com.redux.api.service;

import com.redux.api.entity.Product;
import com.redux.api.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product addProduct(Product product){
        Product existingProduct = repository.findById(product.getItemId()).orElse(null);
        if(existingProduct==null){
            product.setQuantity(1);
            product.setTotalPrice(product.getPrice());
            return repository.save(product);
        }
        existingProduct.setQuantity(existingProduct.getQuantity()+1);
        double totalPrice = existingProduct.getQuantity()*existingProduct.getPrice();
        existingProduct.setTotalPrice(totalPrice);
        System.out.println(existingProduct);
        return repository.save(existingProduct);
    }
    public Product deleteProduct(int itemId){
            Product product = repository.findById(itemId).orElse(null);
            if(product.getQuantity()>1){
                product.setQuantity(product.getQuantity()-1);
                double totalPrice = product.getTotalPrice() - product.getPrice();
                product.setTotalPrice(totalPrice);
                return repository.save(product);
            }
            repository.deleteById(itemId);
            return null;
    }

    public List<Product> getAllProduct(){
        return repository.findAll();
    }


}
