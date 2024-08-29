#include <iostream>
#include <string>
#include <iomanip>
#include <cmath>

using namespace std;

// get rid of cout statements later

void chemicalElements(string elements[], const int ELEMENTS_SIZE)
{
    string elements_array[10] = {"Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"};
    for(int i = 0; i < ELEMENTS_SIZE; i++)
    {
        elements[i] = elements_array[i];
        cout << elements[i] << endl;
    }
}
void squareRoots(double numbers[], const int NUMBERS_SIZE)
{
    for(int i = 0, j = 1; i < NUMBERS_SIZE; i++)
    {
        numbers[i] = sqrt(j);
        // cout<< numbers[i] << endl;
        j++;
    }
}
void fillNumbers(int divisible_numbers[], const int DIVISIBLE_NUMBERS_SIZE)
{
    for(int i = 0, j = 50; j <= 100; j++)
    {
        if(j % 7 == 0)
        {
            divisible_numbers[i] = j;
            // cout << divisible_numbers[i] << endl;
            i++;
        }
    }
}
void fillLetters(char letters[], const int LETTERS_SIZE)
{
    for(int i = 0, j = 90; j > 64; j--)
    {        
        letters[i] = j;
        // cout << letters[i] << endl;
        i++;
        letters[i] = j + 32;
        // cout << letters[i] << endl;
        i++;
    }
}



int main()
{
    string elements[10] = {"Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon"};
    const int ELEMENTS_SIZE = 10;
    chemicalElements(elements, ELEMENTS_SIZE);

    double numbers[10] = {};
    const int NUMBERS_SIZE = 10;
    squareRoots(numbers, NUMBERS_SIZE);

    int divisible_numbers[7] = {};
    const int DIVISIBLE_NUMBERS_SIZE = 7;
    fillNumbers(divisible_numbers, DIVISIBLE_NUMBERS_SIZE);

    char letters[52] = {};
    const int LETTERS_SIZE = 52;
    fillLetters(letters, LETTERS_SIZE);

    return 0;
}