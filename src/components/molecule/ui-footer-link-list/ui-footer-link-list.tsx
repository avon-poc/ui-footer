import { Component, h } from '@stencil/core';
 
@Component({
  tag: 'ui-footer-link-list',
  styleUrl: 'ui-footer-link-list.scss',
  shadow: true,
})
export class UiLink {
 render() {
    return (
        <div class="footer-list-container">

             <div class="footer-list-items">
             <ui-list-title></ui-list-title>
             <ui-link></ui-link>
             </div>
       
      </div>
    )
  }
}