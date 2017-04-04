#include <stdio.h>
#include <stdlib.h>

int main()
{
int v[5],i;
for (i=0;i<5;i++)
{
printf("Ingrese valor a cargar en el vector");
scanf("%d",&v[i]);


}
for (i=0;i<5;i++)
{
    printf("el array es %d\n",v[i]);
}



return 0;
}
