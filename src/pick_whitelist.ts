import { pick } from '@ctx-core/object'
export function pick_whitelist<I extends object = object>(ctx:I, ...keys:string[]) {
	return pick<I>(ctx, ...keys)
}
export {
	pick_whitelist as pick__whitelist
}
