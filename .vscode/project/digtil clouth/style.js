setInterval(() => {
    const div=document.querySelector('div');
const time=new Date();
div.textContent=time.toLocaleTimeString();
},1000);