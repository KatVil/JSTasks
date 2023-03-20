function fakeBin(x){
    let outStr='';
    for(let i=0; i<x.length; i++){
        (Number(x[i])<5)?(outStr+=0):(outStr+=1);
          //((x[i]<5)?(x[i]=0):(x[i]=1));     
        }
    return outStr;
  }