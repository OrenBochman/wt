// Whole-script strict mode syntax
'use strict';

import $ from 'jquery';
//import * as segment from 'segment.js';

!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
analytics.load("QLNBRGLbEH8xQpcmPEpTXnaxJU8S2BV6");
analytics.page();
}}();

import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();





//globals
var pageName,ds,controller, maxRows,pageSize,currentPager,isLoggedIn,loginToken;

//Foundation.Abide.defaults.patterns['baPass'] = /.{6,}/ ;  
$(document).foundation();

console.log("*** app starting")
const setPageModule = (pageName) => {     
console.log(`*** setPageModule( page : ${pageName})`);   
//ds=new DS(); //data layer

//    var isLogedIn = sessionStorage.getItem('isLogedIn');        

    switch (pageName) {
        case 'index':    
            // if(!isLogedIn) window.location="./Login.html"; 
            //  controller = new LeadTable();
            //  ds.LeadGet(controller._startDate, controller._endDate, controller._pageSize, controller._currentPage);
            break;
        case 'search-form':
            controller = new SFP();
            break;
        case 'search-results':
            controller = new SRP();
            break;
        default:
            break;
    }  
}


