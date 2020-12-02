import React from 'react';
import { Link, Text } from 'office-ui-fabric-react';

const FluentUILink = () => {
    return (<div>
        <div className="fluenttitle divpadt10">Link</div>
        <div className="divpadt10">
            <Text>
                When a link has an href,{' '}
                <Link href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link">
                    it renders as an anchor tag.
                </Link>{' '}
                Without an href, <Link>the link is rendered as a button</Link>. You can also use the disabled attribute to
                create a{' '}
                <Link disabled={true} href="https://developer.microsoft.com/en-us/fluentui#/controls/web/link">
                    disabled link.
                  </Link>
            </Text>
            <Text>
                It's not recommended to use Links with imgs because Links are meant to render textual inline content. Buttons
                are inline-block or in the case of imgs, block. However, it is possible to create a linked image button by
                making a button with an unstyled variant and adding the img content and href source to that.
      </Text>
        </div>
    </div>);
}


export default FluentUILink;
