import"./assets/modulepreload-polyfill-ec808ebb.js";const r="feedback",o=document.querySelector(".feedback-form");o.addEventListener("input",()=>{const e=new FormData(o),t={};e.forEach((a,s)=>{t[s]=a}),localStorage.setItem(r,JSON.stringify(t))});o.addEventListener("submit",e=>{e.preventDefault();const t=e.target.email.value.trim(),a=e.target.message.value.trim();if(!t||!a){alert("All form fields must be filled in");return}console.log({email:t,message:a}),localStorage.removeItem(r),o.reset()});try{const e=JSON.parse(localStorage.getItem(r));Array.from(o.elements).forEach(t=>{const a=e[t.name];a&&(t.value=a)})}catch{console.error("PARSE STORAGE FORM ERROR")}
//# sourceMappingURL=commonHelpers2.js.map