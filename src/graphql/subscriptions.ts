/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePlatform = /* GraphQL */ `subscription OnCreatePlatform($filter: ModelSubscriptionPlatformFilterInput) {
  onCreatePlatform(filter: $filter) {
    id
    name
    value
    Products {
      items {
        id
        name
        isSold
        price
        image
        platformID
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlatformSubscriptionVariables,
  APITypes.OnCreatePlatformSubscription
>;
export const onUpdatePlatform = /* GraphQL */ `subscription OnUpdatePlatform($filter: ModelSubscriptionPlatformFilterInput) {
  onUpdatePlatform(filter: $filter) {
    id
    name
    value
    Products {
      items {
        id
        name
        isSold
        price
        image
        platformID
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlatformSubscriptionVariables,
  APITypes.OnUpdatePlatformSubscription
>;
export const onDeletePlatform = /* GraphQL */ `subscription OnDeletePlatform($filter: ModelSubscriptionPlatformFilterInput) {
  onDeletePlatform(filter: $filter) {
    id
    name
    value
    Products {
      items {
        id
        name
        isSold
        price
        image
        platformID
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlatformSubscriptionVariables,
  APITypes.OnDeletePlatformSubscription
>;
export const onCreateGenre = /* GraphQL */ `subscription OnCreateGenre($filter: ModelSubscriptionGenreFilterInput) {
  onCreateGenre(filter: $filter) {
    id
    name
    value
    Products {
      items {
        id
        name
        isSold
        price
        image
        platformID
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGenreSubscriptionVariables,
  APITypes.OnCreateGenreSubscription
>;
export const onUpdateGenre = /* GraphQL */ `subscription OnUpdateGenre($filter: ModelSubscriptionGenreFilterInput) {
  onUpdateGenre(filter: $filter) {
    id
    name
    value
    Products {
      items {
        id
        name
        isSold
        price
        image
        platformID
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGenreSubscriptionVariables,
  APITypes.OnUpdateGenreSubscription
>;
export const onDeleteGenre = /* GraphQL */ `subscription OnDeleteGenre($filter: ModelSubscriptionGenreFilterInput) {
  onDeleteGenre(filter: $filter) {
    id
    name
    value
    Products {
      items {
        id
        name
        isSold
        price
        image
        platformID
        genreID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGenreSubscriptionVariables,
  APITypes.OnDeleteGenreSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    name
    isSold
    price
    image
    platformID
    genreID
    Platform {
      id
      name
      value
      Products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Genre {
      id
      name
      value
      Products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    name
    isSold
    price
    image
    platformID
    genreID
    Platform {
      id
      name
      value
      Products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Genre {
      id
      name
      value
      Products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    name
    isSold
    price
    image
    platformID
    genreID
    Platform {
      id
      name
      value
      Products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    Genre {
      id
      name
      value
      Products {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
