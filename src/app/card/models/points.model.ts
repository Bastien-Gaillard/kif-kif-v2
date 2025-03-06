export declare namespace Points {
  interface GetGlobalPoints {
    data: GetGlobalPointsData;
  }

  interface GetGlobalPointsData {
    globalPoints: number;
    cardNumber: number;
  }

  interface GetCurrentPoints {
    idShop: number,
    points: number,
    shopName: string,
    categories: any
  }

  interface GetHistoryPointsData {
    data: GetHistoryPoints[];
  }

  interface GetHistoryPoints {
    idHistoryPoint: number;
    idUser: number;
    points: number;
    reason: string;
    positive: boolean;
    createdAt: string;
    shops: {
      name: string;
      shopsHasCategories: [
        {
          categories: {
            name: string;
          };
        },
        {
          categories: {
            name: string;
          };
        }
      ];
    };
  }
}
