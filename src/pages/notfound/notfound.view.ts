import { Component } from '~/utils/component';
import { Route } from '~/utils/router/route';

export class NotFoundView extends Component {
  render(html = this.html) {
    return html`
      <div data-id="notfound">Not found</div>
    `;
  }
}

export const notFoundRoute = new Route({
  url: '404',
  component: new NotFoundView(),
});
