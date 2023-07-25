// var btn=document.querySelector('button');
// var heading=document.querySelector('h1');

// btn.onclick=function(){
//     heading.style.color="red";
// }


var imgs=[ 'img/portfolio-1.jpg', 'img/portfolio-3.jpg', 'img/portfolio-4.jpg',
'img/portfolio-1.jpg', 'img/portfolio-3.jpg', 'img/portfolio-4.jpg',];

var row=document.querySelector('.row');
var lightBox=document.querySelector('#lightBox');
var item=document.querySelector('#item');
var btnleft=document.querySelector('.fa-arrow-left');
var btnright=document.querySelector('.fa-arrow-right');
var btnclose=document.querySelector('.fa-circle-xmark');

(function(){
var box='';
for(i=0;i<imgs.length;i++){
    box+=`
    <div class="col-md-4 ">
    <div class="card position-relative">
        <img class="img-fluid rounded-2" src="${imgs[i]}" alt="">
        <div class="text text-center p-3 position-absolute start-50 translate-middle-x bg-white">
            <h3>Title heading# ${i+1}</h3>
            <p>Lorem ipsum dolor sit.</p>
        </div>
    </div>


</div>

    `
}
row.innerHTML=box;
})();

var allimgs=Array.from(document.querySelectorAll('img'));
var globalIndex;

for(i=0;i<allimgs.length;i++)
{
    allimgs[i].addEventListener('click',function(e){
        var imgsrc=e.target.src;
        lightBox.classList.replace('d-none','d-flex');
        item.style.backgroundImage = `url(${imgsrc})`;
globalIndex=allimgs.indexOf(e.target);
    })

};

btnclose.addEventListener('click',closefunc);

function closefunc(){
    lightBox.classList.replace('d-flex','d-none');
};

btnright.addEventListener('click', nextfunc);

function nextfunc(){
if(globalIndex==allimgs.length-1)
{
    globalIndex=0;
}
else{
    globalIndex++;
    var imgsrc=allimgs[globalIndex].src;
    item.style.backgroundImage = `url(${imgsrc})`;
}
   
}

btnleft.addEventListener('click',prevfunc);

function prevfunc(){
    if(globalIndex==0){
globalIndex=allimgs.length-1;
    }
    else{
        globalIndex--;
        var imgsrc=imgs[globalIndex];
        item.style.backgroundImage=`url(${imgsrc})`
    }
};


    document.addEventListener('keyup',function(e){
        if(e.key == 'ArrowRight')
        nextfunc()
        else if(e.key == 'ArrowLeft')
        prevfunc()
        else if(e.key == 'Escape')
        closefunc()
    });


