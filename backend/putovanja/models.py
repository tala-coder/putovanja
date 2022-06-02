from django.db import models

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
    datum_osnivanja = models.CharField(max_length=60, default='14/7/2008')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
