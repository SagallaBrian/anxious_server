-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 26, 2021 at 01:03 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myngovo`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `rantxt` varchar(50) NOT NULL DEFAULT '10',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pardoned_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2018 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `rantxt`, `created_at`, `pardoned_at`) VALUES
(2017, 'Maureen Wangui', '10', '2021-01-26 13:01:46', '2021-01-26 13:01:46'),
(2014, 'James Kirui', '10', '2021-01-26 12:57:40', '2021-01-26 12:57:40'),
(2015, 'Kevin Omondi', '10', '2021-01-26 12:57:52', '2021-01-26 12:57:52'),
(2013, 'Mary Wangui', '601010b013054', '2021-01-26 12:23:15', '2021-01-26 12:53:04'),
(2012, 'Brian Sagalla', '601010ac87dc2', '2021-01-26 12:23:00', '2021-01-26 12:53:00'),
(2009, 'mark brian', '60101063e12c7', '2021-01-26 12:19:45', '2021-01-26 12:51:47'),
(2016, 'Johnstone Kiptanui', '10', '2021-01-26 12:58:10', '2021-01-26 12:58:10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
