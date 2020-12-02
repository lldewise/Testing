import React, { Fragment } from 'react';
import { Stack, styled, classNamesFunction } from '@fluentui/react';

import { UserMenu } from './UserMenu';
import SearchEngine from './SearchEngine';
const getStyles = ({ theme }) => {
  return {
    root: {
      borderBottomStyle: 'solid',
      borderBottomColor: theme.semanticColors.bodyFrameDivider,
      borderBottomWidth: 1,
      padding: theme.spacing.s1,
      height: 48,
      backgroundColor: '#6c35d4',
      justifyContent: 'flex-start',
      
    }
  };
};

const getClassNames = classNamesFunction();

function TopMenuComponent({ styles, theme }) {
  const classNames = getClassNames(styles, { theme });
  return (
    <Fragment>
      <Stack
        horizontal
        horizontalAlign="end"
        className={classNames.root}
        tokens={{ childrenGap: '1em' }}>
          
        <SearchEngine/>
        <UserMenu />
      </Stack>
    </Fragment>
  );
}

export const TopMenu = styled(TopMenuComponent, getStyles);
