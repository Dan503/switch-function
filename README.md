# switch-function

Switch functionality with a nicer syntax.

```
npm install switch-function
```

This function is designed to be used in an environment that supports ES6 JS syntax.

```js
import Switch from 'switch-function'

const exampleVar = 'example'

const test = testCase => Switch(testCase, {

    zero: 0,

    nothing: null,

    not_defined: undefined,

    one: 'A',

    [`two ${exampleVar} two`]: 'B',

    'function call'(){
        return 'with explicit return'
    },

    implicitFunction: ()=> 'implicit return',

    default: 'default return value'

})

console.log(test('zero')) // 0 (number)

console.log(test('nothing')) // null

console.log(test('not_defined')) // 'default return value'

console.log(test('one')) // 'A'

console.log(test('two example two')) // 'B'

console.log(test('function call')) // 'with explicit return'

console.log(test('implicitFunction')) // 'implicit return'

console.log(test("Doesn't exist")) // 'default return value'
```

The equivalent in standard switch syntax:

```js
const test = testCase => {

    switch (testCase) {
        case 'zero':
            return 0

        case 'nothing':
            return null

        case 'not_defined':
            return undefined

        case 'one':
            return 'A',

        case `two ${exampleVar} two`:
            return 'B',

        case 'function call':
            return 'with explicit return'

        case 'implicitFunction':
            return 'implicit return'

        default:
            return 'default return value'
    }

}

console.log(test('zero')) // 0 (number)
console.log(test('nothing')) // null
console.log(test('not_defined')) // 'default return value'
console.log(test('one')) // 'A'
console.log(test('two example two')) // 'B'
console.log(test('function call')) // 'with explicit return'
console.log(test('implicitFunction')) // 'implicit return'
console.log(test("Doesn't exist")) // 'default return value'
```

There is one thing that the function can't replicate and that is the case where you do not place `break` at the end of one of the `case` statements. I see this as an anti-pattern anyway that is likely to introduce bugs so I'm happy with the function not supporting it.

You can go back to regular switch statements if you really need that sort of functionality. 99.99% of the time though, it is not necessary.

## Switch Function and React

One of the best use cases for this function is when you need to swap different components in and out of the rendering section of a React component.

```jsx
import React from 'react'
import Switch from 'switch-function'

import TemplateOne from './TemplateOne'
import TemplateTwo from './TemplateTwo'

export default ({templateName})=> {
    return (
        <div>
            {Switch(templateName, {
                one: <TemplateOne />,
                two: <TemplateTwo />,
            })}
        </div>
    )
}
```

The equivalent without the help of this function:

```jsx
import React from 'react'

import TemplateOne from './TemplateOne'
import TemplateTwo from './TemplateTwo'

export default ({templateName})=> {
    return (
        <div>
            {templateName === 'one' && <TemplateOne />}
            {templateName === 'two' && <TemplateTwo />}
        </div>
    )
}
```

As you can see, it cuts down on a lot of repetition and makes the code much cleaner.

This is a common use case but you do not need to be using React in your project for this function to be useful to you.
