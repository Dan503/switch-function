
module.exports = function switchFn(testCase = 'default', possibilities = {}){
	if (!possibilities[testCase]) {
		if (possibilities.default) {
			return possibilities.default()
		} else {
			throw new Error(`"${testCase}" could not be found in the possibilities object (second parameter) and no default was defined`)
		}
	}
	return possibilities[testCase]()
}
