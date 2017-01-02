var json = {
    "name": {
     "first": "Yosuke",
     "family": process.argv[2]   
    },
    "birth": {
        "year": 1982,
        "month": 12,
        "day": process.argv[3]
    }
};
// My original solution
//var familyName = json.name.family;
//var birthDay = json.birth.day;


//This is the official one
var {name: {family: familyName}, birth: {day: birthDay}} = json;

console.log(familyName);
console.log(birthDay);