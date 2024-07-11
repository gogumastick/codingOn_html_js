CREATE TABLE customer(
	id varchar(10) not null primary key,
    name varchar(10) not null,
    birthday date not null
);
    
INSERT INTO customer (id, name, birthday) values
('가가가', '고길동', '1990-03-17'),
('나나나', '둘리', '1992-02-06'),
('다다다', '또치', '1991-05-13');

CREATE TABLE orderlist(
	id INT auto_INCREMENT primary key not null,
	customer_id varchar(10) not null,
	product_name varchar(20) not null,
	quantity INT,
	FOREIGN KEY(customer_id) REFERENCES customer(id)
);

INSERT INTO orderlist(customer_id,product_name,quantity) values
('가가가', '맥북프로', 1),
('나나나', '모니터', 10),
('다다다', '키보드', 3),
('나나나', '핸드폰', 2),
('다다다', '마우스', 10);

SELECT * FROM kdt13.customer;
SELECT * FROM kdt13.orderlist;

SELECT * FROM customer INNER JOIN orderlist ON customer.id = orderlist.customer_id;
SELECT customer.id, customer.name, orderlist.product_name FROM customer INNER JOIN orderlist ON customer.id = orderlist.customer_id;
SELECT * FROM customer AS a INNER JOIN orderlist as b on a.id=b.customer_id;
SELECT a.id AS order_id, a.name, b.product_name, b.quantity
FROM customer AS a INNER JOIN orderList AS b ON a.id = b.customer_id
WHERE b.quantity > 5;

CREATE TABLE department(
	id INT primary key auto_increment,
    name varchar(31) not null
);


-- FOREIGN KEY 동일해야 된다 아래의 department_id "INT"가 CREATE TABLE department의 id "INT" 처럼
CREATE TABLE people(
	id INT primary key auto_increment,
    username varchar(31) not null,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

INSERT INTO department (name) values
('기획팀'),
('IT개발팀'),
('디자인팀')
;

INSERT INTO people(department_id, username) values
(2, '홍길동'),
(null, '이몽룡'),
(3, '성춘향'),
(2, '임꺼정'),
(1, '산적'),
(2, '꿍꿍따'),
(3, '오징어')
;

SELECT * FROM people AS a LEFT JOIN department AS b ON a.department_id = b.id;
SELECT * FROM kdt13.people;
SELECT * FROM kdt13.department;








