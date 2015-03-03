'use strict';

var makeGeneratorFunction = function () {
	return Function('return function* () { var x = yield; return x || 42; }')();
};
var makeConciseGeneratorMethod = function () {
    return Function('return { *       gen(  ){ } }.gen;')();
};
var generatorFunc;
try { generatorFunc = makeGeneratorFunction(); } catch (e) {}
if (generatorFunc) {
	try {
		generatorFunc.concise = makeConciseGeneratorMethod();
	} catch (e) {}
}

module.exports = generatorFunc;
