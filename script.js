let sel=document.getElementById("colorSelect")
let btn=document.getElementsByTagName("input")[0];

// 
 btn.addEventListener("click",remove);


function remove(){

    let item=getSelected();
    
    for(let i=0;i<sel.length;i++){
        let child=sel[i];
        if(child.value==item){
            sel.removeChild(child);
            break;
        }
    }
}

let getSelected=function(){
	if(sel.length==0) return;
    let item=document.getElementById("colorSelect").value;
    return item;
}
let item=sel.addEventListener("change", getSelected);