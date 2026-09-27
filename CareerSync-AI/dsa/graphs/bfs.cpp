#include <iostream>
#include <vector>
#include <queue>
using namespace std;

void bfs(int start, const vector<vector<int>>& g){
    vector<bool> vis(g.size(),false); queue<int> q; q.push(start); vis[start]=true;
    while(!q.empty()){int u=q.front();q.pop();cout<<u<<" ";for(int v:g[u])if(!vis[v]){vis[v]=true;q.push(v);}}
}
int main(){vector<vector<int>> g={{1,2},{0,3},{0,3},{1,2}};bfs(0,g);}
