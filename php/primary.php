<?php

$major = $_POST['response'];

// Local
$cs =  array("APCS 0 5", "APCALCAB 0 5", "APCALCBC 0 5", "SCIENCEFOCUS chemistry physics");
$psych =  array("APPSYCH 0 5");

// Switch case used for scalability in the future
switch ($major) {
    case '0': echo implode(" ",$cs); break;
    case '1': echo implode(" ",$psych); break;
    default: echo "sorry"; break;
}
?>
