import { IMessageComposer } from '../../../../../core/communication/messages/IMessageComposer';

export class OpenQuestTrackerMessageComposer implements IMessageComposer<ConstructorParameters<typeof OpenQuestTrackerMessageComposer>>
{
  private _data: ConstructorParameters<typeof OpenQuestTrackerMessageComposer>;

  constructor()
  {
      this._data = [];
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
