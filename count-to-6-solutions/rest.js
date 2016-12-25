module.exports =(...args) => {
    let results = 0;
    let length = args.length;
    args.forEach(x => results += x);
    return results/length;
};