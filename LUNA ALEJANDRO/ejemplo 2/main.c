#include <stdio.h>
#include <stdlib.h>

int main()
{

    int i=0;
    int numero;
    int max;
    int min;
    int flag=0;


    while(i<5){

    printf("\n ingrese un numero");
    scanf("%d",&numero);


    if(flag==0){
        max=numero;
        min=numero;
        flag=1;
    }
    else{
        if(numero>max){
        max=numero;
        }

        else{
            if(numero<min){
            min=numero;
            }
        }
        }

     i++;
    }


    printf("El maximo es:%d\n",max);
    printf("El minimo es:%d\n",min);




    return 0;
}
