
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateLocation {
    name: string;
    temperature?: Nullable<number>;
}

export interface CreateFood {
    name: string;
    barcode?: Nullable<string>;
}

export interface Food {
    __typename?: 'Food';
    id: number;
    name: string;
    barcode?: Nullable<string>;
}

export interface Location {
    __typename?: 'Location';
    id: number;
    name: string;
    temperature?: Nullable<number>;
}

export interface CustomBarcode {
    __typename?: 'CustomBarcode';
    id: number;
    barcode: string;
    color: string;
}

export interface ProductInformation {
    __typename?: 'ProductInformation';
    barcode: string;
    name: string;
}

export interface IQuery {
    __typename?: 'IQuery';
    foods(): Food[] | Promise<Food[]>;
    locations(): Location[] | Promise<Location[]>;
    customBarcodes(): CustomBarcode[] | Promise<CustomBarcode[]>;
    foodByBarcode(barcode: string): Nullable<Food> | Promise<Nullable<Food>>;
    productInformationByBarcode(barcodes: string[]): ProductInformation[] | Promise<ProductInformation[]>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createCustomBarcode(): CustomBarcode | Promise<CustomBarcode>;
    createLocation(location: CreateLocation): Location | Promise<Location>;
    createFood(food: CreateFood): Food | Promise<Food>;
}

type Nullable<T> = T | null;
