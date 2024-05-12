/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPlatform = /* GraphQL */ `mutation CreatePlatform(
  $input: CreatePlatformInput!
  $condition: ModelPlatformConditionInput
) {
  createPlatform(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePlatformMutationVariables,
  APITypes.CreatePlatformMutation
>;
export const updatePlatform = /* GraphQL */ `mutation UpdatePlatform(
  $input: UpdatePlatformInput!
  $condition: ModelPlatformConditionInput
) {
  updatePlatform(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePlatformMutationVariables,
  APITypes.UpdatePlatformMutation
>;
export const deletePlatform = /* GraphQL */ `mutation DeletePlatform(
  $input: DeletePlatformInput!
  $condition: ModelPlatformConditionInput
) {
  deletePlatform(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePlatformMutationVariables,
  APITypes.DeletePlatformMutation
>;
export const createGenre = /* GraphQL */ `mutation CreateGenre(
  $input: CreateGenreInput!
  $condition: ModelGenreConditionInput
) {
  createGenre(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateGenreMutationVariables,
  APITypes.CreateGenreMutation
>;
export const updateGenre = /* GraphQL */ `mutation UpdateGenre(
  $input: UpdateGenreInput!
  $condition: ModelGenreConditionInput
) {
  updateGenre(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateGenreMutationVariables,
  APITypes.UpdateGenreMutation
>;
export const deleteGenre = /* GraphQL */ `mutation DeleteGenre(
  $input: DeleteGenreInput!
  $condition: ModelGenreConditionInput
) {
  deleteGenre(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteGenreMutationVariables,
  APITypes.DeleteGenreMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
