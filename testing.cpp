#include <iostream>
using namespace std;

void test(int value) {
      value = value* 5;

     cout << &value << endl;

}

int main () {
      int value = 15 ;
      test(value);

     cout << &value << endl;
}