from django.db import models


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')


class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)


class Korisnici(models.Model):
    user_name = models.CharField(max_length=60)
    password = models.CharField(max_length=30)
    mail = models.CharField(max_length=60, unique=True)
    jelAgencija = models.BooleanField(default=False)
