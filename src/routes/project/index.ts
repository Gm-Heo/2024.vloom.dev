import { Route } from "afts/dist/main/interface/aft-interfaces";
import { aftBuilder } from "afts/dist/main/aft-builder";
import { RouteType } from "afts/dist/main/types/aft-types";

export class ProjectRoute implements Route{

    builder : aftBuilder;
    _mod : string ='';
    _params? : {[key:string]:any}

    constructor(builder : aftBuilder) {
        this.builder = builder;
    }

    call() : RouteType[]{
        return [
            projectPage(this,this.builder)
        ];
    }   
    update(key:string,params : {[key:string]:any}={}){
        //nothing to do 
    }
}

const projectPage = (route : Route,builder : aftBuilder) : RouteType => {
    return {
        path:'/project',
        event:()=>{
            return {
                path:'project/main',
                onload:(element)=>{
                    console.log('project path');
                    return element;
                },
                event:{},
                listner:{}
            }
        }
    }
}               