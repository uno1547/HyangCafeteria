package com.schrestaurant.repository;

import com.schrestaurant.entity.BreakfastStock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BreakfastRepository extends JpaRepository<BreakfastStock, Long> {

}
