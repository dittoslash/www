<?php
require "steel.php"
// Use in the "Post-Receive URLs" section of your GitHub repo.
shell_exec( 'cd /var/www/html/ && git reset --hard HEAD && git pull' );
?>Github pull endpoint. You've seen nothing.
