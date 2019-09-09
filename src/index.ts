import ParseDate from './parse-date'

const parse = new ParseDate();
const result = parse.getExpirationDate({ months: 3 });

console.log(result);