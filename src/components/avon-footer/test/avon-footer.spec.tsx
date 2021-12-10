import { newSpecPage } from '@stencil/core/testing';
import { AvonFooter } from '../avon-footer';

describe('avon-footer', () => {
  it('renders empty', async () => {
    const page = await newSpecPage({
      components: [AvonFooter],
      html: `<avon-footer content=""></avon-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <avon-footer>
       <mock:shadow-root>
        
       </mock:shadow-root>
     </avon-footer>
    `);
  });

  
});
