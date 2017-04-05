#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX 10

// toupper(cadena); MAYUSCULA
// tolower(cad);minuscula
//strup(cad)
//strlwe(cad)
//nom^[0]=touPPer(nom[0]):
//<CTYPE.h>
//strcat(nomAPE,NOM);
//nomape[0]='\0'
//strcpy(nombre,nom);
int main()
{
char vec[MAX];
int i,x;
printf("\ningrese nombre: ");
gets(vec);
x=strlen (vec);
printf("\nla cantidad de letras es %d: ",x);

return 0;
}
