import {
  CustomerOrder,
  EnterpriseCustomerProtocol,
  IndividualCustomerProtocol,
} from './protocols/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder {
  constructor(public name: string, public cnpj: string) {}

  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
