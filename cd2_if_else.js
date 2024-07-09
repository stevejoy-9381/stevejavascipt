let steve_weight = 85;
let jenny_weight = 73;
let steve_height = 1.66;
let jenny_height = 1.88;
let steve_bmi = steve_weight / steve_height ** 2;
let jenny_bmi = jenny_weight / jenny_height ** 2;
console.log(steve_bmi);
console.log(jenny_bmi);
if(steve_bmi>jenny_bmi)
{
    console.log(`steve bmi ${steve_bmi}  higherthan jennybmi ${jenny_bmi}`);
}
 else{
    console.log(`jennybmi ${jenny_bmi}higherthan steve bmi ${steve_bmi}`);

 }