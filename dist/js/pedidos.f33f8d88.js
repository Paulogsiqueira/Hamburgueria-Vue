"use strict";(self["webpackChunkmake_your_burguer"]=self["webpackChunkmake_your_burguer"]||[]).push([[550],{692:function(e,s,a){a.d(s,{Z:function(){return l}});var t=a(252),i=a(577);function d(e,s,a,d,o,n){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",{class:(0,i.C_)(e.classe)},(0,i.zw)(e.msg),3)])}var o=(0,t.aZ)({name:"MessageOrder",props:{msg:String,classe:String}}),n=a(744);const r=(0,n.Z)(o,[["render",d],["__scopeId","data-v-27f42038"]]);var l=r},919:function(e,s,a){a.r(s),a.d(s,{default:function(){return E}});var t=a(252);const i=e=>((0,t.dD)("data-v-7a8f3380"),e=e(),(0,t.Cn)(),e),d={class:"main-container"},o=i((()=>(0,t._)("h1",null,"Gerenciar pedidos",-1)));function n(e,s,a,i,n,r){const l=(0,t.up)("Dashboard");return(0,t.wg)(),(0,t.iD)("div",d,[o,(0,t.Wm)(l)])}var r=a(963),l=a(577);const u=e=>((0,t.dD)("data-v-7597e2f1"),e=e(),(0,t.Cn)(),e),c={key:0,id:"burger-table"},v=(0,t.uE)('<div data-v-7597e2f1><div id="burger-table-heading" data-v-7597e2f1><div class="order-id" data-v-7597e2f1>Nº</div><div data-v-7597e2f1>Cliente</div><div class="order-info" data-v-7597e2f1>Pão</div><div class="order-info" data-v-7597e2f1>Carne</div><div class="order-info-small" data-v-7597e2f1>Pão/Carne</div><div class="order-info-small" data-v-7597e2f1>Opcionais</div><div data-v-7597e2f1>Ações</div></div></div>',1),g={id:"burger-table-rows"},p={class:"order-number"},h={class:"order-info"},m={class:"order-info"},f={class:"order-info-small"},w=["onChange"],_=["value","selected"],b=["onClick"],D={key:1},y=u((()=>(0,t._)("h2",null,"Não há pedidos no momento!",-1))),C=[y];function k(e,s,a,i,d,o){const n=(0,t.up)("Message");return e.pedidos?((0,t.wg)(),(0,t.iD)("div",c,[(0,t.wy)((0,t.Wm)(n,{msg:e.msg,classe:e.tipoMsg},null,8,["msg","classe"]),[[r.F8,e.msg]]),v,(0,t._)("div",g,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.pedidos,(s=>((0,t.wg)(),(0,t.iD)("div",{class:"burger-table-row",key:s.id},[(0,t._)("div",p,(0,l.zw)(s.id),1),(0,t._)("div",null,(0,l.zw)(s.nome),1),(0,t._)("div",h,(0,l.zw)(s.pao),1),(0,t._)("div",m,(0,l.zw)(s.carne),1),(0,t._)("div",f,[(0,t._)("ul",null,[(0,t._)("li",null,(0,l.zw)(s.pao),1),(0,t._)("li",null,(0,l.zw)(s.carne),1)])]),(0,t._)("div",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.opcionais,((e,s)=>((0,t.wg)(),(0,t.iD)("ul",{key:s},[(0,t._)("li",null,(0,l.zw)(e),1)])))),128))]),(0,t._)("div",null,[(0,t._)("select",{name:"status",class:"status",onChange:a=>e.updatePedido(a,s.id)},[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.status,(e=>((0,t.wg)(),(0,t.iD)("option",{value:e.tipo,key:e.id,selected:s.status==e.tipo},(0,l.zw)(e.tipo),9,_)))),128))],40,w),(0,t._)("button",{class:"delete-btn",onClick:a=>e.deletePedido(s.id)}," Cancelar ",8,b)])])))),128))])])):((0,t.wg)(),(0,t.iD)("div",D,C))}var P=a(692),z=(0,t.aZ)({name:"Dashboard",components:{Message:P.Z},data(){return{pedidos:[],pedido:{},status:[],msg:"",tipoMsg:"message-container"}},methods:{async getPedidos(){const e=await fetch("http://localhost:3000/burguers"),s=await e.json();this.pedidos=s,console.log(this.pedidos),this.getStatus()},async deletePedido(e){const s=await fetch(`http://localhost:3000/burguers/${e}`,{method:"DELETE"});await s.json();this.msg="Pedido removido com sucesso!",setTimeout((()=>{this.msg=""}),3e3),this.getPedidos()},async updatePedido(e,s){const a=e.target,t=a.value,i=JSON.stringify({status:t});console.log(t);const d=await fetch(`http://localhost:3000/burguers/${s}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:i}),o=await d.json();this.msg=`Pedido Nº ${o.id} foi atualizado para ${o.status}!`,setTimeout((()=>{this.msg=""}),3e3)},async getStatus(){const e=await fetch("http://localhost:3000/status"),s=await e.json();this.status=s}},mounted(){this.getPedidos()}}),Z=a(744);const j=(0,Z.Z)(z,[["render",k],["__scopeId","data-v-7597e2f1"]]);var M=j,S=(0,t.aZ)({name:"PedidosBurguer",components:{Dashboard:M}});const T=(0,Z.Z)(S,[["render",n],["__scopeId","data-v-7a8f3380"]]);var E=T}}]);
//# sourceMappingURL=pedidos.f33f8d88.js.map