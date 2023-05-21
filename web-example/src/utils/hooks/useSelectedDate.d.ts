export default function useSelectedDate(): {
    selectedDate: IDayControllerCtx;
    setSelectedDate: IDayControllerCtx;
    minDate: IDayControllerCtx;
    maxDate: IDayControllerCtx;
    isSelected: (date: Date) => boolean;
};
