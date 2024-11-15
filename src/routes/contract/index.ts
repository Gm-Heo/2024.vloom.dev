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
        path:'/contact',
        event:()=>{
            return {
                path:'contact/main',
                onload:(element)=>{
                    element.querySelectorAll('.title p').forEach(item=>item.classList.add('slide-up-text'));
                    return element;
                },
                event:{},
                listner:{}
            }
        }
    }
}   