/*
Copyright (c) 2009, Kissy UI Library. All rights reserved.
MIT Licensed.
http://kissy.googlecode.com/

Date: 2009-12-23 08:44:05
Revision: 334
*/
KISSY.add("datalazyload",function(f){var b=YAHOO.util,g=b.Dom,n=b.Event,j=YAHOO.lang,k=window,m=document,a="data-lazyload-src",l="ks-datalazyload",i="ks-datalazyload-custom",d={AUTO:"auto",MANUAL:"manual"},h="default",e={mod:d.MANUAL,diff:h,placeholder:"http://a.tbcdn.cn/kissy/1.0.2/build/datalazyload/dot.gif"};function c(p,o){if(!(this instanceof arguments.callee)){return new arguments.callee(p,o)}if(typeof o==="undefined"){o=p;p=[m]}if(!j.isArray(p)){p=[g.get(p)||m]}this.containers=p;this.config=f.merge(e,o||{});this.callbacks={els:[],fns:[]};this._init()}f.mix(c.prototype,{_init:function(){this.threshold=this._getThreshold();this._filterItems();if(this._getItemsLength()){this._initLoadEvent()}},_initLoadEvent:function(){var r,q=this;n.on(k,"scroll",o);n.on(k,"resize",function(){q.threshold=q._getThreshold();o()});if(q._getItemsLength()){n.onDOMReady(function(){p()})}function o(){if(r){return}r=setTimeout(function(){p();r=null},100)}function p(){q._loadItems();if(q._getItemsLength()===0){n.removeListener(k,"scroll",o);n.removeListener(k,"resize",o)}}},_filterItems:function(){var p=this.containers,v=this.threshold,z=this.config.placeholder,q=this.config.mod===d.MANUAL,o,x,t,u,s,w,r,B,A=[],y=[];for(o=0,x=p.length;o<x;++o){t=p[o].getElementsByTagName("img");for(s=0,w=t.length;s<w;++s){r=t[s];B=r.getAttribute(a);if(q){if(B){r.src=z;A.push(r)}}else{if(g.getY(r)>v&&!B){r.setAttribute(a,r.src);r.src=z;A.push(r)}}}u=p[o].getElementsByTagName("textarea");for(s=0,w=u.length;s<w;++s){if(g.hasClass(u[s],l)){y.push(u[s])}}}this.images=A;this.areaes=y},_loadItems:function(){this._loadImgs();this._loadAreaes();this._fireCallbacks()},_loadImgs:function(){var u=this.images,r=g.getDocumentScrollTop(),o=this.threshold+r,q,p,t,s=[];for(q=0;p=u[q++];){if(g.getY(p)<=o){t=p.getAttribute(a);if(t&&p.src!=t){p.src=t;p.removeAttribute(a)}}else{s.push(p)}}this.images=s},_loadAreaes:function(){var s=this.areaes,t=g.getDocumentScrollTop(),o=this.threshold+t,p,r,q,u=[];for(p=0;r=s[p++];){q=r.parentNode;if(g.getY(q)<=o){q.innerHTML=r.value}else{u.push(r)}}this.areaes=u},_fireCallbacks:function(){var u=this.callbacks,r=u.els,x=u.fns,o=g.getDocumentScrollTop(),t=this.threshold+o,s,p,w,v=[],q=[];for(s=0;(p=r[s])&&(w=x[s++]);){if(g.getY(p)<=t){w.call(p)}else{v.push(p);q.push(w)}}u.els=v;u.fns=q},addCallback:function(p,o){p=g.get(p);if(p&&typeof o==="function"){this.callbacks.els.push(p);this.callbacks.fns.push(o)}},_getThreshold:function(){var p=this.config.diff,o=g.getViewportHeight();if(p===h){return 2*o}else{return o+p}},_getItemsLength:function(){return this.images.length+this.areaes.length+this.callbacks.els.length},loadCustomLazyData:function(p){var o=p.getElementsByTagName("textarea")[0];if(o&&g.hasClass(o,i)){p.innerHTML=o.value}}});f.DataLazyload=c});