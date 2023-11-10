function calculateGPA() {
    const creditHours1 = parseFloat(document.getElementById("creditHours1").value);
    const points1 = parseFloat(document.getElementById("points1").value);
    const creditHours2 = parseFloat(document.getElementById("creditHours2").value);
    const points2 = parseFloat(document.getElementById("points2").value);
    const creditHours3 = parseFloat(document.getElementById("creditHours3").value);
    const points3 = parseFloat(document.getElementById("points3").value);
    const creditHours4 = parseFloat(document.getElementById("creditHours4").value);
    const points4 = parseFloat(document.getElementById("points4").value);
    const creditHours5 = parseFloat(document.getElementById("creditHours5").value);
    const points5 = parseFloat(document.getElementById("points5").value);
    const creditHours6 = parseFloat(document.getElementById("creditHours6").value);
    const points6 = parseFloat(document.getElementById("points6").value);
    // Calculate GPA based on your university's formula~
    const nepoint1 = points1 * creditHours1;
    const nepoint2 = points2 * creditHours2;
    const nepoint3 = points3 * creditHours3;
    const nepoint4 = points4 * creditHours4;
    const  nepoint5 = points5 * creditHours5;
    const  nepoint6 = points6 * creditHours6;

    const totalCreditHours = creditHours1 + creditHours2 + creditHours3 + creditHours4 + creditHours5 + creditHours6; // Add more credit hours as needed
    const totalPointsEarned = nepoint1 + nepoint2 + nepoint3 + nepoint4 + nepoint5 + nepoint6; // Add more points as needed
  
    const gpa = totalPointsEarned / totalCreditHours;
    // if Gpa is > 2 then you print you are safe else you are on warning 
    if (gpa > 2){
      document.getElementById("gpaResult").style.color = "green";
      document.getElementById("gpaResult").textContent = gpa.toFixed(2) + " You are safe";
    }
    else{
      document.getElementById("gpaResult").style.color = "green";
      document.getElementById("gpaResult").textContent = gpa.toFixed(2) + " You are on warning";
    }


    
  
    //document.getElementById("gpaResult").textContent = gpa.toFixed(2);
  }
  