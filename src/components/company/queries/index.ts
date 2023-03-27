/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const GET_COMPANIES = gql`
  query GetCompanies($page: Int!, $limit: Int!) {
    getCompanies(page: $page, limit: $limit) {
      additonalFields {
        additionalField {
          datatype
          description
        }
        value
      }
      address {
        city
        address
        continent
        country
        formattedAddress
        geopositionIntitude
        geopositionLatitude
        isAddressInvalid
        pobox
        state
        type {
          description
          id
          name
        }
      }
      callPattern {
        description
        id
        name
      }
      comments
      dataSource
      hasDwin
      hasForecast
      hasHolydayCard
      hasQuot
      hasRegi
      companyCategory {
        description
        id
        name
      }
      companyClass {
        description
        id
        name
      }
      companyType {
        description
        id
        name
      }
      hasSamp
      hasSecundaryAlias
      id
      impBatch
      mainAddress {
        address
        city
        continent
        country
        formattedAddress
        geopositionIntitude
        geopositionLatitude
        isAddressInvalid
        pobox
        state
        type {
          description
          id
          name
        }
      }
      mainPhone {
        areaCode
        countryCode
        phone
        type {
          description
          id
          name
        }
      }
      name
      phone {
        areaCode
        countryCode
        phone
        type {
          description
          id
          name
        }
      }
      active
      printName
      privateTeam {
        name
        id
      }
      refInt
      salesTeam {
        name
        id
      }
      shipDetail
      shortName
      tag {
        description
        id
        name
      }
      visitFrequency
      website
    }
  }
`;

export const GET_ALL_COMPANIES = gql`
  query GetAllCompanies {
    getAllCompanies {
      additonalFields {
        additionalField {
          datatype
          description
        }
        value
      }
      address {
        city
        address
        continent
        country
        formattedAddress
        geopositionIntitude
        geopositionLatitude
        isAddressInvalid
        pobox
        state
        type {
          description
          id
          name
        }
      }
      callPattern {
        description
        id
        name
      }
      comments
      dataSource
      hasDwin
      hasForecast
      hasHolydayCard
      hasQuot
      hasRegi
      companyCategory {
        description
        id
        name
      }
      companyClass {
        description
        id
        name
      }
      companyType {
        description
        id
        name
      }
      hasSamp
      hasSecundaryAlias
      id
      impBatch
      mainAddress {
        address
        city
        continent
        country
        formattedAddress
        geopositionIntitude
        geopositionLatitude
        isAddressInvalid
        pobox
        state
        type {
          description
          id
          name
        }
      }
      mainPhone {
        areaCode
        countryCode
        phone
        type {
          description
          id
          name
        }
      }
      name
      phone {
        areaCode
        countryCode
        phone
        type {
          description
          id
          name
        }
      }
      active
      printName
      privateTeam {
        name
        id
      }
      refInt
      salesTeam {
        name
        id
      }
      shipDetail
      shortName
      tag {
        description
        id
        name
      }
      visitFrequency
      website
    }
  }
`;
