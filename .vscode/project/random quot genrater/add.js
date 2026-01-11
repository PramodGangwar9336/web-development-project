const quete=[
    'this is style file',
    'how are you0',
    'sjijeekd iichjwp',
    'jjdff jvjndd'
]
  const button=document.querySelector('button')
 const quot=document.querySelector('h1')
 button.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*4)
    quot.textContent=quete[random]
 })