package com.schrestaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MenuDto {
    private List<String> name;
    private Long price;
    private String url;
}
