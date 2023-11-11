import { pick } from '@ctx-core/object'
/**
 * @param {object}whitelist_o
 * @param {string}keys
 * @returns {Partial<*>}
 */
export function whitelist__pick(whitelist_o, ...keys) {
	return pick(whitelist_o, ...keys)
}
export {
	whitelist__pick as pick_whitelist,
	whitelist__pick as pick__whitelist,
}
