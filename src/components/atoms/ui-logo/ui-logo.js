import { Component, Prop, h } from '@stencil/core';
 
@Component({
  tag: 'ui-logo',
  styleUrl: 'ui-logo.css',
  shadow: true,
})
export class UiLogo {
 render() {
    return <h1>header</h1>;
  }
}