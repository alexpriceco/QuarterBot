<?php
// Receives major and returns the relevant apScores neccesary for pre-req eval

$major = $_POST['major'];

// Local
$cs =  array("APCS 0 5", "APCALCAB 0 5", "APCALCBC 0 5", "SCIENCEFOCUS chem phys");
$psych =  array("APPSYCH 0 5");

// Switch case used for scalability in the future
switch ($major) {
    case "cs": echo implode(" ",$cs); break;
    case "psych": echo implode(" ",$psych); break;
    default: echo "sorry"; break;
}
?>
