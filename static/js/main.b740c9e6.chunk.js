(this.webpackJsonpglobalmovie=this.webpackJsonpglobalmovie||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},72:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(30),o=n.n(s),i=n(2),u=n(12),l=n(3),j="/",b="/about",d="/movie",h="/signin",v="/favourites",m="/upcoming",O="/toprated",p="/nowplaying",f={username:"username",favourites:[]},x=(n(40),n(41),n(0)),g=function(e){return Object(x.jsx)("button",{className:"btn",children:e.label})},M=(n(43),function(e){var t=e.children;return Object(x.jsx)("div",{className:"movie__container",children:t})}),w=function(){return Object(x.jsx)("div",{className:"about__container",children:Object(x.jsx)("section",{className:"card__wrapper",children:Object(x.jsx)(M,{children:Object(x.jsxs)("section",{className:"paragraph__container",children:[Object(x.jsxs)("p",{children:["Global movie is a movie search site made as a school assignment."," "]}),Object(x.jsxs)("p",{children:["The techniques used are JSX and CSS in the React framework and the API used to fetch all the movie data comes from"," ",Object(x.jsx)("a",{className:"tmdb__link",target:"_blank",rel:"noreferrer",href:"https://www.themoviedb.org/",children:"the movie data base"})]}),Object(x.jsx)("a",{className:"mail__to",href:"mailto:mikael_larsson84@hotmail.com",children:Object(x.jsx)(g,{label:"Contact me"})}),Object(x.jsx)("p",{className:"copyright",children:"\u24b8 Copyright by Mikael Larsson, Sweden, 2021"})]})})})})},N=n(4),D=n.n(N),S=n(6),y=(n(45),Object(a.createContext)(null)),Z=function(e){var t=e.children,n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(x.jsx)("div",{children:Object(x.jsx)(y.Provider,{value:[r,s],children:t})})},k=n(31),C=n.n(k).a.create({baseURL:"https://api.themoviedb.org/3/"}),I="api_key=baf9831bd66d107c8e6e596671afb208",G="trending/movie/day?".concat(I),V="movie/upcoming?".concat(I,"&language=en-US&region=SE&page=1"),P="movie/top_rated?".concat(I,"&language=en-US&region=SE&page=1"),q="movie/now_playing?".concat(I,"&language=en-US&region=SE&page=1"),U={baseAPI_URL:"https://api.themoviedb.org/3/",API_Key:I,trendingMoviesURL:G,movieImageURL:"https://image.tmdb.org/t/p/",movieTrailerURL:"https://www.youtube.com/embed/",searchURL:"search/movie?".concat(I,"&language=en-US&query="),upcomingMoviesURL:V,highRankMoviesURL:P,nowPlayingURL:q},F=function(e){return C.get(U.searchURL+e)},R=function(){return C.get(U.trendingMoviesURL)},Y=function(e){return C.get("movie/".concat(e,"/videos?").concat(U.API_Key,"&language=en-US"))},L=function(e){return C.get("movie/".concat(e,"?").concat(U.API_Key,"&language=en-US"))},J=function(){return C.get(U.upcomingMoviesURL)},A=function(){return C.get(U.highRankMoviesURL)},X=function(){return C.get(U.nowPlayingURL)},Q=n(32),B=n(20),K=n(33),W=n.n(K),z=Object(B.css)(c||(c=Object(Q.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: var(--clr-primary);\n"]))),H=function(){var e=Object(a.useState)("#103c61"),t=Object(i.a)(e,2),n=t[0];t[1];return Object(x.jsx)("div",{className:"spinner",children:Object(x.jsx)(W.a,{color:n,css:z,size:75})})},E=(n(72),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB4ASURBVHhe7Z0JfFTVvcdt+7pr61bt5hOXuqG4VasSQAVBFARcgLCFhKwkZCFhh0wy9wYIqwrKKgiySIiQkDvDJiCIIJjMBASlFOtStfq0tct7z7av+n/nd3NP5s7kTDLJzJBk8v9+Pr9PJjN3Pef/u2e5595zDsMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMw5xysKD3viOH4aY2hXQ6dEJ/fFt9ZPzNM7IOAP+Yu6empcuZ7XCWrvS7tgMfQP/AY2j+8Lp2UEr9hGfH5gNfQnxfr5Yvle719kM3DtHPI4fim11XS1evWS0SAV3tc2r/9gj8MYVvCKDXCQDOrt2lx2Je1W4Zp23grnZ3F1X6+COIPVcEdqJoqjfZvLqId6wupau0MU/iM7/Cbap1AYV8el77Au93Z2ToMhmk71JUWzoEiUA+oAhg6WqnRhmVTyFmUS0mZ6dRnaCLd0nc4XdF9CF3eTS38hmWwLNbButgGtqXaBySqZK9WV+mDiLhUYVoZIvqGKC2eEFWdk6pg3bWx0AzqASPH0K/uG6o0QUt0tdhW/5HJVFyUR7s2OBrs19JbXsM52MHVL6Y1qNlWfLcoMY4EBubrFU6aPyuf+sYnUadGSodw9J9Cl3UbSr/sFk+XdY+n3vHJNGdWgbnvwOMRBj4q2iv3WIfNMNHFu9VxvjDGMhF0X9sDEW2Ggknj6Mbew5RBHUnZDQL9otsw+lm34XTNA6Mob2IOvbK52M8kONYaQ1uBY7dOg2Eijyg1egY2vg9tddIEYYzresYrgzkaCmaQn8bVqdP9oyh3Ui69Jo7NfqxmY97QelmnwzCRoazsiW/Vukp0j0v/yh5wT5YW0C0PDlcGcTTVlEEujRtBl8SNpGv7JNK80ol+JhH6Ct3DOCfr9Bim5ZhVKkPfaQ+y3RsdNHDUGGXwZjqeon2HvTS+5Bnl75FQMIMMK5hDew7X0tSFa0yD/CRuFF0cl0B9RmbQro1FdpPgJuSu48asC6zTZJjmc9LQLg/soVqyYAJ1fkDdzrhzYBptcu0jULH7IA3P06OiYZbi80pMDc2bSUPyZtHyTdvNfe96zUN3DB5fb5CLhC7vlUhPL5jsZxJRIr7l3T6rk3W6DBM6x7Y7rxUlxx9kMIlGLuUWZCqNIZUvSo22QunKcj+DXCh0QdxoSsvPpZoqu0m0D4/vKLnOOm2GaRoEjAicT2QQHa5w0uOJyUpT2NUeDHJ+XCI9mJBpdi7Um8TQP60xnNdbp88wwamt1K6w91S9Wl5MDwxJVBoiUO3FINBdT2TQfnFuPpNoHx01HFdaycAwDTm0yXGhMMfbMmgOiAC693FRf1eYQaX2ZJAfxyXRbY+mB5hEP3Vih+NCKzkYxse+fY7/EAGyRwYLqiC9Bo9WGiGY2ptBftQ1ie54fKzf/RKRBvuQFlayMEwd3ip9rgyS6iqNBiU03eYIVHs0yHldx1DPkVnmOdtMMt9KFoY55xxPlfMh+9CRrLyxSgM0pfZqkB92TabROePtBvnaa+gPW8nDdGSqtzkutvdYPT23QBn8oag9GwSaM2eKzSTapx53yU+sZGI6KsIcL8igwINK14cxpqq9G+Qn96WRa53tjruhrbeSiemI4BlxGQyiWkEPDUtSBn6oau8G+UHXFLp76DgzLerTxVXygJVcTEeirtdKe1MGwmx9vDLom6NYMMj3u6ZSoeYbkuJx6Se4V6sDUuvWk2QQHCgvohuDjK9qjmLFIJf0TKdXNtu6fl16spVsTEfgRJnjO6Ia8a4MgJb2WgUqVgzyPaGE3HyfQQzt/RMnHN+xko+JdTxVWoLMfAxdv/reyDwvHksGOa97Gu2wDZGvcWmJVvIxsY7X0I7JjB+bG5nSA4olg0Ajsm33RlzamyLpvlGXgkzMYr7Mzcr0V18qpmvuj9yjsp37JNDyFw0zQNdu3Undh2ZHRd1M5VDc0FxTXYXuHppHs5eXmfvesvsQXdM3PWyDnH9vGu0v97VFqquKu1nJyMQq4kq4WmZ4sSNXGejhaM7yF80gXbR2i/L3SCjYE4UT5jxn7ntNxR6/JwpbahBoYqHvkd0aQ1tjJSMTi5x2P/VdUb36i8zwuEGjlAEYjmLNINcPyKw3iNfQ//ruPsf3rORkYo2aKucjMrO3rJqmDL5wFWsGgTY9V+gzics50EpOJtYQ1atlMqPxDitV8Km04LkyKnPtbVTdBtdtry0Z5Ko+abTB2E/r63WA1tXrVVNLynY3aZD0iQU+gxjaCis5mVgD/fkyo+99LPQHoY6fescMvMYYkDrVXLYtGaTzI1nm/43x+Rd/a9IgXR61VbNc+gdWcjKxBCamkZn8yuaiZr0WNGHCLMrVFplasamul+rk6ffqv4Nu6Vf3/EhbMshl94+hDOcyShdKE3rljZPm7xu3v0YpzuWmRk5/tkmDfD8ulfaW+Z48xGPJVrIysYIoPeJlBuPVParAC0VjJs8xg2zvIY/y97bcBnluyx7z9wkL1jWrDQItXDC13iBetzbcSlYmVvC49VKZweMnZCkDLxR1VIOkFNjaIS59rpWsTKwgGpdumcEteZxWqqMa5L5R2TaDaDusZGViBZGxp2UG39lvpDLwQlFHNciVD42tN4jH0M9YycrEAphERpQg5mSZeDnBFT3UgReKOqpBfiga6vLFDh6X/k9++XUMcWTLzIvk1e/lFx3KoAtVHdUg0E7b6F5+Xj2GqHXNvEZmbLh30DuyQcpW+e6o8/t8Y4gaw3m7zNh1S6cogy5UdWSDrF4yvd4gR7cV32ElL9PeOb595t0yY59fPFkZdKFqcFaRGWQffPwp3fxwwzlC2qpBftEzhapPnjF/T9NWtMggK57xGQSPDVjJy7R3vK7i+mdAwjXIlT3iqfat35mB9sf/+hNNnL2Uruk5ov73tmaQS3skUuL0xXT6/Y/N397/+DP6Ze+MsA1S69birORl2js1Lv3XMmPDrWJBt4iSA7NISb74699pw7aXacykUnpmXYX5XWsaZJP7AD2RO5uWle2kP372Z/M7UH3yHeryeEGzR/NK2atY3ir9Tit5mfaOx11yg8zYlyI4zD1JGOJ171v09ddfWyHow3PyNE2bv9Kskt0xMI06dY/cPOl2g3Tpn0oDMhyUP3sF7Xv9mLV3f46depfSnEvpou51Q91bapAXbcPea6tKbrSSl2nvHK8suVRm7M4NhcqgC0fdh2TTzGfX0TsffGSFZEO+/Mc/6fcffEyHPSepas8hWrNlJy0WpczspevJ8eQqmlS6jPJnPks52iLKcS4yn2+fVLqUCheuMrf99JqX6Pny7VS5+yAdrH6TTr/7If33/3xpbb0hH4vqX+nKl6j7qGn1jfSWPg8itX2Dr5v3je36z6zkZdo7ePGZ16X9Gxl7tFKL2gT/t/ZPobfPvG8GKAqVHfuP0Gs1b9JHn3xGX331lfl9JEHJ9YmoQr1e+zZVvHyI/u/f/za///CTz+nOwfkNerHCMQhG9B4RaYc09Bj6V9XVy75tJS8TC4iMrX8W5Na+0Zu62W6SM+99aFav8P1V9w2jex7PpIFp08yuYpQWzkVraP7KMlqyvpJWlbnpha27aF3Fblpfudv8vGqzm5Zu2EYLV5WRvngtTZi9lFKnzqNHM2ZQV1FqXXn/SLOadW2fJDp6/LfmPuvMMV7ZzRuOQX7ZJ6O+9BAG+YOVrEys4HHp+2QG9xse3jt4m1Iwk0RK9jbIdX0ShTlOmfuCOX4zOK9+nvRIGuSeYePqDSK030pWJlaodWuLZAZnRuhNio0pmiaRBlGZ46dxw6NikFE5vjctiurqM1ayMrGCt0pLkRm8sDRfGXiRVrRMAoNc32c0vWGZ4yNhjruG1JkjWgaZOds3d0iNoaVZycrECuiWlBmMeUBUgRcNRcMk1/dJ8DPHPUNyzfsg0TSIfd6QGndJFytZmVihbsi7/ieZyXf2b/kzIc1VJE1yQ4A5ug7Jqb9RGC2D+D0L4tK/IHJ800pWJpYQmbtJZnRGTvTbIXZFwiT+5vjMNIf9Tnq0DDLc9o5eoc1WcjKxhtdwjpYZveaZ8MZktUThmCTQHHFDsk1znA2DrFjsG2JSU6UnWcnJxBqHdjguxNNwZkYbWlTvhwRTS0zS0BzjlGOxomEQ3P+orrJKD0P7Fx4+s5KTiUVEO6RKXg3zwni7SThqjkkCzdFNmCPYYMVoGCQl3+9tJi4rGZlYxevWB8kMR2/WFVEadtKUQjGJyhz4/mwZ5AdxqWTYeq9qXfpjVjIysUr1stRvi8z+SGb60OSUBoF5ttSYSYKZAzpbBnkwKafeHB6X9kcef9VBqHVrk2XGlz83jTpZgdcaUpmkMXNAZ8sgG1f6hrfXGM5pVvIxsc5xY9YF9nlChoxpvVIECjRJ9ZvBzQGdDYP0SfSVHpgX5MQOx4VW8jEdAY+hO2QAGC/MoKsiNJFnS2U3CQhmDijaBjm3WxpVrHX4DOLSi61kYzoKp92OH3ld2icyCHILWqdHSwrVqmqrWgXOvB+8dyvaBhkz3jYFtEv/tHr37B9bycZ0JETmJ8tAeL3CSb85i8NP7ApsczTVuxVNg1z18Fg6VFH3YJQpQ0+1kovpaBDGZ7n012QwrFsy5ax3+6oa5Lf2SxYmec/8TmWSaBnk3LgUWvWs7665x9AO87irDs6RSmdnEQjme3uhCc2Ymi1cNdZb1ZhJomWQDP+p1v7BL2ZgTLxGSZ4MjJoqjR4Z2fCFcJFWU125UDCTRMMgPYZn+YaUCHmqnPlW8jAdHRF/3xB1bZcMjlfLi+nuAZGfIloqFHNIqUwSaYNc1z+d9pc7683hdWtuPB5gJQ/D1N0b8bi0d2SQbF9XSLc8GPnBjM0xh1SgSX4tTBIpg1zeG8NJfF26Hpf+e77nwSjxoj3i0r+QwVKxejrd1HuYMmhbopaYQ8pukt8Jk9w+MD1sg1zWK5nKV9vmQDe0vxzldgfTGNWV2v0iWL6UQbNVmOTmCJQk4ZhDKtAktw3MaLFBOvVOoXLbdAboqKhxl/S0koFhglPr1vvj2QcZPO51M+iuR1p+jyQS5pCCSd6qN8lHpkmaa5Ab+qVS1Qt+d8r/5TH0AdbpM0zTHNs+8xF79+/+zUX0cAvepxVJc0hhTna7SW4dODZkg/SIz6BXNvvmPK87R+dA67QZJnRE8PTyunyDGjFHX05+ZsivLo2GOSD0Yt3cL0WYpO6OO0xy88DMRg1yUbcESsvPrZ9n0JSh/9XjKnnAOl2GaT7HXM6bRDC9Vx9UQqsXT6LbHvLNCaJStMwByW7eLqKqZDdJlwF1Jgk0yLV9x9CKRb73WtVJe59f38NEhOptjou9Vfpue4C9tqWY0nMylENTomkOyH4fRGUSaZBLu42ixOxsOrjFdo8DMrSXeRJOJqJg2uNalz7F3niHMN9I/xG+O+/RNgcUeKPwpn5pfia5aUAW9R6eRpufs0+ZZupfXsM5jadwZqLGsW36bR5D9wQEHq19djI9lpQedXNAqjvpN/ZLN03y98/fI++eFX7HBnlcmheTmVqnwTDRw5xvxK3nCqPU31SUOvXqSvr4zFHqPTJXGdyRUKBBru45ghKzMqlijV/XrSnzxqdRkkfimK3DZ5izw6l98y4WV+YFosH7v4GBiedLFs0roGEpqXRDr8jdjYdgkOvENoempNHT8yaY+wrcvzDvlx5DW8htDabVqalw/FwEZKl9mIpd6Fp9cflUchTmmIa5Z8AourJH6I/4Ylmsg3WxDWzLr7vWJhxDrVsvrdlV+nPr8BimbXCizHGuuGqPEYF6SBjm68DgtQsBvnN9IW1cNoWWPTmRnpxTQPNm5ZvCZ3yH37BMMDNIYV9iv4eFOZJP7HOcax0Ow7RdvNtndRJBWyCqYHtF4JqvO42oDA3DQ/Z53FpBbaV2hbVbhml/7BMlS822kp4iqKcL05SLwD4lFLJpLIOdEuuXYxsYVIjSyto8Eyt4qpy/8holI0RwOLyG/qT4u7ijSgT8s+LvVvH3kEiL34rAx9sePzOFz4Z+Gr/VuLQKa1nldjqEXNrCWpc+o9ZdMtS71dHJCqfYwLvPcb64auJNhqeElFdIFqt50o55XCU5tTvn/tAKs/YH3hhSY2jjhPv/rD5JFis8idj6RJS0o62Qaz+YY5dc/mOXWKxoSdRQtrxdUXqeFX5tm6NbtcvEAf9WdSKsjqs3tmnmrF7ovsazNaplwpFoq3hwYbbCsG2Ch/3FgXJbg+WnzSun0a8frns8ADc98Xm27jfvYWRkaG+02XYJma/O0dzKAw9DmOQGb1/vOyypgeJTUumVsvCuRq++VEzDU1Opz9DEBhqUkEzG2hnK9VqqXRsdFJ+sPh/MVbJnU8PxVO1ZGAYTONXdpMnj6N7HEmjDssBnVMKXuECvs0KybSHMkaY64HA1Y0aOX+JKDU5KoYSMNPOus2q9ULVkwUTl9u99bDRNFBkJqdZrqZxF6kGMj41OpjGZ6TR3pu/F0bGgZxdMaHCuPR5NML9PzspQrhOuatraTFh4+7fXpX2uOthwNWVqdoMEhkalp1H+xCyaPzu8gFo8r2EGQg8MSaQFpfnmPlTrtVSFQQyPUmyyONeoVD1aUXNn5Tc419tFFQulR3xyqnKdCOi90+6nvmuFZ+vjcWlTFQcZEbFB2rdQRQ18hn+EONdx4zPJWZyrXCciaitvpcfbv0W97wPlQUZAbJD2r9yCzPrzvEI00kempYr0HU1HKhsO04+ctForRFsXr6ukq/oAIyM2SGwI6fyEaDfi8eRp07KVz7BEWtXbHNdZYdp6eKv0YtXBBRP6w59/ZjIVFuZQdn6mWdTCBM/Mn2D2KMnlDpQX0/7yohYZ5JXNRfSUaLxjKoOsvExzudkl45U9Uk0ZJC0bE+k3Ptwc2ldWROuXTqGVT08yz2/Lqml0VHGFjIRBDm91ms/CYwJSu/A+4SMi8NAARufFIWu5OTPHm7+rtiXzA50hyAu81gjPnOAR4sDz3r6+sME+oZdf9O95Q08dvj8qto235Vc+P73BOjguvPjCvp4Ulp+p5ZmzfmWJY5oqDIX7J4ebaapaQxtnhWnr0ZyuXZx0lz7BX+N59X1DzYDeuaGQug4cZXYFNscgCJx0EdCNzTc4YOQYc/tynaYMgs+dHxhmBs6hrf4ZihteMGGwty7+SpxPUma6n/HDNUiNodPtQV45hN4hHKv8/0bbe4XRDsDriuzbgokCu2DtQmMaZpPLy3sZdt33eIL5ku+D1jnCVPj/2vvjTQMgnwLXqVtvtPnqpBrDZ8Jta6ZT3/jgL+e7QZxbc0pYT5X2ghWmrYdof5xRHVygEMyqk0bGPTQsia62BTUC/Kbew2npwokhGwRXK9y7UC2LzLpngC+IkTG44mO9pgySNDadSpx5dLMwdncRgAdtVz3Uo7sNShCmHkt3K0xyRXcYfiw9GJ9oBjbWCdcgCDrV+hAC7M5+I83pG1Aa4Lv5s/LNC8JVZt0/rX47RY7gz8zjPLE8PiN/8Ogw1sGVPHDZ0RlpZle4LtIIyyx/qq7bHCUv/oeBAteBloi8xVOSshSpEKXG9UEeTR6UMMbvohCqSTwu7XUrTFsPcRB/Ux2cXajaBJvaDKUKghGPkSJoZQkDc2DdUA2CKptqOTwPPlvPM+u/ssqBjMA7rbBeqG0Q1wszTKNl5Iw1/4dwU09cIBrdDgIFgSmv3tE0iLF2unllxnKy9MPwDvyPqzpKT3zGzddgpSxM0FucOwIW+8I6eHk3LkAoJa7rGe+3/DX3xdPW1dPM0h7bRtctvkc1Cf83ZhDUEqRBege5uKGKhRvFqGIdrdQoQeQ78hS1BazXmDwu/fdWmLYeoorl954olYIFL4rw1YsnU6K4SmM51OFxZUNpUiCqLvguVIPEDVJPeIMqEBK4bMXU+uNB0HYRJRQ+h2oQuR4CxF43R08M2h24yafaDoINbYDJU7LN5duCQVQlAYSqItIDpZ7cH/IEvyGf8L9qNmC9OM+80blClB7Iu34jkurXD8UguICqlsGwFExBgbyQ24Px8BsMI78LJo+hfWyFaeshrqB/Vx2cXbK4DxSqVnNF8CCI7cvfIurFsogOxSBoaAZ7Xy6u3Kj+2HtNUB3Ab6iKNMcgMuhQmuB/ZBJKPFyNUQUL3AbUQ1xZF8/3BV1bMAhe/hC4LoQLFapLMLTcHzpL8Buqmfh/ryg10Va0r4cqGdJCzqWyxNZuCcUgSB/VMqiCrRL5h7RBew/avdFh/oaOBLmPYBIGedcK09ZDVLHqZ2UKpmBXLCQAEjbdVm1BsCMDmlOCoPGsWgbCHVuUVPbGIIIQv6FKh96zwHUglUHksAn0UOGqB2Og+oRMXi7OI3AbkDRIZhsyyOOJyQ3WhVB9zJuQRQvFunJ/h7Y4zd+Ki3w39VLHZTRYFyUNOgjQkEfPlVw2FIPIYw0UzgVVbdVviCm5j2ASsXnECtPWw+vSdqgOzq7NK6cqTxJCow5XoL1WoxlXKnyPbkb8H4pBRF3TbB+olkNwon5sH2KNbaL4RlUJUz+r1lMZRJY8e150mBmEUkv23rQng6RkNQxwCFVRHJ9mu8O9fV1d9Qfd5r7vCs0OCPu6fYfVtSGmT/e/sodikFWLJimXQQ8bjIdODrRR7UJXvn0/Kom4aP2Bi8KluurgAhWsjo4GF+qvCHDZQB84qi4joVDbIMGuisNFdQJXRnuxj96uviLR8Rl969cozKUyCG5yYXJPfB4vvkcJIkum9mSQp+cWNFgXul60r1Y8PdEcJS33hwsWLgS7bF3jEIaLBK6Pbu3AZz1CMQiExr5qOdQA7ug3wuwksG83JLn1XCtMWw+Pu6SH8uAChBNEF6QqEaSQEeilQG+TXC9Ug2wUV5VgPWVoz8AQ2JbMWHv/vn0ohFSgQeQoXHyH/1E1xP+yvt6eDIJqLIIzcH0IDWxcoDJzx5ptQ3RKqAYVoprZKWBddIkHLheKQbAcqnaq5fAYQJ7IH+Qh2ox4VxhKlcD9KFXp7GyFaetBZWXf8ho63sihPkhLk6fUvcgZXYYIajTcUX8fkVZ3hceVCndqA9cLNtwdJQZMYh/ujmCV/feNabzIDPs+YN4hSSl+y9z1yChKEXVtZDAE8+Ec5Dro3k3MqLsJhp6qfkFmn0I7C8bMEZmM9YINd8ezJwgwvDhO7kMldDao1ocWzyswjY3lGjMIhI6Gpi5YEAx3oFxdnXlUHLN9WdwhD1wGx2NfRgrpgCqU7DyBaYN1HiAN5c1YmDIw/1QS1asTVoi2PiJYHKqDlMLJ299PizouhiegR2KduBrMKRlvPkSDRAt8AApFO66umNw/UDBYYObhZllyVnqDO8TYP54hkQGjEhqEqIejSMfyMHPPJ0abZq4U21Wtg6sZfodhVccIYZs4LiyP80YpploO34fyANi06dk0QFzlA9dHwKIkwzKomuC7qjV1PW4w8ySbwSHcS8AFCG00e5sC7bOeg0eb+YF7D/Z17EIpgtIG+8kWaaBaBiUtjst+nBDMqnrWBnmAG4P2NiVMcWf/kWbngMqEapVkWuHZ+piP2gZ5Ly2EG1PyZBsTEgbFbmB9t6VC7xa6JWVDmhVcuIghrdD4DWXsWbSFEhrtGRxTcwc2inbxhx8cmv99KzzbBuKEslUHC6GeiWHOKlPY1UtctVBNwrgn1XZYrFDkcZUMs8Ky7WA+F+LS9qoOGEJ1SGUKu+4QdWJ072JZ1TZYrKbkMbRyKyTbHrU7HZeIg1TeOETPFHqoUL+VhkCD+jeibonplR8dnWw2xjAiNbCuzGKFImGO46+7HT+ywrFtctyYdaVoj7yrOgEIDUO0SfZuKvK7uw2h7oseLjTe7d+zWE3K0E6+sV3/mRWGbRscaK2hH1SeCIsVYYmq/Q5xYb7ACr/2AebxqzW0yaI0aXIwI4vVEglj/LmmSs9yOBzftMKu/VG7c+4ltS5dE/XDP6hOksVqtgz9jDDH1HZXajRG3ZsX9VusF8zNFX9XeAx9FYvVpNz6cmGI2aJGMqZNDB9hGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIbp6Jxzzv8DGTQ5+hX/3wcAAAAASUVORK5CYII="),T=function(e){var t=Object(a.useContext)(y),n=Object(i.a)(t,2),c=n[0];n[1];if(c)return Object(x.jsxs)("div",{className:"card",children:[c.results[e.movie].poster_path?Object(x.jsx)("img",{className:"poster",src:"".concat(U.movieImageURL,"w200/").concat(c.results[e.movie].poster_path),alt:"movie poster"}):Object(x.jsx)("div",{className:"alt__Img",children:Object(x.jsx)("img",{src:E,alt:"No movie poster"})}),Object(x.jsx)("h3",{children:c.results[e.movie].original_title})]})},_=function(e){var t,n=Object(l.f)(),c=Object(a.useContext)(y),r=Object(i.a)(c,2),s=r[0];r[1];return e?Object(x.jsx)(H,{}):Object(x.jsx)("div",{className:"card__container",children:null===s||void 0===s||null===(t=s.results)||void 0===t?void 0:t.map((function(e,t){return Object(x.jsx)("span",{className:"movie__poster",onClick:function(){return n.push(d,t)},children:Object(x.jsx)(T,{movie:t})})}))})},$=function(){var e=Object(a.useContext)(y),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(""),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)("Trending movies"),l=Object(i.a)(u,2),j=l[0],b=l[1],d=Object(a.useState)(!0),h=Object(i.a)(d,2),v=h[0],m=h[1],O=function(e,t){var n=Object(a.useState)(e),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){s(e)}),t);return function(){clearTimeout(n)}}),[e]),r}(s,1e3);Object(a.useEffect)((function(){p()}),[]),Object(a.useEffect)((function(){f()}),[O]);var p=function(){var e=Object(S.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,R();case 4:t=e.sent,c=t.data,n(c),m(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(S.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,F(s);case 4:t=e.sent,c=t.data,n(c),m(!1),b(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),M=function(e){o(e),b(null)};return Object(x.jsxs)("div",{className:"home__container",children:[Object(x.jsxs)("header",{className:"search__container",children:[Object(x.jsx)("div",{className:"title",children:Object(x.jsx)("h1",{children:"Welcome to a world of global movie entertainement"})}),Object(x.jsx)("input",{className:"input",onChange:function(e){M(e.target.value)},onKeyDown:function(e){return"Enter"===e.key&&M(e.target.value)},placeholder:"Search movies"}),Object(x.jsx)("span",{onClick:function(){f()},children:Object(x.jsx)(g,{label:"search"})})]}),Object(x.jsx)("h2",{children:j}),Object(x.jsx)("div",{className:"result__container",children:_(v)})]})},ee=(n(79),function(){var e=Object(l.g)();return Object(x.jsx)("div",{className:"four_O_four",children:Object(x.jsxs)(M,{children:[Object(x.jsx)("h1",{children:"Oops..."}),Object(x.jsx)("h1",{children:"404 - page not found"}),Object(x.jsxs)("h3",{children:["No match for ",e.pathname]})]})})}),te=(n(80),Object(a.createContext)(null)),ne=function(e){var t=e.children,n=Object(a.useState)(),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(x.jsx)(te.Provider,{value:[r,s],children:t})},ce=(n(81),function(e){var t=e.embedId;return Object(x.jsx)("div",{className:"video-responsive",children:Object(x.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})})}),ae=function(){Object(a.useEffect)((function(){m()}),[]);var e=Object(a.useContext)(te),t=Object(i.a)(e,2),n=t[0],c=(t[1],Object(a.useContext)(y)),r=Object(i.a)(c,2),s=r[0],o=(r[1],Object(a.useState)()),u=Object(i.a)(o,2),b=u[0],d=u[1],h=Object(l.f)(),v=Object(l.g)().state,m=function(){var e=Object(S.a)(D.a.mark((function e(){var t,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(s.results[v].id);case 3:t=e.sent,n=t.data,console.log(n),d(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"movieView__container",children:[Object(x.jsx)(M,{children:function(){if(s)return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"movie__title",children:s.results[v].original_title}),Object(x.jsx)("span",{className:"backdrop",children:s.results[v].backdrop_path?Object(x.jsx)("img",{className:"movie__backdrop",src:"".concat(U.movieImageURL,"w500/").concat(s.results[v].backdrop_path),alt:"movie backdrop"}):Object(x.jsx)("div",{className:"movie__backdrop",children:Object(x.jsx)("img",{src:E,alt:"No movie poster"})})}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("span",{className:"movie__card",children:Object(x.jsx)(T,{movie:v})}),Object(x.jsx)("span",{className:"release__date",children:Object(x.jsxs)("p",{children:["Release date: ",Object(x.jsx)("br",{}),s.results[v].release_date]})}),Object(x.jsx)("span",{className:"voting",children:Object(x.jsxs)("p",{children:["Avarage voting: ",s.results[v].vote_average,Object(x.jsx)("span",{children:"("}),"votes:",s.results[v].vote_count,Object(x.jsx)("span",{children:")"})]})}),Object(x.jsx)("span",{className:"overview",children:Object(x.jsx)("p",{children:s.results[v].overview})})]}),Object(x.jsx)("span",{className:"emebeded__movie",children:b?b.results[0]?Object(x.jsx)(ce,{embedId:b.results[0].key}):Object(x.jsx)(x.Fragment,{children:" "}):Object(x.jsx)(H,{})})]});h.push(j)}()}),Object(x.jsxs)("div",{className:"btns",children:[n?Object(x.jsx)("span",{className:"btn--favourite",onClick:function(){return function(){var e=s.results[v].id;f.favourites.push(e),localStorage.setItem("favourites",f.favourites+e),localStorage[f.favourites]=JSON.stringify(f.favourites),document.querySelector(".btn--favourite").style.backgroundColor="#cfb584"}()},children:Object(x.jsx)(g,{label:"favourize"})}):Object(x.jsx)("div",{}),Object(x.jsx)("span",{className:"btn--search",onClick:function(){return h.push(j)},children:Object(x.jsx)(g,{label:"new search"})})]})]})},re=(n(82),function(){var e=Object(l.f)(),t=Object(a.useContext)(te),n=Object(i.a)(t,2),c=(n[0],n[1]),r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1],b=Object(a.useState)(null),d=Object(i.a)(b,2),h=d[0],v=d[1];return Object(x.jsx)("div",{className:"signin__container",children:Object(x.jsxs)("span",{className:"user__input",children:[Object(x.jsx)("h1",{children:"Sign In"}),Object(x.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return u(e.target.value)}}),Object(x.jsx)("input",{type:"password",placeholder:"Password",onChange:function(e){return v(e.target.value)}}),Object(x.jsxs)("span",{className:"submit__btn",onClick:function(){h?(c(o),localStorage.setItem(f.username,o),e.push(j)):alert("No password entered")},children:[" ",Object(x.jsx)(g,{label:"Submit"})]})]})})}),se=n(35),oe=(n(83),function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){var e=Object(S.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.favourites.length>0&&(t=JSON.parse(localStorage[f.favourites]),[],t.map(function(){var e=Object(S.a)(D.a.mark((function e(t){var n,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(t);case 3:n=e.sent,a=n.data,c((function(e){return[a].concat(Object(se.a)(e))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(e){return e?Object(x.jsx)("img",{className:"poster",src:"".concat(U.movieImageURL,"w200/").concat(e),alt:"movie poster"}):Object(x.jsx)("div",{className:"alt__Img",children:Object(x.jsx)("img",{src:E,alt:"No movie poster"})})};return Object(x.jsx)("div",{className:"favourite__container",children:Object(x.jsxs)(M,{children:[Object(x.jsx)("h1",{children:"Your favourite movies"}),Object(x.jsx)("div",{className:"favourites",children:n.length>0?n.map((function(e){return console.log(e),Object(x.jsx)("div",{children:Object(x.jsxs)("h3",{children:[s(e.poster_path),Object(x.jsx)("br",{}),e.original_title]},e.original_title)})})):Object(x.jsx)("h2",{children:"No favourites yet..."})})]})})}),ie=(n(84),function(){var e=Object(a.useContext)(y),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!0),r=Object(i.a)(c,2),s=r[0],o=r[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(S.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,J();case 4:t=e.sent,c=t.data,n(c),o(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"upcoming__container",children:[Object(x.jsx)("h2",{className:"upcoming__title",children:"Upcoming movies in Sweden"}),_(s)]})}),ue=(n(85),function(){var e=Object(a.useContext)(y),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!0),r=Object(i.a)(c,2),s=r[0],o=r[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(S.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,A();case 4:t=e.sent,c=t.data,n(c),o(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"toprated__container",children:[Object(x.jsx)("h2",{className:"upcoming__title",children:"Top rated movies in Sweden"}),_(s)]})}),le=(n(86),function(){var e=Object(a.useContext)(y),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!0),r=Object(i.a)(c,2),s=r[0],o=r[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(S.a)(D.a.mark((function e(){var t,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,X();case 4:t=e.sent,c=t.data,n(c),o(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"nowplaying__container",children:[Object(x.jsx)("h2",{className:"nowplaying__title",children:"Playing now in theatres in Sweden"}),_(s)]})}),je=function(e){var t=e.children,n=Object(a.useContext)(te),c=Object(i.a)(n,2),r=c[0],s=c[1];Object(a.useEffect)((function(){!function(){var e=localStorage.getItem(f.username);s(e)}()}),[]);var o;return Object(x.jsxs)(u.a,{basename:"/globalmovie",children:[t,Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:b,component:w}),Object(x.jsx)(l.a,{exact:!0,path:h,component:(o=re,r?$:o)}),Object(x.jsx)(l.a,{exact:!0,path:v,component:function(e){return r?e:$}(oe)}),Object(x.jsx)(l.a,{exact:!0,path:d,component:ae}),Object(x.jsx)(l.a,{exact:!0,path:m,component:ie}),Object(x.jsx)(l.a,{exact:!0,path:p,component:le}),Object(x.jsx)(l.a,{exact:!0,path:O,component:ue}),Object(x.jsx)(l.a,{exact:!0,path:j,component:$}),Object(x.jsx)(l.a,{path:"*",children:Object(x.jsx)(ee,{})})]})]})},be=(n(87),n(88),n(89),function(){var e=Object(a.useContext)(te),t=Object(i.a)(e,2),n=(t[0],t[1]),c=Object(l.f)();return Object(x.jsxs)("div",{className:"dropdown__container",children:[Object(x.jsx)("button",{className:"btn--favourites",onClick:function(){return c.push(v)},children:"Favourites"}),Object(x.jsx)("hr",{}),Object(x.jsx)("button",{onClick:function(){localStorage.removeItem(f.username),n(null),c.push(j)},children:"Log out"})]})}),de=function(){var e=Object(a.useContext)(te),t=Object(i.a)(e,2),n=t[0];t[1];return Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)("img",{className:"profile__img",src:"https://thispersondoesnotexist.com/image",alt:"profile face"}),Object(x.jsx)("h3",{className:"profile__username",children:n}),Object(x.jsx)(be,{})]})},he=function(){var e=Object(l.f)(),t=Object(a.useContext)(te),n=Object(i.a)(t,2),c=n[0];n[1];return c?Object(x.jsx)(de,{}):Object(x.jsx)("li",{className:"nav__btn--signin",onClick:function(){return e.push(h)},children:Object(x.jsx)(g,{label:"Sign In"})})},ve=function(){var e=Object(l.f)();return Object(x.jsxs)("nav",{className:"navDesk__container",children:[Object(x.jsx)("img",{onClick:function(){return e.push(j)},className:"logo",src:E,alt:"logo"}),Object(x.jsxs)("ul",{className:"nav__btns",children:[Object(x.jsx)("li",{className:"nav__btn--home",onClick:function(){return e.push(j)},children:Object(x.jsx)(g,{label:"Home"})}),Object(x.jsxs)("li",{className:"nav__btn--movies",children:[Object(x.jsx)(g,{label:"Movies"}),Object(x.jsxs)("div",{className:"movies--dropdown ",children:[Object(x.jsx)("button",{className:"movies--btn_toprated",onClick:function(){return e.push(O)},children:"Top Rated"}),Object(x.jsx)("button",{className:"movies--btn_upcoming",onClick:function(){return e.push(m)},children:"Upcoming"}),Object(x.jsx)("button",{className:"movies--btn_nowplaying",onClick:function(){return e.push(p)},children:"Now playing"})]})]}),Object(x.jsx)("li",{className:"nav__btn--about",onClick:function(){return e.push(b)},children:Object(x.jsx)(g,{label:"About"})}),he()]})]})},me=(n(90),n(91),function(){var e=Object(l.f)(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(x.jsxs)("div",{className:"navigationDropdown__container",children:[Object(x.jsx)("button",{onClick:function(){return e.push(j)},children:"Home"}),Object(x.jsx)("button",{onClick:function(){return e.push(b)},children:"About"}),Object(x.jsx)("button",{className:"dropdown__list",onClick:function(){return function(){var e=document.querySelector(".dropdown__list");e.classList.contains("dropdown--closed")?(r(!0),e.classList.remove("dropdown--closed")):(r(!1),e.classList.add("dropdown--closed"))}()},children:"Movies"}),function(){if(c)return Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{onClick:function(){return e.push(O)},children:"Top rated"}),Object(x.jsx)("button",{onClick:function(){return e.push(m)},children:"Upcoming"}),Object(x.jsx)("button",{onClick:function(){return e.push(p)},children:"Now Playing"})]})}(),Object(x.jsx)("hr",{}),he()]})}),Oe=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(l.f)();return Object(x.jsxs)("nav",{className:"navDesk__container",children:[Object(x.jsx)("img",{onClick:function(){return r.push(j)},className:"logo",src:E,alt:"logo"}),function(){if(n)return Object(x.jsx)(me,{})}(),Object(x.jsxs)("div",{class:"hamburger",onClick:function(){!function(){var e=document.querySelector(".hamburger");e.classList.contains("hamburger--crossed")?(c(!1),e.classList.remove("hamburger--crossed")):(c(!0),e.classList.add("hamburger--crossed"))}()},children:[Object(x.jsx)("div",{class:"hamburger__line hamburger__line1"}),Object(x.jsx)("div",{class:"hamburger__line hamburger__line2"}),Object(x.jsx)("div",{class:"hamburger__line hamburger__line3"})]})]})},pe=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},fe=function(){var e=function(){var e=Object(a.useState)(pe()),t=Object(i.a)(e,2),n=t[0],c=t[1],r=function(){c(pe())};return Object(a.useEffect)((function(){return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),n}(),t=e.width;e.height;return Object(x.jsx)("div",{children:t<=700?Object(x.jsx)(Oe,{}):Object(x.jsx)(ve,{})})};n(92);var xe=function(){return Object(x.jsx)(ne,{children:Object(x.jsx)(Z,{children:Object(x.jsx)(je,{children:Object(x.jsx)(fe,{})})})})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(xe,{})}),document.getElementById("root")),ge()}},[[93,1,2]]]);
//# sourceMappingURL=main.b740c9e6.chunk.js.map