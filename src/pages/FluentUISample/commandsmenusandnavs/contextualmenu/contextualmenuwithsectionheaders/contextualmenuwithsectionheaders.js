import * as React from 'react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useConst } from '@uifabric/react-hooks';

export const ContextualMenuSectionExample = () => {
  const menuProps = useConst(() => ({
    items: [
      {
        key: 'section1',
        itemType: ContextualMenuItemType.Section,
        sectionProps: {
          topDivider: true,
          bottomDivider: true,
          title: 'Actions',
          items: [
            { key: 'newItem', text: 'New' },
            { key: 'deleteItem', text: 'Delete' },
          ],
        },
      },
      {
        key: 'section2',
        itemType: ContextualMenuItemType.Section,
        sectionProps: {
          title: 'Social',
          items: [
            { key: 'share', text: 'Share' },
            { key: 'print', text: 'Print' },
            { key: 'music', text: 'Music' },
          ],
        },
      },
      {
        key: 'section3',
        itemType: ContextualMenuItemType.Section,
        sectionProps: {
          title: 'Navigation',
          items: [{ key: 'Bing', text: 'Go to Bing', href: 'http://www.bing.com', target: '_blank' }],
        },
      },
    ],
  }));

  return <div>ContextualMenuSectionExample <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} /> </div>
};

export default ContextualMenuSectionExample;