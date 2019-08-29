# switch-function

Switch functionality with a nicer syntax.

```
npm install switch-function
```

This function is designed to be used in an environment that supports ES6 JS syntax.

```js
import Switch from 'switch-function'

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

console.log(test('one')) // 'one'
console.log(test('two two')) // 'two'
console.log(test(3)) // 'three'
console.log(test("Doesn't exist")) // 'default'
```

The equivalent in standard switch syntax:

```js
const test = testCase => {

	var returnVal

	switch (testCase) {
		case 'one':
			returnVal = 'one'
			break;

		case 'two two':
			returnVal = 'two'
			break;

		case 3:
			returnVal = 'three'
			break;

		default:
			returnVal = 'default'
			break;
	}

	return returnVal
}

console.log(test('one')) // 'one'
console.log(test('two two')) // 'two'
console.log(test(3)) // 'three'
console.log(test("Doesn't exist")) // 'default'
```

There is one thing that the function can't replicate and that is the case where you do not place `break` at the end of one of the `case` statements. I see this as an anti-pattern anyway that is likely to introduce bugs so I'm happy with the function not supporting it.

You can go back to regular switch statements if you really need that sort of functionality. 99.99% of the time, it is not necessary.
