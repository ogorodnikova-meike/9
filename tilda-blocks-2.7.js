function t142_checkSize(recid){var el=$("#rec"+recid).find(".t142__submit");if(el.length){var btnheight=el.height()+5;var textheight=el[0].scrollHeight;if(btnheight<textheight){var btntext=el.text();el.addClass("t142__submit-overflowed")}}}
function t179_showvideo(recid){var rec=document.getElementById('rec'+recid);var youTubeCarrier=document.getElementById('youtubeiframe_carier'+recid);var playBtn=rec.querySelector('.t179__playbutton');var videoContainer=rec.querySelector('.t179__videocontainer');var videoHeight=videoContainer?videoContainer.getAttribute('data-height')||'540':'540';var videoID=videoContainer?videoContainer.getAttribute('data-youtube-id'):'';var videoURL=videoID?'https://www.youtube.com/embed/'+videoID:'';var videoHeightForIframe=parseInt(videoHeight,10);if(playBtn)playBtn.style.display='none';if(videoContainer)videoContainer.style.display='block';if(youTubeCarrier){var iframe=document.createElement('iframe');iframe.id='youtubeiframe'+recid;iframe.width='100%';iframe.height=videoHeightForIframe.toString();iframe.src=videoURL+(videoURL.indexOf('?')!==-1?'&':'?')+'autoplay=1&rel=0';iframe.frameBorder='0';iframe.setAttribute('allowfullscreen','');youTubeCarrier.insertAdjacentElement('beforeend',iframe)}}
function t228__init(recid){var el=$('#rec'+recid);var mobile=el.find('.t228__mobile');var fixedBlock=mobile.css('position')==='fixed'&&mobile.css('display')==='block';setTimeout(function(){el.on('click','.t-menusub__target-link',function(){if(isMobile){if($(this).hasClass('t-menusub__target-link_active')){el.find('.t228').trigger('overflow')}else{el.find('.t228').trigger('nooverflow')}}});el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click',function(){if($(this).is('.tooltipstered, .t-menusub__target-link, .t794__tm-link, .t966__tm-link, .t978__tm-link')){return}
if(fixedBlock){mobile.trigger('click')}});el.find('.t-menusub__link-item').on('click',function(){if(fixedBlock){mobile.trigger('click')}});el.find('.t228__right_buttons_but .t-btn').on('click',function(){if(fixedBlock){mobile.trigger('click')}});el.find('.t228__positionabsolute');el.find('.t228').on('overflow',function(){t228_checkOverflow(recid)});el.find('.t228').on('nooverflow',function(){t228_checkNoOverflow(recid)});el.find('.t228').on('showME601a',function(){el.find('.t966__menu-link').on('click',function(){if(fixedBlock){mobile.trigger('click')}})})},500)}
function t228_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t228__list_item a[href='"+url+"']").addClass("t-active");$(".t228__list_item a[href='"+url+"/']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t228__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t228__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t228_checkAnchorLinks(recid){var el=$('#rec'+recid);if($(window).width()>980){var t228_navLinks=el.find(".t228__list_item a:not(.tooltipstered)[href*='#']");if(t228_navLinks.length>0){setTimeout(function(){t228_catchScroll(t228_navLinks)},500)}}}
function t228_checkOverflow(recid){var el=$('#rec'+recid);var menu=el.find('.t228');var winHeight=$(window).height();if(menu.css('position')==='fixed'){menu.addClass('t228__overflow');menu[0].style.setProperty('height',winHeight-$('.t228__mobile_container').outerHeight(!0)+'px','important')}}
function t228_checkNoOverflow(recid){var el=$('#rec'+recid);var menu=el.find('.t228');var submenus=el.find('.t966__tooltip-menu_mobile');if(menu.css('position')==='fixed'){menu.removeClass('t228__overflow');menu[0].style.setProperty('height','auto')}}
function t228_catchScroll(t228_navLinks){var t228_clickedSectionId=null,t228_sections=[],t228_sectionIdTonavigationLink=[],t228_interval=100,t228_lastCall,t228_timeoutId;t228_navLinks=$(t228_navLinks.get().reverse());t228_navLinks.each(function(){var t228_cursection=t228_getSectionByHref($(this));if(typeof t228_cursection.attr("id")!="undefined"){t228_sections.push(t228_cursection)}
t228_sectionIdTonavigationLink[t228_cursection.attr("id")]=$(this)});t228_sections.sort(function(a,b){return b.offset().top-a.offset().top});t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId);t228_navLinks.click(function(){var clickedSection=t228_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof clickedSection.attr("id")!="undefined"){t228_navLinks.removeClass('t-active');$(this).addClass('t-active');t228_clickedSectionId=t228_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t228_now=new Date().getTime();if(t228_lastCall&&t228_now<(t228_lastCall+t228_interval)){clearTimeout(t228_timeoutId);t228_timeoutId=setTimeout(function(){t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)},t228_interval-(t228_now-t228_lastCall))}else{t228_lastCall=t228_now;t228_clickedSectionId=t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId)}})}
function t228_getSectionByHref(curlink){var curLinkValue=curlink.attr('href').replace(/\s+/g,'').replace(/.*#/,'');if(curlink.is('[href*="#rec"]')){return $(".r[id='"+curLinkValue+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+curLinkValue+"']")}}
function t228_highlightNavLinks(t228_navLinks,t228_sections,t228_sectionIdTonavigationLink,t228_clickedSectionId){var t228_scrollPosition=$(window).scrollTop();var t228_valueToReturn=t228_clickedSectionId;if(t228_sections.length!==0&&t228_clickedSectionId===null&&t228_sections[t228_sections.length-1].offset().top>(t228_scrollPosition+300)){t228_navLinks.removeClass('t-active');return null}
$(t228_sections).each(function(e){var t228_curSection=$(this),t228_id=t228_curSection.attr('id'),t228_sectionTop=t228_curSection.offset().top,t228_navLink=t228_sectionIdTonavigationLink[t228_id];if(((t228_scrollPosition+300)>=t228_sectionTop)||(t228_sections[0].attr("id")==t228_id&&t228_scrollPosition>=$(document).height()-$(window).height())){if(t228_clickedSectionId==null&&!t228_navLink.hasClass('t-active')){t228_navLinks.removeClass('t-active');t228_navLink.addClass('t-active');t228_valueToReturn=null}else{if(t228_clickedSectionId!=null&&t228_id==t228_clickedSectionId){t228_valueToReturn=null}}
return!1}});return t228_valueToReturn}
function t228_setWidth(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var left_exist=el.find('.t228__leftcontainer').length;var left_w=el.find('.t228__leftcontainer').outerWidth(!0);var max_w=left_w;var right_exist=el.find('.t228__rightcontainer').length;var right_w=el.find('.t228__rightcontainer').outerWidth(!0);var items_align=el.attr('data-menu-items-align');if(left_w<right_w)max_w=right_w;max_w=Math.ceil(max_w);var center_w=0;el.find('.t228__centercontainer').find('li').each(function(){center_w+=$(this).outerWidth(!0)});var padd_w=40;var maincontainer_width=el.find(".t228__maincontainer").outerWidth();if(maincontainer_width-max_w*2-padd_w*2>center_w+20){if(items_align=="center"||typeof items_align==="undefined"){el.find(".t228__leftside").css("min-width",max_w+"px");el.find(".t228__rightside").css("min-width",max_w+"px");el.find(".t228__list").removeClass("t228__list_hidden")}}else{el.find(".t228__leftside").css("min-width","");el.find(".t228__rightside").css("min-width","")}})}
el.find(".t228__centerside").removeClass("t228__centerside_hidden")}
function t228_setBg(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{el.find(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t228_appearMenu(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");var topoffset=el.data('top-offset');if(topoffset&&parseInt(topoffset)>0){el.animate({"opacity":"1","top":topoffset+"px"},200,function(){})}else{el.animate({"opacity":"1","top":"0px"},200,function(){})}}}else{el.stop();el.css("visibility","hidden");el.css("opacity","0")}}})}}
function t228_changebgopacitymenu(recid){var el=$('#rec'+recid);if($(window).width()>980){el.find(".t228").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||(typeof menushadow=="undefined"&&menushadow==!1)){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t228_createMobileMenu(recid){var el=$("#rec"+recid);var menu=el.find(".t228");var burger=el.find(".t228__mobile");burger.on('click',function(e){menu.fadeToggle(300);burger.toggleClass("t228_opened")});$(window).bind('resize',t_throttle(function(){if($(window).width()>980){menu.fadeIn(0)}}))}
function t446_init(recid){var el=$('#rec'+recid);var mobile=el.find('.t446__mobile');var fixedBlock=mobile.css('position')==='fixed'&&mobile.css('display')==='block';setTimeout(function(){el.find('.t-menu__link-item:not(.t-menusub__target-link):not(.tooltipstered):not(.t794__tm-link)').on('click',function(){if($(this).is(".t-menu__link-item.tooltipstered, .t-menu__link-item.t-menusub__target-link, .t-menu__link-item.t794__tm-link, .t-menu__link-item.t966__tm-link, .t-menu__link-item.t978__tm-link")){return}
if(fixedBlock){mobile.trigger('click')}});el.find('.t-menusub__link-item').on('click',function(){if(fixedBlock){mobile.trigger('click')}})},500)}
function t446_setLogoPadding(recid){if($(window).width()>980){var t446__menu=$('#rec'+recid+' .t446');var t446__logo=t446__menu.find('.t446__logowrapper');var t446__leftpart=t446__menu.find('.t446__leftwrapper');var t446__rightpart=t446__menu.find('.t446__rightwrapper');t446__leftpart.css("padding-right",t446__logo.width()/2+50);t446__rightpart.css("padding-left",t446__logo.width()/2+50)}}
function t446_checkOverflow(recid,menuheight){var t446__menu=$('#rec'+recid+' .t446');var t446__rightwr=t446__menu.find('.t446__rightwrapper');var t446__rightmenuwr=t446__rightwr.find('.t446__rightmenuwrapper');var t446__rightadditionalwr=t446__rightwr.find('.t446__additionalwrapper');var t446__burgeroverflow=t446__rightwr.find('.t446__burgerwrapper_overflow');var t446__burgerwithoutoverflow=t446__rightwr.find('.t446__burgerwrapper_withoutoverflow');if(menuheight>0){var t446__height=menuheight}else{var t446__height=80}
if($(window).width()>980&&(t446__rightmenuwr.width()+t446__rightadditionalwr.width())>t446__rightwr.width()){t446__menu.css("height",t446__height*2);t446__rightadditionalwr.css("float","right");t446__burgeroverflow.css("display","table-cell");t446__burgerwithoutoverflow.css("display","none")}else{if(t446__menu.height()>t446__height){t446__menu.css("height",t446__height)}
if(t446__rightadditionalwr.css("float")=="right"){t446__rightadditionalwr.css("float","none")}
t446__burgeroverflow.css("display","none");t446__burgerwithoutoverflow.css("display","table-cell")}}
function t446_highlight(){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t446__list_item a[href='"+url+"']").addClass("t-active");$(".t446__list_item a[href='"+url+"/']").addClass("t-active");$(".t446__list_item a[href='"+pathname+"']").addClass("t-active");$(".t446__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t446__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t446__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t446_checkAnchorLinks(recid){if($(window).width()>=960){var t446_navLinks=$("#rec"+recid+" .t446__list_item a:not(.tooltipstered)[href*='#']");if(t446_navLinks.length>0){t446_catchScroll(t446_navLinks)}}}
function t446_catchScroll(t446_navLinks){var t446_clickedSectionId=null,t446_sections=new Array(),t446_sectionIdTonavigationLink=[],t446_interval=100,t446_lastCall,t446_timeoutId;t446_navLinks=$(t446_navLinks.get().reverse());t446_navLinks.each(function(){var t446_cursection=t446_getSectionByHref($(this));if(typeof t446_cursection.attr("id")!="undefined"){t446_sections.push(t446_cursection)}
t446_sectionIdTonavigationLink[t446_cursection.attr("id")]=$(this)});t446_updateSectionsOffsets(t446_sections);t446_sections.sort(function(a,b){return b.attr("data-offset-top")-a.attr("data-offset-top")});$(window).bind('resize',t_throttle(function(){t446_updateSectionsOffsets(t446_sections)},200));$('.t446').bind('displayChanged',function(){t446_updateSectionsOffsets(t446_sections)});setInterval(function(){t446_updateSectionsOffsets(t446_sections)},5000);t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId);t446_navLinks.click(function(){var t446_clickedSection=t446_getSectionByHref($(this));if(!$(this).hasClass("tooltipstered")&&typeof t446_clickedSection.attr("id")!="undefined"){t446_navLinks.removeClass('t-active');$(this).addClass('t-active');t446_clickedSectionId=t446_getSectionByHref($(this)).attr("id")}});$(window).scroll(function(){var t446_now=new Date().getTime();if(t446_lastCall&&t446_now<(t446_lastCall+t446_interval)){clearTimeout(t446_timeoutId);t446_timeoutId=setTimeout(function(){t446_lastCall=t446_now;t446_clickedSectionId=t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId)},t446_interval-(t446_now-t446_lastCall))}else{t446_lastCall=t446_now;t446_clickedSectionId=t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId)}})}
function t446_updateSectionsOffsets(sections){$(sections).each(function(){var t446_curSection=$(this);t446_curSection.attr("data-offset-top",t446_curSection.offset().top)})}
function t446_getSectionByHref(curlink){var t446_curLinkValue=curlink.attr("href").replace(/\s+/g,'');if(t446_curLinkValue[0]=='/'){t446_curLinkValue=t446_curLinkValue.substring(1)}
if(curlink.is('[href*="#rec"]')){return $(".r[id='"+t446_curLinkValue.substring(1)+"']")}else{return $(".r[data-record-type='215']").has("a[name='"+t446_curLinkValue.substring(1)+"']")}}
function t446_highlightNavLinks(t446_navLinks,t446_sections,t446_sectionIdTonavigationLink,t446_clickedSectionId){var t446_scrollPosition=$(window).scrollTop(),t446_valueToReturn=t446_clickedSectionId;if(t446_sections.length!=0&&t446_clickedSectionId==null&&t446_sections[t446_sections.length-1].attr("data-offset-top")>(t446_scrollPosition+300)){t446_navLinks.removeClass('t-active');return null}
$(t446_sections).each(function(e){var t446_curSection=$(this),t446_sectionTop=t446_curSection.attr("data-offset-top"),t446_id=t446_curSection.attr('id'),t446_navLink=t446_sectionIdTonavigationLink[t446_id];if(((t446_scrollPosition+300)>=t446_sectionTop)||(t446_sections[0].attr("id")==t446_id&&t446_scrollPosition>=$(document).height()-$(window).height())){if(t446_clickedSectionId==null&&!t446_navLink.hasClass('t-active')){t446_navLinks.removeClass('t-active');t446_navLink.addClass('t-active');t446_valueToReturn=null}else{if(t446_clickedSectionId!=null&&t446_id==t446_clickedSectionId){t446_valueToReturn=null}}
return!1}});return t446_valueToReturn}
function t446_setPath(){}
function t446_setBg(recid){var window_width=$(window).width();if(window_width>980){$(".t446").each(function(){var el=$(this);if(el.attr('data-bgcolor-setbyscript')=="yes"){var bgcolor=el.attr("data-bgcolor-rgba");el.css("background-color",bgcolor)}})}else{$(".t446").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-hex");el.css("background-color",bgcolor);el.attr("data-bgcolor-setbyscript","yes")})}}
function t446_appearMenu(recid){var window_width=$(window).width();if(window_width>980){$(".t446").each(function(){var el=$(this);var appearoffset=el.attr("data-appearoffset");if(appearoffset!=""){if(appearoffset.indexOf('vh')>-1){appearoffset=Math.floor((window.innerHeight*(parseInt(appearoffset)/100)))}
appearoffset=parseInt(appearoffset,10);if($(window).scrollTop()>=appearoffset){if(el.css('visibility')=='hidden'){el.finish();el.css("top","-50px");el.css("visibility","visible");el.animate({"opacity":"1","top":"0px"},200,function(){})}}else{el.stop();el.css("visibility","hidden")}}})}}
function t446_changebgopacitymenu(recid){var window_width=$(window).width();if(window_width>980){$(".t446").each(function(){var el=$(this);var bgcolor=el.attr("data-bgcolor-rgba");var bgcolor_afterscroll=el.attr("data-bgcolor-rgba-afterscroll");var bgopacityone=el.attr("data-bgopacity");var bgopacitytwo=el.attr("data-bgopacity-two");var menushadow=el.attr("data-menushadow");if(menushadow=='100'){var menushadowvalue=menushadow}else{var menushadowvalue='0.'+menushadow}
if($(window).scrollTop()>20){el.css("background-color",bgcolor_afterscroll);if(bgopacitytwo=='0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}else{el.css("background-color",bgcolor);if(bgopacityone=='0.0'||menushadow==' '){el.css("box-shadow","none")}else{el.css("box-shadow","0px 1px 3px rgba(0,0,0,"+menushadowvalue+")")}}})}}
function t446_createMobileMenu(recid){var window_width=$(window).width(),el=$("#rec"+recid),menu=el.find(".t446"),burger=el.find(".t446__mobile");if(menu.hasClass('t446__mobile_burgerhook')){burger.find('.t446__mobile_burger').wrap('<a href="#menuopen"></a>')}else{burger.click(function(e){menu.fadeToggle(300);$(this).toggleClass("t446_opened")})}
$(window).bind('resize',t_throttle(function(){window_width=$(window).width();if(window_width>980){menu.fadeIn(0)}},200));el.find('.t-menu__link-item').on('click',function(){if(!$(this).hasClass('t966__tm-link')&&!$(this).hasClass('t978__tm-link')){t446_hideMenuOnMobile($(this),el)}});el.find('.t446__logowrapper2 a').on('click',function(){t446_hideMenuOnMobile($(this),el)})}
function t446_hideMenuOnMobile($this,el){if($(window).width()<960){var url=$this.attr('href').trim();var menu=el.find('.t446');var burger=el.find('.t446__mobile');if(url.length&&url[0]==='#'){burger.removeClass('t446_opened');if(menu.is('.t446__positionabsolute')||!burger.is('.t446__positionfixed')){menu.fadeOut(0)}else{menu.fadeOut(300)}
return!0}}}
function t509_setHeight(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t509');if(!container)return;var images=rec.querySelectorAll('.t509__blockimg');for(var i=0;i<images.length;i++){var image=images[i];var imageWidth=image.getAttribute('data-image-width');var imageHeight=image.getAttribute('data-image-height');if(imageHeight.indexOf('vh')===-1){imageHeight=parseInt(imageHeight,10)}else{imageHeight=parseInt(imageHeight,10)/100*window.innerHeight}
var imageRatio=imageHeight/imageWidth;var imagePadding=imageRatio*100;image.style.paddingBottom=imagePadding+'%'}
if(window.innerWidth>960){var desktopImage=rec.querySelector('.t509__desktopimg');if(desktopImage){var height=desktopImage.clientHeight;var textWrappers=rec.querySelectorAll('.t509__textwrapper');for(var i=0;i<textWrappers.length;i++){textWrappers[i].style.height=height+'px'}}}}
function t570_init(recid){if($(window).width()>750){t570_setMapHeight(recid);$(window).on('load',function(){t570_setMapHeight(recid)});$(window).on('resize',function(){t570_setMapHeight(recid)})}}
function t570_setMapHeight(recid){var t570__el=$('#rec'+recid),t570__map=t570__el.find('.t-map');var t570__textwrapper=t570__el.find('.t570__col_text').height();t570__map.css('height',t570__textwrapper).trigger('sizechange')}
function t678_onSuccess(t678_form){var t678_inputsWrapper=t678_form.find('.t-form__inputsbox');var t678_inputsHeight=t678_inputsWrapper.height();var t678_inputsOffset=t678_inputsWrapper.offset().top;var t678_inputsBottom=t678_inputsHeight+t678_inputsOffset;var t678_targetOffset=t678_form.find('.t-form__successbox').offset().top;if($(window).width()>960){var t678_target=t678_targetOffset-200}else{var t678_target=t678_targetOffset-100}
if(t678_targetOffset>$(window).scrollTop()||($(document).height()-t678_inputsBottom)<($(window).height()-100)){t678_inputsWrapper.addClass('t678__inputsbox_hidden');setTimeout(function(){if($(window).height()>$('.t-body').height()){$('.t-tildalabel').animate({opacity:0},50)}},300)}else{$('html, body').animate({scrollTop:t678_target},400);setTimeout(function(){t678_inputsWrapper.addClass('t678__inputsbox_hidden')},400)}
var successurl=t678_form.data('success-url');if(successurl&&successurl.length>0){setTimeout(function(){window.location.href=successurl},500)}}
function t829_init(recid){var rec=$('#rec'+recid);var grid=rec.find('.t829__grid');var sizer=rec.find('.t829__grid-sizer');var item=rec.find('.t829__grid-item');var images=rec.find('.t829__grid img');var startContainerWidth=rec.find('.t829__grid-sizer').width();images.load(function(){if(!(grid.hasClass('t829__container_mobile-flex')&&$(window).width()<768)&&rec.is(':visible')){t829_initMasonry(rec,recid,grid)}});if(!(grid.hasClass('t829__container_mobile-flex')&&$(window).width()<768)&&rec.is(':visible')){t829_initMasonry(rec,recid,grid);t829_calcColumnWidth(rec,startContainerWidth,grid,sizer,item)}
grid.bind('touchmove scroll',function(){if(typeof $('.t-records').attr('data-tilda-mode')=='undefined'){if(window.lazy==='y'||$('#allrecords').attr('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}});$(window).bind('resize',t_throttle(function(){if(typeof window.noAdaptive!=='undefined'&&window.noAdaptive===!0&&window.isMobile){return}
if(!(grid.hasClass('t829__container_mobile-flex'))){t829_initMasonry(rec,recid,grid)}
if(grid.hasClass('t829__container_mobile-flex')&&$(window).width()>=768){t829_initMasonry(rec,recid,grid)}
if(!(grid.hasClass('t829__container_mobile-flex')&&$(window).width()<768)){t829_calcColumnWidth(rec,startContainerWidth,grid,sizer,item)}}));rec.find('.t829').bind('displayChanged',function(){if(!(grid.hasClass('t829__container_mobile-flex'))){t829_initMasonry(rec,recid,grid)}
if(grid.hasClass('t829__container_mobile-flex')&&$(window).width()>=768){t829_initMasonry(rec,recid,grid)}
if(!(grid.hasClass('t829__container_mobile-flex')&&$(window).width()<768)){t829_calcColumnWidth(rec,startContainerWidth,grid,sizer,item)}})}
function t829_initMasonry(rec,recid,grid){var $grid=grid;var gutterSizerWidth=rec.find('.t829__gutter-sizer').width();var gutterElement=rec.find('.t829__gutter-sizer').width()==40?39:'#rec'+recid+' .t829__gutter-sizer';t_onFuncLoad('imagesLoaded',function(){$grid.imagesLoaded(function(){$grid.masonry({itemSelector:'#rec'+recid+' .t829__grid-item',columnWidth:'#rec'+recid+' .t829__grid-sizer',gutter:gutterElement,isFitWidth:!0,transitionDuration:0})})})}
function t829_calcColumnWidth(rec,startcontainerwidth,grid,sizer,item){var containerWidth=rec.find('.t829__container').width();var sizerWidth=rec.find('.t829__grid-sizer').width();var itemWidth=rec.find('.t829__grid-item').width();var gutterSizerWidth=rec.find('.t829__gutter-sizer').width()==40?39:rec.find('.t829__gutter-sizer').width();var columnAmount=Math.round(containerWidth/startcontainerwidth);var newSizerWidth=((containerWidth-gutterSizerWidth*(columnAmount-1))/columnAmount);newSizerWidth=Math.floor(newSizerWidth);if(containerWidth>=itemWidth){sizer.css('width',newSizerWidth);item.css('width',newSizerWidth)}else{grid.css('width','100%');sizer.css('width','100%');item.css('width','100%')}}
function t905_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t905');if(!container)return;t905_unifyHeights(recId);window.addEventListener('resize',function(){t905_unifyHeights(recId)});window.addEventListener('load',function(){t905_unifyHeights(recId)});$(container).on('displayChanged',function(){t905_unifyHeights(recId)})}
function t905_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t905');if(!container)return;var cards=rec.querySelectorAll('.t905__card');for(var i=0;i<cards.length;i++){var card=cards[i];var image=card.querySelector('.t905__image');var imageHeight=image.offsetHeight;var content=card.querySelector('.t905__content');var contentHeight=content.offsetHeight;if(contentHeight>imageHeight){image.style.height=contentHeight+'px';image.style.paddingBottom='initial'}}}