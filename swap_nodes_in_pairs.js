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
    } 

    while(get){
         console.log(get.val);
        get=get.next;
    }
