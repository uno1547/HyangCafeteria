package com.schrestaurant.controller;

import com.schrestaurant.dto.*;
import com.schrestaurant.entity.Menus;
import com.schrestaurant.entity.Restaurant;
import com.schrestaurant.service.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/restaurants")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class RestaurantController {

    private final RestaurantService restaurantService;

    @GetMapping("/{buildingName}/stores")
    public ResponseEntity getRestaurantsByBuildingName(@PathVariable("buildingName") String buildingName) {
        List<Restaurant> restaurants = restaurantService.getRestaurantByBuilding(buildingName);

        List<StoreDto> storeDtos = restaurants.stream()
                .map(r -> new StoreDto(r.getRestaurantName(), r.getUrl()))
                .toList();

        return ResponseEntity.ok(new StoreResponseDto(true, storeDtos));
    }

    @GetMapping("/{buildingName}/stores/{restaurantName}/menus")
    public ResponseEntity getMenusByRestaurantName(@PathVariable("restaurantName") String restaurantName) {
        List<Menus> menus = restaurantService.getMenusByRestaurant(restaurantName);

        List<MenuDto> menuDto = menus.stream()
                .map(menu -> new MenuDto(List.of(menu.getName()),menu.getPrice(),menu.getUrl()))
                .toList();

        return ResponseEntity.ok(new MenuResponseDto(true, menuDto));
    }

//    @GetMapping("{buildingName}/today-menus")
//    public ResponseEntity<Map<String, Map<String, List<SimpleMenuDto>>>> getTodayMenus(
//            @PathVariable("buildingName") String buildingName) {
//
//
//        LocalDate today = LocalDate.now();
//        try {
//            Map<String, Map<String, List<SimpleMenuDto>>> result = restaurantService.getTodayMenus(buildingName, today);
//
//            if (result.isEmpty()) {
//                return ResponseEntity.noContent().build();
//            }
//
//            return ResponseEntity.ok(result);
//        }catch (IllegalArgumentException e){
//            return ResponseEntity.badRequest().body(null);
//        }
//    }


    @GetMapping("{buildingName}/today-menus")
    public ResponseEntity<Map<String, TodayMenuResponseDto>> getTodayMenusV2(
            @PathVariable("buildingName") String buildingName) {

        LocalDate today = LocalDate.now();

        Map<String, TodayMenuResponseDto> result = restaurantService.getTodayMenusV2(buildingName, today);

        if (result.isEmpty()) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.ok(result);
    }
}
