var a=document.getElementById('myform')
a.addEventListener('submit',function(e){
    e.preventDefault()
    var search=document.getElementById('search').value

var originalname=search.split(" ").join("")

    fetch("https://api.github.com/users/"+originalname+"/repos?per_page=100&type=owner",
    {
        headers:{
             "Accept": "application/vnd.github.v3+json",
        }
    })
    .then((res)=>{
        return res.json()})
    .then((a)=>{
        console.log(a)
        var table=document.createElement('table');
table.setAttribute('class','table');

var thead=document.createElement('thead');
thead.setAttribute('class','thead-dark');

var tr=document.createElement('tr');
tr.style.backgroundColor="grey"
var th1=document.createElement('th');
th1.innerHTML="S.no";
var th2=document.createElement('th');
th2.innerHTML="ID";
var th3=document.createElement('th');
th3.innerHTML="Repository Name";
var th4=document.createElement('th');
th4.innerHTML="Repository url";
tr.append(th1,th2,th3,th4);
thead.append(tr);

var tbody=document.createElement('tbody');
tbody.style.backgroundColor="pink"
tbody.setAttribute('class','tbody-dark');
table.append( thead,tbody);
document.body.append(table);


        for(var i in a)
        {
            var d=a[i].id;
            var e=a[i].name;
            var f=a[i].url;
            
            ta(i,d,e,f)
        }
        function ta(q,x,y,z){
            
            var tr1=document.createElement('tr');
            var td1=document.createElement('td');
            td1.innerHTML=i;
            var td2=document.createElement('td');
            td2.innerHTML=x;
            var td3=document.createElement('td');
            td3.innerHTML=y;
            var td4=document.createElement('td');
            td4.innerHTML=z;
            
            tr1.append(td1,td2,td3,td4);
            
             
             tbody.append(tr1);
            return;
        }
           

    })
    .catch((err)=>{

    console.log(err);
    });
})

var m=document.getElementById('myform1')
m.addEventListener('submit',function(k){
     k.preventDefault()
    var search=document.getElementById('search').value
    var search1=document.getElementById('search1').value



    fetch("https://api.github.com/repos/"+search+"/"+search1+"/commits",
    {
        headers:{
             "Accept": "application/vnd.github.v3+json",
        }
    })
    .then((res)=>{
        return res.json()})
    .then((a)=>{
        var c=a[0].commit.tree.url
        ma(c);
       
    })
    .catch((err)=>{

    console.log(err);
    });


function ma(x){

console.log(x);
fetch(x).then((res)=>{
    return res.json()
}).then((res1)=>{

 
    var d=res1.tree;
    var table1=document.createElement('table');
 table1.setAttribute('class','table1');
 var thead1=document.createElement('thead');
 thead1.setAttribute('class','thead-dark');
 var trx=document.createElement('tr');
trx.style.backgroundColor="grey"
var thx=document.createElement('th');
thx.innerHTML="list of files of the repository";
trx.append(thx);
thead1.append(trx);
var tbodyx=document.createElement('tbody');
tbodyx.style.backgroundColor="pink"
tbodyx.setAttribute('class','tbody-dark');

table1.append( thead1,tbodyx);
 document.body.append(table1);

 
    
    for(i=0;i<d.length;i++){
        var e=d[i].path
        tab(e);
    }
    
    function tab(f)

    {  
        console.log(f)
        var trw=document.createElement('tr');
    var tdy=document.createElement('td');
    tdy.innerHTML=f;
    trw.append(tdy) ;
    tbodyx.append(trw);
    return;
    
    }
    
    
}).catch((err)=>{
    console.log(err);
});


}


})



