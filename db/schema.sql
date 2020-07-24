create table UserNameAndPasswordDemo
(
    U_Id int(10)
    unsigned NOT NULL AUTO_INCREMENT,
UserId varchar
    (255) DEFAULT NULL,
UserPassword varchar
    (255) DEFAULT NULL,
primary key
    (U_Id),
UNIQUE KEY `UserId`
    (`UserId`)
);