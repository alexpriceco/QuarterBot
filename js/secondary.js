function secondary(major, apscores) {
    // Assume the scores are "APCS 3 ASFD 4 AFDFS 7 AFDSFSDS content asdfasdf"
    // Parse the string apScores to isolate the text from the spaces
    class Course {
      var courseDesc;
      var courseCredits;
      var ranking;
      var courseCore;

        public function Course(courseDesc, courseCredits, ranking, courseCore) {
            this.courseDesc=courseDesc;
            this.courseCredits=courseCredits;
            this.ranking=ranking;
            this.courseCore=courseCore;
        }
    }
    class APcourse extends Course {
        var score;
    }
    //The part where shit happens
    courses = getCourses(major);
    mySort(courses);
    courses2 = array(array());

    // DONE
    //for each element in courses, it makes a new array in courses2, and fills it with one element from courses
    //makes a 2D array
    for (x=0; x<courses.length; x++) {
        courses2.push(array());
        courses2[x].push(courses[x]);
    }

    courses2 = combineSimilar(courses2);

    // DONE
    apCourses=getAPcredits(major);
    for (q=0; q<apScores.length; q+=2){
        for (Course r in apCourses){
            if (apScores[q]==r.courseDesc){
                r.score=apScores[q+1];
            }
        }
    }

    //DONE
    for (t=0; t<apCourses; t++){
        if (apCourses[t].score=="1" || apCourses[t].score=="2" || apCourses[t].score=="0") {
            apCourses.splice(t);
            t--;
        }
    }

    // DONE
    courses2 = apCred(apCourses, courses2);
    path = quarterify(courses2);
    //courses2 has now been sorted and duplicates combined
    //================================================
    //Functions and such

    //DONE
    function getCourses(major){
        switch (major){
            case "CS":
                return getCMPSBSCourses();
        }
    }

    // DONE
    function getCMPSBSCourses() {
      var courses = [
        CMPS5J = new Course{"CMPS5J:Intro to Java Programming", 5, 0, "CS"},
        CMPS10 = new Course{"CMPS10:Intro to Computer Science", 5, 0, "CS"},
        CMPS12A = new Course{"CMPS12A:Accelerated Intro to Programming", 7, 0, "CS"},
        CMPS12B = new Course{"CMPS12B:Data Structures", 5, 1, "CS"},
        CMPS13H = new Course{"CMPS13H:Computer System’s and C Programming", 5, 0, "CS"},
        MATH19A = new Course{"MATH19A:Calculus for Science, Engineering, and Math", 5, 0, "MATH"},
        MATH19B = new Course{"MATH19B:Calculus for Science, Engineering, and Math", 5, 1, "MATH"},
        MATH20A = new Course{"MATH20A:Honors Calculus", 5, 0, "MATH"},
        MATH20B = new Course{"MATH20B:Honors Calculus", 5, 1, "MATH"},
        MATH23A = new Course{"MATH23A:Vector Calculus", 5, 2, "MATH"},
        AMS10 = new Course{"AMS10:Mathematical Methods for Engineers", 5, 2, "MATH"},
        MATH21 = new Course{"MATH 21:Linear Algebra", 5, 2, "MATH"},
        CMPE16 = new Course{"CMPE 16:Applied Discrete Mathematics",  5, 0, "CE"},
        CMPS101 = new Course{"CMPS 101:Abstract Data Types", 5, 4, "CS"},
        CMPE12_L= new Course{"CMPE 12/L:Computer Systems and Assembly Language", 5, 1, "CE"},
        CMPE110=new Course{"CMPE 110:Computer Architecture", 5, 2, "CE"},
        PHYS5A=new Course{"PHYS 5A/L:Intro to Physics", 5, 0, "SCI"},
        PHYS6A=new Course{"PHYS 6A/L:Intro to Physics",  5, 0, "SCI"},
        CHEM1A=new Course{"CHEM 1A:General Chemistry",  5, 0, "SCI"},
        PHYS5B=new Course{"PHYS 5B/M:General Chemistry", 1, 1, "SCI"},
        PHYS6B=new Course{"PHYS 6B/M:Waves and Optics", 1, 1, "SCI"},
        PHYS5C=new Course{"PHYS 5C/N:Electricity and Magnetism", 1, 1, "SCI"},
        PHYS6C=new Course{"PHYS 6C/N:Electricity and Magnetism", 1, 1, "SCI"},
        CMPS104A=new Course{"CMPS 104A:Compiler Design", 5, 5, "CS"},
        CMPS111=new Course{"CMPS 111:Operating Systems", 5, 5, "CS"},
        CMPS102=new Course{"CMPS 102:Analysis of Algorithms", 5, 5, "CS"},
        CMPS112=new Course{"CMPS 112:Comparative Programming Languages", 5, 5, "CS"},
        CMPS130=new Course{"CMPS 130:Computational Models", 5, 5, "CS"},
        CMPE107=new Course{"CMPE 107:Probability and Statistics for Engineers", 5, 4, "CE" },
        AMS131=new Course{"AMS 131:Introduction to Probability Theory", 5, 4, "CE"},

        //upper division courses
        CMPS115=new Course{"CMPS 115:Introduction to Software Engineering", 5, 6, "DC"},
        CMPS132_W=new Course{"CMPS 132/W:Computability and Computational Complexity", 7, 6, "DC"},
        CMPS180_W=new Course{"CMPS 180/W:Database Systems 1", 7, 6, "DC"},
        CMPS185=new Course{"CMPS 185:Technical Writing and Communication", 5, 5, 6, "DC"},
        CMPS195=new Course{"CMPS 195", 5, 6, "DC"},
        AMS114=new Course{"AMS 114", 5, 6, "UDMATH"},
        AMS147=new Course{"AMS 147", 5, 6, "UDMATH"},
        M115=new Course{"MATH 115:Graph Theory", 5, 6, "UDMATH"},
        M117=new Course{"MATH 117", 5, 6, "UDMATH"},
        M126=new Course{"MATH 126", 5, 6, "UDMATH"},
        M148=new Course{"MATH 148", 5, 6, "UDMATH"},
        CMPS104B=new Course{"CMPS 104B:Fundamentals of Compiler Design", 5, 6, "CC"},
        CMPS117=new Course{"CMPS 117:Software Design 2", 5, 6, "CC"},
        CMPS161=new Course{"CMPS 161", 5, 6, "CC"},
        CMPS161L=new Course{"CMPS 161L", 2, 6, "CC"},
        CMPS165=new Course{"CMPS 165", 5, 6, "CC"},
        CMPS181=new Course{"CMPS 181:Database Systems II", 5, 6, "CC"},
        CMPS183=new Course{"CMPS 183", 5, 6, "CC"},
      ];
    return courses;
    }

    function getAPcredits(major){
      switch (major){
          case core:"CS" : return getAPcmps();
          default : f=array("ya fucked up mate");
                    return f;
      }
    }


    function getAPcmps(){
      var apCourses = [
        APcompSci= new Course {"APCS", 5, 0, "CS"},
        APcalcAB= new Course{"APCALC", 5, 0, "MATH"}
      ];
      return apCourses;
    }

    //DONE
    function mySort(arr[]){
        sorted=false;
        while(!sorted){
            sorted=true;
            for (x=1; x<arr.length; x++){
                if ((arr[x].ranking)>(arr[x-1].ranking)) {
                    temp = arr[x];
                    arr[x] = arr[x-1];
                    arr[x-1] = temp;
                    sorted=false;
                }
            }
        }
    }

    // DONE
    // Take the duplicate courses with equal bar vals and store them in the same place in a 2D array
    function combineSimilar(arr[][]){
        fixed=false;
        while(!fixed){
            fixed=true;
            for (x=1; x<(arr.length); x++){
                if((arr[x][0].ranking)==(array[x-1][0].ranking)&&(arr[x][0].courseCore)==(arr[x-1][0].courseCore)){
                    for(Course c in array[x]) {
                        array[x-1].push(c);
                    }
                    array.splice(x);
                    x--;
                    fixed=false;
                }
            }
        }               // the duplicates are together
        return array;  //at this point, we have a sequentially sorted array
    } //EVERYTHING SHOULD BE IN ORDER BY THIS CURLY BRACE

    // DONE
    function apCred(APcourses, array){
        for (n=0; n<array; n++){
            for(Course g in APcourses){
                if((g.courseCore==array[n][0].courseCore)&&(g.ranking==array[n][0].ranking)){
                    array.splice(n);
                    n--;
                }
            }
        }
    }

    // DONE
    function quarterify(array){ //courses2 is sorted and similarified
        r = array[array[array[]]];
        c=0;
        for (x=0; x<12; x++) {
            credits=0;
            while (credits<13) {
                if((credits+array[x][0].courseCredits)<=12) {
                    r[x][c].push(array[x]);
                    c++; //heheh
                    credits+=array[x][0].courseCredits;
                }
            }
        }
    return r;
    }
}
