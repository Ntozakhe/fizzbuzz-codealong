

//get values from the user. We need the fizz and buzz values.

function getValues(){
    // get the user inputs from the page/dom
    let valueFizz = document.getElementById("fizzValue").value;
    let valueBuzz = document.getElementById("buzzValue").value;

    // parse for numbers
    valueFizz = parseInt(valueFizz);
    valueBuzz = parseInt(valueBuzz);

    //check to make sure they are integers
    if(Number.isInteger(valueFizz) && Number.isInteger(valueBuzz)){
        // we call fizzbuzz

        let fbArray= fizzBuzz(valueFizz,valueBuzz);

        //cal display data
        displayData(fbArray)


    }else{
        alert("Please enter a valid integer value");
    }
}

function fizzBuzz(fizzValue,buzzValue){
    // initialise and return an array
    //loop from 1 to 100
    //inside that loop, check the current value if it is in three steps

    let arrayReturn = [];

    for(let i=1;i<=100;i++){
        if (i%fizzValue ==0 && i%buzzValue ==0) {
            arrayReturn.push('FizzBuzz');
        } else if(i%fizzValue ==0){
            arrayReturn.push('Fizz');
        } else if(i%buzzValue ==0){
            arrayReturn.push('Buzz');
        } else{
            arrayReturn.push(i);
        }
    }
    return arrayReturn;

}

function displayData(fbArray){

//get the <tbody> element from the page.

let tableBody = document.getElementById("results");

//get the template rows.

let templateRow = document.getElementById("fbTemplate");

// before we do anything we need to clear the table first.
tableBody.innerHTML = ""; 

//Loop over the array and create a table row for each item.
for(let index = 0; index<fbArray.length; index += 5){
    let tableRow = document.importNode(templateRow.content, true);
    
    // we can grab just the <td>'s and put them in an array.

    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]); // these are used to call the class that will put colors to the values.
    rowCols[0].textContent = fbArray[index];
    
    rowCols[1].classList.add(fbArray[index+1]); // so if class="Fizz" then the text color would be darkgreen.
    rowCols[1].textContent = fbArray[index+1];
    
    rowCols[2].classList.add(fbArray[index+2]);
    rowCols[2].textContent = fbArray[index+2];
    
    rowCols[3].classList.add(fbArray[index+3]);
    rowCols[3].textContent = fbArray[index+3];
    
    rowCols[4].classList.add(fbArray[index+4]);
    rowCols[4].textContent = fbArray[index+4];

    tableBody.appendChild(tableRow);
}    
}


