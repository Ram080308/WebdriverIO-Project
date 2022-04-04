const reader = require ('xlsx')

const file = reader.readFile("./NopAdmin_Login.xlsx")

let data = []

const sheets = file.SheetNames

for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}

for (let i=0; i<=data.length-1; i++)
{
    console.log(data[i]["Email"])
    console.log(data[i]["Password"])
}
 