
import {aftBuilder} from "afts/dist/main/aft-builder";
import {AccessPageInfo} from "afts/dist/main/plugin/aft-router";
import { AppRoutes } from "./routes";
const errors = {
    '404':`${window['_prefix']}/error/404`,
    '400':`${window['_prefix']}/error/400`,
    '401':`${window['_prefix']}/error/401`,
    '500':`${window['_prefix']}/error/500`,
};
const whiteList = [
    `${window['_prefix']}/email/check`
];

const builder = new aftBuilder('','');

window['builder'] = builder;
AppRoutes(builder,builder.getRouter());
//빌드

builder
    .viewPath('/public/')
    .errorPages(errors)
    .container(document.querySelector('#content-body')!)
    .interceptor((path,pageInfo:AccessPageInfo)=>{
        console.log(`access ${path}`);
        if(path !== '/'){
           document.body.classList.add('content');
        }   
    })
    .build(()=>{
        console.log((document.querySelector('#content-body')! as HTMLElement).offsetHeight);
        if(document.querySelector('.focus2')!){
            (document.querySelector('.focus2')! as HTMLElement).style.height = `${(document.querySelector('#content-body')! as HTMLElement).offsetHeight}px`;    
        }
        console.log('success to build');
        
    });
['[aft-event=home]','[aft-event=project]','[aft-event=contact]'].forEach(selector=>{
    console.log(selector);
    document.querySelector(selector)!.addEventListener('click',(e)=>{
        let target = e.target as HTMLAnchorElement;
        
        location.href=target.href!;
        e.preventDefault();

    });
}); 
document.querySelector('.focus')!.addEventListener('mousemove',(e : MouseEvent)=>{
    let target = e.target as HTMLElement;
    target.style.opacity = '1';
    target.style.background = `radial-gradient(600px at ${e.offsetX}px ${e.offsetY}px, rgba(150,150, 150, 0.15), transparent 80%)`;
    
});

window.addEventListener('resize',()=>{
    window['_isMobile']=window.innerWidth<1024;
});
