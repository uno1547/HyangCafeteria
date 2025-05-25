package com.schrestaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class StoreResponseDto {
    private boolean success;
    private List<StoreDto> stores;
}
