-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 10, 2018 at 04:31 PM
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
(' ', 29),
('!', 17),
('#', 16),
('$', 5),
('%', 7),
('&', 6),
('(', 12),
(')', 12),
('*', 9),
('+', 6),
(',', 5),
('-', 7),
('.', 7),
('/', 7),
('<', 8),
('=', 5),
('>', 7),
('?', 5),
('@', 5),
('^', 5),
('_', 7);

-- --------------------------------------------------------

--
-- Table structure for table `freqtabcap`
--

CREATE TABLE `freqtabcap` (
  `symbol` char(2) NOT NULL,
  `freq` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `freqtabcap`
--

INSERT INTO `freqtabcap` (`symbol`, `freq`) VALUES
('A', 2),
('B', 2),
('C', 2),
('D', 1),
('E', 1),
('F', 1),
('G', 1),
('H', 4),
('I', 2),
('J', 1),
('K', 2),
('L', 1),
('M', 7),
('N', 1),
('O', 1),
('P', 6),
('Q', 2),
('R', 1),
('S', 3),
('T', 2),
('U', 1),
('V', 2),
('W', 3),
('X', 1),
('Y', 1),
('Z', 2);

-- --------------------------------------------------------

--
-- Table structure for table `freqtabnum`
--

CREATE TABLE `freqtabnum` (
  `symbol` char(2) NOT NULL,
  `freq` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `freqtabnum`
--

INSERT INTO `freqtabnum` (`symbol`, `freq`) VALUES
('0', 9),
('1', 9),
('2', 7),
('3', 6),
('4', 7),
('5', 7),
('6', 7),
('7', 7),
('8', 7),
('9', 7);

-- --------------------------------------------------------

--
-- Table structure for table `freqtabsmall`
--

CREATE TABLE `freqtabsmall` (
  `symbol` varchar(2) NOT NULL,
  `freq` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `freqtabsmall`
--

INSERT INTO `freqtabsmall` (`symbol`, `freq`) VALUES
('a', 30),
('b', 6),
('c', 6),
('d', 14),
('e', 17),
('f', 17),
('g', 5),
('h', 14),
('i', 12),
('j', 12),
('k', 8),
('l', 4),
('m', 4),
('n', 12),
('o', 9),
('p', 6),
('q', 5),
('r', 16),
('s', 28),
('t', 10),
('u', 5),
('v', 6),
('w', 7),
('x', 4),
('y', 7),
('z', 5);

-- --------------------------------------------------------

--
-- Table structure for table `pass`
--

CREATE TABLE `pass` (
  `id` int(200) NOT NULL,
  `pass` varchar(500) NOT NULL,
  `pid` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pass`
--

INSERT INTO `pass` (`id`, `pass`, `pid`) VALUES
(1, 'Hx-kjffewNbHs.432', 1),
(2, 'kjfadTIgfad/da<60,,5<<<<<<', 2),
(3, 'JIil=>78kjfkjfecxef', 3),
(4, 'Km?%91kfhuhdegfebc987', 4),
(5, 'Lzin-4332_qir', 5),
(6, 'UniKloOv+.65', 6),
(7, 'seriouslyQ/=01', 7),
(8, 'mnsR>?42>>>>', 8),
(9, 'Syp_%654532nyter', 9),
(10, 'AnVq-+87jhjhyenb', 10),
(11, 'Hx-.42jhfafsafas', 12),
(12, 'Hx.-42fggfd', 13),
(13, 'Qy/=01', 7),
(14, 'Wv?_79', 15),
(15, 'Xm$%86', 16),
(16, '+&01Yp', 17),
(17, 'Sp_%65', 9),
(18, 'Sp_%65Ms', 9),
(19, 'Zq/,89', 18),
(20, 'Vq-+87', 10),
(21, 'Bu?=01uyhnb', 19),
(22, 'Cv@&79jhda', 20),
(23, 'Wv/.01azin', 12),
(24, 'Wv/.01jhda', 12);

-- --------------------------------------------------------

--
-- Table structure for table `policytab`
--

CREATE TABLE `policytab` (
  `id` int(200) NOT NULL,
  `inchar1` varchar(2) NOT NULL,
  `inchar2` varchar(2) NOT NULL,
  `insym1` varchar(2) NOT NULL,
  `insym2` varchar(2) NOT NULL,
  `innum1` varchar(2) NOT NULL,
  `innum2` varchar(2) NOT NULL,
  `avchar1` varchar(2) NOT NULL,
  `avchar2` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `policytab`
--

INSERT INTO `policytab` (`id`, `inchar1`, `inchar2`, `insym1`, `insym2`, `innum1`, `innum2`, `avchar1`, `avchar2`) VALUES
(1, 'H', 'x', '-', '.', '4', '2', 'M', 'a'),
(2, 'I', 'g', '/', '<', '6', '5', 'M', 's'),
(3, 'J', 'l', '=', '>', '7', '8', 'M', 'a'),
(4, 'K', 'm', '?', '%', '9', '1', 'M', 'a'),
(5, 'L', 'q', '-', '_', '4', '2', 'M', 'a'),
(6, 'O', 'v', '.', '+', '6', '5', 'M', 'a'),
(7, 'Q', 'y', '/', '=', '0', '1', 'M', 'a'),
(8, 'R', 'm', '>', '?', '4', '2', 'M', 'a'),
(9, 'S', 'p', '_', '%', '6', '5', 'M', 's'),
(10, 'V', 'q', '-', '+', '8', '7', 'M', 's'),
(11, 'W', 'v', '/', '.', '0', '1', 'M', 's'),
(12, 'W', 'v', '/', '.', '0', '1', 'M', 's'),
(13, 'W', 'v', '=', '/', '0', '1', 'M', 'a'),
(14, 'W', 'v', '=', '/', '0', '1', 'M', 'a'),
(15, 'W', 'v', '?', '_', '7', '9', 'M', 'a'),
(16, 'X', 'm', '$', '%', '8', '6', 'M', 'a'),
(17, 'Y', 'p', '+', '&', '0', '1', 'M', 'a'),
(18, 'Z', 'q', '/', ',', '8', '9', 'M', 's'),
(19, 'B', 'u', '?', '=', '0', '1', 'M', 's'),
(20, 'C', 'v', '@', '&', '7', '9', 'M', 's'),
(21, 'D', 'z', '$', ',', '3', '9', 'M', 'a'),
(22, 'D', 'l', '$', ',', '3', '9', 'M', 'a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pass`
--
ALTER TABLE `pass`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pid` (`pid`);

--
-- Indexes for table `policytab`
--
ALTER TABLE `policytab`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pass`
--
ALTER TABLE `pass`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT for table `policytab`
--
ALTER TABLE `policytab`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `pass`
--
ALTER TABLE `pass`
  ADD CONSTRAINT `fkey` FOREIGN KEY (`pid`) REFERENCES `policytab` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
