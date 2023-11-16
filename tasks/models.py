from django.db import models

# Create your models here.
# Vamos a guardar tareas no necesitamos consultas SQl por que django tiene su propio ORM, podemos usar sus clases para crear las tablas


# heredar desde models su clase model para crear la tabla
class Tarea(models.Model): 
    # decir el dato va hacer caractes
    titulo = models.CharField(max_length=200)
    # dato con texto largo
    descripcion = models.TextField(blank=True)
    # dato booleano (por defecto en false)
    estado = models.BooleanField(default=False)
    
    def __str__(self):
        return self.titulo
    