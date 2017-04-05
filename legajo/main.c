#include <stdio.h>
#include <stdlib.h>
//difine cant 10 macro int vec[cant] for(i=0;i<cant;i++)


int main()
{

  int p;
  char nombre[5][20];
   int legajo[5];
   float salario[5];
   int edad[5];
   for (p=0;p<5;p++)
   {
    printf("Ingrese el numero de legajo :");
    scanf("%d",&legajo[p]);
    printf("Ingrese el salario del personal :");
    scanf("%f",&salario[p]);
    printf("Ingrese la edad de la persona :");
    scanf("%d",&edad[p]);
    printf("Ingrese el nombre de la persona :");
    fflush(stdin);
    fgets(nombre[p],20,stdin);

   }

    for (p=0;p<5;p++)
    {
    printf("el legajo es  %d\n : ",legajo[p]);
    printf("el salario es  %f\n: ",salario[p]);
    printf("la edad  es  %d\n: ",edad[p]);
    printf("\nNombre: %s : ",nombre[p]);

    }



    return 0;
}
