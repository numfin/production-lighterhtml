import { html, render } from 'lighterhtml';

import { mainRoute } from '~/pages/main.view';
import { Sidebar } from '~/components/sidebar/sidebar.component';
import { Router } from '~/utils/router/router';
import { notFoundRoute } from './pages/notfound/notfound.view';

export const router = new Router([notFoundRoute, mainRoute]);

function createApp() {
  const sidebar = new Sidebar();

  render(
    document.body,
    html`
      ${sidebar.render()} ${router.render()}
    `,
  );
}

createApp();
