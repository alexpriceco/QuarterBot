<?php
// Receives apScores from browser(Price) and returns a classes array with type course objects(properties --> string $name, and int units) inside

// Should return something like --> Y1Q1[Course("$name", units), ..., ...,]

// Correlate the test scores with the right pre-req, so we know which pre-req to remove out of the pre-req array in a specific course

// With the remaining objects in the course pre-req array, those are the classes the student needs to take

// Push the appropriate object properties to the Y1Q1[];

// Return Y1Q1 to Browser(Price)

// courseNumber = [credits, barToEnt, "core", "course description."]

$scores = $_POST['apscores']; // Basic text
// Assume the scores are in "APCS 3" format (text)

class Course{
    $courseName;
    $courseUnits;
    $coursePreReqs; // Of type array

    function __construct($courseName, $courseUnits, $coursePreReqs){
        $this->courseName=$courseName;
        $this->courseUnits=$courseUnits;
        $this->coursePreReqs=$coursePreReqs;
    }
}

// Depending on these scores, the function should decide what classes the user should take
function getPath($major, $reqsFulfilled){
	$cleanArray=RmvSP(getCourses($major), $reqsFulfilled);
	$path=new array();
	for ($c=0; $c<count($cleanArray);$c+=2)
	{
		array_push($path, array(NULL , NULL));  // Need to fix
	}

	$q=0;
	$c=0;
	while(count($cleanArray)>0){
		foreach($cleanArray as $x){ // $x = each object in $cleanArray
			if(count($x->$prereqs)==0){
				$path[q][c]=$x;
				if ($c==0){       // C and q define position in the $path 2darray
					$c++;
				}
				else{
					$c=0;
					q++;
				}
				foreach($cleanArray as $y){
					for($z=0; $z<count($y->$prereqs); $z++){
						if ($y->$prereqs[$z]==$x){
							unset($y->$prereqs[$z]);
							$z--;
						}
					}
				}
				unset($x);
				break;
			}
		}
	return $path;
  }
}


?>
