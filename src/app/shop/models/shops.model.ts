export namespace Shops {
  export interface GetShop {
    name: string;
    city: string;
    zipCode: string;
    address: string;
    shopsHasCategories: {
      categories: {
        name: string;
      };
    };
  }
}
