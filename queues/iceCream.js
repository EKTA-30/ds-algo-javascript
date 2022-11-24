function icecreamChange(notes){
    let countOf5 =0, countOf10 =0;
    for(let i=0;i<notes.length;i++){
        if(notes[i] == 5){
            countOf5++;
        }
        else if(notes[i] == 10){
            if(countOf5 > 0){
                countOf10++;
                countOf5--;
            }
            else 
            return 0;
        }
        else{
            if(countOf10 > 0 && countOf5 >0){
                countOf10--;
                countOf5++;
            }
            else if(countOf5 >=3){
                countOf5 -= 3;
            }
            else{
                return 0;
            }
        }
    }
    return true;
}

let currencyNotes = [10,5,10,20];
console.log(icecreamChange(currencyNotes));