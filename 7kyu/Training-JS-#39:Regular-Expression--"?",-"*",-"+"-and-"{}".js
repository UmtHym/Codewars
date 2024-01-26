
// According to the following rules:

// The numeric string first digit should be "9".
// At the end of the number string there are at least four "0".
// It can also be a negative number(This means that the string may be started by "-", maybe not)
// Examples

// regex.test("90000") should return true
// regex.test("-90000") should return true
// regex.test("900000000") should return true
// regex.test("91230000") should return true
// regex.test("-91230000") should return true

// regex.test("90001") should return false
// regex.test("9000") should return false
// regex.test("91230") should return false
// regex.test("1-90000") should return false
// regex.test("-90000123") should return false

// Solution Number 1
var regex= /^-?9[0-9]*0{4,}$/

//Solution Number 2

var regex= /^-?9\d*0{4,}$/