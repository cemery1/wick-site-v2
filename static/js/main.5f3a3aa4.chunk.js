(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/CoreyEmery.3eeef2b0.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/community1.62120788.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/arrow.5a83071a.svg"},function(e,t,a){e.exports=a.p+"static/media/testworld.55b0f2f3.svg"},function(e,t,a){e.exports=a.p+"static/media/comingsoon.a377ec9a.png"},function(e,t,a){e.exports=a.p+"static/media/LucaDamasco.96f47d89.jpg"},function(e,t,a){e.exports=a.p+"static/media/ZachRispoli.9ad9bf2f.png"},,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/facebook.d906cb08.svg"},function(e,t,a){e.exports=a.p+"static/media/twitter.51423a8c.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.cf338263.svg"},function(e,t,a){e.exports=a.p+"static/media/youtube.84c61640.svg"},function(e,t,a){e.exports=a.p+"static/media/patreon.e2957077.svg"},function(e,t,a){e.exports=a.p+"static/media/wickworld.cbc312d2.svg"},function(e,t,a){e.exports=a.p+"static/media/mountainpadding.932c7e24.svg"},function(e,t,a){e.exports=a.p+"static/media/forestpadding.228282f3.svg"},function(e,t,a){e.exports=a.p+"static/media/AnnaGusman.4d09d59a.jpeg"},function(e,t,a){e.exports=a.p+"static/media/editorpreview.eabb1eb0.svg"},function(e,t,a){e.exports=a.p+"static/media/cannon.beb3d0a3.svg"},function(e,t,a){e.exports=a.p+"static/media/email.ff2f577f.svg"},function(e,t,a){e.exports=a.p+"static/media/messages.7e099e9e.svg"},function(e,t,a){e.exports=a.p+"static/media/example1.5886f8e8.png"},function(e,t,a){e.exports=a.p+"static/media/example2.7eae3ac9.png"},function(e,t,a){e.exports=a.p+"static/media/community3.420bd687.png"},function(e,t,a){e.exports=a.p+"static/media/community4.837f560e.png"},function(e,t,a){e.exports=a.p+"static/media/community5.86148160.png"},function(e,t,a){e.exports=a.p+"static/media/mozilla.787ef555.svg"},function(e,t,a){e.exports=a.p+"static/media/studio.35c7a92e.svg"},function(e,t,a){e.exports=a.p+"static/media/henryarmero.ba112ed5.svg"},function(e,t,a){e.exports=a.p+"static/media/olympus.4047a760.svg"},function(e,t,a){e.exports=a.p+"static/media/bxa.32e5a1ca.svg"},,,,function(e,t,a){e.exports=a(136)},,,function(e,t,a){},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);a(61),a(63);var n=a(1),r=a.n(n),i=a(15),o=a.n(i),c=(a(69),a(139)),l=a(5),m=a(6),s=a(8),u=a(7),d=a(9),p=a(140),g=a(137),E=a(138),h=a(2),w=a(10),f=a.n(w),k=a(16),b=a.n(k),v=(a(85),function(e){var t=e.title,a=e.body,i=e.image,o=e.onClick,c=e.toggleContent,l=e.isContentHovered;return r.a.createElement(n.Fragment,null,r.a.createElement(h.b,{className:"WickCard-container",onMouseEnter:c,onMouseLeave:c,onClick:o},r.a.createElement(h.f,{width:"100%",src:i,alt:"Card image cap"}),r.a.createElement(h.g,{className:"WickCard-content"},r.a.createElement(h.j,{className:l?"WickCard-title":"WickCard-title WickCard-title--collapsed"},t),l&&r.a.createElement(n.Fragment,null,r.a.createElement(h.i,{className:"WickCard-text"},a),r.a.createElement(f.a,{src:b.a})))))}),C=(a(87),function(e){var t=e.title,a=e.text,n=e.date,i=(e.link,e.onClick),o=e.toggleContent,c=e.isContentHovered;return r.a.createElement(h.b,{className:"NewsCard-container",onMouseEnter:o,onMouseLeave:o,onClick:i},r.a.createElement(h.c,null,r.a.createElement(h.j,{className:"NewsCard-title"},t),r.a.createElement(h.i,{className:"NewsCard-text"},a)),r.a.createElement(h.e,{className:"NewsCard-footer"},r.a.createElement(h.i,{className:"NewsCard-date"},n),c&&r.a.createElement(f.a,{src:b.a})))}),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleContent=function(){return a.setState(function(e){return{isContentHovered:!e.isContentHovered}})},a.shouldUseNewsCard=function(){return a.props.useNewsCard},a.state={isContentHovered:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.shouldUseNewsCard()?r.a.createElement(C,Object.assign({},this.props,{toggleContent:this.toggleContent,isContentHovered:this.state.isContentHovered})):r.a.createElement(v,Object.assign({},this.props,{toggleContent:this.toggleContent,isContentHovered:this.state.isContentHovered}))}}]),t}(n.Component),x=(a(89),function(e){var t=e.cards,a=e.linkButton,i=e.useNewsCard,o=e.usePadding;return r.a.createElement(n.Fragment,null,r.a.createElement(h.w,{className:(o?"WickCardDeck-paddingContainer":"")+" Wick-row"},r.a.createElement(h.n,{md:"9"},r.a.createElement(h.d,null,t.map(function(e){return r.a.createElement(N,Object.assign({key:e.title,useNewsCard:i},e))})))),a&&r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{xs:"6",sm:"4",md:"3",lg:"2"},r.a.createElement(h.a,{color:"success",block:!0,onClick:a.onClick},a.text))))}),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).updateNumberCards=function(){var e=window.innerWidth,t=e>575&&e<992?2:3;a.setState({numberCards:t})},a.state={numberCards:3},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateNumberCards),this.updateNumberCards()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateNumberCards)}},{key:"render",value:function(){return r.a.createElement(x,Object.assign({},this.props,{cards:this.props.cards.slice(0,this.state.numberCards)}))}}]),t}(n.Component),j=a(17),O=a.n(j),W=a(18),I=a.n(W),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={cards:[{title:"Follow Mouse",body:"See how you can get your character to follow your mouse movements around the screen!",image:O.a,onClick:function(){return window.open("http://wickeditor.com/wick-editor/index.html?demo=FollowMouse.json")}},{title:"Multiple Rooms",body:"Learn about how you can insert multiple different scenes into your animation.",image:O.a,onClick:function(){return window.open("http://wickeditor.com/wick-editor/index.html?demo=MultipleRooms.json")}},{title:"More Examples Coming Soon!",body:"Check back soon for more awesome Wick Editor Examples!",image:I.a}],linkButton:{text:"see more",onClick:function(){return window.open("http://wickeditor.com/#examples")}}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y,Object.assign({},this.state,{usePadding:!0}))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={cards:[{title:"Getting Started with Wick Editor",body:"In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",image:O.a,onClick:function(){return window.open("https://www.youtube.com/watch?v=bhN2VxyWJiU")}},{title:"Sounds in Wick Editor",body:"Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",image:O.a,onClick:function(){return window.open("https://www.youtube.com/watch?v=T08B0KkEAZA")}},{title:"More Tutorials Coming Soon!",body:"Check back soon for more awesome Wick Editor Tutorials!",image:I.a}],linkButton:{text:"watch more",onClick:function(){return window.open("http://wickeditor.com/#tutorials")}}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y,Object.assign({},this.state,{usePadding:!0}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={cards:[{title:"News Item!",text:"News subtitle description",date:"11/30/18"},{title:"News Item",text:"Longer news subtitle description. This is what it looks like.",date:"10/15/18",onClick:function(){return window.open("https://www.cmu.edu/news/stories/archives/2018/october/wick-editor.html")}},{title:"News Item?",text:"Longer news subtitle description. This is what it looks like.",date:"06/28/18",onClick:function(){return window.open("https://forum.wickeditor.com/t/wick-0-15-update-thread-video-export/461")}}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y,Object.assign({},this.state,{useNewsCard:!0}))}}]),t}(n.Component),L=(a(91),function(){return r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{md:"9"},r.a.createElement(h.b,{className:"UpdateCard-container"},r.a.createElement(h.c,null,r.a.createElement(h.j,{className:"UpdateCard-version"},"update 0.15.2"),r.a.createElement(h.h,{className:"UpdateCard-text"},"It's mean. It's lean. It makes animations and games. Try it out!"),r.a.createElement(h.a,{className:"UpdateCard-button",outline:!0,color:"success",size:"sm",onClick:function(){return window.open("http://wickeditor.com/wick-editor/")}},"try it")))))}),H=(a(93),function(e){var t=e.title,a=e.text,i=e.size,o=e.includeUnderline,c=e.includePadding,l=e.children;return r.a.createElement(n.Fragment,null,t&&r.a.createElement("div",{className:"ContentSection-title"+(i?"--"+i:"")},t),o&&r.a.createElement("div",{className:"ContentSection-underline"+(i?"--"+i:"")}),a&&r.a.createElement(h.w,{className:"ContentSection-body"+(i?"--"+i:"")+" Wick-row"},r.a.createElement(h.n,{sm:"9",lg:"6"},a)),c&&r.a.createElement("div",{className:"ContentSection-padding"}),l)}),R=(a(95),function(){return r.a.createElement("div",{className:"WickSpacers-largeSpacer"})}),D=function(){return r.a.createElement("div",{className:"WickSpacers-smallSpacer"})},U=a(33),F=a.n(U),A=function(e){var t=e.url,a=e.ratio;return r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{xs:"12",md:"9",lg:"8",xl:"7"},r.a.createElement(F.a,{src:t,ratio:a})))},T=(a(97),function(e){var t=e.children;return r.a.createElement("div",{className:"WickTitle"},t)}),z=(a(99),function(e){var t=e.image,a=e.link;return r.a.createElement("a",{className:"SocialMediaIcon-container",href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{src:t,className:"SocialMediaIcon-icon"}))}),B=a(34),J=a.n(B),G=a(35),Y=a.n(G),X=a(36),Z=a.n(X),q=a(37),K=a.n(q),V=a(38),_=a.n(V),$=(a(101),function(){return r.a.createElement("div",{className:"SocialMedia-container"},r.a.createElement(z,{image:J.a,link:"https://www.facebook.com/wickeditor/"}),r.a.createElement(z,{image:Y.a,link:"https://twitter.com/wickeditor"}),r.a.createElement(z,{image:Z.a,link:"https://www.instagram.com/"}),r.a.createElement(z,{image:K.a,link:"https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg"}),r.a.createElement(z,{image:_.a,link:"https://www.patreon.com/WickEditor"}))}),Q=function(){return r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{sm:"9",md:"4",lg:"3"},r.a.createElement(h.a,{color:"info",outline:!0,block:!0,onClick:function(){return window.open("https://www.patreon.com/WickEditor")}},"Become a Patron")),r.a.createElement(h.n,{sm:"9",md:"4",lg:"3"},r.a.createElement(h.a,{color:"info",outline:!0,block:!0,onClick:function(){return window.open("https://www.youtube.com/channel/UCXUM4laL0jXCO4wJjY15xqg")}},"Subscribe on Youtube")))},ee=function(){return r.a.createElement(h.p,{className:"fadeIn animated"},r.a.createElement(A,{url:"https://www.youtube.com/embed/IpF8fMXN6To",ratio:"16:9"}),r.a.createElement(D,null),r.a.createElement(T,null,"our latest"),r.a.createElement(H,{title:"tutorials",text:"Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!",size:"small",includeUnderline:!0},r.a.createElement(P,null)),r.a.createElement(D,null),r.a.createElement(H,{title:"examples",text:"Check out some examples to help you get started using the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!",size:"small",includeUnderline:!0},r.a.createElement(M,null)),r.a.createElement(D,null),r.a.createElement(H,{title:"updates",size:"small",includeUnderline:!0},r.a.createElement(L,null),r.a.createElement(S,null)),r.a.createElement(R,null),r.a.createElement(H,{title:"Suport Wick Editor",text:"Join the wick editor community with a YouTube membership or Patreon subscription!",size:"large",includePadding:!0},r.a.createElement(Q,null)),r.a.createElement($,null))},te=a(27),ae=(a(103),function(e){var t=e.mainImg,a=e.leftImg,n=e.rightImg,i=e.numberPadding,o=e.footer;return r.a.createElement("div",{className:"InfiniteScrollImage-container"},r.a.createElement("div",{className:o?"InfiniteScrollImage-imageFooter":"InfiniteScrollImage-imageHeader"},Object(te.a)(Array(i).keys()).map(function(e){return r.a.createElement(f.a,{key:e,src:a})}),r.a.createElement(f.a,{src:t}),Object(te.a)(Array(i).keys()).map(function(e){return r.a.createElement(f.a,{key:e,src:n})})))}),ne=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).calculatePaddingImage=function(){var e=window.innerWidth;a.setState({paddingImage:Math.max(0,Math.ceil((e-1024)/240))})},a.state={paddingImage:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.calculatePaddingImage),this.calculatePaddingImage()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.calculatePaddingImage)}},{key:"render",value:function(){return r.a.createElement(ae,Object.assign({},this.props,{numberPadding:this.state.paddingImage}))}}]),t}(n.Component),re=a(39),ie=a.n(re),oe=a(40),ce=a.n(oe),le=a(41),me=a.n(le),se=(a(105),function(e){var t=e.title,a=e.subtitle,i=e.buttonLabel,o=e.onClick;return r.a.createElement(n.Fragment,null,r.a.createElement(ne,{mainImg:ie.a,leftImg:ce.a,rightImg:me.a}),r.a.createElement(h.p,{className:"fadeIn animated"},r.a.createElement("div",{id:"Header-titleRow"},t),r.a.createElement(h.w,{id:"Header-buttonRow",className:"Wick-row"},r.a.createElement(h.n,{xs:"auto"},i?r.a.createElement(h.a,{color:"primary",size:"lg",block:!0,onClick:o},i):r.a.createElement("div",{id:"Header-buttonSpacer"}))),a&&r.a.createElement(h.w,{id:"Header-subtitleRow",className:"Wick-row"},r.a.createElement(h.n,{sm:"9",lg:"6"},a))))}),ue=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.scrollTo({top:0,left:0,behvaior:"smooth"})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(se,{title:"wick editor",subtitle:"The Wick Editor is a free online tool for creating games, animations, and everything in-between.",buttonLabel:"get started",onClick:function(){return window.open("http://wickeditor.com/wick-editor/")}}),r.a.createElement(ee,null))}}]),t}(n.Component),de=(a(107),function(e){var t=e.name,a=e.img,n=e.includeHeadshot;return r.a.createElement(h.n,{xs:"4",sm:"3",lg:"2"},n&&r.a.createElement(f.a,{src:a,className:"Creator-picture"}),r.a.createElement("div",{className:"Creator-name"},t))}),pe=(a(109),function(e){var t=e.people,a=e.title,i=e.includeHeadshot;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"CreatorsRow-description"},a),r.a.createElement(h.w,{className:"CreatorsRow-people Wick-row"},t.map(function(e){return r.a.createElement(de,{key:e.name,name:e.name,img:e.img,includeHeadshot:i})})))}),ge=a(4),Ee=a.n(ge),he=a(19),we=a.n(he),fe=a(20),ke=a.n(fe),be=a(42),ve=a.n(be),Ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={creators:[{name:"Zach Rispoli",img:ke.a},{name:"Luca Damasco",img:we.a}],webDesigners:[{name:"Anna Gusman",img:ve.a},{name:"Corey Emery",img:Ee.a}],editorDesigners:[{name:"Anna Gusman"},{name:"Cameron Burgess"},{name:"Gautam Bose"}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(pe,{people:this.state.creators,title:"The Wick Editor was created and is led by",includeHeadshot:!0}),r.a.createElement(pe,{people:this.state.webDesigners,title:"Brand and web design by",includeHeadshot:!0}),r.a.createElement(pe,{people:this.state.editorDesigners,title:"Editor Interface design by"}))}}]),t}(n.Component),Ne=a(59),xe=(a(111),function(e){var t=e.image,a=Object(Ne.a)(e,["image"]);return r.a.createElement(h.w,{className:"WickResponsiveImage-container Wick-row"},r.a.createElement(h.n,a,r.a.createElement(f.a,{src:t,className:"WickResponsiveImage-image"})))}),ye=a(43),je=a.n(ye),Oe=a(44),We=a.n(Oe),Ie=(a(113),function(){return r.a.createElement(h.p,{className:"fadeIn animated"},r.a.createElement(H,{title:"What is Wick Editor?",text:"The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects.",includeUnderline:!0},r.a.createElement(xe,{id:"AboutPage-editor",image:je.a,xs:"12",lg:"9"})),r.a.createElement(H,{text:"The Wick Editor is a hybrid of an animation tool and a coding environment, heavily inspired by similar tools such as Flash, HyperCard, and Scratch. It was developed in response to a growing need for such a tool for the modern web. You can read more about the creation of the Wick Editor here."}),r.a.createElement(R,null),r.a.createElement(H,{title:"Who is Wick Editor?",text:"The Wick Editor is a free and open-source tool for creating games, animations, and everything in-between. It's designed to be the most accessible tool for creating multimedia projects.",includeUnderline:!0},r.a.createElement(Ce,null)),r.a.createElement(D,null),r.a.createElement(f.a,{src:We.a,id:"AboutPage-cannon"}),r.a.createElement(H,{title:"special thanks to",text:"Golan Levin, Tom Hughes, Sarah Guthals, Nina Barbuto (and everyone at Assemble including Jess Gold and Lieu Wolfe)",includeUnderline:!0}),r.a.createElement(R,null),r.a.createElement(H,{title:"contact us!",text:"Shoot us a message, join the wick editor community with a YouTube membership or subscribe on Patreon!",includeUnderline:!0}),r.a.createElement(R,null),r.a.createElement($,null))}),Me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.scrollTo({top:0,left:0,behvaior:"smooth"})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(se,{title:"about us"}),r.a.createElement(Ie,null))}}]),t}(n.Component),Pe=(a(115),function(e){var t=e.image,a=e.title,n=e.text,i=e.onClick,o=e.toggleContent,c=e.isContentHovered;return r.a.createElement("div",{className:"ContentLink-container",onMouseEnter:o,onMouseLeave:o,onClick:i},r.a.createElement(f.a,{className:"ContentLink-image",src:t,alt:"Content Link Image"}),r.a.createElement("div",{className:"ContentLink-title"},a),r.a.createElement("div",{className:"ContentLink-text"},n),c?r.a.createElement(f.a,{className:"ContentLink-arrowLink",src:b.a}):r.a.createElement("div",{className:"ContentLink-arrowSpacer"}))}),Se=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleContent=function(){return a.setState(function(e){return{isContentHovered:!e.isContentHovered}})},a.launchLink=function(){return window.open(a.props.link)},a.state={isContentHovered:!1},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(Pe,Object.assign({},this.props,{onClick:this.launchLink,toggleContent:this.toggleContent,isContentHovered:this.state.isContentHovered}))}}]),t}(n.Component),Le=function(e){var t=e.forum,a=e.email;return r.a.createElement(h.w,{className:"ExternalContactLinks-container Wick-row"},r.a.createElement(h.n,{sm:"5",md:"4",lg:"3"},r.a.createElement(Se,t)),r.a.createElement(h.n,{sm:"1"}),r.a.createElement(h.n,{sm:"5",md:"4",lg:"3"},r.a.createElement(Se,a)))},He=a(45),Re=a.n(He),De=a(46),Ue=a.n(De),Fe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={forum:{image:Ue.a,title:"Community Forum",text:"Insert useful suggestion description right in here",link:"https://forum.wickeditor.com/"},email:{image:Re.a,title:"Contact Us",text:"Insert useful suggestion description right in here",link:"mailto:contact@wickeditor.com"}},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(Le,this.state)}}]),t}(n.Component),Ae=function(e){e.tutorials,e.examples;return r.a.createElement(h.p,{className:"fadeIn animated"},r.a.createElement(H,{title:"explore tutorials",text:"Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!",size:"small",includeUnderline:!0,includePadding:!0}),r.a.createElement(D,null),r.a.createElement(H,{title:"explore examples",text:"Here are a few tutorials to help you get started with the Wick Editor. Have an idea for an example, or want to submit your own? Post it on the Wick Editor forums!",size:"small",includeUnderline:!0,includePadding:!0}),r.a.createElement(R,null),r.a.createElement(Fe,null),r.a.createElement(D,null))},Te=a(47),ze=a.n(Te),Be=a(48),Je=a.n(Be),Ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){window.scrollTo({top:0,left:0,behvaior:"smooth"})},a.state={tutorials:[{title:"Getting Started with Wick Editor",body:"In this tutorial, we go over how to make a basic animation, how to create an interactive project, and how to save a project to your computer.",launchEditor:function(){return window.open("http://wickeditor.com/wick-editor/")},link:"https://www.youtube.com/embed/bhN2VxyWJiU"},{title:"Sounds in Wick Editor",body:"Here's a tutorial to get you started using sounds in your wickeditor.com projects. I show you how to add sounds to the timeline as well as with code!",launchEditor:function(){return window.open("http://wickeditor.com/wick-editor/")},link:"https://www.youtube.com/embed/T08B0KkEAZA"}],examples:[{title:"Follow Mouse",body:"See how you can get your character to follow your mouse movements around the screen!",image:ze.a,launchEditor:function(){return window.open("http://wickeditor.com/wick-editor/index.html?demo=FollowMouse.json")},useImage:!0},{title:"Multiple Rooms",body:"Learn about how you can insert multiple different scenes into your animation.",image:Je.a,launchEditor:function(){return window.open("http://wickeditor.com/wick-editor/index.html?demo=MultipleRooms.json")},useImage:!0}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(se,{title:"get started",subtitle:"Hit the ground running with the basics of wick editor by trying out our starter tutorial.",buttonLabel:"try the tutorial",onClick:function(){return window.open("http://wickeditor.com/#tutorials")}}),r.a.createElement(Ae,this.state))}}]),t}(n.Component),Ye=(a(117),function(e){var t=e.image,a=e.heightPercent;return r.a.createElement("div",{className:"WickAspectImage-aspectContainer WickAspectImage-aspectContainer--"+a},r.a.createElement("div",{className:"WickAspectImage-imageContainer"},r.a.createElement(f.a,{className:"WickAspectImage-image",src:t})))}),Xe=a(11),Ze=a.n(Xe),qe=function(){return r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{sm:"9",md:"12",lg:"9"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"8"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"3"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"3"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"}))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"12"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"})))),r.a.createElement(h.n,{xs:"4"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"12"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"}))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"}))))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"4"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"}))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"12"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"})))),r.a.createElement(h.n,{xs:"4"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"4"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"12"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"}))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"}))))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"4"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})),r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"}))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"12"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"100"})))),r.a.createElement(h.n,{xs:"8"},r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"12"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"}))),r.a.createElement(h.w,null,r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"})),r.a.createElement(h.n,{xs:"6"},r.a.createElement(Ye,{image:Ze.a,heightPercent:"50"})))))))},Ke=(a(119),function(e){var t=e.username,a=e.userImage,n=(e.projectImage,e.description);return r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{sm:"8",md:"6"},r.a.createElement(h.b,{className:"CreatorCard-container"},r.a.createElement(f.a,{className:"CreatorCard-projectImage",src:"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"}),r.a.createElement(h.c,{className:"CreatorCard-content"},r.a.createElement(f.a,{className:"CreatorCard-creatorImage",src:a}),r.a.createElement(h.j,{className:"CreatorCard-username"},t),r.a.createElement(h.i,{className:"CreatorCard-text"},n)))))}),Ve=(a(121),function(e){var t=e.activeIndex,a=e.content,n=e.next,i=e.previous,o=e.onExiting,c=e.onExited,l=a.map(function(e){return r.a.createElement(h.m,{onExiting:o,onExited:c,key:e.username},r.a.createElement(Ke,e))});return r.a.createElement(h.k,{activeIndex:t,next:n,previous:i},l,r.a.createElement(h.l,{className:"WickCarousel-arrowLeft",direction:"prev",directionText:"Previous",onClickHandler:i}),r.a.createElement(h.l,{className:"WickCarousel-arrowRight",direction:"next",directionText:"Next",onClickHandler:n}))}),_e=a(49),$e=a.n(_e),Qe=a(50),et=a.n(Qe),tt=a(51),at=a.n(tt),nt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onExiting=function(){a.animating=!0},a.onExited=function(){a.animating=!1},a.nextCard=function(){a.animating||a.setState(function(e){return{index:(e.index+1)%e.cards.length}})},a.prevCard=function(){a.animating||a.setState(function(e){return{index:0===e.index?e.cards.length-1:e.index-1}})},a.state={cards:[{username:"Corey Emery",userImage:Ee.a,projectImage:$e.a,description:"project description blah blah blah"},{username:"Luca Damasco",userImage:we.a,projectImage:et.a,description:"project description blah blah blah"},{username:"Zach Rispoli",userImage:ke.a,projectImage:at.a,description:"project description blah blah blah"}],index:0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(Ve,{activeIndex:this.state.index,content:this.state.cards,next:this.nextCard,previous:this.prevCard,onExited:this.onExited,onExiting:this.onExiting})}}]),t}(n.Component),rt=function(){return r.a.createElement(h.p,{className:"fadeIn animated"},r.a.createElement(H,{title:"wick editor community forum",text:"See what all the buzz is about and chat with fellow wick users for tips, tricks, and inspiration on your next project.",includeUnderline:!0}),r.a.createElement(D,null),r.a.createElement(H,{title:"creators",text:"Check out what people are making!",includeUnderline:!0,includePadding:!0},r.a.createElement(nt,null)),r.a.createElement(D,null),r.a.createElement(H,{title:"project gallery",includeUnderline:!0,includePadding:!0},r.a.createElement(qe,null)),r.a.createElement(D,null),r.a.createElement(Fe,null),r.a.createElement(D,null))},it=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.scrollTo({top:0,left:0,behvaior:"smooth"})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(se,{title:"community",buttonLabel:"visit the forum",onClick:function(){return window.open("https://forum.wickeditor.com/")}}),r.a.createElement(rt,null))}}]),t}(n.Component),ot=a(52),ct=a.n(ot),lt=a(53),mt=a.n(lt),st=a(54),ut=a.n(st),dt=a(55),pt=a.n(dt),gt=a(56),Et=a.n(gt),ht=(a(123),function(){return r.a.createElement(h.w,{className:"Wick-row"},r.a.createElement(h.n,{xs:"10",md:"8",lg:"6",xl:"5"},r.a.createElement("div",{className:"SupporterBrands-row"},r.a.createElement(f.a,{src:ct.a}),r.a.createElement(f.a,{src:mt.a})),r.a.createElement("div",{className:"SupporterBrands-spacer"}),r.a.createElement("div",{className:"SupporterBrands-row"},r.a.createElement(f.a,{src:ut.a}),r.a.createElement(f.a,{src:pt.a}),r.a.createElement(f.a,{src:Et.a}))))}),wt=(a(125),function(e){var t=e.name,a=e.img;return r.a.createElement(h.n,{className:"Supporter-container",xs:"3",sm:"2",lg:"1"},r.a.createElement(f.a,{src:a,className:"Supporter-picture"}),r.a.createElement("div",{className:"Supporter-name"},t))}),ft=(a(127),function(e){var t=e.people;return r.a.createElement(h.w,{className:"SupportersRow-people Wick-row"},t.map(function(e){return r.a.createElement(wt,{key:e.name,name:e.name,img:e.img})}))}),kt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={top:[{name:"Name McName1",img:Ee.a},{name:"Name McName2",img:Ee.a},{name:"Name McName3",img:Ee.a},{name:"Name McName4",img:Ee.a},{name:"Name McName5",img:Ee.a},{name:"Name McName6",img:Ee.a},{name:"Name McName7",img:Ee.a},{name:"Name McName8",img:Ee.a},{name:"Name McName9",img:Ee.a},{name:"Name McName0",img:Ee.a}],topMiddle:[{name:"Name McName11",img:Ee.a},{name:"Name McName12",img:Ee.a},{name:"Name McName13",img:Ee.a},{name:"Name McName14",img:Ee.a},{name:"Name McName15",img:Ee.a},{name:"Name McName16",img:Ee.a},{name:"Name McName17",img:Ee.a},{name:"Name McName18",img:Ee.a},{name:"Name McName19",img:Ee.a},{name:"Name McName20",img:Ee.a},{name:"Name McName10",img:Ee.a}],lowMiddle:[{name:"Name McName21",img:Ee.a},{name:"Name McName22",img:Ee.a},{name:"Name McName23",img:Ee.a},{name:"Name McName24",img:Ee.a},{name:"Name McName25",img:Ee.a},{name:"Name McName26",img:Ee.a},{name:"Name McName27",img:Ee.a},{name:"Name McName28",img:Ee.a}],low:[{name:"Name McName31",img:Ee.a},{name:"Name McName32",img:Ee.a},{name:"Name McName33",img:Ee.a},{name:"Name McName34",img:Ee.a},{name:"Name McName35",img:Ee.a}]},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(ft,{people:this.state.top}),r.a.createElement(ft,{people:this.state.topMiddle}),r.a.createElement(ft,{people:this.state.lowMiddle}),r.a.createElement(ft,{people:this.state.low}))}}]),t}(n.Component),bt=function(){return r.a.createElement(h.p,{className:"fadeIn animated"},r.a.createElement(H,{title:"our supporters",text:"The Wick Editor is supported by generous grants from organizations which support our mission, as well as donations from the community.",includeUnderline:!0,includePadding:!0},r.a.createElement(ht,null)),r.a.createElement(D,null),r.a.createElement(H,{text:"You can become a supporter too",size:"large",includePadding:!0},r.a.createElement(Q,null)),r.a.createElement(R,null),r.a.createElement(kt,null),r.a.createElement(H,{text:"thank you",size:"large",includePadding:!0}))},vt=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){window.scrollTo({top:0,left:0,behvaior:"smooth"})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(se,{title:"supporters",buttonLabel:"support us",onClick:function(){return window.open("https://www.patreon.com/WickEditor")}}),r.a.createElement(bt,null))}}]),t}(n.Component),Ct=(a(129),function(){return r.a.createElement(ue,null)}),Nt=function(){return r.a.createElement(Me,null)},xt=function(){return r.a.createElement(Ge,null)},yt=function(){return r.a.createElement(it,null)},jt=function(){return r.a.createElement(vt,null)},Ot=function(e){var t=e.page,a=e.onClickCloseDropdown,i=e.onClickToggleDropdown,o=e.onClickLaunchEditor,c=e.backgroundAnimationClass,l=e.isDropdownOpen;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"WickRouter-container"},r.a.createElement(h.t,{light:!0,expand:"sm"},r.a.createElement("div",{className:c}),r.a.createElement(h.u,{tag:g.a,to:"/",id:"/"===t?"WickRouter-activeItem":"",className:"WickRouter-brand--narrow",onClick:a},"wick editor"),r.a.createElement(h.v,{onClick:i}),r.a.createElement(h.o,{isOpen:l,navbar:!0},r.a.createElement(h.q,{className:"ml-auto mr-auto",navbar:!0},r.a.createElement(h.r,null,r.a.createElement(h.s,{tag:g.a,to:"/community/",id:"/community/"===t?"WickRouter-activeItem":"",className:"WickRouter-navItem",onClick:a},"community")),r.a.createElement(h.r,null,r.a.createElement(h.s,{tag:g.a,to:"/supporters/",id:"/supporters/"===t?"WickRouter-activeItem":"",className:"WickRouter-navItem",onClick:a},"supporters")),r.a.createElement(h.u,{tag:g.a,to:"/",id:"/"===t?"WickRouter-activeItem":"",className:"WickRouter-brand--wide",onClick:a},"wick editor"),r.a.createElement(h.r,null,r.a.createElement(h.s,{href:"#",className:"WickRouter-navItem",onClick:o},"create")),r.a.createElement(h.r,null,r.a.createElement(h.s,{tag:g.a,to:"/learn/",id:"/learn/"===t?"WickRouter-activeItem":"",className:"WickRouter-navItem",onClick:a},"learn")),r.a.createElement(h.r,null,r.a.createElement(h.s,{tag:g.a,to:"/about/",id:"/about/"===t?"WickRouter-activeItem":"",className:"WickRouter-navItem",onClick:a},"about")))))),console.log(t),r.a.createElement(E.a,{path:"/",exact:!0,component:Ct}),r.a.createElement(E.a,{path:"/about/",component:Nt}),r.a.createElement(E.a,{path:"/learn/",component:xt}),r.a.createElement(E.a,{path:"/community/",component:yt}),r.a.createElement(E.a,{path:"/supporters/",component:jt}))},Wt=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggleHeaderContainer=function(){window.scrollY>48?a.setState({backgroundAnimationClass:"slideInDown animated WickRouter-background",pageJustLaunched:!1}):a.state.pageJustLaunched?a.setState({backgroundAnimationClass:"WickRouter-background WickRouter-background--hidden"}):a.setState({backgroundAnimationClass:"slideOutUp animated WickRouter-background"})},a.handleClickCloseDropdown=function(){a.setState({isDropdownOpen:!1})},a.toggleDropdown=function(){a.setState(function(e){return{isDropdownOpen:!e.isDropdownOpen}})},a.launchEditor=function(){window.open("http://wickeditor.com/wick-editor/","_self")},a.state={backgroundAnimationClass:"WickRouter-background WickRouter-background--hidden",isDropdownOpen:!1,pageJustLaunched:!0},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.toggleHeaderContainer)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.toggleHeaderContainer)}},{key:"render",value:function(){return r.a.createElement(Ot,{page:this.props.location.pathname,onClickCloseDropdown:this.handleClickCloseDropdown,onClickToggleDropdown:this.toggleDropdown,onClickLaunchEditor:this.launchEditor,backgroundAnimationClass:this.state.backgroundAnimationClass,isDropdownOpen:this.state.isDropdownOpen})}}]),t}(n.Component),It=Object(p.a)(Wt),Mt=(a(132),function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{id:"Footer-container"},r.a.createElement("div",{id:"Footer-content"},r.a.createElement("span",{className:"Footer-item"},"Product"),r.a.createElement("span",{className:"Footer-item"},"Company"),r.a.createElement("span",{className:"Footer-item"},"Learn & Support"),r.a.createElement("span",{className:"Footer-item"},"Contact")),r.a.createElement("div",{id:"Footer-copyright"},"\xa9 2019, Wicklets, LLC.")))}),Pt=(a(134),function(){return r.a.createElement("div",{className:"Wick"},r.a.createElement("div",{className:"Wick-background"}),r.a.createElement(c.a,null,r.a.createElement(It,null)),r.a.createElement(Mt,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[60,2,1]]]);
//# sourceMappingURL=main.5f3a3aa4.chunk.js.map