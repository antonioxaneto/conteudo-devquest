interface ICustomer {
    name: string;
    age: number;
  }
  
  interface IAddress {
     street: string;
  }
  
  interface ICustomerProfile extends ICustomer, IAddress {}
  
  const newProfile: ICustomerProfile = {
     name: "Ricardo",
     age: 35,
     street: "Rua xyz"
  }

  type TCustomer = {
    name: string;
    age: number;
  }
  
  type TAddress = {
     street: string;
  }
  
  type TCustomerProfile = TCustomer & TAddress;

  const newProfile2: TCustomerProfile = {
    name: "Ricardo",
    age: 35,
    street: "Rua xyz"
  }
