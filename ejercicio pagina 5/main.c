#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
char nombre1[20];
char nombre2[20];
printf("\nIngrese nombre 1: ");
gets(nombre1);
printf("\nIngrese nombre 2: ");
gets(nombre2);
if(strcpy(nombre1,nombre2)==0)
    {

        printf("\nNombre: %s :0 ");
    }
else
    {
    printf("\nNombre: %s :1");
    }


return 0 ;
}
