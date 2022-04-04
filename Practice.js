// Convert an array to string and verify if email @gmails are there orr not
var emails = ['ram@gmail.com','guru@ymail.com','sunil@gmail.com','jyo@hdfc.com','vik@gmail.com','krish@gmail.com']
var str_emails = emails.toString()
// console.log(str_emails);

for (let i=0; i<=emails.length-1;i++)
{
    if (emails[i].includes('gmail.com'))
    {
        console.log(emails[i]);
    }
}

