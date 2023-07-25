var siteName=document.getElementById('siteName');
var websiteurl=document.getElementById('websiteurl');
var btn=document.getElementById('btn');
var body_container=document.getElementById('body_container');

var siteList;

(function(){
if(JSON.parse(localStorage.getItem('test'))!==null)
{
 siteList=JSON.parse(localStorage.getItem('test')) ;
 display();
}
else
{
    siteList=[];
}
})();

btn.onclick=function(){
    addSite();
}
function addSite(){
var site={
    site_name:siteName.value,
    site_url:websiteurl.value
};
console.log(siteList);
siteList.push(site);
localStorage.setItem('test',JSON.stringify(siteList));
clearForm();
display();
}

function display(){
    var box='';
    for(var i=0;i<siteList.length;i++){
        box+=`<tr>
        <td>${i+1}</td>
        <td>${siteList[i].site_name}</td>

        <td><button  class="btn btn-success"> <i class="fa-solid fa-eye"></i> Visit</button></td>
        <td><button onclick="deleteSite(${i});" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    console.log(`<tr>
    <td>${i+1}</td>
    <td>${siteList[i].site_name}</td>

    <td><button class="btn btn-success"> <i class="fa-solid fa-eye"></i> Visit</button></td>
    <td><button class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
</tr>`)
    }

    body_container.innerHTML=box;
}

function clearForm(){
    siteName.value='';
    websiteurl.value='';
}

function deleteSite(index){
    siteList.splice(index,1);
    localStorage.setItem('test',JSON.stringify(siteList));
    display();
}
function visit(){
    
}