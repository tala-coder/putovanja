from django.db import models
from django.contrib.auth.models import User
from rest_framework.fields import DateTimeField


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)


class Korisnik(models.Model):
    username = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    first_name = models.CharField(max_length=60)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=60)
    id_agencije = models.IntegerField(default=0)
    datum_osnivanja = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username

# class Putnik(models.Model):
#     username = models.CharField(max_length=60)
#     last_name = models.CharField(max_length=60)
#     first_name = models.CharField(max_length=60)
#     password = models.CharField(max_length=30)
#     email = models.CharField(max_length=60)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)


class Agencija(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=60)
    id_agencije = models.IntegerField(default=1)
    datum_osnivanja = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username


class Putovanje(models.Model):
    naslov = models.CharField(max_length=100)
    slika = models.CharField(max_length=500)
    opis = models.CharField(max_length=900)
    tip = models.CharField(max_length=100)
    grad = models.CharField(max_length=200)
    pocetak = models.DateField(null=True, blank=True)
    kraj = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    organizator_putovanja = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.naslov


class Putovanja_Korisnik_Agencija(models.Model):
    status = models.CharField(max_length=100, default='Na čekanju')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    korisnik_id = models.ForeignKey(User, on_delete=models.CASCADE)
    putovanje_id = models.ForeignKey(Putovanje, on_delete=models.CASCADE)

    def __str__(self):
        return 'Agencija ->' + self.putovanje_id.organizator_putovanja.username + ', Putnik ->' + self.korisnik_id.username + ', Status ->' + self.status
