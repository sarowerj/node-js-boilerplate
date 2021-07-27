-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2021 at 01:09 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `advertisment`
--

-- --------------------------------------------------------

--
-- Table structure for table `ad_email_templates`
--

CREATE TABLE `ad_email_templates` (
  `id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `created_by` int(11) NOT NULL,
  `updated_at` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ad_email_templates`
--

INSERT INTO `ad_email_templates` (`id`, `subject`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`, `slug`, `message`) VALUES
(1, 'Thank you for registering on Advertisment', '2021-07-21 18:39:07.000000', 1, '2021-07-13 14:37:32', 1, 1, 'registration-thank-you', '<p>Hi, Name</p><p>Thank you for registering on our platform. You are most welcome to be here. Please log in and start your business.&nbsp;</p><p>Best Regards,</p><p>Advertisment Agency</p>'),
(2, 'Please verify your email address ', '2021-07-21 18:39:07.000000', 1, '2021-07-13 14:37:32', 1, 1, 'registration-email-verification', ''),
(3, 'Layout', '2021-07-14 16:01:55.000000', 1, '2021-07-15 12:01:54', 1, 1, 'layout', '<!DOCTYPE html> <html lang=\"en\"> <head>     <meta charset=\"UTF-8\">     <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">     <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">     <title>Email</title> </head> <body style=\"background: rgb(236, 236, 236);\">     <div style=\"max-width: 700px;margin:auto; background:white;\">         <header style=\"background:#5f27cd; padding: 20px; color: white; text-align: center;\">             <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAyCAYAAACH65NBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjM2IwNzk1Ni1hMjRlLWFlNDEtOTRkOS02YzE1YTIwZTRhODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODVBMzZGNUI5QTU4MTFFOTlBNjFEMjQ5QzdBRjBCNUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODVBMzZGNUE5QTU4MTFFOTlBNjFEMjQ5QzdBRjBCNUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzNiMDc5NTYtYTI0ZS1hZTQxLTk0ZDktNmMxNWEyMGU0YTg3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmMzYjA3OTU2LWEyNGUtYWU0MS05NGQ5LTZjMTVhMjBlNGE4NyIv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\" alt=\"Red dot\" />         </header>          <main style=\"padding:15px;\">             _CONTENT_         </main>         <footer style=\"background:#3f1494; padding: 20px; color: white; text-align: center;\">             <div>                 <a style=\"color:white; margin:0 10px; display:inline-block;\" href=\"/home\">Home</a>                 <a  style=\"color:white; margin:0 10px; display:inline-block;\" href=\"/home\">About Us</a>                 <a style=\"color:white; margin:0 10px; display:inline-block;\" href=\"/home\">Services</a>                 <a style=\"color:white; margin:0 10px; display:inline-block;\" href=\"/home\">Contact Us</a>             </div>         </footer>         <footer style=\"background:#4c18b4; padding: 10px; text-align: center; color: rgba(255, 255, 255, 0.808);\">             &copy; Advertisment Agency, 2021 <br>             All rights reaserved by the agency.         </footer>     </div> </body> </html>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ad_email_templates`
--
ALTER TABLE `ad_email_templates`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ad_email_templates`
--
ALTER TABLE `ad_email_templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
