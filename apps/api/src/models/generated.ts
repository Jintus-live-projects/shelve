
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

export interface BulkStoredFood {
    foodId: number;
    locationId: number;
    filledQuantity: number;
    fillingPourcentage: number;
}

export interface StoredFood {
    foodId: number;
    locationId: number;
    quantity: number;
    bestBeforeDate?: Nullable<string>;
}

export interface Stock {
    id: number;
    food: Food;
    location: Location;
}

export interface Food {
    __typename?: 'Food';
    id: number;
    name: string;
    barcode?: Nullable<string>;
    looseStock: LooseStock[];
    storedStock: StoredStock[];
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
    brand: string;
}

export interface LooseStock extends Stock {
    __typename?: 'LooseStock';
    id: number;
    food: Food;
    location: Location;
    filledQuantity: number;
    fillingPourcentage: number;
    barcodes: CustomBarcode[];
}

export interface StoredStock extends Stock {
    __typename?: 'StoredStock';
    id: number;
    food: Food;
    location: Location;
    quantity: number;
    bestBeforeDate?: Nullable<string>;
}

export interface IQuery {
    __typename?: 'IQuery';
    foods(): Food[] | Promise<Food[]>;
    locations(): Location[] | Promise<Location[]>;
    customBarcodes(): CustomBarcode[] | Promise<CustomBarcode[]>;
    foodByBarcode(barcode: string): Nullable<Food> | Promise<Nullable<Food>>;
    productInformationByBarcode(barcodes: string[]): ProductInformation[] | Promise<ProductInformation[]>;
    searchFood(query: string): Food[] | Promise<Food[]>;
    storedStocks(): StoredStock[] | Promise<StoredStock[]>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createCustomBarcode(): CustomBarcode | Promise<CustomBarcode>;
    createLocation(location: CreateLocation): Location | Promise<Location>;
    createFood(food: CreateFood): Food | Promise<Food>;
    bulkStore(storedFood: BulkStoredFood): LooseStock | Promise<LooseStock>;
    store(storedFood: StoredFood): StoredStock | Promise<StoredStock>;
}

type Nullable<T> = T | null;
