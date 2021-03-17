import { IMessageComposer } from '../../../../../../core/communication/messages/IMessageComposer';

export class RoomUnitActionComposer implements IMessageComposer<ConstructorParameters<typeof RoomUnitActionComposer>>
{
    private _data: ConstructorParameters<typeof RoomUnitActionComposer>;

    constructor(actionType: number)
    {
        this._data = [ actionType ];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}