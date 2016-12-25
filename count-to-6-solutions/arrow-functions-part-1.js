var inputs = process.argv.slice(2);
var result = inputs.map( x => x[0] )
                    .reduce( (y, z) => y + z);
console.log(`[${inputs}] becomes "${result}"`);