import { Component } from '~/utils/component';
import { Route } from '~/utils/router/route';

export class ProjectView extends Component {
  render(html = this.html) {
    return html`
      <div data-id="project">Project</div>
    `;
  }
}

export const projectRoute = new Route({
  url: 'projects',
  component: new ProjectView(),
});
