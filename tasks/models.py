from django.db import models

# Create your models here. con los atributos osea los mapeamos para la base de datos
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

    # Funcion para ver el titulo y la descripcion cuando listo en la db osea en el cliente
    def __str__(self):
        return f"{self.title} - {self.description}"