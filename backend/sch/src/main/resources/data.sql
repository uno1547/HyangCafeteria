--h1 건물 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h1','학생식당','/images/studentRestaurant.png');
--h2 건물 내 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h2', '또박이육개장', '/images/ddobagi.png'),
       ('h2', '크앙분식', '/images/kueang.png'),
       ('h2', '엄가네해장국', '/images/bone.png'),
       ('h2', '컵밥&김밥', '/images/cup_kimbap.png');

--h3 건물 내 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('h3', '라면집', '/images/noodle.png');
--student-hall 건물 내 식당
INSERT INTO restaurant (building_name, restaurant_name, url)
VALUES ('student-hall', '공여사&덮다', '/images/hall.png'),
       ('student-hall', '대한짜장', '/images/mealNoodle.png'),
       ('student-hall', '수오미엔', '/images/mealNoodle.png'),
       ('student-hall', '홍대쌀국수', '/images/mealNoodle.png'),
       ('student-hall', '하즈벤', '/images/mealNoodle.png');

--h2 식당 내 메뉴
-- '또박이육개장' 메뉴 추가
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (7500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '얼큰선지국밥', '/images/ddobaki.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '맑은 소고기국밥(밥포함)', '/images/ddobaki.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '전통 소고기국밥(밥포함)', '/images/ddobaki.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '설렁탕(밥포함)', '/images/ddobaki.png'),
       (6900, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '얼큰설렁탕(밥포함)', '/images/ddobaki.png'),
       (8400, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '부대찌개(면사리+밥포함)', '/images/ddobaki.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '수육국밥(밥포함)', '/images/ddobaki.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '순대국밥(밥포함)', '/images/ddobaki.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '소고기전통육개장(밥포함)', '/images/ddobaki.png'),
       (7000, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '순두부 육개장(밥포함)', '/images/ddobaki.png'),
       (7000, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '부대육개장(밥포함)', '/images/ddobaki.png'),
       (7500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '육개장 수제비(밥포함)', '/images/ddobaki.png'),
       (7500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '쫄.순 육개장(밥포함)', '/images/ddobaki.png'),
       (7500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '육개장치즈라면(밥포함)', '/images/ddobaki.png'),
       (9500, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '보양 도가니탕(밥포함)', '/images/ddobaki.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '추어탕(밥포함)', '/images/ddobaki.png'),
       (10900, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '누룽지반계탕(밥포함)', '/images/ddobaki.png'),
       (8900, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '갈비살해장국', '/images/ddobaki.png'),
       (1000, (SELECT id FROM restaurant WHERE restaurant_name = '또박이육개장'), '공기밥 추가', '/images/ddobaki.png');

-- '엄가네해장국' 메뉴 추가
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (6500,(SELECT id FROM restaurant WHERE restaurant_name = '엄가네해장국'),'뼈해장국','/images/umgane.png'),
       (8000,(SELECT id FROM restaurant WHERE restaurant_name = '엄가네해장국'),'뼈해장국(특대)','/images/umgane.png'),
       (6500,(SELECT id FROM restaurant WHERE restaurant_name = '엄가네해장국'),'우거지내장탕','/images/umgane.png'),
       (1000,(SELECT id FROM restaurant WHERE restaurant_name = '엄가네해장국'),'공기밥추가','/images/umgane.png');



-- '크앙분식' 메뉴 추가
INSERT INTO menus (price, restaurant_id, name, url)
VALUES (7000, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '크앙 냉우동', '/images/KANG.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '치킨스팸마요', '/images/KANG.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '치킨마요덮밥', '/images/KANG.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '직화불삼겹덮밥', '/images/KANG.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '직화불한돈덮밥', '/images/KANG.png'),
       (7000, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '물냉면', '/images/KANG.png'),
       (7300, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '비빔냉면', '/images/KANG.png'),
       (11000, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '불고기냉면', '/images/KANG.png'),
       (12000, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '활화산 육회냉면', '/images/KANG.png'),
       (5000, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '김치우동', '/images/KANG.png'),
       (7000, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '호화스런 짜계치', '/images/KANG.png'),
       (8500, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '삼겹살쫄면', '/images/KANG.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '스팸마요덮밥', '/images/KANG.png'),
       (6500, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '참치마요덮밥', '/images/KANG.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '직화한돈덮밥', '/images/KANG.png'),
       (7900, (SELECT id FROM restaurant WHERE restaurant_name = '크앙분식'), '직화삼겹덮밥', '/images/KANG.png');


-- '컵밥&김밥' 메뉴 추가
-- 메뉴 등록
INSERT INTO menus (price, restaurant_id, name, url)
VALUES
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '황제컵밥', '/images/cup_kimbap_01.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '황후컵밥', '/images/cup_kimbap_02.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '참치모듬컵밥', '/images/cup_kimbap_03.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '제육비빔컵밥', '/images/cup_kimbap_04.png'),
    (8000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '연어컵밥', '/images/cup_kimbap_05.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '닭다리살컵밥', '/images/cup_kimbap_06.png'),
    (6900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '제육만두컵밥', '/images/cup_kimbap_07.png'),
    (7500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '베이컨모듬컵밥', '/images/cup_kimbap_08.png'),
    (6900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '제육닭꼬치컵밥', '/images/cup_kimbap_09.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '쫄깃 감지면', '/images/cup_kimbap_10.png'),
    (4500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '얼큰한면', '/images/cup_kimbap_11.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '잔치국수', '/images/cup_kimbap_12.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '얼큰멸치국수', '/images/cup_kimbap_13.png'),
    (5900, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '칼국수', '/images/cup_kimbap_14.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '김밥', '/images/cup_kimbap_15.png'),
    (4500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '왕소세지김밥', '/images/cup_kimbap_16.png'),
    (4000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '스팸김밥', '/images/cup_kimbap_17.png'),
    (7500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '김밥+얼큰한면', '/images/cup_kimbap_18.png'),
    (7500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '김밥+잔치국수', '/images/cup_kimbap_19.png'),
    (7500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '김밥+얼큰멸치국수', '/images/cup_kimbap_20.png'),
    (7500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '김밥+칼국수', '/images/cup_kimbap_23.png'),
    (8000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '스팸김밥+얼큰한면', '/images/cup_kimbap_24.png'),
    (8000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '스팸김밥+김치국수', '/images/cup_kimbap_25.png'),
    (8000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '스팸김밥+얼큰멸치국수', '/images/cup_kimbap_26.png'),
    (8000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '스팸김밥+잔치국수', '/images/cup_kimbap_27.png'),
    (8000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '스팸김밥+칼국수', '/images/cup_kimbap_28.png'),
    (8500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '왕소세지김밥+얼큰한면', '/images/cup_kimbap_29.png'),
    (8500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '왕소세지김밥+칼국수', '/images/cup_kimbap_30.png'),
    (8500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '왕소세지김밥+김치국수', '/images/cup_kimbap_31.png'),
    (8500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '왕소세지김밥+얼큰멸치국수', '/images/cup_kimbap_32.png'),
    (8500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '왕소세지김밥+잔치국수', '/images/cup_kimbap_33.png'),
    (4500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '롱소세지', '/images/cup_kimbap_34.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '찹쌀도넛츠', '/images/cup_kimbap_35.png'),
    (3000, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '케이준포테이토스틱', '/images/cup_kimbap_36.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '회오리감자', '/images/cup_kimbap_37.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '소세지핫바', '/images/cup_kimbap_38.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '새우핫바', '/images/cup_kimbap_39.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '치즈볼', '/images/cup_kimbap_40.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '츄러스', '/images/cup_kimbap_41.png'),
    (3500, (SELECT id FROM restaurant WHERE restaurant_name = '컵밥&김밥'), '크림츄러스', '/images/cup_kimbap_42.png');



--h3 식당 내 메뉴
-- 향3 건물 식당 (라면집) 메뉴 추가
INSERT INTO menus (name, price, url, restaurant_id)
VALUES
    ('라면', 3000, '/images/ramen.png', (SELECT id FROM restaurant WHERE building_name = 'h3' AND restaurant_name = '라면집')),
    ('치즈추가', 500, '/images/cheese.png', (SELECT id FROM restaurant WHERE building_name = 'h3' AND restaurant_name = '라면집')),
    ('계란추가', 500, '/images/egg.png', (SELECT id FROM restaurant WHERE building_name = 'h3' AND restaurant_name = '라면집')),
    ('공기밥', 1000, '/images/rice.png', (SELECT id FROM restaurant WHERE building_name = 'h3' AND restaurant_name = '라면집')),
    ('프리미엄라면', 4500, '/images/premium_ramen.png', (SELECT id FROM restaurant WHERE building_name = 'h3' AND restaurant_name = '라면집'));



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
INSERT INTO breakfast_stock (id, stock) VALUES (1, 5);
