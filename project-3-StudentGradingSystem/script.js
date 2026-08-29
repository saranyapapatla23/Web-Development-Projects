const maxmark = document.getElementById("max-mark"); 
const obtmark = document.getElementById("obtained-mark"); 
const avgmark = document.getElementById("avg-mark"); 
const calcbtn = document.getElementById("caluclateBtn"); 
const percent = document.getElementById("percent"); 
const resultStats = document.getElementById("resultStats"); 
const Comparison = document.getElementById("Comparison"); 
const resetBtn = document.getElementById("resetBtn");
const progressBar = document.getElementById("progress-bar");

function getgrade(percentage) {
    if (percentage >= 90) {
        return "A+ : Excellent";
    }
    else if (percentage >= 80) {
        return "A : Keep it up !!";
    }
    else if (percentage >= 70) {
        return "B : Good";
    }
    else if (percentage >= 60) {
        return "C : Try to Improve";
    }
    else if (percentage >= 50) {
        return "D : work hard next time";
    }
    else {
        return "F : Dont worry, Work hard";
    }
}
 
calcbtn.addEventListener("click",()=>{ 
    const total = Number(maxmark.value); 
    const student = Number(obtmark.value); 
    const average = Number(avgmark.value);

        if (total <= 0) { //validation check
            alert("Maximum marks must be greater than 0");
            return;
        }
        if (student < 0 || student > total) {
            alert("Student marks must be between 0 and maximum marks");
            return;
        }
    
    const studentpercentage = (student/total)*100; 
    
    percent.textContent = studentpercentage.toFixed(2) + "%"; 
    progressBar.style.width = studentpercentage + "%";
    Comparison.textContent = compareWithAverage(studentpercentage, average); 
    
    const grade = getgrade(studentpercentage);
     resultStats.textContent = grade; 

        progressBar.classList.remove(
            "progress-excellent",
            "progress-average",
            "progress-failed"
        );
        resultStats.classList.remove("excellent", "average", "failed");

        if (studentpercentage >= 80) {
            resultStats.classList.add("excellent");
            progressBar.classList.add("progress-excellent");
        }
        else if (studentpercentage >= 50) {
            resultStats.classList.add("average");
           progressBar.classList.add("progress-average");
        }
        else {
            resultStats.classList.add("failed");
            progressBar.classList.add("progress-failed");
        }
}); 
 
function compareWithAverage(studentpercentage, avgmark) { 
 
    if (studentpercentage > avgmark) { 
        return "Above class average"; 
    } 
    else if (studentpercentage < avgmark) { 
        return "Below class average"; 
    } 
    else { 
        return "Equal to class average"; 
    } 
}
resetBtn.addEventListener("click", () => {
    maxmark.value = "";
    obtmark.value = "";
    avgmark.value = "";

    percent.textContent = "";
    resultStats.textContent = "";
    Comparison.textContent = "";
     progressBar.style.width = "0%";
    progressBar.style.background = "green";
});
