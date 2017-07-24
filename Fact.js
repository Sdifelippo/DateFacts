var moment = require('moment');
const chalk = require('chalk');

var time = moment().format('LLLL');
var day = moment().format('DDDo');
var sec = moment().format('SSSSS');
var dst = moment([2017, 7, 24]).isDST();
var leap = moment().format('');
var now = moment();
var midnight = moment(now);
midnight.hour(0);
midnight.minute(0);
midnight.second(0);
var totalSec = now.diff(midnight, 'seconds')

console.log('It is ' + chalk.blue(time));
console.log('It is the ' + chalk.magenta(day) + ' day of the year');
console.log('It is ' + chalk.cyan(totalSec) + ' seconds into the day');
console.log('It ' + chalk.yellow(dst ? 'is' : 'is not') + ' during Daylight savings time');
console.log('It ' + chalk.red(leap ? 'is' : 'is not') + ' not a leap year');
