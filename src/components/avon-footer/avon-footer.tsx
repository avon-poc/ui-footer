import { Component, Prop, h, State } from '@stencil/core';
import { getMgnlApp } from 'nextjs-magnolia-connector';

@Component({
  tag: 'avon-footer',
  styleUrl: 'avon-footer.scss',
  shadow: true,
})
export class AvonFooter {
  @Prop() isDark = true;
  @Prop({ mutable: true, reflect: true }) content;
  @State() data;

  async componentWillLoad() {
    if (this.content) {
      this.data = JSON.parse(decodeURIComponent(this.content));
    } else {
      this.data = await getMgnlApp({
        lang: 'en',
        country: 'GB',
        endpoint: 'footer',
        site: 'avon',
        resType: 'JCR',
      });
      console.log('asdf', this.data)
      this.content = encodeURIComponent(JSON.stringify(this.data));
    }
  }


  render() {
    return (
      <footer class={`site-footer ${this.isDark ? 'dark' : ''}`}>
        <div class="footer-title">
          <div class="footer-logo-section">
            {["footerBaseSection"].map(key => (
              <span class="footer-logo" key={key} innerHTML={this.data.footerBaseSection.data[2].footerLogo}></span>
            ))}
          </div>
          <hr class="footer-logo-line" />
        </div>
        <div class="footer-list-item-section">
          <div class="footer-list-container">
            {['listItem1', 'listItem2', 'listItem3', 'listItem4'].map(key => (
              <div class="col footer-list-items" key={key}>
                <div class="footer-list-title">{this.data[key]?.title}</div>
                <ul class="footer-list-item">
                  {this.data[key]?.data.map(item => (
                    <li class="footer-item" key={item['@name']}>
                      {item.listItemCheckbox ?
                        <a class="footer-item-link" href={item.listItemURL} target="_blank">{item.listItemName}</a>
                        :
                        <a class="footer-item-link" href={item.listItemURL} target="_self">{item.listItemName}</a>
                      }

                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div class="footer-social-media-section">
          <span class="footer-social-media-icons">
            {['listItem5'].map(key => (
              this.data[key]?.data.map(item => (
                <span class="social-media-icon">
                  <a href={item.itemURL} innerHTML={item?.itemImage}></a>
                </span>
              ))
            ))}
          </span>
          <hr class="footer-social-media-line" />
          <span class="footer-payment-icons">
            {['listItem6'].map(key => (
              this.data[key]?.data.map(item => (
                <span class="footer-payment-icon">
                  <a href={item.imageLink} innerHTML={item?.imageUrl}></a>
                </span>
              ))
            ))}
          </span>

        </div>
        <div class="footer-copyright">
          <span class="footer-copyright-text"><a href="#" class="footer-copyright-link">{this.data.footerBaseSection.data[1].copyRightText}</a></span>
          <span class="footer-sitemap"><a href="#" class="footer-sitemap-link">{this.data.footerBaseSection.data[0].sitemapText}</a></span>
        </div>
      </footer>
    );
  }
}
