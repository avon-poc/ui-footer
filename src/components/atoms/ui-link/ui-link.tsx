import { Component, h } from '@stencil/core';
 
@Component({
  tag: 'ui-link',
  styleUrl: 'ui-link.scss',
  shadow: true,
})
export class UiLink {
 render() {
    return (
       <div>
       <ul class="footer-list-item">
            <li class="footer-item"><a class="footer-item-link" href="#">About Avon</a></li>
            <li class="footer-item"><a class="footer-item-link" href="#">Careers</a></li>
            <li class="footer-item"><a class="footer-item-link" href="#">Avon Blog</a></li>
            <li class="footer-item"><a class="footer-item-link" href="#">Press Avon</a></li>
          </ul>
          </div>
      )
  }
}