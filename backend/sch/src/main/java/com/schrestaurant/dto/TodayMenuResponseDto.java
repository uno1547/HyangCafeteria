package com.schrestaurant.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class TodayMenuResponseDto {
    private String type;
    private List<TodayMenuDto> items;
    private Long price;
}
