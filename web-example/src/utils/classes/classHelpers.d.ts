export interface IDateComponent {
    date: Date;
    keyExtender?: string;
}
export declare abstract class DateComponent {
    date: Date;
    keyExtender: string;
    key: string;
    type: string;
    constructor({ date }: IDateComponent);
}
