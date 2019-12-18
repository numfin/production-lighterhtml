import { Route } from './route';
import { Component } from '../component';

type R = Record<string, string>;

export class Router extends Component {
  private view = this.html``;
  private mapper: Record<string, Route<R>> = {};

  constructor(readonly routes: Route<any>[]) {
    super();
    this.initRoutes(routes);
    this.bindEvents();
    this.renderActive();
  }

  public render(html = this.html) {
    return html`
      ${this.view}
    `;
  }

  private setView(view: HTMLElement) {
    this.view = view;
    this.render();
  }

  private getState(): Record<string, string> {
    const { state } = history;
    const validState = state && typeof state === 'object';
    return validState ? state : {};
  }

  private getQuery(params: R) {
    const search = new URLSearchParams(
      Object.entries(params || {}).map(([k, v]) => [k, String(v)]),
    );
    search.sort();
    return search.toString();
  }

  private getPath(path: string, query: string) {
    const queryPrefix = query.length ? '?' : '';
    const pathPrefix = path[0] === '/' ? '' : `/`;
    const url = new URL(
      `${location.origin}${pathPrefix}${path}${queryPrefix}${query}`,
    );
    return url.href;
  }

  public goTo<T extends Route<R>>(route: T, params: T['params'] = {}) {
    const pathNext = this.getPath(route.path, this.getQuery(params));
    const pathBefore = this.getPath(
      location.pathname,
      this.getQuery(this.getState()),
    );

    if (pathNext !== pathBefore)
      if (route.path !== location.pathname) {
        this.setView(route.options.component.render());
        history.pushState(params, '', pathNext);
      }
  }

  private initRoutes(routes?: Route<R>[]) {
    routes?.forEach((route) => {
      this.mapper[route.path] = route;
      this.initRoutes(route.options.children);
    });
  }

  private renderActive() {
    const mapped = this.mapper[location.pathname];
    if (mapped) {
      const { component } = mapped.options;
      return this.setView(component.render());
    }
    const { options } = this.routes[0];
    history.pushState(null, '', this.getPath(options.url, ''));
    this.setView(options.component.render());
  }

  private bindEvents() {
    window.addEventListener('popstate', () => this.renderActive());
  }
}
