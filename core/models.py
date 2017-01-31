from django.db import models

# Create your models here.

class Records(models.Model):
    name = models.CharField(blank="Titre de l'enregistrement", max_length=200)

    def __str__(self):
        return self.name