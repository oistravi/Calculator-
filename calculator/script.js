// let input = document.getElementById('inputBox');
// let button = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(button);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(e.target.innerHtml == '='){
//             string = eval(string);
//             input.value = string;
//         }
//         else if(e.target.innerHtml == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHtml == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;

//         }
        
//         else{
//             string += e.target.innerHtml;
//             input.value = string;
//         }
//     })
// })


let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});