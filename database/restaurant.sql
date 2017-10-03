CREATE TABLE restaurant (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR,
    distance INTEGER,
    stars INTEGER,
    category VARCHAR,
    favorite_dish VARCHAR,
    does_takeout BOOLEAN,
    last_time_you_ate_there DATE
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'pappasitos', 3, 4, 'mexican', 'fajitas', TRUE, '2017-07-03'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'cheesecake factory', 5, 3, 'americana', 'bacon cheeseburger', TRUE, '2017-08-12'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'olive garden', 10, 2, 'italian', 'lasagnia', FALSE, '2017-09-10'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'swinging door', 8, 5, 'bbq', 'ribs', FALSE, '2017-09-18'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'mod pizza', 12, 5, 'pizza', 'pepporoni pizza', TRUE, '2017-06-27'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'five guys', 4, 3, 'burgers', 'cheeseburger', TRUE, '2017-07-02'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'ruthies', 1, 4, 'mexican', 'carne asada', FALSE, '2016-12-11'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'ginos', 3, 2, 'pizza', 'cheese pizza', TRUE, '2017-06-22'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'oikos', 9, 5, 'greek', 'lamb', TRUE, '2017-03-16'
);

INSERT INTO restaurant VALUES (
    DEFAULT, 'fadis', 3, 4, 'mediterranean', 'humas', TRUE, '2017-05-02'
);


---------------------

SELECT * FROM restaurant WHERE stars = 5;

SELECT  favorite_dish FROM restaurant WHERE stars = 5;

SELECT id FROM restaurant WHERE name = 'ruthies';

SELECT * FROM restaurant WHERE category = 'bbq';

SELECT * FROM restaurant WHERE does_takeout = TRUE;

SELECT * FROM restaurant WHERE does_takeout = TRUE AND category = 'pizza';

SELECT * FROM restaurant WHERE distance < 2;

SELECT * FROM restaurant WHERE last_time_you_ate_there < '2017-09-25';

SELECT * FROM restaurant ORDER BY distance LIMIT 2;

SELECT * FROM restaurant WHERE distance < 4 ORDER BY stars DESC LIMIT 2;

SELECT COUNT (*) FROM restaurant;

SELECT category, COUNT(category) FROM restaurant GROUP BY category;

SELECT category, AVG(stars) FROM restaurant GROUP BY category;

SELECT category, MAX(stars) FROM restaurant GROUP BY category;
