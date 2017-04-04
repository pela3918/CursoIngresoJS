#include <stdio.h>
#include <stdlib.h>
#define MAX 5
int main()
{
int vec[MAX],i,mayor,menor,num,flag;
//Carga el vector
for(i=0;i<MAX;i++)
{
printf("Ingrese nro");
scanf("%d",&vec[i]);
}
mayor=vec[0];
for(i=0;i<MAX;i++)
{
if(vec[i]>mayor)
{
mayor=vec[i];



/* otras asignaciones */
}
}
printf("el mayor valor es  %d\n",mayor);

menor=vec[0];
for(i=0;i<MAX;i++)
{
if(vec[i]<menor)
{
menor=vec[i];
/* otras asignaciones */
}
}

printf("el menor valor es  %d\n",menor);

flag=0;
printf("Ingrese numero a buscar");
scanf("%d",&num);
for(i=0;i<MAX;i++)
{
if(num==vec[i])
{
/* asignaciones y modificaciones */
printf("Se encontro el numero");
flag=1;
}
}
if(flag==0)
printf("El numero no se encontro");


 return 0 ;
}
