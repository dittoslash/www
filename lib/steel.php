<?php
require __DIR__ . "/../vendor/autoload.php";
$whoops = new \Whoops\Run;
$whoops->pushHandler(new \Whoops\Handler\PrettyPageHandler);
$whoops->register();

require "/var/www/secconf.php"; // defines $DB_DATABASE, $DB_HOST, $DB_PASS, and $DB_USER

global $db = new medoo([
  'database_type' => 'mysql',
  'datbase_name' => $DB_DATABASE,
  'server' => $DB_HOST,
  'username' => $DB_USER,
  'password' => $DB_PASS
]);
?>
