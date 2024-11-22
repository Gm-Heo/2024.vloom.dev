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
    const _closeBtn = (popup : HTMLElement)=>{
        const btn = document.createElement('button');
        btn.innerHTML = 'X';
        btn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
        `;
        btn.addEventListener('click',()=>{
            popup.remove();
        });
        popup.appendChild(btn);
    }
    const _createVideoPopup = (src: string) => {
        
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const video = document.createElement('video');
        video.src = src || '';
        video.controls = true;
        video.autoplay = true;
        video.style.cssText = `
            max-width: 90%;
            max-height: 90%;
        `;

        popup.appendChild(video);
        
        popup.addEventListener('click', (e) => {
            if(e.target === popup) {
                popup.remove();
            }
        });
        _closeBtn(popup);
        document.body.appendChild(popup);

    }
    const _createImagePopup = (src: string) => {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        `;

        const img = document.createElement('img');
        img.src = src || '';
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;

        popup.appendChild(img);
        
        popup.addEventListener('click', (e) => {
            if(e.target === popup) {
                popup.remove();
            }
        });
        _closeBtn(popup);
        document.body.appendChild(popup);
    }
    const _onPreview = (btn : HTMLElement,e:MouseEvent)=>{
        const src = btn.getAttribute('data-src');
        const type = btn.getAttribute('data-list');
        if(type == 'video'){
            _createVideoPopup(src || '');
            
        }else if(type == 'image'){
            _createImagePopup(src || '');
        }
    }
    return {
        path:'/project',
        event:()=>{
            return {
                path:'project/main',
                onload:(element)=>{
                    return element;
                },
                event:{
                    onPreview:_onPreview
                },
                listner:{}
            }
        }
    }
}               