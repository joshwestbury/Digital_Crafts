CREATE TABLE restaurant (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT,
    address VARCHAR,
    category TEXT
);

CREATE TABLE reviewer (
    id INTEGER NOT NULL PRIMARY KEY,
    name TEXT,
    email TEXT,
    karma INTEGER DEFAULT 0 CHECK (karma >= 0 AND karma <= 7)
);


CREATE TABLE review (
    id INTEGER NOT NULL PRIMARY KEY,
    reviewer_id INTEGER REFERENCES reviewer (id),
    stars INTEGER DEFAULT 0 CHECK (stars >= 0 AND stars <= 5),
    title TEXT,
    review TEXT,
    restaurant_id INTEGER REFERENCES restaurant (id)
);

---------------------------QUERIES---------------------------------------
List all the reviews for a given restaurant given a specific restaurant ID.


SELECT review.review FROM review WHERE id = 2;

-- 	2.	List all the reviews for a given restaurant, given a specific restaurant name.


SELECT review.review FROM review WHERE title = 'Olive Garden';

-- 	3.	List all the reviews for a given reviewer, given a specific author name.


SELECT review.review FROM reviewer
	LEFT OUTER JOIN review
		ON review.reviewer_id = reviewer.id
		WHERE name = 'josh westbury';

-- 4. List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.

SELECT review.review, review.title FROM reviewer
	LEFT OUTER JOIN review
		ON review.reviewer_id = reviewer.id;

--

SELECT review.review, restaurant.name FROM reviewer
	LEFT OUTER JOIN review
		ON review.reviewer_id = reviewer.id
	LEFT OUTER JOIN restaurant
		ON review.restaurant_id = restaurant.id;

-- 	5. Get the average stars by restaurant. The result should have the restaurant name and its average star rating.

SELECT restaurant.name, AVG(review.stars) FROM restaurant
	LEFT OUTER JOIN review
		ON review.restaurant_id = restaurant.id
	GROUP BY restaurant.name
	ORDER BY AVG DESC;


-- 6. Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.

SELECT restaurant.name, COUNT(review.review) FROM restaurant
	LEFT OUTER JOIN review
		ON review.restaurant_id = restaurant.id
	GROUP BY restaurant.name
	ORDER BY COUNT DESC;

--	7. List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.

SELECT review.review,  restaurant.name AS restaurant_name, reviewer.name FROM reviewer
	LEFT OUTER JOIN review
		ON review.reviewer_id = reviewer.id
	LEFT OUTER JOIN restaurant
		ON review.restaurant_id = restaurant.id;

-- 	8. Get the average stars given by each reviewer. (reviewer name, average star rating)


SELECT reviewer.name, AVG(review.stars) FROM reviewer
	LEFT OUTER JOIN review
		ON review.reviewer_id = reviewer.id
	GROUP BY reviewer.name
	ORDER BY AVG DESC;
