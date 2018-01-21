-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2018 at 08:14 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heimdall`
--

-- --------------------------------------------------------

--
-- Table structure for table `freqtab`
--

CREATE TABLE `freqtab` (
  `symbol` varchar(7) NOT NULL,
  `freq` int(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `freqtab`
--

INSERT INTO `freqtab` (`symbol`, `freq`) VALUES
(' ', 0),
('!', 0),
('#', 0),
('$', 0),
('%', 0),
('&', 0),
('(', 0),
(')', 0),
('*', 0),
('+', 0),
(',', 0),
('-', 0),
('.', 0),
('/', 0),
('<', 0),
('=', 0),
('>', 0),
('?', 0),
('@', 0),
('^', 0),
('_', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
