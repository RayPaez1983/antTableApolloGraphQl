export interface CompaniesTypes {
  id: number;
  COMP_ID: number;
  COMP_PARENT_ID: number;
  name: string;
  companyType: { name: string };
  address: [
    {
      address: string;
      city: string;
      continent: string;
      country: string;
      formattedAddress: string;
      geopositionIntitude: string;
      geopositionLatitude: number;
      isAddressInvalid: boolean;
      pobox: string;
      state: string;
    },
  ];
  COMP_CLASS: number;
  companyCategory: { name: string };
  STREET: string;
  city: string;
  COMP_STATE: string;
  COMP_ZIP_CODE: string;
  COMP_COUNTRY: string;
  COMP_FORMATTED_ADDR: string;
  COMP_PO_BOX: string;
  COMP_MAILING_ADDR: string;
  phone: [
    {
      phone: string;
      areaCode: number;
      countryCode: number;
    },
  ];
  PHONE_2: string;
  COMP_FAX: string;
  COMP_REGION: string;
  website: string;
  COMP_CALL_PATTERN: string;
  COMP_ACTIVE_FLAG: number;
  COMP_COMMENTS: string;
  COMP_TAGS: string;
  COMP_PRIV_TEAM: number;
  COMP_GEO_LATI: number;
  COMP_GEO_LONGI: number;
  INS_DATE: number;
  INS_USER: number;
  UPD_DATE: number;
  UPD_USER: number;
  COMP_IMP_BATCH: number;
  salesTeam: {
    id: number;
    name: string;
  };
  COMP_SHORT_NAME: string;
  COMP_DATA_SOURCE: string;
  RANK: string;
  COMP_VISIT_FREQUENCY: number;
  COMP_PRINT_NAME: string;
  COMP_SHIP_DETAILS: string;
  COMP_ADDR_INVALID: number;
  active: boolean;
}
