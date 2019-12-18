import { Hole, html } from 'lighterhtml';

import { prevent } from '~/utils/event';
import { router } from '~/index';
import { Route } from '~/utils/router/route';

export function link<T extends Route>(
  route: T,
  slot: string | Hole,
  params: T['params'],
) {
  const handleClick = prevent(() => router.goTo(route, params));
  return html`
    <a href=${route.path} onclick=${handleClick}>${slot}</a>
  `;
}
