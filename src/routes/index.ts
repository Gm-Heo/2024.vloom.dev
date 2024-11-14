import { aftBuilder } from "afts/dist/main/aft-builder";
import { aftRouter } from "afts/dist/main/plugin/aft-router";
import { MainRoute } from "./main";
import { ProjectRoute } from "./project";
import { ContractRoute } from "./contract";

export const AppRoutes = (builder : aftBuilder,router : aftRouter) => {
    router.addAll(new MainRoute(builder));    
    router.addAll(new ProjectRoute(builder));
    router.addAll(new ContractRoute(builder));      
}