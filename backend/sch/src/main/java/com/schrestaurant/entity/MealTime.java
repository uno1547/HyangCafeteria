package com.schrestaurant.entity;

public enum MealTime {
    BREAKFAST("아침"),
    LUNCH("점심"),
    DINNER("저녁");

    private final String korean;

    MealTime(String korean) {
        this.korean = korean;
    }

    public String getKoreanName() {
        return korean;
    }
}
