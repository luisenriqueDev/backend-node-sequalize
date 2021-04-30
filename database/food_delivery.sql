-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-04-2021 a las 23:47:11
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `food_delivery`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `rol` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'DMIN_ROLE', '2021-04-29 17:24:55', NULL),
(2, 'USER_ROLE', '2021-04-29 17:24:55', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `img` text NOT NULL,
  `rol` varchar(255) NOT NULL,
  `estado` tinyint(1) NOT NULL,
  `google` tinyint(1) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `img`, `rol`, `estado`, `google`, `createdAt`, `updatedAt`) VALUES
(1, 'Test 1', 'test1@test.com', '$2a$10$a7jit60D.res8dYJX4R35uwzuGq4B6oLvfRdBMZpE6dUyrLrXyPqu', '', 'ADMIN_ROLE', 1, 0, '2021-04-29 23:45:40', '2021-04-29 23:14:05'),
(2, 'Test 2', 'test2@test.com', '$2a$10$23GPqafl8z3gIsZIT/vaV.Bhx78.rJvSLnkgcGf0NFyb0h6q8Ax86', '', 'USER_ROLE', 1, 0, '2021-04-30 13:46:01', '2021-04-30 13:46:01'),
(3, 'Test 3', 'test3@test.com', '$2a$10$MWg3jtqJWeMI7UUEUY/0D.enOXA3t82qbBVPdC5u0ApgJLBZv/WSe', '', 'USER_ROLE', 1, 0, '2021-04-29 18:29:23', '2021-04-29 18:29:23'),
(4, 'Test 4', 'test4@test.com', '$2a$10$GOVtiotidD90WlOoPI6.Ju.uq673iLpAdfPzTgd7NCWt9vak5LmNi', '', 'USER_ROLE', 1, 0, '2021-04-29 18:29:38', '2021-04-29 18:29:38'),
(5, 'Test 5', 'test5@test.com', '$2a$10$PEv1BzBONyV49uST6x8fVummTVT6oLOueDEJNb3vJUoYr9hAbG0sO', '', 'USER_ROLE', 1, 0, '2021-04-29 18:29:49', '2021-04-29 18:29:49'),
(6, 'Test 6', 'test6@test.com', '$2a$10$jn9WbNmNCYdDe3K5qMsqE.b5fjuQwwHqpAysqbs7hggb32Hg/bHWW', '', 'USER_ROLE', 1, 0, '2021-04-29 18:29:56', '2021-04-29 18:29:56'),
(7, 'Test 7', 'test7@test.com', '$2a$10$UJ5URSsAiXBztOmPgu43ye4eLuIfnSahKFzy9Th0StkjfbaEUdH7i', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:06', '2021-04-29 18:30:06'),
(8, 'Test 8', 'test8@test.com', '$2a$10$Ll8HhMeEmEsHWLQppd9N0e3.1LzZFhtauoLEfG5y4.tano3ztjEqS', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:13', '2021-04-29 18:30:13'),
(9, 'Test 9', 'test9@test.com', '$2a$10$TxyNSULrgsdxI3Pqws5.Pu1wtT6M1dP0RiWlGdW6sg9UEGmXAB1jW', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:20', '2021-04-29 18:30:20'),
(10, 'Test 10', 'test10@test.com', '$2a$10$/thi5qNm7KW1YZw73ZCzbOFBFglanVRn2FZt6epuipNV4f.PbUjWG', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:28', '2021-04-29 18:30:28'),
(11, 'Test 11', 'test11@test.com', '$2a$10$FkLmr6.lYL74D05FkPFBb.ZEZvBjlzquXrPO3VcBevl.DT5hOO5V6', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:34', '2021-04-29 18:30:34'),
(12, 'Test 12', 'test12@test.com', '$2a$10$9PdNasduReJ6F6susGHF..amHY010S6k7OpRFEY3oMhSxh./ukTri', '', 'USER_ROLE', 1, 0, '2021-04-30 21:47:04', '2021-04-30 20:42:41'),
(13, 'Test 13', 'test13@test.com', '$2a$10$/RZQQzFfDWvkNCeanCfxm.uXKh37hLnYznjhQsRnQY50o8Vn3Q1fu', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:49', '2021-04-29 18:30:49'),
(14, 'Test 14', 'test14@test.com', '$2a$10$pSwc16OFYecBmgmXOBv7PuTjs1EHaM/V5yQWw/4fiDGbV2es/INK2', '', 'USER_ROLE', 1, 0, '2021-04-29 18:30:56', '2021-04-29 18:30:56'),
(15, 'Test 15', 'test15@test.com', '$2a$10$sp0LMgjj6YCs.JU22SQGLut1u7COD.Ej1MMg76/2SxylUbnTBihUq', '', 'USER_ROLE', 0, 0, '2021-04-29 23:45:48', '2021-04-29 23:45:48');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
