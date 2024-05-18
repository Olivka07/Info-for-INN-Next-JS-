export enum StatusOrganization {
  ACTIVE = "действующая",
  LIQUIDATING = "ликвидируется",
  LIQUIDATED = "ликвидирована",
  BANKRUPT = "банкротство",
  REORGANIZING = "в процессе присоединения к другому юрлицу, с последующей ликвидацией",
}

type StatusType =
  | "ACTIVE"
  | "LIQUIDATING"
  | "LIQUIDATED"
  | "BANKRUPT"
  | "REORGANIZING";

export interface OrganizationType {
  value: string;
  data: {
    address: {
      data: {
        geo_lon: string;
        geo_lat: string;
      };
      value: string;
    };
    branch_count: number;
    branch_type: "MAIN" | "BRANCH";
    inn: string;
    kpp: string;
    management?: {
      name: string;
      post: string;
    };
    name: {
      full: string;
      full_with_opf: string;
      latin: string;
      short: string;
      short_with_opf: string;
    };
    ogrn: string;
    ogrn_date?: Date;
    okato?: string;
    oktmo?: string;
    okpo?: string;
    okogu?: string;
    okfs?: string;
    okved?: string;
    okved_type?: "2001" | "2014";
    opf?: {
      code: string;
      full: string;
      short: string;
      type: "99" | "2012" | "2014";
    };
    state: {
      actuality_date?: Date;
      registration_date?: Date;
      liquidation_date?: Date;
      status: StatusType;
    };
    type: "LEGAL" | "PHYSICAL";
  };
}
