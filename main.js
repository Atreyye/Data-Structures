name_students_array = [];
function submit()
{
    var name_1 = document.getElementById("name_student_1").value;
    var name_2 = document.getElementById("name_student_2").value;
    var name_3 = document.getElementById("name_student_3").value;
    var name_4 = document.getElementById("name_student_4").value;
    name_students_array.push(name_1);
    name_students_array.push(name_2);
    name_students_array.push(name_3);
    name_students_array.push(name_4);
    console.log(name_students_array);
    document.getElementById("display_name").innerHTML = name_students_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}
function sorting(){
    name_students_array.sort();
    console.log(name_students_array);
    document.getElementById("display_name").innerHTML = name_students_array;
}