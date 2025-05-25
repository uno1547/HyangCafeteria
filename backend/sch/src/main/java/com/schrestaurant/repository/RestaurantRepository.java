package com.schrestaurant.repository;

import com.schrestaurant.entity.MealTime;
import com.schrestaurant.entity.Menus;
import com.schrestaurant.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    List<Restaurant> getRestaurantsByBuildingName(String buildingName);
    Optional<Restaurant> findByRestaurantName(String restaurantName);

    @Query("SELECT m FROM Menus m "
            + "WHERE m.restaurant.restaurantName = :restaurantName "
            + "AND m.date = :date " + "AND m.mealTime = :mealTime")
    List<Menus> findByRestaurantNameAndData(@Param("restaurantName")String restaurantName,
                                            @Param("date")LocalDate data,
                                            @Param("mealTime") MealTime mealTime);

}
