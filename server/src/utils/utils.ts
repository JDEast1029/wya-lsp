
export const compose = (...fns: any) => (...args: any) => fns.reduceRight((res: any, fn: any) => [fn.call(null, ...res)], args)[0];
export const includes = (data: string[]) => (ele: string) => data.includes(ele);