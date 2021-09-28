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
	StartCommentTag,
	Comment,
	EndCommentTag,
	StartTagOpen,
	StartTagClose,
	StartTagSelfClose,
	StartTag,
	StartInterpolation,
	EndTagOpen,
	EndTagClose,
	EndTag,
	EndInterpolation,
	DelimiterAssign,
	AttributeName,
	AttributeValue,
	StartDoctypeTag,
	Doctype,
	EndDoctypeTag,
	Content,
	InterpolationContent,
	Whitespace,
	Unknown,
	Script,
	Styles,
	Config,
	EOS
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