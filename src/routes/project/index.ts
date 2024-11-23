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
/**
 * 
 * @param route 
 * @param builder 
 * @returns 
 */
const projectPage = (route : Route,builder : aftBuilder) : RouteType => {
    /**
     * 프로젝트 페이지를 초기화합니다.
     * @param element 
     */
    const _init = async (element : HTMLElement)=>{
        await _loadData(element);
    }
    /**
     * 
     * @param element 
     */
    const _loadData = async (element : HTMLElement)=>{
        const data = await fetch('/assets/portfolio.json')
        .then(response => response.json())
        .then(data => {
            let lang = builder.querystring('lang')||'en';
            if(['ko','en'].indexOf(lang) == -1){
                lang = 'en';
            }
            _createProject(element,data.projects||[],lang);
        });
    }
    /**
     * 프로젝트 데이터를 생성합니다.    
     * @param element 
     * @param projects 
     * @param lang 
     */
    const _createProject = (element : HTMLElement,projects : any,lang:string='en')=>{
            
        const projectsContainer = element.querySelector('.projects .line')!;
        projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'item';
            if(!project.preview){
                project.preview = {'ko':[],'en':[]};
            }
            if(!project.client){
                project.client = {'ko':'', 'en':''};
            }
            item.innerHTML = `
                <div class="date">
                    <span class="data">${project.date[lang]}</span>
                </div>
                <h3 class="title">${project.title[lang]}</h3>
                <div class="row">
                    <span class="col">From</span>
                    <span class="data">${project.from[lang]}</span>
                </div>
                <div class="row">
                    <span class="col">Client</span>
                    <span class="data">${project.client[lang]}</span>
                </div>
                <div class="row">
                    <span class="col">Role</span>
                    <span class="data">${project.role[lang]}</span>
                </div>
                <div class="desc">
                    ${project.description[lang].map(desc => `• ${desc}<br>`).join('')}
                </div>
                <ul class="tech-list">
                    ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
                </ul>
                <div class="preview-wrap">
                    <ul class="preview-list">
                        ${(project.preview||[])[lang].map(item => `
                            <li data-list="${item.type}" data-src="${item.src}" aft-event="onPreview">
                                <span style="background-image: url('${item.image}');"></span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            projectsContainer.appendChild(item);
        });
    }
    /**
     * 팝업창을 닫습니다.
     * @param popup 
     */
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
    /**
     * 비디오 팝업창을 생성합니다.
     * @param src 
     */
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
    /**
     * 이미지 팝업창을 생성합니다.
     * @param src 
     */
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
    /**
     * 프로젝트 미리보기를 처리합니다.
     * @param btn 
     * @param e 
     */
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
                onload:async (element)=>{
                    await   _init(element);
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