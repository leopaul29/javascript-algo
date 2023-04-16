let exercise = "Pour calculer le maximum, je parcours les éléments un à un et je les compare au plus grand élément trouvé jusqu’à présent"
sdf(exercise)

let array = [1,5,9,4,5,4,7,6,5,45,5,2,9,5,5,84,459,49,45,549,4,5,61,56,156,15,9,819,489]
sdf(array)

// let max = 0
// array.forEach(element => {
//     if (element > max) {
//         max = element
//         sdf(element)
//     }
// });
// sdf("res:"+max)

array.sort((a,b)=>a-b)
sdf(array)
sdf("res:"+array[array.length-1])

function sdf(str){console.log(str)}