#include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& a, int target) {
    int l=0,r=(int)a.size()-1;
    while(l<=r){int m=l+(r-l)/2;if(a[m]==target)return m;if(a[m]<target)l=m+1;else r=m-1;}
    return -1;
}
int main(){vector<int>a={1,2,4,7,9};cout<<binarySearch(a,7);}
