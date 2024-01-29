export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
}

export class Products {
  create(p: Product): Product {
    //TODO(Bhaskar) invoke Dynamo DB client API to save data
    return p;
  }
  find(): Product[] {
    //TODO(Bhaskar) invoke Dynamo DB client API to query data
    return [{
      id: 1,
      name: "name1",
      description: "description1",
      price: "price1",
    }, {
      id: 2,
      name: "name2",
      description: "description2",
      price: "price2",
    }];
  }
}
