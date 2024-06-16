package com.redux.api.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product {
    @Id
    private int itemId;
    private double price;
    private int quantity;
    private double totalPrice;
    private String title;
    private String description;
}
