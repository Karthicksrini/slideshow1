
//var colors=["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg","Images/img2.jpg","Images/img3.jpg"];
var divison = document.createElement("div");
  var img=document.createElement("img")
  img.setAttribute("src","Images/img1.png");
  divison.setAttribute("class","mainimg");
  divison.append(img);
  document.body.append(divison);
var index=1;
const forward=()=>{
  if(index==1){
    img.setAttribute("src","https://s1.1zoom.me/big0/949/430357-Kycb.jpg")
  }
  if(index==2){
    img.setAttribute("src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYmn5LHNjASBPozjpxDDA70UK6pmfp6mGrIL_9iInxdJ36ZEFJp2qGqOtHsqQSIoTumU&usqp=CAU")
  }
  if(index==3){
    img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGNcxee4p-0Syrf991dGRkgsSmjrD3etofw&usqp=CAU");
    index=0; 
  }
  index++;
  divison.append(img);
  document.body.append(divison);
  console.log(img);
  }
  img.remove();
  console.log(img)
  
  const backward=()=>{
    if(index==1){
      img.setAttribute("src","https://s1.1zoom.me/big0/949/430357-Kycb.jpg")
    }
    if(index==2){
      img.setAttribute("src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIYmn5LHNjASBPozjpxDDA70UK6pmfp6mGrIL_9iInxdJ36ZEFJp2qGqOtHsqQSIoTumU&usqp=CAU")
    }
    if(index==3){
      img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGNcxee4p-0Syrf991dGRkgsSmjrD3etofw&usqp=CAU");
      index=0; 
    }
    index++;
    divison.append(img);
    document.body.append(divison);
    console.log(img);
    }
    img.remove();
    
  setInterval(forward,2000);