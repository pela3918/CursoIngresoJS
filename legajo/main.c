#include <stdio.h>
#include <stdlib.h>
//difine cant 10 macro int vec[cant] for(i=0;i<cant;i++)


int main()
{

  int p;
   int legajo[5];
   float salario[5];
   int edad[5];
   for (p=0;p<5;p++)
   {
    printf("Ingrese el numero de legajo");
    scanf("%d",&legajo[p]);
    printf("Ingrese el salario del personal");
    scanf("%d",&salario[p]);
    printf("Ingrese la edad de la persona");
    scanf("%d",&edad[p]);


   }

    for (p=0;p<5;p++)
    {
    printf("el legajo es  %d\n",legajo[p]);
    printf("el salario es  %d\n",salario[p]);
    printf("la edad  es  %d\n",edad[p]);

    }



    return 0;
}
