/*
 *  Document   : be_pages_dahboard.js
 *  Author     : pixelcave
 */
var BePagesDashboard=function(){var a=function(){Chart.defaults.global.defaultFontColor="#555555",Chart.defaults.scale.gridLines.color="transparent",Chart.defaults.scale.gridLines.zeroLineColor="transparent",Chart.defaults.scale.display=!1,Chart.defaults.scale.ticks.beginAtZero=!0,Chart.defaults.global.elements.line.borderWidth=2,Chart.defaults.global.elements.point.radius=5,Chart.defaults.global.elements.point.hoverRadius=7,Chart.defaults.global.tooltips.cornerRadius=3,Chart.defaults.global.legend.display=!1;var a,e,r=jQuery(".js-chartjs-dashboard-lines"),o=jQuery(".js-chartjs-dashboard-lines2"),l={labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"This Week",fill:!0,backgroundColor:"rgba(66,165,245,.25)",borderColor:"rgba(66,165,245,1)",pointBackgroundColor:"rgba(66,165,245,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(66,165,245,1)",data:[25,21,23,38,36,35,39]}]},t={scales:{yAxes:[{ticks:{suggestedMax:50}}]},tooltips:{callbacks:{label:function(a,e){return" "+a.yLabel+" Sales"}}}},s={labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"This Week",fill:!0,backgroundColor:"rgba(156,204,101,.25)",borderColor:"rgba(156,204,101,1)",pointBackgroundColor:"rgba(156,204,101,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(156,204,101,1)",data:[190,219,235,320,360,354,390]}]},n={scales:{yAxes:[{ticks:{suggestedMax:480}}]},tooltips:{callbacks:{label:function(a,e){return" $ "+a.yLabel}}}};r.length&&(a=new Chart(r,{type:"line",data:l,options:t})),o.length&&(e=new Chart(o,{type:"line",data:s,options:n}))};return{init:function(){a()}}}();jQuery(function(){BePagesDashboard.init()});