import { link } from '~/components/link/link.component';
import { Component } from '~/utils/component';
import { projectRoute } from '~/pages/project/project.view';
import { mainRoute } from '~/pages/main.view';

export class Sidebar extends Component {
  render(html = this.html) {
    return html`
      Sidebar ${link(projectRoute, 'Projects', {})}
      ${link(mainRoute, 'Main', { param1: 'halo' })}
    `;
  }
}
