/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AvonFooter {
        "content": any;
        "isDark": boolean;
    }
}
declare global {
    interface HTMLAvonFooterElement extends Components.AvonFooter, HTMLStencilElement {
    }
    var HTMLAvonFooterElement: {
        prototype: HTMLAvonFooterElement;
        new (): HTMLAvonFooterElement;
    };
    interface HTMLElementTagNameMap {
        "avon-footer": HTMLAvonFooterElement;
    }
}
declare namespace LocalJSX {
    interface AvonFooter {
        "content"?: any;
        "isDark"?: boolean;
    }
    interface IntrinsicElements {
        "avon-footer": AvonFooter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "avon-footer": LocalJSX.AvonFooter & JSXBase.HTMLAttributes<HTMLAvonFooterElement>;
        }
    }
}