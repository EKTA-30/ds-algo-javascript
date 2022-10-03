// General Form of AP	a, a + d, a + 2d, a + 3d, . . .
// The nth term of AP	an = a + (n – 1) × d
// Sum of n terms in AP	S = n/2[2a + (n − 1) × d]

function nthAP(firstTerm,n,difference){
    if(n==0)
    return 0;
    if(n==1)
    return firstTerm;

    let smallerAnswer = nthAP(firstTerm,n-1,difference);
    // console.log(smallerAnswer);
    return  difference + smallerAnswer;
}

console.log(nthAP(1,7,4));