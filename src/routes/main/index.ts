import { aftBuilder } from "afts/dist/main/aft-builder";
import { Route } from "afts/dist/main/interface/aft-interfaces";
import { RouteType } from "afts/dist/main/types/aft-types";


export class MainRoute implements Route{
    builder : aftBuilder;
    _mod : string ='';
    _params? : {[key:string]:any}

    constructor(builder : aftBuilder) {
        this.builder = builder;
    }

    call() : RouteType[]{
        return [
            mainPage(this,this.builder)
        ];
    }
    update(key:string,params : {[key:string]:any}={}){}
}

const mainPage = (route : Route,builder : aftBuilder) : RouteType => {
    return {
        path:'/',
        event:()=>{
            return {
                path:'main',
                onload:(element)=>{
                    console.log(element);
                    return element;
                },
                event:{},
                listner:{}
            }
        }
    }
}