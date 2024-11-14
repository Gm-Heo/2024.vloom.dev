import { aftBuilder } from "afts/dist/main/aft-builder";
import { Route } from "afts/dist/main/interface/aft-interfaces";
import { RouteType } from "afts/dist/main/types/aft-types";
export declare class MainRoute implements Route {
    builder: aftBuilder;
    _mod: string;
    _params?: {
        [key: string]: any;
    };
    constructor(builder: aftBuilder);
    call(): RouteType[];
    update(key: string, params?: {
        [key: string]: any;
    }): void;
}
