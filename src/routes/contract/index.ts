import { Route } from "afts/dist/main/interface/aft-interfaces";
import { aftBuilder } from "afts/dist/main/aft-builder";
import { RouteType } from "afts/dist/main/types/aft-types";

export class ContractRoute implements Route{
    builder : aftBuilder;
    _mod : string ='';
    _params? : {[key:string]:any}

    constructor(builder : aftBuilder) {
        this.builder = builder;
    }   

    call() : RouteType[]{
        return [
            contractPage(this,this.builder)
        ];
    }
    update(key:string,params : {[key:string]:any}={}){} 
}           

const contractPage = (route : Route,builder : aftBuilder) : RouteType => {
    return {
        path:'/contract',
        event:()=>{
            return {
                path:'contract/main',
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