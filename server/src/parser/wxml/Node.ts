const findFirst = <T>(array: T[], p: (x: T) => boolean): number => {
	let low = 0,
		high = array.length;
	if (high === 0) {
		return 0; // no children
	}
	while (low < high) {
		const mid = Math.floor((low + high) / 2);
		if (p(array[mid])) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}
	return low;
};
export class Node {
	public tag?: string;
	public closed?: boolean;
	public endTagStart?: number;
	public isInterpolation: boolean;
	public attributes?: { [name: string]: string };
	public get attributeNames(): string[] {
		if (this.attributes) {
			return Object.keys(this.attributes);
		}

		return [];
	}
	constructor(public start: number, public end: number, public children: Node[], public parent: Node) {
		this.isInterpolation = false;
	}
	public isSameTag(tagInLowerCase: string) {
		return (
			this.tag &&
			tagInLowerCase &&
			this.tag.length === tagInLowerCase.length &&
			this.tag.toLowerCase() === tagInLowerCase
		);
	}
	public get firstChild(): Node {
		return this.children[0];
	}
	public get lastChild(): Node | undefined {
		return this.children.length ? this.children[this.children.length - 1] : void 0;
	}

	public findNodeBefore(offset: number): Node {
		const idx = findFirst(this.children, c => offset <= c.start) - 1;
		if (idx >= 0) {
			const child = this.children[idx];
			if (offset > child.start) {
				if (offset < child.end) {
					return child.findNodeBefore(offset);
				}
				const lastChild = child.lastChild;
				if (lastChild && lastChild.end === child.end) {
					return child.findNodeBefore(offset);
				}
				return child;
			}
		}
		return this;
	}

	public findNodeAt(offset: number): Node {
		const idx = findFirst(this.children, c => offset <= c.start) - 1;
		if (idx >= 0) {
			const child = this.children[idx];
			if (offset > child.start && offset <= child.end) {
				return child.findNodeAt(offset);
			}
		}
		return this;
	}
}