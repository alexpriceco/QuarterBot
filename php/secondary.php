//receives $apScores and returns class array with course type objects
//y1q1[Course("$name", units), ..., ...,]

<?php
$regsFulfilled = $_POST['apscores']; //scores will be ints

//depending on these scores, the function should decide what classes that user should take

function getPath($major, $reqsFulfilled){
	$cleanArray=RmvSP(getCourses($major), $reqsFulfilled);
	$path=new array();
	for ($c=0; $c<count($cleanArray);$c+=2)
	{
		array_push($path, array(NULL , NULL));  //need to fix
	}

	$q=0;
	$c=0;
	while(count($cleanArray)>0){
		foreach($cleanArray as $x){ // $x=each object in $cleanArray
			if(count($x->$prereqs)==0){
				$path[q][c]=$x;
				if ($c==0){       //c and q define position in the $path 2darray
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
