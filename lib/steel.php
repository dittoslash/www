<?php
require __DIR__ . "/../vendor/autoload.php";
require "/var/www/secconf.php"
$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();


?>
