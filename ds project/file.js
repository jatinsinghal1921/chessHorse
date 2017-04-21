var x=new Array(8);
for(var i=0;i<8;i++)
{
	x[i]=new Array(8);
}
var k=0;
for(i=0;i<8;i++)
{
	for(var j=0;j<8;j++)
	{
		x[i][j]=k;
		k++;
	}
}
/*for(i=0;i<8;i++)
{
	for(var j=0;j<8;j++)
	{
		document.write(x[i][j]);
                document.write(" ");
	}
        document.write("<br>");
}*/
var graph=new Array(64);
for(i=0;i<64;i++)
{
	graph[i]=[];
}
i=0;j=0;
var k=0,l=0;
for(i=0;i<8;i++)
{
    for(j=0;j<8;j++)
        { l=0;
			 if(j+2<=7 && i+1<=7)
  			{	graph[k][l]=x[i+1][j+2];
				l++;
  			}
			 if(j+2<=7 && i-1>=0)
 			{
  				graph[k][l]=x[i-1][j+2];
  				l++;
 			}
 			 if(j-2>=0 && i+1<=7)
			{
 				graph[k][l]=x[i+1][j-2];
  				l++;
  			}
			  if(j-2>=0 && i-1>=0)
  			{
 				graph[k][l]=x[i-1][j-2];
  				l++;
  			}
			  if(i+2<=7 && j+1<=7)
 			{
				graph[k][l]=x[i+2][j+1];
 				l++;
			}
			if(i+2<=7 && j-1>=0)
			{
				graph[k][l]=x[i+2][j-1];
				l++;
			}
			if(i-2>=0 && j+1<=7)
			{
				graph[k][l]=x[i-2][j+1];
				l++;
			}
			if(i-2>=0 && j-1>=0)
			{
				graph[k][l]=x[i-2][j-1];
				l++;
			}
			k++;
        }
}
/*document.write("hello"+"<br>");
for(i=0;i<64;i++)
{
    document.write(i+"     ");
    for(j=0;j<graph[i].length;j++)
    {
      document.write(graph[i][j]+" ");
    }
    document.write("<br>");
}*/
function myfunction()
{
    var src=document.getElementById("src").value;
    var des=document.getElementById("des").value;
    var visited=new Array(64);
    for(var p=0;p<64;p++)
    {
    	visited[p]=false;
    }
    
    var queue=[];
    var v=[];
    var v1=[];
    visited[src]=true;
    queue.push(src);
    while(queue.length!=0)
    {    
    	l=queue.shift();
    	v.push(l);
    	for(i=0;i<graph[l].length;i++)
    	{
    		if(visited[ graph[l][i] ]==false)
    		{
                //document.write(graph[l][i]);
                //document.write("<br>");
    			if(graph[l][i]==des)
    			{
    				v.push(des);
    				break;
    			}
    			queue.push(graph[l][i]);
    			visited[graph[l][i]]=true;
    		}
    	}
        if(i!=graph[l].length)
            break;
    }
   // document.write(v.length);
   // document.write("<br>");
   //  document.write(v1.length);
    //document.write("<br>");
    v1.push(des);
   //  document.write(v1.length);
    //document.write("<br>");
    //document.write("<br>");
    /*for(i=0;i<v.length;i++)
    {
        document.write(v[i]);
        document.write("<br>");
    }
    /document.write("<br>");
    */
    k=des;
    while(k!=src)
    {    
        for(i=0;i<(v.length)-1;i++)
        {
            if(parent(v[i],k))
            {
                //document.write(v[i]);
                //document.write("<br>");
                v1.push(v[i]);
                k=v[i];
                break;
            }
        }
    }
    //document.write("<br>");
    v1.reverse();
    //document.write("<table>");
    for(i=0;i<v1.length;i++)
    {
        //document.write("<tr>"+"<td>"+v1[i]+"</td>"+"</tr>");
        x = v1[i];
        document.getElementById(x).style.backgroundColor = "red"; 
        document.getElementById('result').innerHTML = document.getElementById('result').innerHTML+v1[i];
        if(i < (v1.length - 1)) {
            document.getElementById('result').innerHTML = document.getElementById('result').innerHTML + " -> ";
        }
        
    }
    
    //document.write("</table>");
}    
    function parent(a,b)
    {
        for(j=0;j<graph[a].length;j++)
        {
            if(graph[a][j]==b)
                return 1;
        }
        return 0;
    }

