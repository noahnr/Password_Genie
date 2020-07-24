INSERT INTO UserNameAndPasswordDemo
    (UserId, UserPassword)
VALUES
    ('John@gg.com', MD5('john123'));
(
U_Id int
(10) unsigned NOT NULL AUTO_INCREMENT,
UserId varchar
(255) DEFAULT NULL,
UserPassword varchar
(255) DEFAULT NULL,
primary key
(U_Id),
UNIQUE KEY `UserId`
(`UserId`)
);
SELECT *
from UserNameAndPasswordDemo
where UserId='John@gg.com';
SELECT *
from UserNameAndPasswordDemo;