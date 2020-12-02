import * as React from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogFooter, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { useBoolean } from '@uifabric/react-hooks';

const explanation =
  'If this panel is closed using light dismiss (clicking outside the panel), a confirmation dialog will appear.';
const dialogContentProps = {
  type: DialogType.normal,
  title: 'Are you sure you want to close the panel?',
};
const dialogModalProps = {
  isBlocking: true,
  styles: { main: { maxWidth: 450 } },
};

const PanelLightDismissCustomExample: React.FunctionComponent = () => {
  const [isPanelOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  const [isDialogVisible, { setTrue: showDialog, setFalse: hideDialog }] = useBoolean(false);

  const onHideDialog = React.useCallback(
    ev => {
      ev.preventDefault();
      hideDialog();
    },
    [hideDialog],
  );
  const onHideDialogAndPanel = React.useCallback(() => {
    dismissPanel();
    hideDialog();
  }, [dismissPanel, hideDialog]);

  return (
    <div>
      <div className="fluenttitle divpadt10">Confirm light dismiss</div>
      {explanation}
      <br />
      <br />
      <DefaultButton text="Open panel" onClick={openPanel} />
      <Panel
        isOpen={isPanelOpen}
        isLightDismiss={true}
        // Use this prop to do special handling *only* for light dismiss.
        // If you provide this, the normal onDismiss won't be called for light dismiss.
        onLightDismissClick={showDialog}
        onDismiss={dismissPanel}
        headerText="Panel with custom light dismiss behavior"
        closeButtonAriaLabel="Close"
      >
        <p>{explanation}</p>
      </Panel>
      <Dialog
        hidden={!isDialogVisible}
        onDismiss={onHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={dialogModalProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={onHideDialogAndPanel} text="Yes" />
          <DefaultButton onClick={onHideDialog} text="No" />
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default PanelLightDismissCustomExample;
