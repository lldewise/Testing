import * as React from 'react';
import { HoverCard, IPlainCardProps, HoverCardType } from 'office-ui-fabric-react/lib/HoverCard';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';

const classNames = mergeStyleSets({
  plainCard: {
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  target: {
    fontWeight: '600',
    display: 'inline-block',
    border: '1px dashed #605e5c',
    padding: 5,
    borderRadius: 2,
  },
});

const onCardHide = (): void => {
  console.log('I am now hidden');
};

export const FluentUIHoverCardInstantDismiss: React.FunctionComponent = () => {
  const hoverCard = React.useRef(null);
  const instantDismissCard = (): void => {
    if (hoverCard.current) {
      hoverCard.current.dismiss();
    }
  };
  const onRenderPlainCard = (): JSX.Element => {
    return (
      <div className={classNames.plainCard}>
        <DefaultButton
          // eslint-disable-next-line react/jsx-no-bind
          onClick={instantDismissCard}
          text="Instant Dismiss"
        />
      </div>
    );
  };
  const plainCardProps: IPlainCardProps = {
    onRenderPlainCard: onRenderPlainCard,
  };
  return (
    <div className="ms-Grid-row" >
      <div className="ms-Grid-col ms-lg12 ">
        <div className="fluenttitle divpadt10">Plain HoverCard with instant dismiss from within the card button click</div>
        <div className=" divpadt10">
          <Fabric>
            <p>
              In cases where an instant dismiss of the card is needed, public method
        <i>dismiss()</i> can be used through its <i>componentRef</i> prop.
      </p>
            <HoverCard
              cardDismissDelay={2000}
              type={HoverCardType.plain}
              plainCardProps={plainCardProps}
              componentRef={hoverCard}
              onCardHide={onCardHide}
            >
              <span className={classNames.target}>Hover Over Me</span>
            </HoverCard>
          </Fabric>
        </div>
      </div></div>

  );
};


export default FluentUIHoverCardInstantDismiss;