void 0===window.centovacast&&(window.centovacast={});void 0===window.centovacast.options&&(window.centovacast.options={});
void 0===window.centovacast.loader&&(window.centovacast.loader={attempts:0,external_jquery:!1,loaded:!1,ready:!1,widget_definitions:{},url:"",load_script:function(b){var a=document.createElement("script");void 0!==a&&(a.setAttribute("type","text/javascript"),a.setAttribute("src",b),void 0!==a&&document.getElementsByTagName("head")[0].appendChild(a))},load_widget:function(b){b=this.widget_definitions[b];null===b.ref&&(b.ref=b.define(jQuery))},jq_loaded:function(){this.external_jquery||jQuery.noConflict();
jQuery.getJSONP=this.jq_get_jsonp;for(var b in this.widget_definitions)"string"===typeof b&&this.load_widget(b);this.loaded=!0;var a=this;jQuery(document).ready(function(){a.ready=!0;for(var b in a.widget_definitions)"function"===typeof a.widget_definitions[b].init&&a.widget_definitions[b].init(jQuery)})},check:function(){if("undefined"===typeof jQuery){var b=this;setTimeout(function(){b.check()},100);this.attempts++}else this.jq_loaded()},process_widget_element:function(b,a,c,d){b=jQuery(b);var f=
!1,e={},h;for(h in a)if(a.hasOwnProperty(h)){var g=a[h];var l=b.data(g);"undefined"!==typeof l?(e[g]=l,f=!0):e[g]=""}l=b.prop("id");if(f)e.type=b.data("type");else{if("string"!==typeof l||l.substr(0,c.length+1)!==c+"_")return null;e.fromid=!0;e.originalid=l;c=l.substr(c.length+1);if(d){d=/^([a-z0-9]+)_/;f=d.exec(c);if(!f)return null;e.type=f[1];c=c.replace(d,"")}var k=null;for(h in a)a.hasOwnProperty(h)&&(g=a[h],null===k&&(k=g),d=new RegExp("_"+h+"-([^_]+)"),f=d.exec(c))&&(e[g]=f[1],c=c.replace(d,
""));e[k]=c;"string"===typeof e.mount&&(e.mount=e.mount.replace(/-/,"/"))}e.id=l;e.$el=b;return e},process_widget_elements:function(b,a,c,d){var f={},e=this;b.each(function(){var b=e.process_widget_element(this,a,c,d),g=""+b.username+b.mount;f[g]||(f[g]=jQuery.extend({},b),d&&(f[g].type=void 0),f[g].hastype=d,f[g].$el=d?{}:null);d?f[g].$el[b.type]=f[g].$el[b.type]?f[g].$el[b.type].add(b.$el[0]):b.$el:f[g].$el=f[g].$el?f[g].$el.add(b.$el[0]):b.$el});return{widget_data:f,get:function(a){if(this.widget_data[a])return this.widget_data[a]},
get_property:function(a,b){if(this.widget_data[a]&&this.widget_data[a][b])return this.widget_data[a][b]},get_element:function(a,b){if(this.widget_data[a])return this.widget_data[a].hastype?this.widget_data[a].$el[b]?this.widget_data[a].$el[b]:jQuery():this.widget_data[a].$el?this.widget_data[a].$el:jQuery()},set_element:function(a,b,c){this.widget_data[a].hastype?b&&b.length&&(this.widget_data[a].$el[b]=c):this.widget_data[a].$el=c},set_property:function(a,b,c){if(!this.widget_data[a])return!1;this.widget_data[a][b]=
c;return!0},each:function(a){for(var b in this.widget_data)"string"===typeof b&&a(b,this.widget_data[b])},each_element:function(a,b){if(this.widget_data[a].hastype)for(var c in this.widget_data[a].$el)"string"!==typeof c&&void 0!==c||b(this.widget_data[a].$el[c],c);else b(this.widget_data[a].$el)}}},init:function(){var b=document.getElementsByTagName("script");b=b[b.length-1];b=void 0!==b.getAttribute.length?b.getAttribute("src"):b.getAttribute("src",2);b.match(/^https?:\/\//i)||(b=b.replace(/\/system\/.*$/,
"/"));this.url=b.replace(/(\.(?:[a-z]{2,}|[0-9]+)(:[0-9]+)?\/).*$/i,"$1");(this.external_jquery="undefined"!==typeof jQuery)||this.load_script(this.url+"system/jquery.min.js");this.check()},add:function(b,a,c){this.widget_definitions[b]||(this.widget_definitions[b]={define:c,init:a,ref:null});this.loaded&&this.load_widget(b);this.ready&&a(jQuery)},jq_get_jsonp:function(b,a,c){return jQuery.ajax({type:"GET",url:b,data:a,success:c,dataType:"jsonp"})}},window.centovacast.loader.init());
window.centovacast.loader.add("player",function(b){b.extend(!0,window.centovacast.player.settings,window.centovacast.options.player);window.centovacast.player.run()},function(b){window.centovacast.options.player=b.extend(!0,{},window.centovacast.options.player,window.centovacast.player?window.centovacast.player.config:null);return window.centovacast.player={pollcount:0,settings:{muses:{}},widgets:{},element_class:".cc_player",inspector:!1,debug:!1,dbg:function(a){this.debug&&console.log(a)},players:{muses:function(a,
c){var d=window.centovacast.player,f=window.centovacast.player.settings.muses,e="string"===typeof c.skin?c.skin.replace(/[^A-Za-z0-9_-]+/g,""):"";e.length||(e="mcclean");c.skin=e=a.url+"muses/muses-"+e+".xml";d.dbg("streaminfo:");d.dbg(a);var h=d.restricted_extend({url:d.get_tunein_url(a),lang:"auto",codec:a.tuneinformat,volume:75,tracking:!1,skin:a.url+"muses/muses-"+e+".xml",title:a.title,jsevents:!1,welcome:"",introurl:"",autoplay:1,buffering:5},f);d.restricted_extend(h,c,!0);e=window.centovacast.player.build_query(h,
!0);d.dbg("flashvars:");d.dbg(h);a=d.restricted_extend({swfurl:a.url+"muses/muses.swf",width:180,height:60,bgcolor:"#FFFFFF",wmode:"window",scale:"noscale",allowscriptaccess:"always"},f);d.dbg("extending:");d.dbg(a);d.dbg("with:");d.dbg(c);d.restricted_extend(a,c,!0);d.dbg("params:");d.dbg(a);return b("<object/>",{width:a.width,height:a.height,bgcolor:a.bgcolor}).append(b("<param/>",{name:"movie",value:a.swfurl})).append(b("<param/>",{name:"flashvars",value:e})).append(b("<param/>",{name:"wmode",
value:a.wmode})).append(b("<param/>",{name:"scale",value:a.scale})).append(b("<param/>",{name:"allowScriptAccess",value:a.allowscriptaccess})).append(b("<embed/>",{src:a.swfurl,flashvars:e,width:a.width,height:a.height,scale:a.scale,wmode:a.wmode,bgcolor:a.bgcolor,type:"application/x-shockwave-flash",allowscriptaccess:a.allowscriptaccess}))},centova:function(a,c){var d=window.centovacast.player;b("body").append(b("<link/>",{rel:"stylesheet",type:"text/css",href:a.url+"system/centovaplayer.standalone.css"}));
window.centovacast.next_unique_id=window.centovacast.next_unique_id?window.centovacast.next_unique_id+1:1;var f=b("<div />",{id:"cc_centovaplayer_"+window.centovacast.next_unique_id}),e=c.$el.data("style");e&&e.length&&f.addClass(e);(e=c.$el.data("size"))&&e.length&&f.addClass(e);e="";switch(a.tuneinformat){case "aac":e="audio/aac";break;case "ogg":e="audio/ogg";break;case "mp3":e="audio/mpeg"}var h=[a.url+"/system/centovaplayer.standalone.js"],g="object"===typeof c?c:{};g.url=d.get_tunein_url(a);
g.urltype=e;d.load_scripts({scripts:h,success:function(){f.data("player",new CentovaPlayer(f[0],g))},error:function(a){alert("Failed to load required scripts: "+a)}});return f},jplayer:function(a,c){var d=c.skin;d&&d.length||(d="blue.monday");"custom"!==c.skin&&b("body").append(b("<link/>",{rel:"stylesheet",type:"text/css",href:a.url+"jplayer/skin/"+d+"/css/jplayer."+d+".css"}));var f=window.centovacast.player,e=b("<div />",{class:"jp-info-bar"});window.centovacast.next_unique_id=window.centovacast.next_unique_id?
window.centovacast.next_unique_id+1:1;var h=window.centovacast.next_unique_id,g=b("<div />",{class:"jp-controls"}).append(b("<button/>",{class:"jp-play",role:"button",tabindex:0}).text("play")),l=b("<div />",{class:"jp-volume-controls"}).append(b("<button/>",{class:"jp-mute",role:"button",tabindex:0}).text("mute")).append(b("<button/>",{class:"jp-volume-max",role:"button",tabindex:0}).text("max volume")).append(b("<div/>",{class:"jp-volume-bar"}).append(b("<div/>",{class:"jp-volume-bar-value"})));
d=c.controlorder&&"volume,playback"===c.controlorder||0<=d.indexOf("pink.flag")?[l,g]:[g,l];var k=b("<div />",{id:"cc_jplayer_"+h,class:"jp-jplayer"});b("<div />",{class:"jp-controls"}).append(b("<button/>",{class:"jp-play",role:"button",tabindex:0}).text("play"));b("<div />",{class:"jp-volume-controls"}).append(b("<button/>",{class:"jp-mute",role:"button",tabindex:0}).text("mute")).append(b("<button/>",{class:"jp-volume-max",role:"button",tabindex:0}).text("max volume")).append(b("<div/>",{class:"jp-volume-bar"}).append(b("<div/>",
{class:"jp-volume-bar-value"})));var q=b("<div />",{id:"cc_jp_container_"+h,class:"jp-audio-stream",role:"application","aria-label":"media player"}).append(b("<div />",{class:"jp-type-single"}).append(b("<div />",{class:"jp-gui jp-interface"}).append(d[0]).append(d[1])).append(b("<div />",{class:"jp-details"}).append(b("<div/>",{class:"jp-title","aria-label":"title"}).html("&nbsp;"))).append(b("<div />",{class:"jp-no-solution"}).text("To play the media you will need to either update your browser to a recent version or update your Flash plugin."))).append(e);
h=b("<div />").append(k).append(q);var p;f.inspector&&(p=b("<div>").appendTo(h));var m=a.tuneinformat;switch(m){case "aac":m="m4a";break;case "ogg":m="oga"}var n={title:a.title};n[m]=f.get_tunein_url(a);d=[a.url+"/jplayer/jplayer/jquery.jplayer.js"];f.inspector&&d.push(a.url+"/jplayer/add-on/jquery.jplayer.inspector.min.js");f.load_scripts({scripts:d,success:function(){var d=!1,f=0;k.jPlayer({ready:function(){d=!0;k.jPlayer("setMedia",n);c.autoplay&&k.jPlayer("play")},playing:function(){f=0;e.text("")},
pause:function(){k.jPlayer("clearMedia");k.jPlayer("setMedia",n)},play:function(){e.text("Loading ...")},stalled:function(){e.text("Load stalled")},error:function(a){alert("Error: "+a.jPlayer.error.message+" "+a.jPlayer.error.hint+" ("+a.jPlayer.error.type+" context "+a.jPlayer.error.context+") "+(a.jPlayer.error.type===b.jPlayer.error.URL_NOT_SET?"Y":"N"));d&&a.jPlayer.error.type===b.jPlayer.error.URL&&5>f?(f++,setTimeout(function(){k.jPlayer("setMedia",n).jPlayer("play")},1E3)):d&&a.jPlayer.error.type===
b.jPlayer.error.URL_NOT_SET?k.jPlayer("setMedia",n).jPlayer("play"):(f=0,e.text("Error: "+a.jPlayer.error.message+" "+a.jPlayer.error.hint+" ("+a.jPlayer.error.type+" context "+a.jPlayer.error.context+") "+(a.jPlayer.error.type===b.jPlayer.error.URL_NOT_SET?"Y":"N")))},swfPath:a.url+"/jplayer/",supplied:m,cssSelectorAncestor:"#"+q.attr("id"),preload:"none",wmode:"window",useStateClassSkin:!0,autoBlur:!1,keyEnabled:!0});p&&p.length&&p.jPlayerInspector({jPlayer:k})},error:function(a){alert("Failed to load required scripts: "+
a)}});return h},wmp:function(a,c){var d=window.centovacast.player,f=window.centovacast.player.settings.wmp,e=d.restricted_extend({classid:"clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6",width:320,height:68},f);d.restricted_extend(e,c);var h=d.restricted_extend({type:"application/x-mplayer2",pluginspage:"http://www.microsoft.com/Windows/Downloads/Contents/MediaPlayer/",width:320,height:68,src:a.tuneinurl,filename:a.tuneinurl,autostart:0,showcontrols:1,showstatusbar:1,showdisplay:1},f);d.restricted_extend(h,
c);a=d.restricted_extend({url:a.tuneinurl,autostart:0,showcontrols:1,showstatusbar:1,showdisplay:1,stretchtofit:1},f);d.restricted_extend(a,c);c=b("<object/>",e);for(var g in a)a.hasOwnProperty(g)&&b("<param/>",{name:g,value:a[g]}).appendTo(c);c.append(b("<embed/>",h));return c}},load_scripts:function(a){var c=a.scripts.length,d=a.success,f=function(){c--;0>=c&&d&&d.apply(this)},e;for(e=0;e<c;e++)b.ajax({dataType:"script",cache:!0,url:a.scripts[e],success:f,error:a.error})},build_query:function(a,
b){var c,f="";for(c in a)if(a.hasOwnProperty(c)){var e=a[c];b&&"boolean"===typeof e&&(e=e?"true":"false");f+=(f.length?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(e)}return f},get_tunein_url:function(a){var b="https:"===location.protocol,d=b&&a.proxytuneinurltls?a.proxytuneinurltls:a.proxytuneinurl;d&&d.length||(d=b&&a.tuneinurltls?a.tuneinurltls:a.tuneinurl);return"ShoutCast"===a.servertype?d+"/;stream/1":d},restricted_extend:function(a,b,d){if("object"!==typeof b||"object"!==typeof a)return a;
for(var c in a)a.hasOwnProperty(c)&&b.hasOwnProperty(c)&&(!d||null!==b[c]&&("string"!==typeof b[c]||0<b[c].length))&&(a[c]=b[c]);return a},generate_player:function(a,b){var c=this.widgets.get(a),f=this.widgets.get_element(a),e=b.webplayer;e||(e="muses");e=e.replace(/sc1$/,"");this.dbg("generate "+e+" player for "+a);this.players[e]?(a=(0,this.players[e])(b,c),f.empty().append(a)):this.player_error(a,"Unavailable","Unrecognized player type: "+e)},show_loading:function(a){this.dbg("player for "+a+" is now loading ...")},
clear_loading:function(a){this.dbg("player for "+a+" is no longer loading")},player_error:function(a,b,d){this.dbg("player error for "+a+": "+b+"; "+d);this.widgets.get_element(a).html('<span title="'+d+'">'+b+"</span>");if("function"===typeof this.settings.on_error_callback)this.settings.on_error_callback(d)},handle_json:function(a,b){b||(b=a.rid);this.widgets.get(b)&&("error"===a.type?this.player_error(b,"Unavailable",a?a.error:"No JSON object"):this.generate_player(b,a.data[0]))},initialize:function(a){var c=
this.widgets.get(a);if(c){this.dbg("initializing "+a);this.show_loading(a);var d=this;b.getJSONP((this.settings.local?"/":window.centovacast.loader.url)+"external/rpc.php",{m:"streaminfo.get",username:c.username,charset:c.charset,mountpoint:c.mount,rid:a},function(b){b&&d.handle_json(b,a)})}},initialize_all:function(){var a=this;this.widgets.each(function(b){a.initialize(b)})},run:function(){this.widgets=window.centovacast.loader.process_widget_elements(b(this.element_class),{username:"username",
skin:"skin",cs:"charset",mp:"mount",width:"width",height:"height",autoplay:"autoplay",controlorder:"controlorder"},"cc_player",!1);this.initialize_all()}}});
