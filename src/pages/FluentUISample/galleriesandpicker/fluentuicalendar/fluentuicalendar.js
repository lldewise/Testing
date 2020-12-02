import React from 'react';
import { Calendar, DayOfWeek, DateRangeType } from 'office-ui-fabric-react/lib/Calendar';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';


export interface ICalendarInlineExampleProps {
    isMonthPickerVisible?: boolean;
    dateRangeType: DateRangeType;
    autoNavigateOnSelection: boolean;
    showGoToToday: boolean;
    showNavigateButtons?: boolean;
    highlightCurrentMonth?: boolean;
    highlightSelectedMonth?: boolean;
    isDayPickerVisible?: boolean;
    showMonthPickerAsOverlay?: boolean;
    showWeekNumbers?: boolean;
    minDate?: Date;
    maxDate?: Date;
    restrictedDates?: Date[];
    showSixWeeksByDefault?: boolean;
    workWeekDays?: DayOfWeek[];
    firstDayOfWeek?: DayOfWeek;
}

const dayPickerStrings = {
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    goToToday: 'Go to today',
    weekNumberFormatString: 'Week number {0}',
    prevMonthAriaLabel: 'Previous month',
    nextMonthAriaLabel: 'Next month',
    prevYearAriaLabel: 'Previous year',
    nextYearAriaLabel: 'Next year',
    prevYearRangeAriaLabel: 'Previous year range',
    nextYearRangeAriaLabel: 'Next year range',
    closeButtonAriaLabel: 'Close',
    monthPickerHeaderAriaLabel: '{0}, select to change the year',
    yearPickerHeaderAriaLabel: '{0}, select to change the month',
};
const divStyle: React.CSSProperties = {
    height: 'auto',
};
const buttonStyle: React.CSSProperties = {
    margin: '17px 10px 0 0',
};

const FluentUICalendar = (props) => {
    const [selectedDate, setSelectedDate] = React.useState();
    const onDismiss = () => {

        return selectedDate;

    };


    const onSelectDate = (date: Date, dateRangeArray: Date[]): void => {
        debugger
        setSelectedDate(date);

    };
    return (
        <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12 ">
                <div className="fluenttitle divpadt10">Calendar</div>
                <div className="divpadt10">

                    <div style={divStyle}>
                        <div>
                            Selected date(s): <span>{!selectedDate ? 'Not set' : selectedDate.toLocaleString()}</span>
                        </div>
                        <Calendar
                            // eslint-disable-next-line react/jsx-no-bind
                            onSelectDate={onSelectDate}
                            // eslint-disable-next-line react/jsx-no-bind
                            onDismiss={onDismiss}
                            isMonthPickerVisible={props.isMonthPickerVisible}
                            dateRangeType={props.dateRangeType}
                            autoNavigateOnSelection={props.autoNavigateOnSelection}
                            showGoToToday={props.showGoToToday}
                            value={selectedDate}
                            firstDayOfWeek={props.firstDayOfWeek ? props.firstDayOfWeek : DayOfWeek.Sunday}
                            strings={dayPickerStrings}
                            highlightCurrentMonth={props.highlightCurrentMonth}
                            highlightSelectedMonth={props.highlightSelectedMonth}
                            isDayPickerVisible={props.isDayPickerVisible}
                            showMonthPickerAsOverlay={props.showMonthPickerAsOverlay}
                            showWeekNumbers={props.showWeekNumbers}
                            minDate={props.minDate}
                            maxDate={props.maxDate}
                            restrictedDates={props.restrictedDates}
                            showSixWeeksByDefault={props.showSixWeeksByDefault}
                            workWeekDays={props.workWeekDays}
                        />
                        {props.showNavigateButtons && (
                            <div>
                                <DefaultButton
                                    style={buttonStyle}
                                    // eslint-disable-next-line react/jsx-no-bind
                                    onClick={() => { }}
                                    text="Previous"
                                />
                                <DefaultButton
                                    style={buttonStyle}
                                    // eslint-disable-next-line react/jsx-no-bind
                                    onClick={() => { }}
                                    text="Next"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FluentUICalendar