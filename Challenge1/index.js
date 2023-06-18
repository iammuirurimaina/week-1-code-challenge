//initialize the function for generating the grades
function generateStudentGrade() {
    //prompt the user to provide the raw student's marks
    const studentMarks = prompt("Enter student marks (between 0 and 100):");
    const marks = parseInt(studentMarks);//converts the input into an integer and stores it in the marks variable

//Confirm that the input is a valid number and is between 0 and 100  

    if (isNaN(marks) || marks < 0 || marks > 100) {// return an error if the input is not a number or between 0 and 100
        let errorMessage = "This is not a valid input!!! Please enter a valid mark between 0 and 100.";
        console.log(errorMessage)
        return errorMessage
      
    }

// if the marks are valid numbers and are between 0 and 100, proceed with generating the grade.
    else { 
        let grade;
        if (marks > 79) { //student scored 80 marks and above
          grade = "A";
        } else if (marks >= 60 && marks <= 79) {//student scored between 60 and 79 marks
          grade = "B";
        } else if (marks >= 50 && marks <= 59) {// student scored between 50 and 59 marks
          grade = "C";
        } else if (marks >= 40 && marks <= 49) {//student scored between 40 and 49 marks
          grade = "D";
        } else {//student scores below 40 marks
          grade = "E";
        }
      
        return `The student has scored ${marks} marks and their grade is ${grade}.`;
    }
  
}
  
 //Call and execute the function by logging the grade assigned to the console
  console.log(generateStudentGrade());
  
