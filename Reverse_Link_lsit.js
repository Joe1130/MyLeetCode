function ListNode(val){
    this.val=val;
    this.next=null;
}
head=[1,2,3,4,5];
var reverseList=function(head){
    if(head.next==null||head==null){
        return head;
    }
    let before=head;
    let temp=null;
    let memo;
    while(before){
       memo=before.next;
       before.next=temp;
       temp=before;
       before=memo;
    }
    
    return temp;
}