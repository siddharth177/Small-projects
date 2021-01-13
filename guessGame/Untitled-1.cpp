#include<iostream>
using namespace std;
class stack{
    public:
        int top = -1;
        int *a = new int[0];
};
void push(class stack *s1,int key){
    (*s1).top++;
    (*s1).a[(*s1).top] = key;
}
void pop(class stack *s1){
    (*s1).top--;
}
void peek(class stack *s1){
    for(int i = 0; i <= (*s1).top; i++)
        cout << " a[" << i << "] = " << (*s1).a[i] << " ";
    
    cout << endl;
}
int main(){
    class stack s1;
    push(&s1, 0);
    push(&s1, 1);
    push(&s1, 2);
    push(&s1, 3);
    peek(&s1);
    return 0;   
}