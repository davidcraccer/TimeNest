let excessiveWorkHours = false;
let excessiveWorkHoursCallback: ((value: boolean) => void) | null = null;

export const setExcessiveWorkHours = (value: boolean) => {
    excessiveWorkHours = value;
    if (excessiveWorkHoursCallback) {
        excessiveWorkHoursCallback(excessiveWorkHours);
    }
};

export const getExcessiveWorkHours = () => {
    return excessiveWorkHours;
};
