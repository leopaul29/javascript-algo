function sdf(str){console.log(str)}

let exercise = "math factoriel: 5facto = 5*4*3*2*1"
sdf(exercise)
// let res=factoriel_rec(5)
let res=factoriel_it(5)
sdf(res)

function factoriel_rec(number) {
    if(number == 0) return 1
    return number*factoriel(number-1)
}


function factoriel_it(n) {
    let res= 1;
    for(i = 2; i<=n; i++) {
        res= res* i;
        sdf(res)
    }
    return res
}