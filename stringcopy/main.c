#include <stdio.h>
#include <stdlib.h>
#include <string.h>
void main(void)
{
char texto1[20];
char texto2[20];
printf("\nIngrese una palabra: ");
gets(texto1);
strcpy(texto2,texto1);
printf("Se ingreso:%s la copia es:%s",texto1,texto2);
}
