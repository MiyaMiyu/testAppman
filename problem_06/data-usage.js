const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  let textByLine = raw.split("\n")
  let row = []
  let date,user,data,day,sum = [];
  let json = [{ username: 'user01', total:0, average: 0},{username: 'user02', total:0, average: 0},{username: 'user03', total:0, average: 0}]
  textByLine.forEach(element => {
    row = element.split(",");
    date = row[0].split("=");
    user = row[1].split("=");
    data = parseInt(row[2].split("=")[1]);
    day = date[0].split("-")[2];
    if(user[1] === 'user01'){
      json[0].total+=data;
    }
    else if(user[1] === 'user02'){
      json[1].total+=data;
    }
    else if(user[1] === 'user03'){
      json[2].total+=data;
    }
    
  });
  
  return json;
};

module.exports = { dataUsage };
