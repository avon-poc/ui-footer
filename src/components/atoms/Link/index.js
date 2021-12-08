import * as React from 'react';

const Link = ({
    link,
    textTransform,
    variant,
    children,
    nofollow,
    linkTarget,
    isLinkUnderline
}) => {

    const getHTMLAttributes = () => {
        let attributes = {
            rel: '',
            target: '',
            href: '',
        };

        if(nofollow) {
          attributes['rel'] = "nofollow";
        }
    
        if(linkTarget) {
          attributes['target'] = linkTarget;
        }
    
        if(link) {
          attributes['href'] = link;
        }
    
        return attributes;
    }

    return (
        <a className={`${variant} ${textTransform} inline-link ${isLinkUnderline ? 'underline' : ''}`} {...getHTMLAttributes()}>
            {children}
        </a>
    )
}

export default Link;