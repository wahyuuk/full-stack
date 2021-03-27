-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Mar 2021 pada 06.18
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_test_ictindo`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `car`
--

CREATE TABLE `car` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` decimal(15,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `car`
--

INSERT INTO `car` (`id`, `name`, `brand`, `price`) VALUES
(1, 'Wuling Formo', 'Wuling', '100000000.00'),
(2, 'Suzuki Karimun', 'Suzuki', '105000000.00'),
(3, 'Renault KWID', 'Renault', '110000000.00'),
(4, 'Datsun Go', 'Datsun', '144000000.00'),
(5, 'Daihatsu Sigra', 'Daihatsu', '100000000.00'),
(6, 'Toyota Calya', 'Toyota', '88000000.00'),
(7, 'Daihatsu Alya', 'Daihatsu', '99000000.00'),
(8, 'Toyota Agya', 'Toyota', '84000000.00'),
(9, 'Toyota Inova', 'Toyota', '135000000.00'),
(10, 'Honda Brio', 'Honda', '90000000.00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id`, `name`, `address`, `phone_number`) VALUES
(1, 'Solusi Pratama', 'Jalan Raya Dukuh', '021-293849'),
(2, 'Jaringan Solusindo', 'Simpang 7', '021-869583'),
(3, 'Budi Makmur', 'Ruko Melati', '021-584932');

-- --------------------------------------------------------

--
-- Struktur dari tabel `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `gender` enum('Laki-laki','Perempuan') NOT NULL,
  `place_of_birth` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `address` varchar(250) DEFAULT NULL,
  `phone_number` varchar(15) NOT NULL,
  `company_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `employee`
--

INSERT INTO `employee` (`id`, `name`, `gender`, `place_of_birth`, `date_of_birth`, `address`, `phone_number`, `company_id`) VALUES
(1, 'Budiarto Sanusi', 'Laki-laki', 'Bandung', '1990-02-03', 'Jalan Mawar', '0812-2819-2918', 3),
(2, 'Tanjung Perkasa', 'Laki-laki', 'Aceh', '1991-11-23', 'Jalan Melati', '0853-2182-8675', 2),
(3, 'Rosi', 'Perempuan', 'Jakarta', '1991-11-23', 'Jalan Gang', '0812-5748-9382', 3),
(4, 'Bhayang Budiman', 'Laki-laki', 'Manado', '1991-11-23', 'Gang Kemiri', '0855-2837-9069', NULL),
(5, 'Zainab Permata', 'Perempuan', 'Aceh', '1994-09-29', 'Jl Batu', '0859-2999-9201', 3),
(6, 'Susi', 'Perempuan', 'Surabaya', '1994-06-29', 'Jalan Kerikil', '0855-0902-8981', 1),
(7, 'Alfredo', 'Laki-laki', 'Pontianak', '1991-01-30', 'Gang Kenangan', '0856-9203-3985', 2),
(8, 'Puspa Sukma', 'Perempuan', 'Pekanbaru', '1985-02-03', 'Simpang Kemangi', '0857-1828-3838', NULL),
(9, 'Imam Permadi', 'Laki-laki', 'Lombok', '1993-09-03', 'Jalan Jambu', '0812-3999-1111', 1),
(10, 'John Budiarta', 'Laki-laki', 'Sorong', '1990-04-12', 'Jalan Cabai', '0821-3453-9999', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `employee_car`
--

CREATE TABLE `employee_car` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `employee_car`
--

INSERT INTO `employee_car` (`id`, `employee_id`, `car_id`) VALUES
(1, 1, 1),
(2, 1, 5),
(3, 1, 9),
(4, 2, 2),
(5, 2, 6),
(6, 3, 3),
(7, 4, 4),
(8, 4, 8),
(9, 6, 8),
(10, 7, 8),
(11, 8, 9),
(12, 10, 4),
(13, 10, 5),
(19, 1, 8);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(3, 'admin', 'admin@gmail.com', '$2a$10$mS4mrQaQxIzXTKAF2hBeeercwQ6UfIVl3xxA96ZL1BwalYW0xeZNS'),
(8, 'user', 'user@gmail.com', '$2a$10$fKSzOZmWkENoTge2e7PYsepQayfXO4sAX6F8ouE2M18azEfvlV3/W');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indeks untuk tabel `employee_car`
--
ALTER TABLE `employee_car`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `car`
--
ALTER TABLE `car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT untuk tabel `employee_car`
--
ALTER TABLE `employee_car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`);

--
-- Ketidakleluasaan untuk tabel `employee_car`
--
ALTER TABLE `employee_car`
  ADD CONSTRAINT `employee_car_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`),
  ADD CONSTRAINT `employee_car_ibfk_2` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
