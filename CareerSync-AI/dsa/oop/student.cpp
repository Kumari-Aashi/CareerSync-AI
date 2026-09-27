#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    float cgpa;
public:
    Student(string n,float c):name(n),cgpa(c){}
    void display() const { cout << name << " | CGPA: " << cgpa << endl; }
};
int main(){Student s("Aashi",8.0);s.display();}
