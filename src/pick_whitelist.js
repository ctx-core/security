import { pick } from '@ctx-core/object';
export function pick_whitelist(ctx, ...keys) {
    return pick(ctx, ...keys);
}
export { pick_whitelist as pick__whitelist };
