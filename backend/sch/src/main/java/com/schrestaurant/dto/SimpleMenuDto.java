package com.schrestaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SimpleMenuDto {
    private String name;
    private Long price;
}
