package com.schrestaurant.dto;

import com.schrestaurant.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TodayMenuDto {
    private String name;
    private Category category;//null 가능
}
