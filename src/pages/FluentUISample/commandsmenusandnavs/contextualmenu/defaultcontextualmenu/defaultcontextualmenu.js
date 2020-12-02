import * as React from 'react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useConst } from '@uifabric/react-hooks';

export const ContextualMenuDefaultExample = () => {
  const menuProps = useConst(() => ({
    shouldFocusOnMount: true,
    items: [
      { key: 'newItem', text: 'New', onClick: () => console.log('New clicked') },
      { key: 'divider_1', itemType: ContextualMenuItemType.Divider },
      { key: 'rename', text: 'Rename', onClick: () => console.log('Rename clicked') },
      { key: 'edit', text: 'Edit', onClick: () => console.log('Edit clicked') },
      { key: 'properties', text: 'Properties', onClick: () => console.log('Properties clicked') },
      { key: 'linkNoTarget', text: 'Link same window', href: 'http://bing.com' },
      { key: 'linkWithTarget', text: 'Link new window', href: 'http://bing.com', target: '_blank' },
      {
        key: 'linkWithOnClick',
        name: 'Link click',
        href: 'http://bing.com',
        onClick: (ev: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
          alert('Link clicked');
          ev.preventDefault();
        },
        target: '_blank',
      },
      {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
        onClick: () => console.error('Disabled item should not be clickable.'),
      },
    ],
  }));

  return <div>ContextualMenuDefaultExample <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} /></div>
};

export default ContextualMenuDefaultExample;