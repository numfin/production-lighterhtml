import { link } from '~/components/link/link.component';
import { Component } from '~/utils/component';
import { projectRoute } from '~/pages/project/project.view';
import { mainRoute } from '~/pages/main.view';
import $ from './sidebar.css';

const links = [
  link({
    route: mainRoute,
    slot: 'Main',
    params: { param1: 'halo' },
    class: $.link,
  }),
  link({
    route: projectRoute,
    slot: 'Projects',
    class: $.link,
  }),
];

export class Sidebar extends Component {
  render(html = this.html) {
    return html`
      <div>Sidebar</div>
      <nav class=${$.nav}>
        ${links}
        <a href="/some-route?param=aloha">Any other route</a>
      </nav>
    `;
  }
}
