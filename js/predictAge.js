
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let age = [age1, age2, age3, age4, age5, age6, age7, age8]
  let predict = 0
  age.forEach( function(el){
    predict += el * el
  })
  return Math.floor( Math.sqrt(predict) / 2 )
}
