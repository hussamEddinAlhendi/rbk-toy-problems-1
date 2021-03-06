/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(){
	var num = toFixed(Math.pow(2, 1000));
	var result = 0;
	// num = num.toString();
	for (var i = 0; i < num.length; i++) {
		result += parseInt(num[i])
	}
  	return result;
}
function toFixed(x) {
    var result = '';
    var xStr = x.toString(10);
    var digitCount = xStr.indexOf('e') === -1 ? xStr.length : (parseInt(xStr.substr(xStr.indexOf('e') + 1)) + 1);

    for (var i = 1; i <= digitCount; i++) {
        var mod = (x % Math.pow(10, i)).toString(10);
        var exponent = (mod.indexOf('e') === -1) ? 0 : parseInt(mod.substr(mod.indexOf('e')+1));
        if ((exponent === 0 && mod.length !== i) || (exponent > 0 && exponent !== i-1)) {
            result = '0' + result;
        }
        else {
            result = mod.charAt(0) + result;
        }
    }
    return result;
}