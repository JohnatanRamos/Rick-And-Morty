"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[825],{9825:(b,r,i)=>{i.r(r),i.d(r,{LocationModule:()=>O});var c=i(6814),p=i(5959),f=i(4906),l=i(4760),t=i(5879),L=i(7647),m=i(6595),d=i(2970);let x=(()=>{class n{constructor(){this.data=(0,t.f3M)(L.WI)}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-view-location"]],decls:19,vars:4,consts:[[1,"modal-content"],[3,"titleModal"],[1,"information-content"],[1,"flex"],[1,"sub-title"]],template:function(o,s){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-modal",1),t.TgZ(2,"div",2)(3,"div",3)(4,"p",4),t._uU(5,"Nombre:"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()(),t.TgZ(8,"div",3)(9,"p",4),t._uU(10,"Tipo:"),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()(),t.TgZ(13,"div",3)(14,"p",4),t._uU(15,"Dimensi\xf3n:"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA()()(),t._UZ(18,"app-buttons-modal"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("titleModal",s.data.name),t.xp6(6),t.Oqu(s.data.name),t.xp6(5),t.Oqu(s.data.type||"No cuenta con un tipo"),t.xp6(5),t.Oqu(s.data.dimension||"No cuenta con una dimensi\xf3n"))},dependencies:[m.i,d.p],styles:[".information-content[_ngcontent-%COMP%]{width:90%;margin:30px auto;display:flex;flex-direction:column;gap:10px}.flex[_ngcontent-%COMP%]{display:flex;gap:15px}.sub-title[_ngcontent-%COMP%]{font-weight:700}.modal-content[_ngcontent-%COMP%]{background-color:#3a3a3a}"]}),n})();var h=i(7152),C=i(3396),_=i(6084),u=i(8945);function Z(n,e){if(1&n){const o=t.EpF();t.TgZ(0,"li",11),t.NdJ("click",function(){const P=t.CHM(o).$implicit,g=t.oxw(3);return t.KtG(g.openModal(g.modalComponent,P))}),t.TgZ(1,"a",12),t._uU(2),t.qZA()()}if(2&n){const o=e.$implicit;t.xp6(2),t.AsE(" ",o.name," ",o.type?" - "+o.type:""," ")}}function v(n,e){if(1&n&&(t.TgZ(0,"ul",9),t.YNc(1,Z,3,2,"li",10),t.ALo(2,"async"),t.qZA()),2&n){const o=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,o.store.select("rickAndMorty")).responseApi.results)}}function y(n,e){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"app-sort",4),t.NdJ("emitSort",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.getLocations())}),t.qZA(),t.TgZ(2,"div",5)(3,"h2",6),t._uU(4,"Lista de lugares"),t.qZA(),t.YNc(5,v,3,3,"ul",7),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"app-pagination",8),t.NdJ("emitPageChange",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.getLocations())}),t.qZA(),t.BQk()}if(2&n){const o=t.oxw();t.xp6(1),t.Q6J("listFields",o.listFields),t.xp6(4),t.Q6J("ngIf",t.lcZ(6,2,o.store.select("rickAndMorty")).responseApi)}}function A(n,e){1&n&&t._UZ(0,"app-not-found")}const M=[{path:"",component:(()=>{class n extends f.K{constructor(){super(...arguments),this.currentPage=1,this.options={},this.modalComponent=x}ngOnInit(){this.getLocations(),this.listFields=[{label:"Nombre",value:"name"},{label:"Tipo",value:"type"}],this.store$=this.store.select("rickAndMorty").subscribe({next:o=>{this.currentPage=o.currentPage,this.options=o.options,this.notFound=o.notFound}})}getLocations(){this.baseService.getMethod("location",this.currentPage,this.options).subscribe({next:o=>{this.store.dispatch(l.nk({responseApi:o}))},error:o=>{404===o.status&&this.store.dispatch(l.EA())}})}ngOnDestroy(){this.store$.unsubscribe(),this.store.dispatch(l.VM())}}return n.\u0275fac=function(){let e;return function(s){return(e||(e=t.n5z(n)))(s||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-list-locations"]],features:[t.qOj],decls:5,vars:3,consts:[[1,"main-container"],[3,"listFields","emitFilter"],[4,"ngIf","ngIfElse"],["notFoundTemplate",""],[3,"listFields","emitSort"],[1,"average-width"],[1,"title"],["class","list",4,"ngIf"],[3,"emitPageChange"],[1,"list"],["class","list-item",3,"click",4,"ngFor","ngForOf"],[1,"list-item",3,"click"],[1,"item-link"]],template:function(o,s){if(1&o&&(t.TgZ(0,"div",0)(1,"app-filter",1),t.NdJ("emitFilter",function(){return s.getLocations()}),t.qZA(),t.YNc(2,y,8,4,"ng-container",2),t.qZA(),t.YNc(3,A,1,0,"ng-template",null,3,t.W1O)),2&o){const a=t.MAs(4);t.xp6(1),t.Q6J("listFields",s.listFields),t.xp6(1),t.Q6J("ngIf",!s.notFound)("ngIfElse",a)}},dependencies:[c.sg,c.O5,h.z,C.x,_.Q,u.w,c.Ov],styles:[".list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.list-item[_ngcontent-%COMP%]{margin-bottom:10px;padding:10px;border-radius:8px;cursor:pointer;border:1px solid transparent;box-shadow:0 1px 3px #171717;background-color:#ffffff26;text-align:center;color:#fff}.item-link[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-weight:700}.list-item[_ngcontent-%COMP%]:hover{background-color:#ffffff40;transform:scale(1.1);box-shadow:0 10px 10px #58b0c0cc;margin-bottom:20px}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(M),p.Bz]}),n})();var F=i(6208);let O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,T,F.m,m.i,d.p,u.w]}),n})()}}]);