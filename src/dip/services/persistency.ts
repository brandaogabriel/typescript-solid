import { IPersistency } from '../entities/protocols/persistency-protocol';

export class Persistency implements IPersistency {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }
}
