
var siteName=document.getElementById('site')
var siteURL=document.getElementById('url')
var tbody=document.getElementById('tbody')
var cartona;
var pop=document.querySelector('#popa')
var regname=/^[A-Z]/
var regurl=/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)[a-z0-9]+(\.com)$/


if(JSON.parse(localStorage.getItem("ourBook"))){
    cartona=JSON.parse(localStorage.getItem('ourBook'))
    displayBook()
}else{
    cartona=[]
}




var cap=/^[A-Z]/



function addBook(){
    
    if(regname.test(siteName.value)&& regurl.test(siteURL.value)){
        var data={
            namesite:siteName.value,
            urlsite:siteURL.value
        }
        cartona.push(data)
        siteName.style.border="1px red"
        localStorage.setItem('ourBook',JSON.stringify(cartona))
        console.log(cartona)
        displayBook()
        clearBook()
    }else{
         openpopa()
    }

    if(!(cap.test(siteName.value))){
       console.log("hooo")
       siteName.style.border="red"
    }
}

function siteNamefun(val){
    console.log(val)
  if(!(cap.test(val))){
      console.log("jooo")
      siteName.style.borderBlockColor="red"

  }else{
    siteName.style.borderBlockColor="green"
  }
}



function openpopa(){
    pop.style.display="block",
    console.log(pop)
}



function closepopa(){
   pop.style.display="none"
   clearBook()
}


function displayBook(){
    var hassala='';
    for (let i = 0; i < cartona.length; i++) {
       
        
   
    hassala+=
    `<tr>
        <td>${i+1}</td>
        <td>${cartona[i].namesite}</td>
        <td><button class="btn green"> <a href="${cartona[i].urlsite}" class="text-white text-decoration-none" target="_blank"><span><i class="fa-regular fa-eye"></i></span> vist</a></button></td>
        <td><button class="btn red" onclick="deleteBook(${i})"><span><i class="fa-solid fa-trash"></i></span> Delete</button></td>
    </tr>`
    }
    tbody.innerHTML=hassala
}

function clearBook(){
    siteName.value=""
    siteURL.value=""
}

function deleteBook(indexBook){
    cartona.splice(indexBook,1)
    localStorage.setItem('ourBook',JSON.stringify(cartona))
    displayBook()
}