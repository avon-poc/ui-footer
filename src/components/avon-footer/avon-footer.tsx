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
      this.content = encodeURIComponent(JSON.stringify(this.data));
    }
  }
  render() {
    return (
      <footer class={`site-footer ${this.isDark ? 'dark' : ''}`}>
        <div class="container">
          <div class="row">
            {['listItem1', 'listItem2', 'listItem3'].map(key => (
              <div class="col" key={key}>
                <h4>{this.data[key]?.title}</h4>
                <ul class="footer-links">
                  {this.data[key]?.data.map(item => (
                    <li key={item['@name']}>
                      <a href={item.listItemURL}>
                        <div class="imgWithText">
                          {item.imageUrl && <img src={item.imageUrl} width="32" height="32" />}
                          <div>{item.listItemName}</div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <small>{this.data.footerBaseSection?.copyRightText}</small>
            </div>
            <div class="col">
              <a href={this.data.footerBaseSection?.helpURL} color="#546264">
                <small>{this.data.footerBaseSection?.helpText}</small>
              </a>
            </div>
            <div class="col">
              <a href={this.data.footerBaseSection?.tncURL} color="#546264">
                <small>{this.data.footerBaseSection?.tncText}</small>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
