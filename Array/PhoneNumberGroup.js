let PhoneNumberGroup=str=>{
  //1、准备工作，先准备映射和按键
  let mapping=['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  let input=str.split('');
  let strCode=[];

   input.forEach(item => {
       if(mapping[item])
       strCode.push(mapping[item]);
   });
     //2、将两个进行组合
    let comb=arr=>{
        let temp=[];
        for(let i=0;i<arr[0].length;i++){
            for(let j=0;j<arr[1].length;j++){
              temp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        arr.splice(0,2,temp);  //将数组中的前两个进行替换。
        //递归
        if(arr.length>1){
            comb(arr);
        }else{
            return temp;
        }
        return arr[0];
    }
    return comb(strCode);
}
PhoneNumberGroup('23');