// Problem Statement – Given an array of n numbers where each element represents a width. We need to arrange them in a
// pyramid. We need to follow below 2 rules while creating that pyramid.
// - Total width of a ith row in pyramid must be less then (i+1)th row
// - Total elements in a ith row in pyramid must be less then (i+1)th row
// Your task is to find the maximum height which can be achieved by arranging the array while following above given rules.
// Input: [ 1, 2, 3, 5, 6, 7 ]

// Rules
// 1. Width at ith row < (i+1)th row
// 2. No of elements at ith row < (i+1)th row

// Approach --> 4 variables
// prevCount and currCount
// prevWidth and currWidth

function maxPyramidHeight(bricks){
    let maxHeight = 0;

    bricks.sort();
    let currCount = 0,prevCount =0;
    let currWidth = 0, prevWidth = 0;


    for(let i=0;i<bricks.length;i++){
        currCount += 1;
        currWidth += bricks[i];

        if(currWidth > prevWidth && currCount >prevCount){
            prevCount = currCount;
            prevWidth = currWidth;

            currCount =0;
            currWidth = 0;

            maxHeight++;
        }
    }
    return maxHeight;
}

let bricks = [6,7,2,4,3,1];
let maxHeight = maxPyramidHeight(bricks);
console.log(maxHeight);
