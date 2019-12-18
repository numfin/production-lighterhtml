import { Component } from '../component';

export class Route<P extends Record<string, string>> {
  public prefix = '';

  constructor(
    public readonly options: {
      url: string;
      component: Component;
      children?: Route<Record<string, string>>[];
      params?: Array<keyof P>;
    },
  ) {
    this.initChildren();
  }

  public get params(): P {
    const { searchParams } = new URL(location.href);
    const params =
      this.options.params?.reduce((acc, param) => {
        return {
          ...acc,
          [param]: searchParams.get(param) || '',
        };
      }, {} as P) || ({} as P);
    return params;
  }

  public get path() {
    return `${this.prefix}${this.options.url}/`;
  }

  private initChildren() {
    this.options.children?.forEach((child) => {
      child.prefix = this.path;
    });
  }
}
