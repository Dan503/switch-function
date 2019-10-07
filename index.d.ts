
interface Possibilities {
	[key: string]: any;
	default?: any;
}

export default function Switch(testCase:string|number, possibilities:Possibilities): any;
