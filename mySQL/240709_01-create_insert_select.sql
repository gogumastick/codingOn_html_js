SELECT * FROM kdt13.user2;
INSERT INTO user2 (id, pw, name, gender, birthday,age) VALUES
('hong1234','8o4bkg','홍길동','M','1990-01-31',33),
('sexysung','87awjkdf','성춘향','f','1992-03-31',31),
('power70','qxur8sda','변사또','M','1970-05-02',53),
('hanjo','jk48fn4','한조','M','1984-10-18',39),
('window','38ewifh3','위도우','F','1976-06-27',47),
('dvadva','k3f3ah','송하나','F','2001-06-03',22),
('jungkrat','4ifha7f','정크랫','M','1999-11-11',24)
;
SELECT * FROM user2 ORDER BY birthday ASC;
SELECT * FROM user2 WHERE gender='m' ORDER BY name DESC;
SELECT id, name FROM user2 WHERE birthday LIKE '199%';
SELECT * FROM user2 WHERE birthday LIKE '____-06-__' ORDER BY birthday ASC;
SELECT * FROM user2 WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC;
SELECT * FROM user2 WHERE gender='m' and birthday LIKE '197%';
SELECT * FROM user2 ORDER BY age DESC LIMIT 3;
SELECT * FROM user2 WHERE age >= 25 AND age <= 50;
SELECT * FROM user2 WHERE age BETWEEN 25 AND 50;
UPDATE user2 SET pw='123456789' WHERE id='hong1234';
DELETE FROM user2 WHERE id='jungkrat';

