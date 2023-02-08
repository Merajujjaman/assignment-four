/*Problem 1: Let’s play a mind game------->
if you input a number then this function will do this operation ((number * 3 + 10) / 2) - 5
-----------------------------------------------------------------------------------*/
function mindGame(number) {
    if ( typeof number !== 'number' ){
        return 'Please enter a number'
    }
    return (((number * 3 + 10) / 2) - 5);
}

/* Problem 2: Finding even or odd----------->
If you enter a string, this function will count the characters in the string and return whether it is even or odd.
-------------------------------------------------------------------------------- */
function evenOdd(String){
    if ( typeof String !== 'string' ){
        return 'Please enter a string'
    }

    const charecters = String.length ;
    if ( charecters % 2 == 0){
        return 'even';
    }
    else{
        return 'odd'
    }
}

/* Problem 3: Is Less or Greater than seven----------->
-------------------------------------------------------------------------------*/
function isLGSeven(num){
    if ( typeof num !== 'number' ){
        return 'Please enter a number'
    }

    const difference = num - 7 ;
    if (difference < 7){
        return difference
    }
    else {
        const inputDouble = num*2 ;
        return inputDouble;
    }
}

