import { IMessageComposer } from '../../../../../core/communication/messages/IMessageComposer';

export class ConvertGlobalRoomIdMessageComposer implements IMessageComposer<ConstructorParameters<typeof ConvertGlobalRoomIdMessageComposer>>
{
  private _data: ConstructorParameters<typeof ConvertGlobalRoomIdMessageComposer>;

  constructor(flatId: string)
  {
      this._data = [ flatId ];
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