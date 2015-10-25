<?php
// Receives major and returns the relevant apScores neccesary for pre-req eval

// Receive from browser
$year = 1;
$major = $_POST['major'];

// Local
$cs = new array();
$psych = new array();

class Test{
    $testName;
    $minScore;
    $maxScore;

    public function __construct($testName, $minScore, $maxScore){
        this->testName = $testName;
        this->minScore = $minScore;
        this->maxScore = $maxScore;
    }
    
    // Possibly applicable apScores for pre-req eval
    $apcsTest = new Test("APCS", 0, 5);
    $apCalcAB = new Test("APCALCAB", 0, 5);
    $apCalcBC = new Test("APCALCBC", 0, 5);
    $apPyschTest = new Test("APPYSCH", 0, 5);

    // Push all the values into the $cs and $psych libraries
    array_push($cs, $apcsTest);
    array_push($cs, $apCalcABTest);
    array_push($cs, $apCalcBCTest);
    array_push($psych, $apPyschTest);
}

// Switch case used for scalability in the future
switch ($major){
  case ("cs"):
      $output =  $cs;
      break;
  case ("psych"):
      $output =  $psych;
      break;
  default:
      $output =  "sorry";
      break;
}

echo $output;

?>
