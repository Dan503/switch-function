
const Switch = require('./index')

const example = 'example'

const possibilities = {
	zero: 0,

	nothing: null,

	not_defined: undefined,

	one: 'A',

	[`two ${example} two`]: 'B',

	'function call'(){
		return 'with explicit return'
	},

	implicitFunction: ()=> 'implicit return',

	default: 'default return value'
}

const expectation = [
	0,
	null,
	'default return value',
	'A',
	'B',
	'with explicit return',
	'implicit return',
	'default return value',
	'default return value',
]

const test = testCase => Switch(testCase, possibilities)

const testStrings = [...Object.keys(possibilities), 'does not exist']

const tests = testStrings.map(string => test(string))

const matchesExpectation = (test, expectation) => test.map((item, index) => item == expectation[index])

const result = matchesExpectation(tests, expectation)

console.log(`\nResult:`)

console.log(testStrings.reduce((obj, item, i) => {
	const resultView = !result[i] ? [result[i], expectation[i]] : result[i]
	obj[item] = { [tests[i]]: resultView }
	return obj
}, {}))

console.log(`\nSuccess?`, !result.includes(false))
