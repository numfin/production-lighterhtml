import { projectRoute } from './project/project.view';

import { Component } from '~/utils/component';
import { Route } from '~/utils/router/route';

export class MainView extends Component {
  render(html = this.html) {
    return html`
      <div data-id="main">Main view</div>
    `;
  }
}

export const mainRoute = new Route<{ param1: string }>({
  url: '',
  component: new MainView(),
  children: [projectRoute],
  params: ['param1'],
});
