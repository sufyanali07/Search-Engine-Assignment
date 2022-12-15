var array = [{
    rollno: 1,
    name: "Sufyan",
    Class: 12,
}, {
    rollno: 2,
    name: "Umar",
    Class: 11,
}, student3 = {
    rollno: 3,
    name: "Peter",
    Class: 9,
}, {
    rollno: 4,
    name: "Laila",
    Class: 10,
}, {
    rollno: 5,
    name: "Taimoor",
    Class: 8,
}, {
    rollno: 6,
    name: "Salman",
    Class: 6,
}, {
    rollno: 7,
    name: "Omar",
    Class: 7,
}, {
    rollno: 8,
    name: "Jannat",
    Class: 13,
}, {
    rollno: 9,
    name: "Ali",
    Class: 2,
}, {
    rollno: 10,
    name: "Ahmed",
    Class: 3,
}


]




var student1 = {
    rollno: 1,
    name: "Sufyan",
    Class: 12,
}
var student2 = {
    rollno: 2,
    name: "Umar",
    Class: 11,
}
var student3 = {
    rollno: 3,
    name: "Peter",
    Class: 9,
}
var student4 = {
    rollno: 4,
    name: "Laila",
    Class: 10,
}
var student5 = {
    rollno: 5,
    name: "Taimoor",
    Class: 8,
}
var student6 = {
    rollno: 6,
    name: "Salman",
    Class: 6,
}
var student7 = {
    rollno: 7,
    name: "Omar",
    Class: 7,
}
var student8 = {
    rollno: 8,
    name: "Jannat",
    Class: 13,
}
var student9 = {
    rollno: 9,
    name: "Ali",
    Class: 2,
}
var student10 = {
    rollno: 10,
    name: "Ahmed",
    Class: 3,
}
var inp = document.getElementById('inp')
var pp =document.getElementById('ss')
var oo =document.getElementById('uu')
var ii =document.getElementById('ff')
function search() {
    for (i = 0; i < array.length; i++) {
        if (inp.value == array[i].rollno)
            // hue.innerhtml = array[i]
            ss.innerHTML=(array[i]).name
            uu.innerHTML=(array[i]).Class
            ff.innerHTML=(array[i]).rollno
    }
}