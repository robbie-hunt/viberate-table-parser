"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3098],{81918:function(e,s,i){var r=i(24246),a=i(86677),n=i.n(a),t=i(23615),l=i.n(t),c=i(27378),o=i(14071),d=i(46367),m=i(39854),h=i(8534),u=i(5277),p=i(91135),x=i(98685),j=i(75089),g=i(56326);function v(e){var s,i,a=e.definitiveClassName,t=void 0===a?"":a,l=e.definitiveText,v=void 0===l?"":l,y=e.billingPeriod,f=void 0===y?m.xg.YEARLY:y,N=e.hideOnDisabled,b=void 0!==N&&N,w=e.hideOnPremium,C=void 0!==w&&w,T=e.paymentDispatch,k=void 0===T?function(){}:T,S=e.priceID,A=void 0===S?"":S,P=e.isArtist,D=void 0!==P&&P,F=e.definitiveGoPremiumText,I=(0,j.Z)(),L=I.user,M=I.products,Y=(0,x.Z)(),E=(0,p.Z)({billingPeriod:f}),R=E.calculated,Z=E.userCurrentPrice,B=(null===L||void 0===L||L.view_type,h.Wg.ARTIST,(null===Y||void 0===Y?void 0:Y.isPaying)&&(0,g.ke)(Z,"recurring.interval")===m.xg.MONTHLY&&f===m.xg.YEARLY),G=!1,O=!1;D?Y&&(null===Y||void 0===Y?void 0:Y.premiumArtist)&&(null===Y||void 0===Y?void 0:Y.isPaying)?(s="Current plan",i="button primary m rounded disabled",G=!0):(s=F||"Go Premium",i="button primary m rounded"):L&&(!Y||Y.premium||Y.premiumPlus||Y.duringPremiumTrial||Y.afterPremiumTrial)?Y.userLevel===h.F6.EXCLUSIVE?(s="Current plan",i="button primary m rounded disabled",G=!0):Y.isPaying?Y.userGroup===h.Vf.PREMIUM?(s="Update",i="button primary m rounded"):(Y.isPaying||Y.duringPremiumTrial)&&((0,g.ke)(Z,"recurring.interval")===m.xg.MONTHLY&&f===m.xg.YEARLY?(s="Upgrade to yearly",i="button primary m rounded"+(Y.duringPremiumTrial?" disabled":""),(Y.duringPremiumTrial||Y.orderType==m.Ug.PAYPAL)&&(O=!0)):(s="Current plan",i="button primary m rounded disabled",O=!0)):(s="Go Premium",i="button primary m rounded gradient"):(s="Try it Free",i="button primary m rounded gradient",C=!1),s||(O=!0);var V=!!(b&&G||O),_=(0,u.Z)(f).action;return(0,r.jsx)(c.Fragment,{children:!(V||C)&&(0,r.jsx)("button",{"data-price":(0,g.ke)(R[0],"selectedPrice.id"),onClick:function(e){if((null===Y||void 0===Y?void 0:Y.userGroup)===h.Vf.PREMIUM||B)(0,o.dP)();else{var s=A||e.target.dataset.price,i=(0,o.jf)(M,s),r=(0,o.bm)(M,(0,g.ke)(i,"id"));k({type:d.mG.SELECT_PRODUCT_ID,product:r,price:i,products:M}),L?_():n().push("/signup")}},className:t||i,disabled:G,children:v||s})})}v.propTypes={definitiveClassName:l().string,definitiveText:l().string,billingPeriod:l().string,hideOnDisabled:l().bool,hideOnPremium:l().bool,paymentDispatch:l().func,priceID:l().string},s.Z=v},33098:function(e,s,i){i.d(s,{Z:function(){return O}});var r=i(24246),a=i(86677),n=i.n(a),t=i(23615),l=i.n(t),c=i(27378),o=i(98784),d=i(56326),m=function(e){var s=e.showComparison,i=(e.sectionClasses,(0,c.useRef)(null));(0,c.useEffect)((function(){if(i&&i.current&&null!==s){var e=i.current;d.xr.slideToggle(e,500)}}),[s]);return(0,r.jsxs)("div",{className:"premium-features ".concat(s?"open":""),children:[(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Artist Analytics (1M+ artists)"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Cross-channel"})," streaming & social media performance"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Channels-specific streaming analytics:"})," Spotify, Apple Music, YouTube, Shazam, SoundCloud, Deezer & Beatport"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Channel-specific social media analytics:"})," TikTok, Instagram & Facebook"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Radio airplay analytics"})," monitoring 50K+ stations worldwide"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Playlist performance"})," on Spotify & Apple Music with reach over time, adds and drops over time"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Audience insights:"})," fanbase demographics and geolocation across monitored channels"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"\u201cCompare Artists\u201d tool:"})," side-by-side comparison of any two artists"]}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"CSV exports & PDF exports"})}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Personal dashboard"})," with followed artists for instant overview and benchmarking"]})]})]}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Artist Chart (1M+ artists)"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Cross-channel ranking"})," (by overall performance on streaming & social media channels)"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Channel specific ranking"})," on Spotify, Apple Music, YouTube, Shazam, SoundCloud, Deezer, radio, Beatport, TikTok, Instagram & Facebook"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Talent discovery filters:"})," geolocation, genre, performance on channels, fanbase size, custom timeframes, ",(0,r.jsx)("strong",{children:"HOT filter"})," displaying trending artists"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"\u201cSigned to Label\u201d filter"})," for discovery of unsigned artists"]}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"CSV exports"})}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"Chart templates & Chart customization"})}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Saved Charts"})," with pre-selected filters for quick discovery"]})]})]}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Song Analytics & Chart (58M+ songs)"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Cross-channel song performance"})," on every monitored channel"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Song Chart filters:"})," artist's country, genre, relase date, custom timeframe, performance on channels with adjustable range"]}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"CSV exports"})})]})]}),(0,r.jsx)("div",{className:"premium-feature",children:(0,r.jsx)("h2",{children:"Festival Chart & Analytics (6K+ Festivals)"})}),(0,r.jsx)("div",{className:"premium-feature",children:(0,r.jsx)("h2",{children:"Label Chart & Analytics (100K+ Labels)"})}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Genre Analytics (18 genres)"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Genres insights:"})," best & trending artists, country popularity, genre growth & consumption on streaming and social media channels"]}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"Genre in Spotify stats"})}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"Genre in radio airplay stats"})})]})]}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Country & City Analytics"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Local music market insights:"})," best-performing artists,overview of local artists, most streamed songs, most viewed videos biggest festivals, hottest venues, etc."]})})]}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Venue Chart (115K+)"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Filters:"})," country, city, genre, type, capacity, events this week. Perfect for future gig discovery."]})})]}),(0,r.jsx)("div",{className:"premium-feature",children:(0,r.jsx)("h2",{children:"500K+ Events"})}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"Alerts"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Feed with updates:"})," significant growth, playlist updates, etc"]}),(0,r.jsx)("li",{children:(0,r.jsx)("strong",{children:"Weekly email reports"})})]})]})]})};m.propTypes={showComparison:l().bool,sectionClasses:l().string};var h=c.memo(m,o.isEqual),u=i(79894),p=i.n(u),x=i(67839);function j(e){var s=e.active,i=e.scrollToForm,a=void 0!==i&&i;return(0,r.jsxs)("div",{className:"payment-plan-package fade-in "+(s?"active":""),children:[(0,r.jsx)("div",{className:"ribbon black"}),(0,r.jsxs)("div",{className:"plan",children:[(0,r.jsx)("h3",{className:"plan-title",children:"Custom Data Services"}),(0,r.jsx)("div",{className:"description",children:"Need an individual approach? We have a music data service for you \u2013 if not, we\u2019ll build it."}),(0,r.jsx)("div",{className:"price-wrapper js-in-viewport-el",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/cds.svg",alt:"enterprise",width:"115",loading:"lazy"})}),(0,r.jsx)("div",{className:"actions",children:a?(0,r.jsx)("a",{onClick:function(e){e.stopPropagation(),window.scrollTo({top:(0,d.ZL)(document.getElementById("contact-form")),behavior:"smooth"})},className:"button secondary m rounded black",title:"Contact us",children:"Contact us"}):(0,r.jsx)("a",{href:"mailto:"+x.Bm.vasja,className:"button secondary m rounded black",title:"Contact us",children:"Contact us"})}),(0,r.jsxs)("ul",{className:"features",children:[(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"API"})," access with daily refreshed data"]}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"Company-wide access"})}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"Blanket licenses"})}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"Custom dashboards"})}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"Music database matching"})}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"On-demand market research"})})]})]})]})}j.propTypes={active:l().bool};var g=j,v=i(8534),y=i(75089);function f(e){var s,i=e.active,a=e.productsCalculated,t=e.subscription,l="button secondary m rounded disabled",c=!1;return(0,y.Z)().user?t.duringPremiumTrial||t.isPaying||t.userLevel===v.F6.EXCLUSIVE?(c=!0,s="Free Plan"):t.lite&&(c=!0,s="Current Plan"):(s="Sign up",l="button secondary m rounded"),(0,r.jsx)("div",{className:"payment-plan-package "+(i?"active":""),children:(0,r.jsxs)("div",{className:"plan",children:[(0,r.jsx)("h3",{className:"plan-title",children:"Lite"}),(0,r.jsxs)("div",{className:"description",children:["Complete music data analytics \u2013 with limitations.",(0,r.jsx)("br",{}),"\xa0"]}),(0,r.jsxs)("div",{className:"price-wrapper",children:[(0,r.jsxs)("div",{className:"price",children:[(0,r.jsx)("span",{className:"currency",children:(0,d.ke)(a[0],"currencySymbol","\u20ac")}),"0"]}),(0,r.jsx)("time",{children:"Free Forever"})]}),(0,r.jsx)("div",{className:"actions",children:(0,r.jsx)("button",{onClick:function(){return n().push("/signup")},className:l,disabled:c,children:s})}),(0,r.jsxs)("ul",{className:"features",children:[(0,r.jsx)("li",{children:"Limited Artist & Track Analytics"}),(0,r.jsx)("li",{children:"Limited talent discovery and management tools"}),(0,r.jsx)("li",{children:"Basic genre and country trends"}),(0,r.jsx)("li",{children:'This plan gives you limited access to some of our features for 48 hours"'})]})]})})}f.propTypes={active:l().bool,productsCalculated:l().object,subscription:l().object};var N=i(81918),b=i(46367),w=i(39854);i(61789);function C(e){var s=e.paymentDispatch,i=void 0===s?function(){}:s,a=e.productsCalculated,n=e.subscription,t=e.active,l=e.paymentState,o=(0,d.ke)(a[0],"currencySymbol","\u20ac"),m=(0,d.ke)(a[0],"selectedPriceAmountFormated","N/A"),h=l.billingPeriod,u=(0,y.Z)(),p=(u.dispatchAction,u.user),x=(0,d.ke)(p,"view_type")!==v.Wg.ARTIST&&h===w.xg.YEARLY,j=Math.floor(x?m/12:m),g="";return x&&(g=(0,r.jsxs)(r.Fragment,{children:["Billed annually at ",(0,r.jsx)("span",{style:{textDecoration:"line-through"},children:o+2*m}),". ",(0,r.jsx)("strong",{children:o+m})]})),(0,r.jsxs)("div",{className:"payment-plan-package premium "+(t?"active":""),children:[(0,r.jsx)("div",{className:"ribbon"}),(0,r.jsxs)("div",{className:"plan js-in-viewport-el",children:[(0,r.jsx)("h3",{className:"plan-title",children:"Premium Plan"}),(0,r.jsx)("div",{className:"description",children:"Access millions of artists, tracks, playlists, festivals, and labels \u2013 ranked and analyzed."}),(0,r.jsxs)("div",{className:"price-wrapper",children:[(0,r.jsxs)("div",{className:"price js-billed-price",children:[(0,r.jsx)("span",{className:"currency",children:o}),(0,d.ke)(p,"view_type")==v.Wg.ARTIST?(0,r.jsxs)(c.Fragment,{children:[Math.floor(m/12),(0,r.jsxs)("sup",{children:[".",100*(m/12-Math.floor(m/12))]})]}):(0,r.jsxs)(c.Fragment,{children:[j,(0,r.jsx)("sup",{children:".90"})]}),(0,r.jsx)("small",{children:"/month"})]}),(0,d.ke)(p,"view_type")==v.Wg.ARTIST?(0,r.jsxs)("time",{className:"js-billed-timeframe",children:["Billed annually at ",o+m,"."]}):g&&(0,r.jsx)("time",{className:"js-billed-timeframe",children:g})]}),(0,r.jsxs)("div",{className:"actions",children:[(0,r.jsx)(N.Z,{paymentDispatch:i,priceID:(0,d.ke)(a,"Premium.selectedPrice.id"),billingPeriod:h}),((null===n||void 0===n?void 0:n.beforePremiumTrial)&&(null===n||void 0===n?void 0:n.userType)===v.Wg.ANALYTICS||!n)&&(0,r.jsx)("span",{className:"no-cc-required",children:"No credit card required!"})]}),(0,r.jsxs)("ul",{className:"features",children:[(0,r.jsxs)("li",{className:"included",children:["Artist & track charts with ",(0,r.jsx)("strong",{children:"talent discovery filters"})]}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"Detailed analytics"})," of 1M+ artists"]}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"Detailed analytics"})," of 58M+ tracks"]}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"Channel-specific"})," and ",(0,r.jsx)("strong",{children:"cross-channel metrics"})," (Spotify, TikTok, YouTube, Apple Music & more)"]}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"Playlist performance"})," of every artist"]}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"Fanbase demographic"})," (country and city level)"]}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"Full data history"})}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"Benchmarking & reporting"})," tools"]}),(0,r.jsxs)("li",{className:"included",children:[(0,r.jsx)("strong",{children:"CSV & PDF"})," exports"]}),(0,r.jsx)("li",{className:"included",children:(0,r.jsx)("strong",{children:"Fast-track support"})})]})]})]})}C.propTypes={paymentState:l().object,paymentDispatch:l().func,active:l().bool,productsCalculated:l().object,subscription:l().object};var T=C,k=i(91135),S=i(98685);var A=function(e){var s=e.paymentState,i=e.paymentDispatch,a=null===s||void 0===s?void 0:s.billingPeriod,n=(0,S.Z)();if((null===n||void 0===n?void 0:n.userGroup)===v.Vf.PREMIUM)return"";var t=function(e){i({type:b.mG.SET_BILLING_PERIOD,billingPeriod:e})};return(0,r.jsx)("div",{className:"subscription-toggle-new",children:(0,r.jsxs)("div",{className:"toggle-wrapper",children:[(0,r.jsx)("div",{className:"btn-toggle ".concat(a===w.xg.MONTHLY&&"active"),onClick:function(){return t(w.xg.MONTHLY)},children:"Monthly"}),(0,r.jsxs)("div",{className:"btn-toggle ".concat(a===w.xg.YEARLY&&"active"),onClick:function(){return t(w.xg.YEARLY)},children:["Annually, get\xa0",(0,r.jsx)("u",{children:"6 months free"})]})]})})};function P(){return(0,r.jsx)("section",{className:"landing-section section-compare-services",id:"similar-services",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("h2",{className:"landing-section-title",children:["Save more than ",(0,r.jsx)("span",{className:"blue",children:"$1,000"})," every year!"]}),(0,r.jsxs)("p",{className:"lead",children:["Premium music analytics usually comes with a high price tag. Not with us.",(0,r.jsx)("br",{})," We\u2019re making it affordable for every industry professional."]}),(0,r.jsxs)("div",{className:"compare-services-table",children:[(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("div",{className:"row"}),(0,r.jsx)("div",{className:"row l",children:"Monthly price"}),(0,r.jsx)("div",{className:"row l",children:"Yearly price"})]}),(0,r.jsxs)("div",{className:"col highlight",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/logo-viberate-new.svg",alt:"Viberate",className:"logo"})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("strong",{children:["$",w.nn.ANALYTICS.MONTHLY]})}),(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("strong",{children:["$",w.nn.ANALYTICS.YEARLY]})})]}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/logo-chartmetric.svg",alt:"Chartmetric",className:"logo"})}),(0,r.jsx)("div",{className:"row",children:"$140"}),(0,r.jsx)("div",{className:"row",children:"$1400"})]}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/logo-soundcharts.svg",alt:"Soundcharts",className:"logo"})}),(0,r.jsx)("div",{className:"row",children:"$129"}),(0,r.jsx)("div",{className:"row",children:"-"})]}),(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/logo-songstats.svg",alt:"Songstats",className:"logo"})}),(0,r.jsx)("div",{className:"row",children:"$99"}),(0,r.jsx)("div",{className:"row",children:"$1000"})]})]})]})})}function D(e){var s=e.showComparison,i=e.setShowComparison,a=e.paymentDispatch,t=e.paymentState,l=e.sectionClasses,o=void 0===l?"":l,m=e.showToolbar,u=void 0!==m&&m,x=e.scrollToForm,j=void 0!==x&&x,v=(0,d.ke)(n(),"query.type"),f=(0,c.useState)(v||"premium"),N=f[0],b=f[1],w=(0,y.Z)(),C=w.geoLocation,D=w.user,F=t.billingPeriod,I=(0,k.Z)({countryCode:(0,d.ke)(D,"customer_country",(0,d.ke)(D,"country.code",C.country_code)),billingPeriod:F}).calculated,L=(0,S.Z)();return(0,c.useEffect)((function(){v&&b(v)}),[v]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{id:"pricing",className:"landing-section section-payment-landing-new alt-onboarding only-two transparent "+o,children:[u&&(0,r.jsxs)("div",{className:"logo-wrapper",children:[(0,r.jsx)(p(),{href:"/",children:(0,r.jsxs)("a",{className:"logo",children:[(0,r.jsx)("img",{src:"/static/assets/images/svg/logo-viberate-new.svg",alt:"Viberate"})," Viberate"]})}),(0,r.jsx)("button",{className:"btn btn-payment-back",onClick:function(){void 0!==window.history.state.options._h?n().push("/home/"):n().back()},children:"Back"})]}),(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("h2",{className:"landing-section-title",children:["Viberate Analytics ",(0,r.jsx)("span",{className:"blue",children:"Pricing"})]}),(0,r.jsxs)("p",{className:"lead",children:["Get premium music analytics and ",(0,r.jsx)("strong",{children:"save $1,000+ every year"})," compared to"," ",(0,r.jsx)("a",{href:"#similar-services",children:"similar services"}),"."]}),(0,r.jsx)(A,{paymentDispatch:a,paymentState:t}),(0,r.jsxs)("div",{className:"payment-plans-grid js-payment-plan-grid",children:[(0,r.jsx)(T,{paymentDispatch:a,paymentState:t,active:"premium"===N,productsCalculated:I,subscription:L}),(0,r.jsx)(g,{active:"contact"===N,scrollToForm:j})]}),(0,r.jsx)("button",{onClick:function(){i()},type:"button",className:"button tertiary black s premium-features-toggle "+(s?"open":""),children:(0,r.jsx)("strong",{children:s?"Hide all premium features":"See all premium features"})}),(0,r.jsx)(h,{showComparison:s,sectionClasses:o})]})]}),(0,r.jsx)(P,{})]})}D.propTypes={showComparison:l().bool,setShowComparison:l().func,paymentState:l().object,paymentDispatch:l().func,sectionClasses:l().string,title:l().string,showToolbar:l().bool};var F=D,I=i(6053);var L=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"landing-section-title",style:{marginTop:"50px"},children:"All features"}),(0,r.jsxs)("div",{className:"premium-features open",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"ARTIST STATS"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"First-party Spotify for Artists stats"}),(0,r.jsx)("li",{children:"First-party Apple Music for Artists stats"}),(0,r.jsx)("li",{children:"First-party Shazam for Artist stats"}),(0,r.jsx)("li",{children:"First-party Amazon for Artists stats"}),(0,r.jsx)("li",{children:"Other first-party stats COMING SOON"}),(0,r.jsxs)("li",{children:["Integrated social & music stats from Viberate"," ",(0,r.jsx)(I.Z,{content:"Your complete music (Spotify, YouTube, SoundCloud, Shazam, Deezer, radio), social (TikTok, Instagram, Facebook), and cross-channel analytics from non-connected channels.",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/icon-help-tooltip.svg",alt:"Tooltip",width:"12"})})]}),(0,r.jsx)("li",{children:"Fanbase demographics"}),(0,r.jsx)("li",{children:"Fanbase geolocation"}),(0,r.jsx)("li",{children:"Detailed song analytics"})]})]}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"MUSIC WEBSITE"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Shareable website"}),(0,r.jsx)("li",{children:"Automatically generated and refreshed"}),(0,r.jsx)("li",{children:"\u201cBook Now\u201d form"}),(0,r.jsx)("li",{children:"Contact button"})]})]}),(0,r.jsxs)("div",{className:"premium-feature",children:[(0,r.jsx)("h2",{children:"SPOTIFY PLAYLIST PITCHING"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Chart of 12M+ Spotify playlists"," ",(0,r.jsx)(I.Z,{content:"Covering all genres. Filters: genre, subgenre, type, popularity, and release date.",children:(0,r.jsx)("img",{src:"/static/assets/images/svg/icon-help-tooltip.svg",alt:"Tooltip",width:"12"})})]}),(0,r.jsx)("li",{children:"Direct contact form"}),(0,r.jsx)("li",{children:"Curators\u2019 social media links"}),(0,r.jsx)("li",{children:"Pitching of new and older releases"})]})]})]})]})};function M(e){var s=e.paymentDispatch,i=void 0===s?function(){}:s,a=e.productsCalculated,n=(e.active,(0,d.ke)(a[0],"currencySymbol","\u20ac")),t=(0,d.ke)(a[0],"selectedPriceAmountFormated","N/A"),l=(0,d.ke)(a[0],"selectedPriceAmountDivided","N/A");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"ribbon"}),(0,r.jsxs)("div",{className:"plan",children:[(0,r.jsxs)("div",{className:"top",children:[(0,r.jsx)("h3",{className:"plan-title",children:"Artist Pro"}),(0,r.jsxs)("div",{className:"price-wrapper",children:[(0,r.jsxs)("div",{className:"price",children:[(0,r.jsx)("span",{className:"currency",children:n})," ",isNaN(Math.floor(l))?"":Math.floor(l),(0,r.jsxs)("sup",{children:[".",isNaN(l%1*100)?"":(0,o.round)(l%1*100)]}),(0,r.jsx)("small",{children:"/mo"})]}),(0,r.jsxs)("time",{className:"js-billed-timeframe",children:["Billed annually at ",isNaN((0,o.toNumber)(t))?"":n+(null===t||void 0===t?void 0:t.toFixed(2))]})]})]}),(0,r.jsxs)("div",{className:"bottom",children:[(0,r.jsxs)("ul",{className:"features",children:[(0,r.jsx)("li",{className:"included",children:"Your first-party streaming stats"}),(0,r.jsx)("li",{className:"included",children:"Your complete social media stats"}),(0,r.jsx)("li",{className:"included",children:"Your data-driven music website"}),(0,r.jsx)("li",{className:"included",children:"Targeted Spotify playlist pitching"})]}),(0,r.jsx)("div",{className:"actions",children:(0,r.jsx)(N.Z,{definitiveClassName:"button primary m rounded gradient",isArtist:!0,paymentDispatch:i,priceID:(0,d.ke)(a[0],"selectedPrice.id"),definitiveGoPremiumText:"Buy Now"})})]})]})]})}M.propTypes={paymentState:l().object,paymentDispatch:l().func,active:l().bool,productsCalculated:l().object,subscription:l().object};var Y=M;var E=function(e){var s=e.index,i=e.table,a=void 0===i?w.wm[0]:i,n=a.title,t=a.rows,l=a.belowTable;return(0,r.jsxs)("div",{className:"col col-".concat(s+1),children:[(0,r.jsx)("div",{className:"a-row",children:(0,r.jsx)("strong",{children:n})}),t.map((function(e,s){return(0,r.jsx)("div",{className:"a-row",children:e.text},s)})),(0,r.jsx)("div",{className:"a-row total",children:l})]})};var R=function(e){var s=e.breakAfterBlue,i=void 0!==s&&s,a=e.paymentDispatch,n=e.productsCalculated,t=(0,d.ke)(n[0],"currencySymbol","\u20ac"),l=(0,d.ke)(n[0],"selectedPriceAmountDivided","N/A");return(0,r.jsx)("section",{className:"landing-section section-similar-services",id:"all-features",children:(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("h2",{className:"landing-section-title",children:["Are you already spending ",(0,r.jsx)("span",{className:"blue",children:"over $50"})," ",i&&(0,r.jsx)("br",{})," for similar services every month?"]}),(0,r.jsx)("p",{className:"lead",children:"Tracking your artist stats, planning promotional campaigns, and pitching songs to the most suitable playlists is not cheap."}),(0,r.jsx)("div",{className:"activities",children:w.wm.map((function(e,s){return(0,r.jsx)(E,{index:s,table:e},s)}))}),(0,r.jsx)("h3",{className:"landing-section-subtitle",children:"We cover all that \u2013 without switching tools!"}),(0,r.jsxs)("div",{className:"price",children:[t,isNaN(Math.floor(l))?"":Math.floor(l),".",isNaN(l%1*100)?"":(0,o.round)(l%1*100),(0,r.jsx)("small",{children:"/mo"})]}),(0,r.jsx)("div",{className:"actions",children:(0,r.jsx)(N.Z,{isArtist:!0,paymentDispatch:a,priceID:(0,d.ke)(n[0],"selectedPrice.id"),definitiveGoPremiumText:"Buy Now"})})]})})};function Z(e){var s=e.paymentDispatch,i=e.paymentState,a=e.sectionClasses,t=void 0===a?"":a,l=e.showToolbar,o=void 0!==l&&l,m=(0,d.ke)(n(),"query.type"),h=(0,c.useState)(m||"premium"),u=h[0],x=h[1],j=(0,y.Z)(),g=j.geoLocation,v=j.user,f=(0,k.Z)({countryCode:(0,d.ke)(v,"customer_country",(0,d.ke)(v,"country.code",g.country_code)),defaultType:w.I$.ARTIST}).calculated;return(0,c.useEffect)((function(){m&&x(m)}),[m]),(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)("section",{id:"pricing",className:"landing-section section-payment-landing-new alt-onboarding only-two transparent "+t,children:[o&&(0,r.jsxs)("div",{className:"logo-wrapper",children:[(0,r.jsx)(p(),{href:"/",children:(0,r.jsxs)("a",{className:"logo",children:[(0,r.jsx)("img",{src:"/static/assets/images/svg/logo-viberate-new.svg",alt:"Viberate"})," Viberate"]})}),(0,r.jsx)("button",{className:"btn btn-payment-back",onClick:function(){return n().back()},children:"Back"})]}),(0,r.jsxs)("div",{className:"page",children:[(0,r.jsxs)("h2",{className:"landing-section-title",children:["Viberate for Artists"," ",(0,r.jsx)("span",{style:{background:"linear-gradient(90deg, #db1b4f 0%, #6f96f3)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Pricing"})]}),(0,r.jsxs)("p",{className:"lead",children:["Supercharge your music career without switching tools.",(0,r.jsx)("br",{})," ",(0,r.jsx)("a",{href:"#all-features",children:(0,r.jsx)("strong",{children:"93% cheaper"})})," ","than similar services sold separately!"," "]}),(0,r.jsx)("div",{className:"payment-plan-package premium alt-artist-pro",children:(0,r.jsx)(Y,{paymentDispatch:s,paymentState:i,active:"premium"===u,productsCalculated:f})}),(0,r.jsx)(L,{})]})]}),(0,r.jsx)(R,{paymentDispatch:s,productsCalculated:f})]})}Z.propTypes={showComparison:l().bool,setShowComparison:l().func,paymentState:l().object,paymentDispatch:l().func,sectionClasses:l().string,title:l().string,showToolbar:l().bool};var B=Z;function G(e){var s=e.paymentDispatch,i=e.paymentState,n=e.sectionClasses,t=void 0===n?"":n,l=e.showToolbar,o=void 0!==l&&l,d=e.scrollToForm,m=void 0!==d&&d,h=(0,a.useRouter)(),u=(0,S.Z)(),p=(0,c.useState)(null),x=p[0],j=p[1],g=(0,c.useState)(!1),y=g[0],f=g[1];return(0,c.useEffect)((function(){y&&setTimeout((function(){f(!1)}),500)}),[y]),(0,r.jsx)(c.Fragment,{children:(null===u||void 0===u?void 0:u.userType)===v.Wg.ARTIST||"/pricing-artists"===h.pathname?(0,r.jsx)(B,{paymentDispatch:s,paymentState:i,sectionClasses:t,showToolbar:o}):(0,r.jsx)(c.Fragment,{children:(0,r.jsx)(F,{showComparison:x,setShowComparison:function(){y||(f(!0),j((function(e){return!e})))},paymentDispatch:s,paymentState:i,sectionClasses:t,title:"Try it free for 30 days",showToolbar:o,scrollToForm:m})})})}G.propTypes={paymentDispatch:l().func,paymentState:l().object,sectionClasses:l().string,showToolbar:l().bool};var O=G}}]);