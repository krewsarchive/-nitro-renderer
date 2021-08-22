import { IMessageDataWrapper } from '../../../../../core/communication/messages/IMessageDataWrapper';
import { IMessageParser } from '../../../../../core/communication/messages/IMessageParser';

export class HotelWillCloseInMinutesMessageParser implements IMessageParser
{
    private _minutes: number;

    public flush(): boolean
    {
        this._minutes = 0;

        return true;
    }

    public parse(wrapper: IMessageDataWrapper): boolean
    {
        if(!wrapper) return false;

        this._minutes = wrapper.readInt();

        return true;
    }

    public get openMinute(): number
    {
        return this._minutes;
    }
}
