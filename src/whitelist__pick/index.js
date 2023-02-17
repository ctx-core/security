import { pick } from '@ctx-core/object'
/**
 * @param whitelist_o{object}
 * @param keys{string}
 * @returns {Partial<*>}
 */
export function whitelist__pick(whitelist_o, ...keys) {
	return pick(whitelist_o, ...keys)
}
export {
	whitelist__pick as pick_whitelist,
	whitelist__pick as pick__whitelist,
}
