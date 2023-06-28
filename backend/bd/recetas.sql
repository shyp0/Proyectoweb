-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-06-2023 a las 08:19:29
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recetas`
--

CREATE TABLE `recetas` (
  `ID` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `ingredientes` varchar(500) NOT NULL,
  `preparacion` varchar(1000) NOT NULL,
  `imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`ID`, `nombre`, `descripcion`, `ingredientes`, `preparacion`, `imagen`) VALUES
(1, 'ENSALADA CON NARANAJA, QUESO Y PISTACHOS', 'Empezamos con unas ensaladas para seguir con cremas, platos para mejorar la salud con huevos, pasta, carne, verduras y pescados. ¡Ah! Y nos olvidamos de los postres. Esta ensalada con naranja, queso de cabra y pistachos, estos aportan vitamina, minerales y proteínas. Si no tienes, sustitúyelos por otro fruto seco.', '200 gramos de escarola\r\n50 gramos de rúcula (sustituye escarola y rúcula por la lechuga que tengas)\r\n2 naranjas\r\n300 gramos de rulo de queso de cabra (rebaja calorías con queso fresco)\r\n50 gramos de pistachos\r\n5 cucharadas de aceite de oliva virgen\r\n1 cucharada de vinagre de jerez\r\nCebollino (opcional)\r\nSal', 'Paso 1. Trocea, lava y seca la escarola. Lava y seca la rúcula.\r\nPaso 2. Corta una naranja y media en gajos y retira la piel. Exprime la mitad restante para extraer el zumo.\r\nPaso 3. Lava, seca y pica el cebollino.\r\nPaso 4. Pela y pica los pistachos.\r\nPaso 5. Prepara la vinagreta mezclando cuatro cucharadas de aceite con el vinagre, dos cucharadas de zumo de naranja, una pizca de sal y dos cucharadas de cebollino picado.\r\nPaso 6. Retira la corteza del rulo de queso de cabra, corta el queso en trozos, úntate las manos con aceite para formar bolitas y rebózalas con los pistachos picados.\r\nPaso 7. Reparte los ingredientes en los platos y aliña con la vinagreta.', '1687931729884-receta1.jpg'),
(2, 'ENSALADA SENCILLA Y SALUDABLE CON AGUACATE', 'Las recetas de aguacate con fresa son ideales porque mejoran la salud, porque las últimas aportan vitamina C, entre otras, y los primeros son conocidos como \"oro verde\". Su potasio ayuda a reducir la presión arterial.', '1 bolsa de brotes tiernos\r\n8 fresones\r\n32 fresas\r\n16 tomates cherry\r\n1 aguacate\r\n1 dátil\r\n1/2 limón\r\n1 naranja\r\n1 cucharada de aceite de oliva\r\n1 cucharada de semillas de amapola\r\nPimienta negra recién molida', 'Paso 1. Exprime la naranja y mezcla su zumo, el aceite de oliva, el dátil sin semilla y un pellizquito de pimienta negra recién molida en la batidora. Bate hasta obtener una mezcla suave y añade las semillas de amapola al final.\r\nPaso 2. Pela el aguacate, retírale el hueso y corta su pulpa en cubitos de unos 2 cm. Rocíalos con zumo de limón para que no se oxiden.\r\nPaso 3. Corta los tomates cherry en mitades y los fresones en mitades o cuartos, dependiendo del tamaño que tengan.\r\nPaso 4. Monta los platos. Divide mentalmente el plato en 4 partes, como si fuera la esfera de un reloj, y pon en una los brotes tiernos de ensalada, en otra los tomates, en otra los fresones y en otra el aguacate.\r\nPaso 5. Decora la ensalada con las fresas y acompáñala de la vinagreta de naranja con semillas de amapola.', '1687931796041-receta2.jpg'),
(3, 'CARPACCIO DE PEPINO CON SARDINAS', 'Una receta que mejora la salud y te cuida porque el pepino aporta fibra, vitaminas del grupo B, C, E y A y contiene importantes minerales como el hierro, el calcio, el fósforo, el magnesio y el potasio.', '2 pepinos\r\n12 sardinas limpias y partidas en filetes (puedes usar sardinillas en conserva)\r\n75 gramos de queso de cabra o feta\r\n1 limón\r\nPimienta\r\n6 cucharadas de aceite de oliva\r\n2 cucharadas de vinagre de Jerez\r\nAlcaparras\r\n1 ramita de menta\r\nSal', 'Paso 1. Lava las sardinas, ponlas en una fuente y rocíalas con el zumo del limón. Tápalas con film transparente y déjalas macerar en la nevera durante 3 h. Puedes optar por sardinas o sardinillas en aceite o limón en conserva.\r\nPaso 2. Mientras, prepara la vinagreta: bate el aceite con el vinagre y una pizca de sal hasta obtener una salsa. Añade la menta picada y 2 cucharadas de alcaparras.\r\nPaso 3. Lava el pepino, córtalo en rodajas finas (con cuchillo y paciencia o con mandolina) y colócalas en un plato, superponiéndolas.\r\nPaso 4. Escurre las sardinas, trocéalas y añádelas.\r\nPaso 5. Aromatiza con pimienta, aliña con la vinagreta y sírvelo espolvoreado con el queso.', '1687931857808-receta3.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `recetas`
--
ALTER TABLE `recetas`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `recetas`
--
ALTER TABLE `recetas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
