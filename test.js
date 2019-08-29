
const Switch = require('./index')

const test = testCase => Switch(testCase, {
	one(){
		return 'one'
	},
	'two two'(){
		return 'two'
	},
	3(){
		return 'three'
	},
	default(){
		return 'default'
	}
})

const testStrings = ['one', 'two two', 3, 'does not exist']

const tests = testStrings.map(string => test(string))

const matchesExpectation = (test, expectation) => test.map((item, index) => item == expectation[index])

const result = matchesExpectation(tests, ['one', 'two', 'three', 'default'])

console.log(`Success? ${!result.includes(false)}`)
console.log(`Result: [${result}]`)
console.log(tests)
