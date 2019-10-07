
interface Possibilities {
	[key: string]: any;
	default?: any;
}

export default function Switch(testCase:string|number|undefined, possibilities:Possibilities): any;
