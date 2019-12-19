import { Hole, html } from 'lighterhtml';

import { prevent } from '~/utils/event';
import { router } from '~/index';
import { Route } from '~/utils/router/route';

export function link<T extends Route<any>>(options: {
  route: T;
  slot: string | Hole;
  params?: T['params'];
  class?: string;
}) {
  const handleClick = prevent(() => router.goTo(options.route, options.params));
  return html`
    <a href=${options.route.path} onclick=${handleClick} class=${options.class}>
      ${options.slot}
    </a>
  `;
}
