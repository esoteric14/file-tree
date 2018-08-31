var c = 0;
function toggleDesc(item1,item2) {
    $(item1).children('li').toggle();
    if(c===0){
      $(item2).addClass('iconOnClick');
        c++;
        console.log(c)
    }
    else{
        $(item2).removeClass('iconOnClick');
        c=0;
        console.log(c);
    }
    
}

function callMe(e){
    var k = e.parentElement;
    console.log(k);
    toggleDesc(k,e);
}
function buildList(parentElement, items) {
    var i, l, list, li;
    if( !items || !items.length ) { return; } 
    list = $("<ul></ul>").appendTo(parentElement);
    for(i = 0, l = items.length ; i < l ; i++) {
        li = $("<li></li>").text(items[i].name);
        buildList(li, items[i].children);
        list.append(li);
    }
    //console.log(list);
}

$(document).ready($.getJSON( "toggle.JSON", function(data) {
  console.log(typeof data);
  console.log(data);
  let html = buildList($('output'), data);
  console.log(html);
        
   buildList($('#pageContent'), data);
   
}))


//buildList($('#pageContent'), points);



//function createList(data){
//    let len = data.length;
//    console.log(len);
//    console.log(data[0].name);
//    let newList = document.createElement('ul');
//    for(let i=0; i<len; i++){
//        listElement = document.createElement('li');
//        listElement.innerHTML=data[i].name;
//        k = newList.appendChild(listElement);
//        listElement.innerHTML=data[i].name;
//        console.log(k);
//        
//        
//        if(data[i].type === 'folder')
//        createList(data[i].children);
//    
//    }
//    document.getElementById('output').appendChild(newList);
//     console.log(newList);
//    return newList;
//   
//}
    
     



//function createList(json, isArray){
//   
//   var html = '<ul>';
//   for(var key in json){
//       if(typeof json[key] == 'object'){
//           
//           html += '<li>' + (!isArray ? '<strong>'+ key +'</strong>' : '') + '</li>' + createList(json[key], (json[key] instanceof Array ? 1 : 0));
//       } else {
//           html += '<li>'+ json[key] +'</li>';
//       }
//   }
//   return html+'</ul>';
//
//}
//
