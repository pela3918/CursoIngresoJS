#include <stdio.h>
#include <stdlib.h>


int main()
{
     int numero1;
     int numero2;
     int resultado;
     char resp;
     int


    do{
        sytem("cls");
        printf("\n ingrese numero1");
        scanf("%d",&numero1);

       } while(numero1<=0);

        printf("\n ingrese numero2");

        scanf("%d",&numero2);

        resultado=numero1+numero2;

        printf("el resultado es  :%d",resultado);
        printf("\n continuar s/n ?");

        scanf(" %c",&resp);



    }while(resp=='s');



    return 0;
}
