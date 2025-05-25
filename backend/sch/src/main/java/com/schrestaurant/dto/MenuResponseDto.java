package com.schrestaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MenuResponseDto {
    private boolean success;
    private List<MenuDto> menus;
}
