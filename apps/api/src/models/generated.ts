
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
    locationId: number;
}

export interface Food {
    __typename?: 'Food';
    id: number;
    name: string;
}

export interface Location {
    __typename?: 'Location';
    id: number;
    name: string;
    temperature?: Nullable<number>;
}

export interface IQuery {
    __typename?: 'IQuery';
    foods(): Food[] | Promise<Food[]>;
}

export interface IMutation {
    __typename?: 'IMutation';
    createLocation(location: CreateLocation): Nullable<Location> | Promise<Nullable<Location>>;
    createFood(food: CreateFood): Nullable<Food> | Promise<Nullable<Food>>;
}

type Nullable<T> = T | null;
