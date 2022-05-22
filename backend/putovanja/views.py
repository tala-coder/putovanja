import datetime
import json

from django.http import HttpResponse
from rest_framework.decorators import api_view
from django.core import serializers
from putovanja.models import Question, Korisnici


def index(request):
    return HttpResponse("hello from djangoo")


def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


@api_view(['POST'])
def fun2(request):
    ime = request.data.get('firstName')
    prezime = request.data.get('lastName')
    print(ime)

    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    # output = ', '.join([q.question_text for q in latest_question_list])
    output = {ime: ime, prezime: prezime}
    return HttpResponse(json.dumps(output))


@api_view(['GET'])
def povuciRedIzBaze(request, question_id):
    question = Question.objects.get(pk=question_id)
    response = serializers.serialize('json', [question, ])
    struct = json.loads(response)
    data = json.dumps(struct)
    return HttpResponse(data)


@api_view(['GET'])
def povuciIzBaze(request):
    listaPitanja = Question.objects.all()
    res = serializers.serialize('json', listaPitanja)
    return HttpResponse(res)

@api_view(['POST'])
def spasiPitanje(request):
    data = request.data
    question_text = data.get('question_text')
    pub_date = data.get('pub_date')
    mayDate = datetime.datetime.fromtimestamp(pub_date)
    Question.objects.create(question_text=question_text, pub_date=mayDate)
    return HttpResponse("Success xd")

@api_view(['POST'])
def register(request):
    user_name = request.data.get('user')
    password = request.data.get('pwd')
    mail = request.data.get('mail')
    print(password,mail,user_name)

    Korisnici.objects.create(user_name=user_name, password=password, mail=mail)
    return HttpResponse("Success xd"    )