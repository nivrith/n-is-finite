/*!
 * n-is-finite <https://github.com/nivrith/n-is-finite>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */

import isNan from 'n-is-nan';

export const nIsFinite = (n: number) => !(typeof n !== 'number' || isNan(n) || n === Infinity || n === -Infinity)
