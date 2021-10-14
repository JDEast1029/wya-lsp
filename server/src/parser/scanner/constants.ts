export const BNG = '!'.charCodeAt(0);
export const MIN = '-'.charCodeAt(0);
export const LAN = '<'.charCodeAt(0);
export const RAN = '>'.charCodeAt(0);
export const FSL = '/'.charCodeAt(0);
export const EQS = '='.charCodeAt(0);
export const DQO = '"'.charCodeAt(0);
export const SQO = "'".charCodeAt(0);
export const NWL = '\n'.charCodeAt(0);
export const CAR = '\r'.charCodeAt(0);
export const LFD = '\f'.charCodeAt(0);
export const WSP = ' '.charCodeAt(0);
export const TAB = '\t'.charCodeAt(0);
export const LCR = '{'.charCodeAt(0);
export const RCR = '}'.charCodeAt(0);

export enum TokenType {
	StartCommentTag, // 0
	Comment, // 1
	EndCommentTag, // 2
	StartTagOpen, // 3
	StartTagClose, // 4
	StartTagSelfClose, // 5
	StartTag, // 6
	StartInterpolation, // 7
	EndTagOpen, // 8
	EndTagClose, // 9
	EndTag, // 10
	EndInterpolation, // 11
	DelimiterAssign, // 12
	AttributeName, // 13
	AttributeValue, // 14
	StartDoctypeTag, // 15
	Doctype, // 16
	EndDoctypeTag, // 17
	Content, // 18
	InterpolationContent, // 19
	Whitespace, // 20
	Unknown, // 21
	Script, // 22
	Styles, // 23
	Config, // 24
	EOS, // 25
}
export enum ScannerState {
	WithinContent,
	WithinInterpolation,
	AfterOpeningStartTag,
	AfterOpeningEndTag,
	WithinDoctype,
	WithinTag,
	WithinEndTag,
	WithinComment,
	WithinScriptContent,
	WithinStyleContent,
	WithinConfigContent,
	AfterAttributeName,
	BeforeAttributeValue
}