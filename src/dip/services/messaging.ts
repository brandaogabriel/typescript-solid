import { IMessaging } from '../entities/protocols/messaging-protocol';

export class Messaging implements IMessaging {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }
}
