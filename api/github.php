<?php
require "steel.php";
// Use in the "Post-Receive URLs" section of your GitHub repo.
echo(shell_exec( 'cd .. && git pull' ));
?>
