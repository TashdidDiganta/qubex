


function oddAvarage(numbers){

    const odds = [];
    for(number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }

    let sum = 0;
    for(const oddNumber of odds){
        sum = sum + oddNumber;
    }
    let lenght = odds.length
    let avg = Math.round(sum/lenght, 4) 

    console.log(avg)
}

const array = [3,52,37,42,21,83];

 oddAvarage(array);

