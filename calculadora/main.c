#include <stdio.h>
#include <stdlib.h>
float suma(float a, float b); // Funcion sumar dos numeros
float resta(float a, float b); // Funcion restar dos numeros
float multiplicar(float a, float b); // Funcion multiplicar dos numeros
float dividir(float a, float b); // Funcion dividir dos numeros

int main()
{
     int opcion;
     float a,b;

  do{

     printf("1.Suma \n");
     printf("2.Resta\n");
     printf("3.Multiplicacion\n");
     printf("4.Division\n");
     printf("5.Salir\n");
     printf("Elija una Opcion \n");
     scanf("%d",&opcion);

     switch(opcion)
     {
         case 1:
            printf("\nIntroduce a: ");
			scanf("%f", &a);
            printf("\nIntroduce b: ");
			scanf("%f", &b);
			printf("La suma de %.2f y %.2f es: %.2f\n\n", a, b, suma(a, b));
			break;
		case 2:
            printf("\nIntroduce a: ");
			scanf("%f", &a);
            printf("\nIntroduce b: ");
			scanf("%f", &b);
			printf("La resta de %.2f y %.2f es: %.2f\n\n", a, b, resta(a, b));
			break;
		case 3:
            printf("\nIntroduce a: ");
			scanf("%f", &a);
            printf("\nIntroduce b: ");
			scanf("%f", &b);
			printf("La multiplicacion de %.2f y %.2f es: %.2f\n\n", a, b, multiplicar(a, b));
			break;
		case 4:
            printf("\nIntroduce a: ");
			scanf("%f", &a);
            printf("\nIntroduce b: ");
			scanf("%f", &b);
			printf("La division entre %.2f y %.2f es: %.2f\n", a, b, dividir(a, b));
			break;
		case 5: break;
		default:
			printf("\nIntroduce una opción valida...");


    }
}while(opcion!=5);





}
float suma(float a, float b) {
	return a+b;
}

float resta(float a, float b) {
	return a-b;
}

float multiplicar(float a, float b) {
	return a*b;
}

float dividir(float a, float b) {
	return a/b;
}
