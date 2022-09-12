
-- Database: `bigbrother` and php web application user
CREATE DATABASE bigbrother;
GRANT USAGE ON *.* TO 'bigbrother'@'localhost' IDENTIFIED BY 'bigbrother';
GRANT ALL PRIVILEGES ON bigbrother.* TO 'bigbrother'@'localhost';
FLUSH PRIVILEGES;

USE bigbrother;


--
-- Table structure for table `registration`
--
CREATE TABLE IF NOT EXISTS `registration` (
    `username` varchar(20) NOT NULL,
    `password` varchar(255) NOT NULL,
    `date` timestamp not null,
    PRIMARY KEY (`username`)
);