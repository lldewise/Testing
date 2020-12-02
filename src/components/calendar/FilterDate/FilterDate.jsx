import * as React from 'react';
import { DatePicker, DayOfWeek } from 'office-ui-fabric-react';
import moment from 'moment';

const DayPickerStrings = {
  months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],

  goToToday: 'Go to today',
  prevMonthAriaLabel: 'Go to previous month',
  nextMonthAriaLabel: 'Go to next month',
  prevYearAriaLabel: 'Go to previous year',
  nextYearAriaLabel: 'Go to next year',
  closeButtonAriaLabel: 'Close date picker',
  monthPickerHeaderAriaLabel: '{0}, select to change the year',
  yearPickerHeaderAriaLabel: '{0}, select to change the month',
};

const dpStyles = { 
  root: { 
    maxWidth: '175px',
    color: '#6c35d4 !important',
    fontSize: '15px !important',
    outline: 'none !important',
    borderStyle: 'none !important',
    padding: '5px 6px'
  }, 
  textField: { input: {color:  '#6c35d4 !important'}}, 
  icon: { color:  '#6c35d4 !important'}, 
  callout: { 
    selectors: 
    { '& button': 
      {  } 
    } 
  } 
};


const FilterDate = (item) => {
  const [firstDayOfWeek, setFirstDayOfWeek] = React.useState(DayOfWeek.Sunday);  

  const formatSelectedDate = (data) => {
    return moment(data).format('MMMM DD, YYYY');
  }

  const handleSelectedDate = (data) => {
    item.handleSelectedDate(data);
    setFirstDayOfWeek(DayOfWeek.Sunday);
  }

  return (
    <div>
      <DatePicker
        //className={dpStyles}
        firstDayOfWeek={firstDayOfWeek}
        strings={DayPickerStrings}
        value={item.currentDay}
        formatDate={formatSelectedDate}
        onSelectDate={handleSelectedDate}
        borderless={true}
        styles={dpStyles}
      />
    </div>
  );
};

export default FilterDate;
