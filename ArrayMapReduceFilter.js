let id = [10,2,3,4,33,23,44,50,8,76,12]
let num = [1,4,2,3]

let orders = ["S12010","N52541","S58785","N550033"]

// Reduce Method
total = id.reduce((sum,amount) => sum+amount,0)
console.log(total);

// Filter method
finalnum = id.filter(fid => fid%2==0).map(mapnum => mapnum*2).reduce((sum,allnum)=> sum+allnum,0)
console.log(finalnum);









//ArrayMapReduceFilter