import { pick } from '@ctx-core/object'
export function pick__whitelist(ctx, ...keys) {
	return pick(ctx, ...keys)
}
