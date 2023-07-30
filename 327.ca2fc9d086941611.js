"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[327],{8327:(b,l,i)=>{i.r(l),i.d(l,{CharacterModule:()=>q});var c=i(6814),d=i(5959),s=i(6223),_=i(4906),p=i(4760),t=i(5879),h=i(7647),g=i(6595),u=i(2970);let C=(()=>{class e{constructor(){this.data=(0,t.f3M)(h.WI),this.typeStatus={Dead:"Muerto",Alive:"Vivo",unknown:"Desconocido"}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-view-character"]],decls:42,vars:10,consts:[[1,"modal-content"],[3,"titleModal"],[1,"character-information"],[1,"information-content"],[1,"flex"],[1,"sub-title"],["width","300px","height","300px",3,"src","alt"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-title-modal",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"p",5),t._uU(6,"Nombre:"),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"p",5),t._uU(11,"Estado:"),t.qZA(),t.TgZ(12,"p"),t._uU(13),t.qZA()(),t.TgZ(14,"div",4)(15,"p",5),t._uU(16,"Especie:"),t.qZA(),t.TgZ(17,"p"),t._uU(18),t.qZA()(),t.TgZ(19,"div",4)(20,"p",5),t._uU(21,"Tipo:"),t.qZA(),t.TgZ(22,"p"),t._uU(23),t.qZA()(),t.TgZ(24,"div",4)(25,"p",5),t._uU(26,"Genero:"),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA()(),t.TgZ(29,"div",4)(30,"p",5),t._uU(31,"Origen:"),t.qZA(),t.TgZ(32,"p"),t._uU(33),t.qZA()(),t.TgZ(34,"div",4)(35,"p",5),t._uU(36,"Lugar:"),t.qZA(),t.TgZ(37,"p"),t._uU(38),t.qZA()()(),t.TgZ(39,"div"),t._UZ(40,"img",6),t.qZA()(),t._UZ(41,"app-buttons-modal"),t.qZA()),2&n&&(t.xp6(1),t.Q6J("titleModal",o.data.name),t.xp6(7),t.Oqu(o.data.name),t.xp6(5),t.Oqu(o.typeStatus[o.data.status]||"No cuenta con una estado"),t.xp6(5),t.Oqu(o.data.species||"No cuenta con una especie"),t.xp6(5),t.Oqu(o.data.type||"No cuenta con un tipo"),t.xp6(5),t.Oqu(o.data.gender||"No cuenta con un genero"),t.xp6(5),t.Oqu(o.data.origin.name||"No cuenta con un origen"),t.xp6(5),t.Oqu(o.data.location.name||"No cuenta con un lugar"),t.xp6(2),t.Q6J("src",o.data.image,t.LSH)("alt",o.data.name))},dependencies:[g.i,u.p],styles:[".information-content[_ngcontent-%COMP%]{width:90%;margin:30px auto;display:flex;flex-direction:column;gap:10px}.flex[_ngcontent-%COMP%]{display:flex;gap:15px}.sub-title[_ngcontent-%COMP%]{font-weight:700}.modal-content[_ngcontent-%COMP%]{background-color:#3a3a3a}.character-information[_ngcontent-%COMP%]{display:flex;width:90%;margin:30px auto}img[_ngcontent-%COMP%]{border-radius:8px}"]}),e})();var x=i(7152),Z=i(3396),v=i(6084),m=i(8945);function M(e,a){if(1&e&&(t.TgZ(0,"p",26),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit,o=t.oxw(3);t.xp6(1),t.Oqu(o.typeStatus[n.status])}}function O(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",23),t.NdJ("click",function(){const F=t.CHM(n).$implicit,f=t.oxw(3);return t.KtG(f.openModal(f.modal,F))}),t._UZ(1,"img",24),t.TgZ(2,"div",25)(3,"p",26),t._uU(4),t.qZA(),t.YNc(5,M,2,1,"p",27),t.qZA()()}if(2&e){const n=a.$implicit;t.xp6(1),t.s9C("alt",n.name),t.Q6J("ngSrc",n.image)("width","300")("height","300"),t.xp6(3),t.Oqu(n.name),t.xp6(1),t.Q6J("ngIf",n.status)}}function T(e,a){if(1&e&&(t.TgZ(0,"div",21),t.YNc(1,O,6,6,"div",22),t.ALo(2,"async"),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.lcZ(2,1,n.store.select("rickAndMorty")).responseApi.results)}}function A(e,a){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",4)(2,"app-sort",5),t.NdJ("emitSort",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.getCharacters())}),t.qZA(),t.TgZ(3,"div",6)(4,"label",7),t._uU(5,"Estado:"),t.qZA(),t.TgZ(6,"select",8),t.NdJ("change",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.setFilters("status",r.status.value))}),t.TgZ(7,"option",9),t._uU(8,"Todos"),t.qZA(),t.TgZ(9,"option",10),t._uU(10,"Vivo"),t.qZA(),t.TgZ(11,"option",11),t._uU(12,"Muerto"),t.qZA(),t.TgZ(13,"option",12),t._uU(14,"Desconocido"),t.qZA()(),t.TgZ(15,"label",13),t._uU(16,"G\xe9nero:"),t.qZA(),t.TgZ(17,"select",8),t.NdJ("change",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.setFilters("gender",r.gender.value))}),t.TgZ(18,"option",9),t._uU(19,"Todos"),t.qZA(),t.TgZ(20,"option",14),t._uU(21,"Masculino"),t.qZA(),t.TgZ(22,"option",15),t._uU(23,"Femenino"),t.qZA(),t.TgZ(24,"option",16),t._uU(25,"Sin g\xe9nero"),t.qZA(),t.TgZ(26,"option",12),t._uU(27,"Desconocido"),t.qZA()()()(),t.TgZ(28,"div",17)(29,"h2",18),t._uU(30,"Lista de personajes"),t.qZA(),t.YNc(31,T,3,3,"div",19),t.ALo(32,"async"),t.qZA(),t.TgZ(33,"app-pagination",20),t.NdJ("emitPageChange",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.getCharacters())}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw();t.xp6(2),t.Q6J("listFields",n.listFields),t.xp6(4),t.Q6J("formControl",n.status),t.xp6(11),t.Q6J("formControl",n.gender),t.xp6(14),t.Q6J("ngIf",t.lcZ(32,4,n.store.select("rickAndMorty")).responseApi)}}function P(e,a){1&e&&t._UZ(0,"app-not-found")}const y=[{path:"",component:(()=>{class e extends _.K{constructor(){super(...arguments),this.currentPage=1,this.status=new s.NI(""),this.gender=new s.NI(""),this.options={},this.modal=C,this.typeStatus={Dead:"Muerto",Alive:"Vivo",unknown:"Desconocido"}}ngOnInit(){this.getCharacters(),this.listFields=[{label:"Nombre",value:"name"},{label:"Tipo",value:"type"}],this.store$=this.store.select("rickAndMorty").subscribe({next:n=>{this.currentPage=n.currentPage,this.options=n.options,this.notFound=n.notFound}})}ngOnDestroy(){this.store$.unsubscribe(),this.store.dispatch(p.VM())}getCharacters(){this.baseService.getMethod("character",this.currentPage,this.options).subscribe({next:n=>{this.store.dispatch(p.nk({responseApi:n}))},error:n=>{404===n.status&&this.store.dispatch(p.EA())}})}setFilters(n,o){this.store.dispatch(p.Ov({field:n,value:o})),this.store.dispatch(p.Jr({currentPage:1})),this.getCharacters()}}return e.\u0275fac=function(){let a;return function(o){return(a||(a=t.n5z(e)))(o||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-list-characters"]],features:[t.qOj],decls:5,vars:3,consts:[[1,"main-container"],[3,"listFields","emitFilter"],[4,"ngIf","ngIfElse"],["notFoundTemplate",""],[1,"filters-sort-content"],[3,"listFields","emitSort"],[1,"opciones-container"],["for","estado"],[3,"formControl","change"],["value",""],["value","Alive"],["value","Dead"],["value","unknown"],["for","genero"],["value","Male"],["value","Female"],["value","Genderless"],[1,"average-width"],[1,"title"],["class","content-cards",4,"ngIf"],[3,"emitPageChange"],[1,"content-cards"],["class","card",3,"click",4,"ngFor","ngForOf"],[1,"card",3,"click"],["oncontextmenu","return false","onkeydown","return false",3,"ngSrc","alt","width","height"],[1,"card-info"],[1,"text"],["class","text",4,"ngIf"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0)(1,"app-filter",1),t.NdJ("emitFilter",function(){return o.getCharacters()}),t.qZA(),t.YNc(2,A,34,6,"ng-container",2),t.qZA(),t.YNc(3,P,1,0,"ng-template",null,3,t.W1O)),2&n){const r=t.MAs(4);t.xp6(1),t.Q6J("listFields",o.listFields),t.xp6(1),t.Q6J("ngIf",!o.notFound)("ngIfElse",r)}},dependencies:[c.sg,c.O5,x.z,Z.x,v.Q,s.YN,s.Kr,s.EJ,s.JJ,s.oH,c.Zd,m.w,c.Ov],styles:['@charset "UTF-8";.list[_ngcontent-%COMP%]{list-style-type:none;padding:0}.list-item[_ngcontent-%COMP%]{margin-bottom:10px;padding:10px;border-radius:8px;cursor:pointer;border:1px solid transparent;box-shadow:0 1px 3px #171717;background-color:#ffffff26;text-align:center;color:#fff}.item-link[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-weight:700}.list-item[_ngcontent-%COMP%]:hover{background-color:#ffffff40;transform:scale(1.1);box-shadow:0 10px 10px #58b0c0cc;margin-bottom:20px}.opciones-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:80%;margin:0 auto 10px;gap:15px;justify-content:center}.opciones-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-right:10px}.opciones-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{padding:5px;font-size:14px;border:1px solid #ccc;border-radius:5px;background-color:#fff;cursor:pointer}.opciones-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{background-color:#fff}.opciones-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[value=""][_ngcontent-%COMP%]{font-style:italic}.opciones-container[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.filters-sort-content[_ngcontent-%COMP%]{width:83%;margin:0 auto;display:grid;grid-template-columns:1fr 1fr}.filters-sort-content[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%], .filters-sort-content[_ngcontent-%COMP%]   app-sort[_ngcontent-%COMP%]     .opciones-container{width:100%}.filters-sort-content[_ngcontent-%COMP%]   .opciones-container[_ngcontent-%COMP%]{align-self:flex-end}.content-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(185px,1fr));gap:30px}.card[_ngcontent-%COMP%]{border-radius:8px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto;cursor:pointer;border-radius:8px 8px 0 0}.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;margin:0 0 0 8px}.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;cursor:pointer}.card[_ngcontent-%COMP%]:hover{transform:scale(1.1);box-shadow:0 10px 10px #58b0c0cc}@media screen and (max-width: 500px){.filters-sort-content[_ngcontent-%COMP%]{display:block}}']}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(y),d.Bz]}),e})();var U=i(6208);let q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,w,U.m,s.UX,g.i,u.p,m.w]}),e})()}}]);