function primary() {
    var cs = [["Have you taken the AP CS test?", "Didn't take it.", "1", "2", "3", "4", "5"],
              ["Have you taken the AP Calc AB test?", "Didn't take it.", "1", "2", "3", "4", "5"],
              ["Have you taken the AP Calc BC test?", "Didn't take it.", "1", "2", "3", "4", "5"],
              ["Do you prefer chemistry, or physics?", "Chemistry.", "Physics!"]]
    for(i=cs.length; i>0; i--) {
        dialogue.push([discCount][cs[i]]);
        console.log("dialogue: "+dialogue[[2][0]]);
        discCount++;
    } discCount = 2;
}
