import { Component, h } from '@stencil/core';
 
@Component({
  tag: 'ui-list-title',
  styleUrl: 'ui-list-title.scss',
  shadow: true,
})
export class UiListTitle {
 render() {
    return (
      <div class="footer-list-title">About Avon</div>
    )
  }
}