import { newSpecPage } from '@stencil/core/testing';
import { AvonFooter } from '../avon-footer';

describe('avon-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AvonFooter],
      html: `<avon-footer content="%7B%7D"></avon-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <avon-footer content="%7B%7D">
        <mock:shadow-root>
         <footer class="dark site-footer">
         <div class="footer-title">
         <div class="footer-logo-section">
           <span class="footer-logo"></span>
         </div>
         <hr class="footer-logo-line" />
       </div>
       <div class="footer-list-item-section">
               <div class="footer-list-container">
                  <div class="col footer-list-items">
                   <div class="footer-list-title"></div>
                   <ul class="footer-list-item"></ul>
                 </div>
                 <div class="col footer-list-items">
                   <div class="footer-list-title"></div>
                   <ul class="footer-list-item"></ul>
                 </div>
                 <div class="col footer-list-items">
                   <div class="footer-list-title"></div>
                   <ul class="footer-list-item"></ul>
                 </div>
                 <div class="col footer-list-items">
                   <div class="footer-list-title"></div>
                   <ul class="footer-list-item"></ul>
                 </div>
               </div>
             </div>
             <div class="footer-social-media-section">
               <span class="footer-social-media-icons"></span>
               <hr class="footer-social-media-line">
               <span class="footer-payment-icons"></span>
             </div>
             <div class="footer-copyright">
               <span class="footer-copyright-text">
                 <a class="footer-copyright-link" href="#"></a>
               </span>
               <span class="footer-sitemap">
                 <a class="footer-sitemap-link" href="#"></a>
               </span>
             </div>
         </footer>
        </mock:shadow-root>
      </avon-footer>
    `);
  });
 });
