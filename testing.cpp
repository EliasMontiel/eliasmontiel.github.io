#include<iostream>

int main() {
   int x = 10;
   int *p = new int;

   p = &x;

   std::cout << "x = " << *p << std::endl;
   delete p;
   
   return 0;
}