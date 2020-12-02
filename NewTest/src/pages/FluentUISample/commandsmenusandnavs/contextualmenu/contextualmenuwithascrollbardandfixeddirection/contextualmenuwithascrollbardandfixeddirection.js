import * as React from 'react';
import { DirectionalHint } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { useConst } from '@uifabric/react-hooks';

export const ContextualMenuWithScrollBarExample = () => {
  const menuProps = useConst(() => ({
    shouldFocusOnMount: true,
    directionalHint: DirectionalHint.bottomRightEdge,
    directionalHintFixed: true,
    items: [
      { key: 'newItem', text: 'New' },
      { key: 'item 2', text: 'Item with a very long label text' },
      { key: 'edit', text: 'Edit' },
      { key: 'properties', text: 'Properties' },
      { key: 'disabled', text: 'Disabled item', disabled: true },
    ],
    calloutProps: {
      calloutMaxHeight: 65,
    },
  }));

  return <div>ContextualMenuWithScrollBarExample <DefaultButton text="Click for ContextualMenu" menuProps={menuProps} /> </div>
};

export default ContextualMenuWithScrollBarExample;
