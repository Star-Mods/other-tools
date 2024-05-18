(function(){"use strict";var e={2064:function(e,i,t){var s=t(9242),l=t(3396);function n(e,i,t,s,n,o){const a=(0,l.up)("Users");return(0,l.wg)(),(0,l.j4)(a)}t(6699),t(2262),t(4506);var o=t(7139);const a={key:0,class:"page"},r={class:"tabs"},c=["onClick"],d={key:0},g={class:"vtl-options-filters"},h=["title","onClick"],u=["src"],p={class:"vtl-options-filters"},w=["title","onClick"],f=["src"],v={key:0,class:"table-section"},m={key:1,class:"units-section"},b={key:0,class:"instances"},y=["title"],k={class:"icon-holder"},x=["src"],R={key:0,class:"unit-statusbar"},C={class:"stats"},D={key:0},O={key:1},T={key:0},_={class:"unit-stats"},A={class:"unit-name"},F={class:"unit-cost"},L={key:0,class:"resources-minerals"},M={key:1,class:"resources-vespene"},S={key:2,class:"resources-supply"},I={class:"unit-combat"},H={key:0,class:"unit-armor"},$=["src"],U={key:1,class:"unit-shield"},j=["src"],B={key:0,class:"cards"},E=["onClick"],q=["title"],V=["src"];function Y(e,i,t,s,n,Y){const z=(0,l.up)("table-lite");return e.DA?((0,l.wg)(),(0,l.iD)("div",a,[(0,l._)("nav",null,[(0,l._)("ul",r,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.DA.catalogs,((i,t)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,o.C_)({active:e.activeCatalog===i}),key:t,onClick:e=>Y.setActiveCatalog(i)},[(0,l.Uk)((0,o.zw)(i.id)+" ",1),e.unitTypeFilersActive.length&&e.raceFiltersActive.length?((0,l.wg)(),(0,l.iD)("span",d,"("+(0,o.zw)(i.count)+")",1)):(0,l.kq)("",!0)],10,c)))),128))]),(0,l._)("ul",g,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.DA.unitTypes,((i,t)=>((0,l.wg)(),(0,l.iD)("li",{key:t,title:i.name||i.id,class:(0,o.C_)({active:e.unitTypeFilersActive.includes(i.id)}),onClick:e=>Y.toggleUnitTypeFilter(i)},[(0,l._)("img",{src:Y.icon(i)},null,8,u)],10,h)))),128))]),(0,l._)("ul",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.DA.races,((i,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t},[!i.race&&i.used?((0,l.wg)(),(0,l.iD)("li",{key:0,title:i.name||i.id,class:(0,o.C_)({active:e.raceFiltersActive.includes(i.id)}),onClick:e=>Y.toggleRaceFilter(i)},[(0,l._)("img",{src:Y.icon(i)},null,8,f)],10,w)):(0,l.kq)("",!0)],64)))),128))])]),"tech"===e.activeCatalog?.id?((0,l.wg)(),(0,l.iD)("section",v,[(0,l.Wm)(z,{columns:e.dataStructure,"create-row":Y.createTech,rows:e.DA.tech,"options-filter":Y.isFiltered,icon:Y.icon,styles:Y.styles,save:Y.save,sortable:e.sortable,"has-filters":!0},null,8,["columns","create-row","rows","options-filter","icon","styles","save","sortable"])])):(0,l.kq)("",!0),"tech"!==e.activeCatalog?.id?((0,l.wg)(),(0,l.iD)("section",m,[e.DA?((0,l.wg)(),(0,l.iD)("ul",b,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.DA[e.activeCatalog.id],((i,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t},[Y.isFiltered(i,e.activeCatalog.id)?((0,l.wg)(),(0,l.iD)("li",{key:0,title:i.id},[Y.isOnScreen(i)?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("span",k,[(0,l._)("img",{src:Y.icon(i)},null,8,x)]),i.LifeMax?((0,l.wg)(),(0,l.iD)("span",R,[(0,l._)("span",C,[(0,l._)("div",null,[i.ShieldsMax?((0,l.wg)(),(0,l.iD)("span",D,(0,o.zw)(i.ShieldsMax),1)):(0,l.kq)("",!0),i.LifeMax?((0,l.wg)(),(0,l.iD)("span",O,(0,o.zw)(i.LifeMax),1)):(0,l.kq)("",!0)]),i.EnergyMax?((0,l.wg)(),(0,l.iD)("span",T,(0,o.zw)(i.EnergyMax),1)):(0,l.kq)("",!0)]),i.ShieldsMax?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[i.ShieldsMax<=1e3?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"shields",style:(0,o.j5)({"background-size":Math.ceil(48/(i.ShieldsMax/32))+"px 3px"})},null,4)):i.ShieldsMax<=2e3?((0,l.wg)(),(0,l.iD)("span",{key:1,class:"shields more",style:(0,o.j5)({"background-size":Math.ceil(48/((i.ShieldsMax-1e3)/32))+"px 3px, 2px 3px, 50px 3px"})},null,4)):((0,l.wg)(),(0,l.iD)("span",{key:2,class:"shields evenmore",style:(0,o.j5)({"background-size":Math.max(2,Math.ceil(48/((i.ShieldsMax-2e3)/32)))+"px 2px, 2px 4px, 50px 2px"})},null,4))],64)):(0,l.kq)("",!0),i.LifeMax?((0,l.wg)(),(0,l.iD)(l.HY,{key:1},[i.LifeMax<=1e3?((0,l.wg)(),(0,l.iD)("span",{key:0,class:"life",style:(0,o.j5)({"background-size":Math.ceil(48/(i.LifeMax/32))+"px 3px"})},null,4)):i.LifeMax<=2e3?((0,l.wg)(),(0,l.iD)("span",{key:1,class:"life more",style:(0,o.j5)({"background-size":Math.ceil(48/((i.LifeMax-1e3)/32))+"px 3px, 2px 3px, 50px 3px"})},null,4)):((0,l.wg)(),(0,l.iD)("span",{key:2,class:"life evenmore",style:(0,o.j5)({"background-size":Math.max(2,Math.ceil(48/((i.LifeMax-2e3)/32)))+"px 2px, 2px 4px, 50px 2px"})},null,4))],64)):(0,l.kq)("",!0),i.EnergyMax?((0,l.wg)(),(0,l.iD)("span",{key:2,class:"energy",style:(0,o.j5)({"background-size":Math.ceil(25/(i.EnergyMax/32))+"px 3px"})},null,4)):(0,l.kq)("",!0)])):(0,l.kq)("",!0),(0,l._)("div",_,[(0,l._)("span",A,(0,o.zw)(i.id),1),(0,l._)("span",F,[i.Minerals?((0,l.wg)(),(0,l.iD)("span",L,(0,o.zw)(i.Minerals),1)):(0,l.kq)("",!0),i.Food?((0,l.wg)(),(0,l.iD)("span",M,(0,o.zw)(i.Vespene),1)):(0,l.kq)("",!0),i.Food?((0,l.wg)(),(0,l.iD)("span",S,(0,o.zw)(i.Food),1)):(0,l.kq)("",!0)]),(0,l._)("span",I,[void 0!==i.LifeArmorIcon?((0,l.wg)(),(0,l.iD)("span",H,[(0,l._)("span",null,(0,o.zw)(i.LifeArmor),1),(0,l._)("img",{src:Y.icon({icon:i.LifeArmorIcon})},null,8,$)])):(0,l.kq)("",!0),void 0!==i.ShieldArmorIcon?((0,l.wg)(),(0,l.iD)("span",U,[(0,l._)("span",null,(0,o.zw)(i.ShieldArmor),1),(0,l._)("img",{src:Y.icon({icon:i.ShieldArmorIcon})},null,8,j)])):(0,l.kq)("",!0)]),i.card?((0,l.wg)(),(0,l.iD)("div",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.card,((e,i)=>((0,l.wg)(),(0,l.iD)("table",{key:i},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([0,1,2],(i=>(0,l._)("tr",{key:i},[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([0,1,2,3],(t=>(0,l._)("td",{key:t,onClick:s=>Y.switchIcon(e[i][t])},[e[i][t]?((0,l.wg)(),(0,l.iD)("span",{key:0,title:e[i][t].at(-1).button},[(0,l._)("img",{src:Y.icon(e[i][t].at(-1))},null,8,V)],8,q)):(0,l.kq)("",!0)],8,E))),64))]))),64))])))),128))])):(0,l.kq)("",!0)])],64)):(0,l.kq)("",!0)],8,y)):(0,l.kq)("",!0)],64)))),128))])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)}var z=t(4870),P=t(6265),K=t.n(P);const W={class:"vtl-context-checkbox"},N=["id","onUpdate:modelValue","onChange"],X=["for"],Z=(0,l.Uk)(" Remove Row "),G=(0,l.Uk)(" Insert Before "),Q=(0,l.Uk)(" Insert After "),J={class:"vtl-thead"},ee=["onClick"],ie={class:"filter-field"},te={key:0},se=["onUpdate:modelValue"],le=(0,l.uE)('<svg class="corner-right-top" width="10" height="10" viewBox="0 0 10 10"><path fill="white" d="M 0 0 L 0 0 C 5 0 10 5 10 10 L 10 10 L 10 0"></path></svg><svg class="corner-right-bottom" width="10" height="10" viewBox="0 0 10 10"><path fill="white" d="M 0 10 L 0 10 C 5 10 10 5 10 0 L 10 0 L 10 10"></path></svg><svg class="corner-left-top" width="10" height="10" viewBox="0 0 10 10"><path fill="white" d="M 10 0 L 10 0 C 5 0 0 5 0 10 L 0 10 L 0 0"></path></svg><svg class="corner-left-bottom" width="10" height="10" viewBox="0 0 10 10"><path fill="white" d="M 10 10 L 10 10 C 5 10 0 5 0 0 L 0 0 L 0 10"></path></svg>',4),ne={key:0,class:"active"},oe=["title"],ae=["src"],re={colspan:"999"},ce={class:"vtl-status"},de=["height"],ge=["src"],he={key:1},ue={class:"vtl-status"},pe={key:1,class:"vtl-card-body"},we={class:"xml"},fe=["disabled"],ve=["disabled"];function me(e,i,t,n,a,r){const c=(0,l.up)("v-contextmenu-item"),d=(0,l.up)("v-contextmenu"),g=(0,l.Q2)("contextmenu"),h=(0,l.Q2)("highlightjs");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(d,{ref:"contextmenu"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.columns,((i,t)=>((0,l.wg)(),(0,l.j4)(c,{"hide-on-click":!1,key:t},{default:(0,l.w5)((()=>[(0,l._)("div",W,[(0,l.wy)((0,l._)("input",{id:"checkbox-context"+t,type:"checkbox","onUpdate:modelValue":e=>i.visible=e,onChange:t=>e.toggleColumnVisibility(i)},null,40,N),[[s.e8,i.visible]]),(0,l._)("label",{for:"checkbox-context"+t},null,8,X)]),(0,l._)("span",null,(0,o.zw)(i.field),1)])),_:2},1024)))),128))])),_:1},512),(0,l.Wm)(d,{ref:"contextmenu2"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{"hide-on-click":!0,onClick:e.removeRow},{default:(0,l.w5)((()=>[Z])),_:1},8,["onClick"]),(0,l.Wm)(c,{"hide-on-click":!0,onClick:e.insertRowBefore},{default:(0,l.w5)((()=>[G])),_:1},8,["onClick"]),(0,l.Wm)(c,{"hide-on-click":!0,onClick:e.insertRowAfter},{default:(0,l.w5)((()=>[Q])),_:1},8,["onClick"])])),_:1},512),"TABLE"===e.view?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"vtl-card-body",onKeydown:[i[16]||(i[16]=(0,s.D2)((i=>e.discardChanges()),["esc"])),i[17]||(i[17]=(0,s.D2)((i=>e.applyChanges()),["enter"]))]},[(0,l.Wm)(s.uT,null,{default:(0,l.w5)((()=>[e.editing.col?.options?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"vtl-loading-mask",onClick:i[0]||(i[0]=i=>e.applyChanges())})):(0,l.kq)("",!0)])),_:1}),(0,l._)("table",{onMousedown:i[10]||(i[10]=i=>e.tableDragStart(i)),onMousemove:i[11]||(i[11]=i=>e.tableDragMove(i)),onMouseleave:i[12]||(i[12]=i=>e.tableDragEnd(i)),onMouseup:i[13]||(i[13]=i=>e.tableDragEnd(i)),class:(0,o.C_)(["vtl-table vtl-table-hover vtl-table-bordered vtl-table-responsive vtl-table-responsive-sm",{"fixed-first-column":e.isFixedFirstColumn,"fixed-first-second-column":e.isFixedFirstColumn}]),ref:"localTable"},[(0,l.wy)(((0,l.wg)(),(0,l.iD)("thead",J,[(0,l._)("tr",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.setting.visibleColumns,((t,n)=>((0,l.wg)(),(0,l.iD)("th",{key:n,class:(0,o.C_)(["vtl-thead-th",{"with-icon":t.icon}]),style:(0,o.j5)({width:t.width?t.width:"auto"})},[(0,l._)("div",{class:(0,o.C_)(["vtl-thead-column",e.theadClasses(t)]),onClick:i=>e.doSort(t)},[(0,l._)("span",null,(0,o.zw)(t.label),1)],10,ee),(0,l._)("div",ie,[t.filter?((0,l.wg)(),(0,l.iD)("div",te,[(0,l.wy)((0,l._)("input",{onInput:i[1]||(i[1]=(...i)=>e.applyFilters&&e.applyFilters(...i)),"onUpdate:modelValue":e=>t.filter.value=e},null,40,se),[[s.nr,t.filter.value]])])):(0,l.kq)("",!0)])],6)))),128))])])),[[g,void 0,"contextmenu"]]),(0,l._)("tbody",null,[e.editing.row?((0,l.wg)(),(0,l.iD)("tr",{key:0,ref:"editRow",onWheel:i[4]||(i[4]=(0,s.iM)((()=>{}),["prevent"])),onTouchmove:i[5]||(i[5]=(0,s.iM)((()=>{}),["prevent"])),onScroll:i[6]||(i[6]=(0,s.iM)((()=>{}),["prevent"])),class:(0,o.C_)([{"modal-edit":e.editing.col.options},"vtl-tbody-tr vtl-edit-row"]),style:(0,o.j5)({top:e.editing.rowPosition})},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.setting.visibleColumns,((t,n)=>((0,l.wg)(),(0,l.iD)("td",{key:n,class:(0,o.C_)({active:e.editing.col===t})},[(0,l._)("div",{class:(0,o.C_)(["vtl-edit",e.editing.positionClass])},[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":i[2]||(i[2]=i=>e.editing.value=i),onInput:i[3]||(i[3]=(...i)=>e.filterOptions&&e.filterOptions(...i))},null,544),[[s.nr,e.editing.value]]),le],2)],2)))),128))],38)):((0,l.wg)(),(0,l.iD)("tr",{key:1,ref:"addRow",class:(0,o.C_)(["vtl-tbody-tr vtl-edit-row add-row",{"add-row-before":"before"===e.editing.draggingOverPosition,"add-row-after":"after"===e.editing.draggingOverPosition}]),style:(0,o.j5)({top:e.editing.rowPosition})},[e.editing.selectedRows.length?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("td",ne,[(0,l._)("button",{onClick:i[7]||(i[7]=i=>e.insertRow()),class:"add-button"},"+")]))],6))]),(0,l.Wm)(s.W3,{tag:"tbody",name:"slide",class:"vtl-tbody",onClick:i[8]||(i[8]=i=>e.handleTableClick(i)),onContextmenu:i[9]||(i[9]=i=>e.handleTableRightClick(i))},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.localRows,((i,t)=>((0,l.wg)(),(0,l.iD)("tr",{key:i.id},[t>e.minVisibleRow&&t<e.maxVisibleRow?((0,l.wg)(!0),(0,l.iD)(l.HY,{key:0},(0,l.Ko)(e.setting.visibleColumns,((t,s)=>((0,l.wg)(),(0,l.iD)("td",{key:s,title:i[t.field],style:(0,o.j5)(t.datasource&&i[t.field]&&e.styles(t.datasource[i[t.field]])),class:(0,o.C_)({handle:0===s})},[t.icon&&i[t.field]?((0,l.wg)(),(0,l.iD)("img",{key:0,src:e.icon(t.datasource[i[t.field]])},null,8,ae)):(0,l.kq)("",!0),(0,l._)("span",null,(0,o.zw)(i[t.field]),1)],14,oe)))),128)):(0,l.kq)("",!0)])))),128))])),_:1}),(0,l._)("tfoot",null,[(0,l._)("tr",null,[(0,l._)("td",re,[(0,l._)("div",ce,(0,o.zw)(e.editing.tableStatus),1)])])]),(0,l._)("tfoot",null,[(0,l._)("tr",{height:e.editing.expanderSize},null,8,de)])],34),e.editing.col?.options?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"vtl-field-options",style:(0,o.j5)(e.editing.position)},[(0,l._)("ul",{class:"vtl-options-list",onClick:i[14]||(i[14]=i=>e.selectOption(i)),ref:"optionsList",onScroll:i[15]||(i[15]=(...i)=>e.handleDebouncedScrollOptions&&e.handleDebouncedScrollOptions(...i))},[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.editing.options,((i,t)=>((0,l.wg)(),(0,l.iD)(l.HY,{key:t},[t>e.minVisibleOption&&t<e.maxVisibleOption?((0,l.wg)(),(0,l.iD)("li",{key:0,style:(0,o.j5)(e.styles(i))},[(0,l._)("img",{src:e.icon(i)},null,8,ge),(0,l._)("span",null,(0,o.zw)(i.id),1)],4)):((0,l.wg)(),(0,l.iD)("li",he))],64)))),128))],544),(0,l._)("div",ue,(0,o.zw)(e.editing.optionsTitle),1)],4)):(0,l.kq)("",!0)],32)):(0,l.kq)("",!0),"XML"===e.view?((0,l.wg)(),(0,l.iD)("div",pe,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("pre",null,[(0,l._)("code",we,(0,o.zw)(e.xml),1)])),[[h]])])):(0,l.kq)("",!0),(0,l._)("div",null,[(0,l._)("button",{class:"vtl-save",disabled:"XML"===e.view,onClick:i[18]||(i[18]=i=>e.xmlData())},"XML",8,fe),(0,l._)("button",{class:"vtl-save",disabled:"TABLE"===e.view,onClick:i[19]||(i[19]=i=>e.tableData())},"TABLE",8,ve)])],64)}var be=t(5792),ye=t(7823),ke=t(6258);t(2874);let xe=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});var Re=(0,l.aZ)({directives:{highlightjs:(e,i)=>{const t=e.querySelectorAll("code");for(let s=0;s<t.length;s++){const e=t[s];"string"===typeof i.value&&(e.textContent=i.value),be.Z.highlightBlock(e)}},contextmenu:ke.XM},components:{[ke.VS.name]:ke.VS,[ke.m_.name]:ke.m_},name:"my-table",emits:["do-search","is-finished","row-clicked"],props:{hasFilters:{type:Boolean,default:!1},isFixedFirstColumn:{type:Boolean,default:!1},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},rowClasses:{type:[Array,Function],default:()=>[]},total:{type:Number,default:-1},optionsFilter:{type:Function,default:e=>!0},icon:{type:Function,default:e=>""},save:{type:Function,default:(e,i)=>""},styles:{type:Function,default:e=>null},createRow:{type:Function,default:e=>null},sortable:{type:Object,default:()=>({order:"id",sort:"asc"})}},mounted(){this.applyFilters(),this.handleDebouncedScroll=(0,ye.debounce)(this.updateRowsVisibility,50),this.handleDebouncedScrollOptions=(0,ye.debounce)(this.updateOptionsVisibility,50),this.$refs.localTable.addEventListener("scroll",this.handleDebouncedScroll)},methods:{tableData(){this.view="TABLE"},xmlData(){let e=this.save(this.rows,this.columns);this.view="XML",this.xml=e},toggleColumnVisibility(e){e.visible?this.setting.visibleColumns.push(e):this.setting.visibleColumns.splice(this.setting.visibleColumns.indexOf(e),1),this.columnsWithOptions=this.setting.visibleColumns.filter((e=>e.options))},theadClasses(e){return{"vtl-sortable":e.sortable,"vtl-both":e.sortable,"vtl-asc":this.setting.order===e.field&&"asc"===this.setting.sort,"vtl-desc":this.setting.order===e.field&&"desc"===this.setting.sort}},updateOptionsVisibility(){if(!this.editing.options.length)return this.minVisibleOption=0,this.maxVisibleOption=0,void delete this.editing.optionsTitle;let e=Array.prototype.at.call(this.$refs.optionsList.children,-1).clientHeight,i=Math.floor(this.$refs.optionsList.scrollTop/e),t=Math.ceil(this.$refs.optionsList.clientHeight/e);this.minVisibleOption=i-t,this.maxVisibleOption=Math.min(i+t+t,this.editing.options.length),this.editing.options.length>t?this.editing.optionsTitle=`${i+1}-${i+t} / ${this.editing.options.length}`:this.editing.optionsTitle=`${this.editing.options.length} / ${this.editing.options.length}`},updateRowsVisibility(){let e=this.$refs.localTable;if(this.localRows.length){let i=e.tBodies[1].children[0].clientHeight,t=Math.floor(e.scrollTop/i),s=Math.ceil((e.clientHeight-e.tHead.clientHeight-e.tFoot.clientHeight-e.tBodies[0].clientHeight)/i);this.minVisibleRow=t-s,this.maxVisibleRow=Math.min(t+s+s,this.localRows.length),this.localRows.length>s?this.editing.tableStatus=`${t+1}-${t+s} / ${this.localRows.length}`:this.editing.tableStatus=`${this.localRows.length} / ${this.localRows.length}`}else this.minVisibleRow=0,this.maxVisibleRow=0,this.editing.tableStatus="";this.editing.expanderSize=e.clientHeight-e.tHead.clientHeight-e.tFoot.clientHeight-e.tBodies[0].clientHeight-e.tBodies[1].clientHeight},tableDragStart(e){this.dragging.active||this.dragging.ready||(this.dragging.ready=e.clientY)},tableDragMove(e){if("TBODY"===e.target.nodeName||"TABLE"===e.target.nodeName)return!1;let i=e.target;while("TR"!==i.nodeName)i=i.parentElement;if(i===this.$refs.addRow||i===this.$refs.editRow)return!1;let t=i.parentElement,s=Array.prototype.indexOf.call(t.children,i);if(this.editing.draggingOverPosition=e.offsetY<20?"before":"after",this.editing.draggingOverRowIndex=s,this.dragging.ready)Math.abs(this.dragging.ready-e.clientY)>10&&(delete this.dragging.ready,this.dragging.active=!0,this.isRowSelected(this.localRows[s])||(this.clearSelection(),this.selectRow(this.localRows[s])));else if(this.dragging.active){if(this.dragging.draggingOverPosition===this.editing.draggingOverPosition&&i===this.dragging.draggingOverRow)return;this.dragging.draggingOverRow&&(this.dragging.draggingOverRow.classList.remove("insert-after"),this.dragging.draggingOverRow.classList.remove("insert-before")),this.dragging.draggingOverRow=i,this.dragging.draggingOverPosition=this.editing.draggingOverPosition,this.isRowSelected(this.localRows[s])?delete this.dragging.targetIndex:(this.dragging.targetIndex=s,i.classList.add("insert-"+this.dragging.draggingOverPosition))}else this.editing.row||this.setEditRowPosition(s)},tableDragEnd(e){if(this.dragging.ready&&delete this.dragging.ready,this.dragging.active){if(this.dragging.draggingOverRow&&(this.dragging.draggingOverRow.classList.remove("insert-after"),this.dragging.draggingOverRow.classList.remove("insert-before")),this.dragging.targetIndex){let e=this.localRows[this.dragging.targetIndex];for(let i of this.editing.selectedRows)this.rows.splice(this.rows.indexOf(i),1);"before"===this.dragging.draggingOverPosition?this.rows.splice(this.rows.indexOf(e),0,...this.editing.selectedRows):this.rows.splice(this.rows.indexOf(e)+1,0,...this.editing.selectedRows),this.applyFilters()}delete this.dragging.draggingOverRow,delete this.dragging.draggingOverPosition,delete this.dragging.active,delete this.dragging.targetIndex}},removeRow(e){this.rows.splice(this.rows.indexOf(e),1),this.applyFilters()},insertRowBefore(){let e=this.createRow();console.log(this.editing.draggingOverRowIndex),this.rows.splice(this.editing.draggingOverRowIndex,0,e),this.applyFilters()},insertRowAfter(){let e=this.createRow();this.rows.splice(this.editing.draggingOverRowIndex+1,0,e),this.applyFilters()},insertRow(){this.editing.draggingOverRowIndex&&("before"===this.editing.draggingOverPosition?this.insertRowBefore():this.insertRowAfter())},headerStyle(e){return{width:e.width?e.width:"auto"}},headerClass(e){return{"vtl-sortable":e.sortable,"vtl-both":e.sortable,"vtl-asc":this.setting.order===e.field&&"asc"===this.setting.sort,"vtl-desc":this.setting.order===e.field&&"desc"===this.setting.sort}},isEditing(e,i){return this.editing.row===e&&this.editing.col===i},discardChanges(){this.editing.row?(this.editing.row=null,this.editing.col=null,this.editing.value=null):this.clearSelection()},applyChanges(){if(this.editing.selectedRows.includes(this.editing.row))for(let e of this.editing.selectedRows)e[this.editing.col.field]=this.editing.value;else this.editing.row[this.editing.col.field]=this.editing.value;this.editing.row=null,this.editing.col=null,this.editing.value=null},selectOption(e){if("UL"===e.target.nodeName)return!1;let i=e.target;while("LI"!==i.nodeName)i=i.parentElement;let t=i.parentElement,s=Array.prototype.indexOf.call(t.children,i);if(s<0)return!1;let l=this.editing.options[s];this.editing.value=l.id,this.applyChanges()},handleTableRightClick(e){},handleTableClick(e){if(this.$refs.contextmenu.visible)return!1;if("TBODY"===e.target.nodeName||"TR"===e.target.nodeName)return this.discardChanges(),!1;let i=e.target;while("TD"!==i.nodeName)i=i.parentElement;let t=i.parentElement,s=t.parentElement,n=Array.prototype.indexOf.call(t.children,i),o=Array.prototype.indexOf.call(s.children,t);if(o<0)return!1;if(this.editing.row&&this.applyChanges(),e.shiftKey&&this.editing.lastSelectedRow){let e=this.localRows.indexOf(this.editing.lastSelectedRow),i=this.localRows.slice(Math.min(e,o),Math.max(e,o)+1);this.selectRows(i)}else e.ctrlKey?this.toggleRow(this.localRows[o]):0===n?(this.clearSelection(),this.selectRow(this.localRows[o])):(this.isRowSelected(this.localRows[o])||this.clearSelection(),this.selectRow(this.localRows[o]),(0,l.Y3)((()=>{this.editRowCell(o,n)})))},clearSelection(){let e=this.editing.selectedRows.slice();for(let i of e)this.deselectRow(i)},selectRows(e){for(let i of e)this.selectRow(i)},isRowSelected(e){return this.editing.selectedRows.includes(e)},deselectRow(e){let i=this.localRows.indexOf(e);this.isRowSelected(e)&&(this.$refs.localTable.tBodies[1].children[i].classList.remove("selected"),this.editing.selectedRows.splice(this.editing.selectedRows.indexOf(e),1)),this.lastSelectedRow=null},selectRow(e){let i=this.localRows.indexOf(e);this.isRowSelected(e)||(this.$refs.localTable.tBodies[1].children[i].classList.add("selected"),this.editing.selectedRows.push(e)),this.editing.lastSelectedRow=e},toggleRow(e){this.isRowSelected(e)?this.deselectRow(e):this.selectRow(e)},setEditRowPosition(e){let i=this.$refs.localTable.tBodies[1].children[e];this.editing.rowPosition=i.offsetTop+i.clientHeight+"px"},editRowCell(e,i){let t=this.localRows[e],s=this.setting.visibleColumns[i];!1!==s.editable&&(this.editing.row=t,this.editing.col=s,this.editing.columnIndex=i,this.editing.value=t[s.field],this.setEditRowPosition(e),this.filterOptions(),(0,l.Y3)((()=>{this.$refs.editRow.children[i].getElementsByTagName("input")[0].focus(),this.showOptions()})))},showOptions(){if(!this.editing.col.options)return void(this.editing.positionClass="");let e=this.$refs.localTable.clientWidth,i=this.$refs.localTable.clientHeight,t=this.editing.position,s=this.$refs.editRow.children[this.editing.columnIndex].getBoundingClientRect(),l=e-s.right,n=i-s.bottom;l>s.left?(t.left=Math.round(s.left+s.width)+"px",t.right="auto",this.editing.positionClass="rightside"):(t.right=Math.round(l+s.width)+"px",t.left="auto",this.editing.positionClass="leftside"),s.top>n?(t.bottom=Math.round(Math.max(n-100,5))+"px",t.top="auto"):(t.top=Math.round(Math.max(s.top-100,5))+"px",t.bottom="auto")},filterOptions(){if(!this.editing.col.options)return;let e=this.editing.value?.toLowerCase();this.editing.options=this.editing.col.options.filter((i=>!1!==i.selectable&&(this.optionsFilter(i,this.editing.col.field)&&(!e||i.id.toLowerCase().includes(e))))),(0,l.Y3)((()=>{this.updateOptionsVisibility()}))},applyFilters(){let e={};this.columns.forEach((i=>{i.filter?.value&&(e[i.field]=i.filter.value.toLowerCase())})),this.localRows=this.rows.filter((i=>{if(!this.optionsFilter(i,"tech"))return!1;for(let t in e)if("index"===t){if(i[t].toString()!==e[t])return!1}else if(!i[t]?.toLowerCase().includes(e[t]))return!1;return!0})),(0,l.Y3)((()=>{this.updateRowsVisibility()}))},doSort(e){if(!e.sortable)return;let i=e.field,t="asc";i===this.setting.order&&"asc"===this.setting.sort&&(t="desc"),this.setting.order=i,this.setting.sort=t,"desc"===this.setting.sort?this.localRows.sort(((e,t)=>-xe.compare(e[i],t[i]))):this.localRows.sort(((e,t)=>xe.compare(e[i],t[i])))}},computed:{keyColumn(e){let i="";return Object.assign(e.columns).forEach((e=>{e.isKey&&(i=e.field)})),i}},data(){return{localRows:[],view:"TABLE",minVisibleRow:0,maxVisibleRow:0,minVisibleOption:0,maxVisibleOption:0}},setup(e){let i=[],t=[];e.columns.forEach((e=>{e.visible=!0,i.push(e),e.filter&&(e.filter.value=""),e.options&&t.push(e)}));const s=(0,z.qj)({selectedRows:[],lastSelectedRow:null,editorTools:!1,row:null,col:null,value:null,position:{},positionClass:""}),l=(0,z.qj)({visibleColumns:i,isCheckAll:!1,order:e.sortable.order,sort:e.sortable.sort});return{dragging:(0,z.qj)({}),columnsWithOptions:t,setting:l,editing:s,tBody:(0,z.iH)(null),localTable:(0,z.iH)(null),addRow:(0,z.iH)(null),editRow:(0,z.iH)(null),optionsList:(0,z.iH)(null),rowCheckbox:(0,z.iH)([])}}}),Ce=t(89);const De=(0,Ce.Z)(Re,[["render",me]]);var Oe=De,Te=t(9058),_e=t.n(Te),Ae=t(5551),Fe=t.n(Ae);const Le=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}),Me=new(_e().Builder),Se={icon:"ui_ingame_help_techtree_questionmark"},Ie=(e,...i)=>Fe().withOptions(e,i,{arrayBehaviour:"merge"});function He(e,i,t){let s=[{label:"#",field:"index",editable:!1,filter:{method:"contains",value:""},width:"5%",sortable:!0,isKey:!0},{label:"ID",field:"id",width:"30%",filter:{method:"contains",value:""},unique:!0,sortable:!0},...t.sort(((e,i)=>e.EditorColumn>i.EditorColumn)).map((t=>Object.assign({label:t.id,field:t.id,sortable:!0,visible:!!t.EditorColumn,type:t.Type,filter:{method:"contains",value:""},width:("Int"===t.Type?5:30)+"%",icon:$e[t.Type]?.icon,datasource:i[$e[t.Type]?.catalog],options:e[$e[t.Type]?.catalog]})))];return s}const $e={Image:{catalog:"icons",icon:!0},UpgradeLevel:{catalog:"UpgradeLevel",icon:!1},CommanderType:{catalog:"CommanderType",icon:!1},AbilCmd:{catalog:"abilities",icon:!0},Behavior:{catalog:"behaviors",icon:!0},Upgrade:{catalog:"upgrades",icon:!0},Button:{catalog:"buttons",icon:!0},Race:{catalog:"races",icon:!0},Unit:{catalog:"units",icon:!0},PlayerPrestige:{catalog:"prestiges",icon:!0},PlayerCommanders:{catalog:"commanders",icon:!0},CommanderTech:{catalog:"tech",icon:!0}};let Ue={icons:[],wireframes:[],races:[],buttons:[]};function je(e,i,t){let s=[];for(let l in e){let i=Object.keys($e)[Object.values($e).indexOf(Object.values($e).find((e=>e.catalog===l)))],n={$:{id:i},Instances:[],Fields:[]};for(let e of t[l]){let{Type:i,EditorColumn:t}=e,s={$:{Id:e.id,EditorColumn:t||0}};["Upgrade","Unit","AbilCmd","Int","Image"].includes(i)?s.$.Type=i:["Race","Behavior","Button"].includes(i)?(s.$.Type="GameLink",s.$.GameLinkType=i):(s.$.Type="User",s.$.UserType=i),n.Fields.push(s)}for(let s of e[l]){let e={};for(let i in s)if("index"!==i)if("id"===i)e.$={Id:s.id};else{let n=t[l].find((e=>e.id===i)).Type,o=s[i],a=n,r={$:{},Field:[{$:{Id:i}}]};switch(n){case"Behavior":a="GameLink",r.$.GameLink=o;break;case"AbilCmd":if(o.includes(",")){let[e,i]=o.split(",");r.$.Abil=e,"0"!==i&&(r.$.Cmd=i)}else r.$.Abil=o;break;case"Unit":case"Upgrade":case"Int":case"Image":r.$[n]=o;break;default:a="User",r.$.Type=n,r.$.Instance=o}e[a]||(e[a]=[]),e[a].push(r)}n.Instances.push(e)}s.push(n)}return Me.buildObject({Catalog:{CUser:s}})}function Be(e,i){return e?.race?Be(i.races[e.race],i):e?.commander?Be(i.commanders[e.commander],i):e}function Ee(e,i){return e?e.icon&&!e.iconbroken?`/icon/${e.icon}`:e.button&&i.buttons[e.button]?Ee(i.buttons[e.button],i):e.race?Ee(i.races[e.race],i):Ee(Se,i):Ee(Se,i)}function qe(e,i){let t=i.button;!t||e.buttons[t]||Ue.buttons.includes(t)||Ue.buttons.push(t)}function Ve(e,i){if(i.race)if(e.races[i.race])e.races[i.race].used=!0;else if(!Ue.races.includes(i.race)){Ue.races.push(i.race);i.race}}function Ye(e){let i={buttons:[],tech:[],commanders:[],prestiges:[],units:[],upgrades:[],abilities:[],behaviors:[],unitTypes:[{id:"Unit",name:"Unit",icon:"btn-unit-terran-marine"},{id:"Hero",name:"Other",icon:"btn-hero-raynor"},{id:"Structure",name:"Structure",icon:"btn-building-terran-barracks"},{id:"Other",name:"Other",icon:"wireframe-terran-troopermengskflamethrower"}],races:[{id:"all",selectable:!1,used:!0,name:"All Races",icon:"ui_battlenet_glue_coop_newuser_splashicon"},{id:"none",selectable:!1,used:!0,name:"No Race",icon:"sc2_ui_coop_circularprogress_basic_bar"}]},t={Image:[],Int:[],String:[],Text:[],AbilCmd:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],Behavior:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],Upgrade:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],Button:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],Race:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],Unit:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],UpgradeLevel:[],CommanderType:[],PlayerPrestige:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],PlayerCommanders:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}],CommanderTech:[{id:"race",Type:"Race"},{id:"icon",Type:"Image"}]};Ie(e,{races:{}});for(let l of["abilities","prestiges"])for(let i in e[l]){let t=e[l][i];qe(e,t)}i.icons=e.icons,e.icons={};for(let l in i.icons)i.icons[l]=e.icons[i.icons[l]]={id:i.icons[l],icon:i.icons[l]};for(let l in e.abilities){let t=e.abilities[l];if(Ve(e,t),t.id=l,t.info){for(let s in t.info){let n=t.info[s],o=+s.match(/\D+(\d+)/)[1]-1,a=l+","+o;n.id=a,n.race=t.race,qe(e,n),e.abilities[a]=n,i.abilities.push(n)}delete e.abilities[l]}else i.abilities.push(t)}i.abilities.sort(((e,i)=>Le.compare(e.id,i.id)));for(let l of["races","buttons","commanders","units","upgrades","behaviors","prestiges"]){for(let t in e[l]){let s=e[l][t];Ve(e,s),s.id=t,i[l].push(s)}i[l].sort(((e,i)=>Le.compare(e.id,i.id)))}let s={Structure:1e5,Unit:2e5,Hero:3e5};i.units.sort(((e,i)=>(s[e.Type]||0)+(e.priority||1e3)>(s[i.Type]||0)+(i.priority||1e3)?1:-1));for(let l of i.units){let e=l.card;if(e){let i=[];for(let t of e){let e=[[],[],[]];i.push(e);for(let i in t){let[s,l]=i.split("x");for(let n in t[i])e[l][s]||(e[l][s]=[]),e[l][s].push({button:t[i][n]})}}l.card=i}}e.catalogs={tech:{id:"tech"},buttons:{id:"buttons"},units:{id:"units"},upgrades:{id:"upgrades"},abilities:{id:"abilities"},behaviors:{id:"behaviors"}},i.catalogs=Object.values(e.catalogs),i.UpgradeLevel=e.UpgradeLevel,e.UpgradeLevel={};for(let l of i.UpgradeLevel)e.UpgradeLevel[l.id]=l;i.tech=e.tech,e.tech={};for(let l=0;l<i.tech.length;l++){let t=i.tech[l];Object.defineProperty(t,"index",{get:()=>i.tech.indexOf(t),set:e=>{},enumerable:!0,configurable:!0}),t.ability&&e.abilities[t.ability+",0"]&&(t.ability+=",0"),e.tech[t.id]&&console.log(t.id),e.tech[t.id]=t}return window.DO=e,window.DA=i,window.CF=t,{DA:i,DO:e,CF:t}}var ze={name:"UsersComponent",components:{TableLite:Oe},methods:{switchIcon(e){e?.length>1&&e.unshift(e.pop())},isOnScreen(e){return!0},isFiltered(e,i){let t=e.Type;if(["Unit","Structure","Hero"].includes(t)){if(!this.unitTypeFilersActive.includes(t))return!1}else if(!this.unitTypeFilersActive.includes("Other"))return!1;if(!this.raceFiltersActive.includes("all")){let i=Be(e,this.DO);if(i){if(!this.raceFiltersActive.includes(i.id))return!1}else if(!this.raceFiltersActive.includes("none"))return!1}return!0},setActiveCatalog(e){this.activeCatalog=e},icon(e){return Ee(e,this.DO)},styles(e){if(!e)return!1;let i=Be(e,this.DO);return!!i&&(i.color?{"background-color":i.color+"22"}:null)},updateRaceCounters(){if(this.raceFiltersActive.length&&this.unitTypeFilersActive.length)for(let e of this.DA.catalogs){let i=0;for(let t of this.DA[e.id])this.isFiltered(t,e.id)&&i++;e.count=i}},toggleUnitTypeFilter(e){this.unitTypeFilersActive.includes(e.id)?this.unitTypeFilersActive.splice(this.unitTypeFilersActive.indexOf(e.id),1):this.unitTypeFilersActive.push(e.id),this.updateRaceCounters()},toggleRaceFilter(e){this.raceFiltersActive.includes(e.id)?this.raceFiltersActive.splice(this.raceFiltersActive.indexOf(e.id),1):this.raceFiltersActive.push(e.id),this.updateRaceCounters()},download(e,i){let t="data:text/plain;charset=utf-8,"+encodeURIComponent(i);window.open(t,"_blank")},createTech(){let e={id:"id"+(new Date).getTime()};return Object.defineProperty(e,"index",{get:()=>this.DA.tech.indexOf(e),set:e=>{},enumerable:!0,configurable:!0}),this.DO.tech[e.id]=e,e},save(){return je({tech:this.DA.tech},this.DO,this.CF)},getEditorData(e){let{DA:i,DO:t,CF:s}=Ye(e);s.tech=t.techFields,delete t.techFields;for(let l of s.tech)s[l.Type].find((e=>"race"===e.id))&&(this.isRaceFiltered[l.id]=!0);this.dataStructure=He(i,t,s.tech),this.DA=i,this.DO=t,this.CF=s,this.activeCatalog=t.catalogs.tech,this.updateRaceCounters()}},created(){K().get("./gamedata.json").then((e=>this.getEditorData(e.data)))},data(){return(0,z.qj)({isRaceFiltered:{},unitTypeFilersActive:["Structure","Unit","Hero","Other"],raceFiltersActive:["all"],activeCatalog:null,sortable:{order:"index",sort:"asc"},dataStructure:null,DA:null,DO:null})}};const Pe=(0,Ce.Z)(ze,[["render",Y]]);var Ke=Pe,We={name:"App",components:{Users:Ke}};const Ne=(0,Ce.Z)(We,[["render",n]]);var Xe=Ne;(0,s.ri)(Xe).mount("#app")}},i={};function t(s){var l=i[s];if(void 0!==l)return l.exports;var n=i[s]={exports:{}};return e[s].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(i,s,l,n){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],l=e[d][1],n=e[d][2];for(var a=!0,r=0;r<s.length;r++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](s[r])}))?s.splice(r--,1):(a=!1,n<o&&(o=n));if(a){e.splice(d--,1);var c=l();void 0!==c&&(i=c)}}return i}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,l,n]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,s){var l,n,o=s[0],a=s[1],r=s[2],c=0;if(o.some((function(i){return 0!==e[i]}))){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(r)var d=r(t)}for(i&&i(s);c<o.length;c++)n=o[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},s=self["webpackChunkvueapp"]=self["webpackChunkvueapp"]||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(2064)}));s=t.O(s)})();
//# sourceMappingURL=app.2ff6a71b.js.map
