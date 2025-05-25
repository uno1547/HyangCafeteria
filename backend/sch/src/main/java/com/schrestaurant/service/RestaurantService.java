package com.schrestaurant.service;

import com.schrestaurant.dto.MenuDto;
import com.schrestaurant.dto.SimpleMenuDto;
import com.schrestaurant.dto.TodayMenuDto;
import com.schrestaurant.dto.TodayMenuResponseDto;
import com.schrestaurant.entity.MealTime;
import com.schrestaurant.entity.Menus;
import com.schrestaurant.entity.Restaurant;
import com.schrestaurant.repository.RestaurantRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.time.LocalDate;
import java.util.*;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RestaurantService {

    private final RestaurantRepository restaurantRepository;

    public List<Restaurant> getRestaurantByBuilding(String buildingName) {
        return restaurantRepository.getRestaurantsByBuildingName(buildingName);
    }

    public List<Menus> getMenusByRestaurant(String restaurantName) {
        Restaurant restaurant = restaurantRepository.findByRestaurantName(restaurantName)
                .orElseThrow(() -> new RuntimeException("식당을 찾을 수 없습니다."));

        return restaurant.getMenus();
    }

    public Map<String, Map<String, List<SimpleMenuDto>>> getTodayMenus(String buildingName, LocalDate date) {
        if (!buildingName.equals("h1")) {
            throw new IllegalArgumentException("오늘의 메뉴는 향1 건물만 지원합니다.");
        }

        String restaurantName = "학생식당";

        Map<String, Map<String,List<SimpleMenuDto>>> result = new LinkedHashMap<>();

        for (MealTime mealTime : MealTime.values()) {
            List<Menus> menus = restaurantRepository.findByRestaurantNameAndData(restaurantName,date,mealTime);

            //카테고리별로 분류
            Map<String, List<SimpleMenuDto>> categorizedMenus = menus.stream()
                    .collect(Collectors.groupingBy(
                                    (Menus m) -> m.getCategory().name(),
                                    LinkedHashMap::new,
                                    Collectors.mapping(m -> new SimpleMenuDto(m.getName(), m.getPrice()),
                                            Collectors.toList()
                                    )
                            )
                    );

            result.put(mealTime.name().toLowerCase(), categorizedMenus);
        }
        return result;
    }

    public Map<String, TodayMenuResponseDto> getTodayMenusV2(String buildingName, LocalDate date) {
        if (!buildingName.equals("h1")) {
            throw new IllegalArgumentException("오늘의 메뉴는 향1 건물만 지원합니다.");
        }

        String restaurantName = "학생식당";

        Map<String, TodayMenuResponseDto> result = new LinkedHashMap<>();

        for (MealTime mealTime : MealTime.values()) {
            List<Menus> menus = restaurantRepository.findByRestaurantNameAndData(
                    restaurantName, date, mealTime
            );

            String type = determineType(menus); // 일반 / 특식 판단
            List<TodayMenuDto> items = menus.stream()
                    .map(menu -> new TodayMenuDto(menu.getName(), menu.getCategory()))
                    .toList();

            Long price = menus.isEmpty() ? 0L : menus.get(0).getPrice(); // 동일 가격 가정

            result.put(mealTime.getKoreanName(), new TodayMenuResponseDto(type, items, price));
        }

        return result;
    }




    private List<MenuDto> mapToDto(List<Menus> menus) {
        return menus.stream().map(m ->
                new MenuDto(
                        List.of(m.getName().split(",")),
                        m.getPrice(),
                        m.getUrl()
                )
        ).toList();
    }

    private String determineType(List<Menus> menus) {
        if (menus.size() == 1 && menus.get(0).getCategory() == null) {
            return "특식";
        }
        return "일반";
    }

}
