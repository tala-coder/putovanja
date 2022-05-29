from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id_agencije = models.IntegerField(default=0)
    datum_osnivanja = models.CharField(max_length=60, default='14/7/2008')

    def __str__(self):
        return self.user.username
