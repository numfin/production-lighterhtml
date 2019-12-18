import { html } from 'lighterhtml';

export class Component {
  public readonly html = html.for(this);

  public render<T extends any>(...props: T[]) {
    return this.html``;
  }
}
