/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Genre } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GenreUpdateFormInputValues = {
    name?: string;
    value?: string;
};
export declare type GenreUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GenreUpdateFormOverridesProps = {
    GenreUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GenreUpdateFormProps = React.PropsWithChildren<{
    overrides?: GenreUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    genre?: Genre;
    onSubmit?: (fields: GenreUpdateFormInputValues) => GenreUpdateFormInputValues;
    onSuccess?: (fields: GenreUpdateFormInputValues) => void;
    onError?: (fields: GenreUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GenreUpdateFormInputValues) => GenreUpdateFormInputValues;
    onValidate?: GenreUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GenreUpdateForm(props: GenreUpdateFormProps): React.ReactElement;
