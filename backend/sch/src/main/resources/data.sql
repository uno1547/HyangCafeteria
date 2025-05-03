--h1 건물 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h1','학생식당','/images/studentRestaurant.png');
--h2 건물 내 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h2', '또박이육개장', '/images/ddobagi.png'),
       ('h2', '크앙분식', '/images/kueang.png'),
       ('h2', '엄가네해장국', '/images/bone.png');

--h3 건물 내 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h3', '라면집', '/images/noodle.png'),
       ('h3', '돈까스집', '/images/hello.png');

--student-hall 건물 내 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('student-hall', '모밀집', '/images/hall.png'),
       ('student-hall', '쌀국수집', '/images/mealNoodle.png');

--h2 식당 내 메뉴
--'또박이육개장' 메뉴 추가
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (
        6500,
        (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'),
        '또바기육개장',
        '/images/ddobaki.png'
       );
-- '크앙분식' 메뉴 추가
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (
           6500,
           (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'),
           '김치볶음밥',
           '/images/friedrice.png'
       ),
       (
           5000,
           (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'),
           '라면',
           '/images/ramen.png'
       );


--h3 식당 내 메뉴
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (4000,(SELECT id FROM restaurant WHERE restaurant_name = '라면집') , '라면정식', '/images/noodleSet.png'),
       (8000,(SELECT id FROM restaurant WHERE restaurant_name = '돈까스집') , '치즈돈까스', '/images/ddongas.png');


--student-hall 식당 내 메뉴
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (8000,(SELECT id FROM restaurant WHERE restaurant_name = '모밀집'),'냉모밀','/images/iceNoddle.png');

-- h1 건물 식당 (학생식당)
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h1', '학생식당', '/images/studentRestaurant.png');

-- ========== 아침 (BREAKFAST) ==========
-- 아침 - 일반 식단 (가격: 6500)
INSERT INTO menus (name, price, url, date, meal_time, category, restaurant_id)
VALUES
    ('쌀밥', 6500, null, CURRENT_DATE, 'BREAKFAST', '밥', 1),
    ('미역국', 6500, null, CURRENT_DATE, 'BREAKFAST', '국', 1),
    ('계란말이', 6500, null, CURRENT_DATE, 'BREAKFAST', '반찬', 1),
    ('김치', 6500, null, CURRENT_DATE, 'BREAKFAST', '반찬', 1);


-- ========== 점심 (LUNCH) ==========
-- 점심 - 특식 (단일 메뉴, category 없음)
INSERT INTO menus (name, price, url, date, meal_time, category, restaurant_id)
VALUES
    ('치킨마요덮밥', 5500, null, CURRENT_DATE, 'LUNCH', '밥', 1);

-- ========== 저녁 (DINNER) ==========
-- 저녁 - 일반 식단 (가격: 4500)
INSERT INTO menus (name, price, url, date, meal_time, category, restaurant_id)
VALUES
    ('보리밥', 4500, null, CURRENT_DATE, 'DINNER', '밥', 1),
    ('김치찌개', 4500, null, CURRENT_DATE, 'DINNER', '국', 1),
    ('동그랑땡', 4500, null, CURRENT_DATE, 'DINNER', '반찬', 1),
    ('무생채', 4500, null, CURRENT_DATE, 'DINNER', '반찬', 1);



-- data.sql
INSERT INTO breakfast_stock (id, stock) VALUES (1, 100);
