-- SELECT * FROM kdt13.user;
-- select * from user where age < 70 and age >=20;
-- SELECT * FROM user where username = '관창';
-- SELECT * FROM user where age > 20 ORDER BY username ASC;
-- %%는 일부 문자열 검색 뒤%는 시작하는 문자로 검색 앞%는 끝나는 문자로 검색 
-- SELECT * FROM user WHERE address LIKE '서%';
-- '___군'(언더바 3ea) 마지막 글자가 '군'인 사람 >> 언더바는 해당 텍스트 갯수.
-- SELECT * FROM user WHERE username LIKE '___군';
-- SELECT * FROM user WHERE age BETWEEN 20 AND 90;
-- SELECT * FROM user WHERE age IN(20,90) ORDER BY age DESC LIMIT;
-- select * from user where age between 23 and 25;
select * from user where age in (23, 24, 25) order by age desc limit 3;
-- select * from user where address is null;
-- use kdt13;
select * from user;
-- UPDATE user SET address = '부산시 해운대', age=25 WHERE id=1;
DELETE FROM user where id in(3,6);


