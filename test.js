var tsmagick = require('./index.js');
var utcDate = new Date();
console.log(utcDate)
tsmagick.addTimeToDate(utcDate, "ms", 3, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result)
        console.log(Date.UTC())
        tsmagick.diffBtwDate(new Date, result);
}
})