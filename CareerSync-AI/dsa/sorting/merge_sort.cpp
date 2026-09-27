#include <iostream>
#include <vector>
using namespace std;

void mergeSort(vector<int>& a, int l, int r) {
    if (l >= r) return;
    int m = l + (r-l)/2;
    mergeSort(a,l,m); mergeSort(a,m+1,r);
    vector<int> t; int i=l,j=m+1;
    while(i<=m && j<=r) t.push_back(a[i]<a[j]?a[i++]:a[j++]);
    while(i<=m)t.push_back(a[i++]);
    while(j<=r)t.push_back(a[j++]);
    for(int k=0;k<(int)t.size();k++) a[l+k]=t[k];
}
int main(){ vector<int>a={7,2,9,1,5}; mergeSort(a,0,a.size()-1); for(int x:a)cout<<x<<" "; }
