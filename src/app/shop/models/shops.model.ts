export namespace Shops {
  export interface GetShop {
    idShop: number;
    name: string;
    city: string;
    zipCode: string;
    address: string;
    shopsHasCategories: {
      categories: {
        name: string;
      };
    };
    images: string[];
  }
}
