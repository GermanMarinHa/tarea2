//Input Example

_INPUT = "3\n1 10\n1 100\n1 100";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

var separador = _INPUT.split("\n"); //separo la variable por cada \n
//console.log (separador[0]); 
//separador = arreglo_separado


for (i=1; i<=separador[0]; i++) 
     {

   {var arreglo_separado = separador[i].split(" ");} //separo cada lugar en el arreglo entre 2
            
           var numeros_cuadrados=0; //se da valor a la cantidad de numeros cuadrados perfectos que hay en el rango
            
            inicio=parseInt(arreglo_separado[0]); //se da el primer valor del arreglo dividido al inicio
            limite=parseInt(arreglo_separado[1]); //se da el segundo valor del arreglo dividido al limite
            //console.log (inicio);
            //console.log (limite); 
            
            
            {
            for (j=inicio; j<=limite; j++) //se inicia el for en el primer numero del rango y se termina en el ultimo
                {
                    console.log (j)+1;
                    raiz = Math.sqrt(j); //raiz cuadrada del numero j
                    //console.log (raiz);
                    cuadrado = Math.floor(raiz);//se trunca el numero
                    perfecto= (cuadrado*cuadrado);
                    
                    if  (perfecto==j) //si el numero truncado elevado al cuadrado es igual al numero j entonces j si es cuadrado perfecto
                    {
                    numeros_cuadrados = (numeros_cuadrados+1); //como si es cuadrado perfecto se suma 1 a la cantidad de numeros
                    
                    }
                    else 
                    {
                    numeros_cuadrados = (numeros_cuadrados); //como no es igual entonces la variable se mantiene
                    
                    }
                }
             console.log  (numeros_cuadrados); }
                
      }    
            
          
             

 

