package com.schrestaurant.repository;

import com.schrestaurant.entity.WaitingCount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaitingCountRepository extends JpaRepository<WaitingCount, Long> {

}
