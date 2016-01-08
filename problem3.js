//The prime factors of 13195 are 5, 7, 13 and 29.

//What is the largest prime factor of the number 600851475143 ?

var is_prime = function(input){
    for(j=2; j<=input/2; j++){
        if(input % j === 0){
            return false;
        }
    };
    return true;
}

var main = function(number){
    var output = 0
    for (i=2; i<=(number/2); i++){
        if(is_prime(i)){            
            if(number % i === 0){
            output = i}
        }
    }
    return output;
}

console.log(main(500))