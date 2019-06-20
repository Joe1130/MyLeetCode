function ListNode(val){
    this.val=val;
    this.next=null;
}
var head= new ListNode(2);
head.next=new  ListNode(5);
head.next.next= new ListNode(3);
head.next.next.next= new ListNode(4);
head .next.next.next.next=new ListNode(6);
head .next.next.next.next.next=new ListNode(2);
head .next.next.next.next.next.next=new ListNode(2);
    var temp ;
    var val=head;
    var result;
    var get ;
    if(val==null){
        return val;
    }else if(val.next==null){
        return val;
    }{
        get=head.next;
    }
    while(val){
     result=val. next.next;
     val. next.next=val;
     if(temp){
         temp.next=val.next;
         temp=val;  //temp指针转换位置
     }else{
        temp=val;
     }
        if (result == null) {   //偶数处理，比如4
            val.next = null;
            break;
        }else if(result.next==null){  //奇数处理，比如5
            val.next=result;
            break;
        }     
     val=result;
    }

    while(get){
         console.log(get.val);
        get=get.next;
    }
