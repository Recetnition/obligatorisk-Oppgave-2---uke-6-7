   // controller
   function selectBar(barNo) {
    if (chosenBar == barNo ) {
        
        chosenBar = 'ingen'
        console.log('i if')
    }
    else {
        chosenBar = barNo
        console.log('i else')
    }
    show();
}

function deleteBar() {
    numbers.splice(chosenBar -1, 1)
    console.log('delete')
    show();
    
}

function changeBar() {
    console.log('changeBar')
    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
        barFeedback = 'You need to input a value between 1 and 10 </br>'
    }
    else {
    numbers[chosenBar-1] = inputValue
    barFeedback = ''
    }
    
    show();
}
    


function addBar() {
    if (inputValue < 1 || inputValue > 10 || isNaN(inputValue)) {
    barFeedback = 'You need to input a value between 1 and 10 </br>'
    }
    else  {
    numbers.push(inputValue);
    barFeedback = '';
    } 

    show();
}