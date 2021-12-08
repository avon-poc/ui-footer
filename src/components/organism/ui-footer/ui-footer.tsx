import { Component, h } from '@stencil/core';

@Component({
    tag: 'ui-footer',
    styleUrl: 'ui-footer.scss',
    shadow: true,
})
export class UiFooter {
    render() {
        return (
            <footer class="footer">
                <div class="footer-title">
                    <ui-logo></ui-logo>
                    <hr class="footer-logo-line" />
                </div>
                <div class="footer-list-item-section">
                    <ui-footer-link-list class="ui-link"></ui-footer-link-list>
                    <ui-footer-link-list class="ui-link"></ui-footer-link-list>
                    <ui-footer-link-list class="ui-link"></ui-footer-link-list>
                    <ui-footer-link-list class="ui-link"></ui-footer-link-list>
                </div>
                <ui-icon class="ui-icon"></ui-icon>
                <div class="footer-copyright">
                    <span class="footer-copyright-text"><a href="#" class="footer-copyright-link">© 2021 Avon Cosmetics 2021</a></span>
                    <span class="footer-sitemap"><a href="#" class="footer-sitemap-link">Sitemap</a></span>
                </div>
            </footer>
        )
    }
}