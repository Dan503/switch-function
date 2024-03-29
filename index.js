
module.exports = function Switch(testCase = 'default', possibilities = {}){

	const testCaseFound = typeof possibilities[testCase] !== 'undefined'
	const defaultIsSet = typeof possibilities.default !== 'undefined'

	if (!testCaseFound && !defaultIsSet){
		console.error('possibilities', possibilities)
		throw Error(`Test case "${testCase}" in switch-function could not be found in the possibilities object (second parameter) and no default was defined`)
	}

	const usingDefault = !testCaseFound && defaultIsSet

	const testSubject = usingDefault ? 'default' : testCase

	const selection = possibilities[testSubject]

	const isFn = typeof selection === 'function'

	const calledFn = isFn ? selection : () => selection

	return calledFn()
}
