#include <iostream>
using namespace std;

int main() {
    char nilai;

    cout << "masukan nilai :"; cin >> nilai;
    switch (nilai)
    {
    case 'A':
        cout << "Nilai kamu bagus" << endl;
        break;

        case 'B':
        cout << "Nilai kamu agak bagus" << endl;
        break;
    
    default:
        cout << "Nilai yg dimasukan tidak ada" << endl;
        break;
    }
}