var $ = function (id) {
    return document.getElementById(id);
};


var calculateGPA = function(){
    var gr = new Array(9); 
    var cr = new Array(9);
    var input_gr = new Array(8);
    var input_cr = new Array(8);
    var grcount = 10; 
    
    gr[0] = "A"; 
    cr[0] = 4; 
    gr[1] = "B";
    cr[1] = 3;
    gr[2] = "C";
    cr[2] = 2;
    gr[3] = "D";
    cr[3] = 1;
    gr[4] = "F";
    cr[4] = 0;
    gr[5] = "a"; 
    cr[5] = 4; 
    gr[6] = "b";
    cr[6] = 3;
    gr[7] = "c";
    cr[7] = 2;
    gr[8] = "d";
    cr[8] = 1;
    gr[9] = "f";
    cr[9] = 0;
    
    input_gr[0] = $("gr1").value;
    input_gr[1] = $("gr2").value;
    input_gr[2] = $("gr3").value;
    input_gr[3] = $("gr4").value;
    input_gr[4] = $("gr5").value;
    input_gr[5] = $("gr6").value;
    input_gr[6] = $("gr7").value;
    input_gr[7] = $("gr8").value;
    
    input_cr[0] = $("cr1").value;
    input_cr[1] = $("cr2").value;
    input_cr[2] = $("cr3").value;
    input_cr[3] = $("cr4").value;
    input_cr[4] = $("cr5").value;
    input_cr[5] = $("cr6").value;
    input_cr[6] = $("cr7").value;
    input_cr[7] = $("cr8").value;
    
    
    // calculate gpa
    var allGrade = 0;
    var allCredit = 0;
    var gpa = 0;
    for (var i = 0; i < 8; i++)
        {
        if (input_gr[i] == "") 
            break;
        var validgrcheck = 0;
        for (var y = 0; y <= grcount; y++)
                {
                if (input_gr[i] == gr[y])
                        {
                        allGrade = allGrade + (parseInt(input_cr[i],10) * cr[y]);
                        allCredit = allCredit + parseInt(input_cr[i],10);
                        validgrcheck = 1;
                        break;
                        }
                }
                if (validgrcheck == 0)
                {
                        alert("error- could not recognize the grade entered for class " + eval(i +  1) + ". please use standard college grades in the form of a a- b+ ...f.");
                return 0;
                }
        }

// this if-check prevents a divide by zero error
    if (allCredit == 0)
        {
        alert("error- you did not enter any credit values!");
        return 0;
        }

    gpa = allGrade / allCredit;

    alert("Hello, your GPA is "+eval(gpa));

return 0;
}
