import datetime
import json

from django.http import HttpResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core import serializers
from putovanja.models import Question, Korisnik
from django.contrib.auth.models import User
from account.models import Account
from django.contrib.auth.hashers import make_password


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
@permission_classes([IsAuthenticated])
def povuciIzBaze(request):
    listaPitanja = Question.objects.all()
    res = serializers.serialize('json', listaPitanja)
    print(res)
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
# @permission_classes([IsAuthenticated])
def getUserInfo(request):
    username = request.data.get('username') 
    client = Korisnik.objects.filter(username__iexact=username)
    res = serializers.serialize('json', client)
    return HttpResponse(res, content_type='application/json')


@api_view(['POST'])
def register(request):
    user_name = request.data.get('user')
    name = request.data.get('name')
    pwd = request.data.get('pwd')
    password = make_password(pwd)
    mail = request.data.get('mail')
    id_agencije = request.data.get('id')
    datum_osnivanja = request.data.get('date')
    if name == '':
        lastName = user_name
        firstName = user_name
    else:
        lastName = name.split()[1]
        firstName = name.split()[0]

    # print('registrattiooon!')
    print('id_agencije', id_agencije)
    # print(user_name, name, firstName, lastName, password, id_agencije, datum_osnivanja )
    # Korisnik.objects.create_user(username=user_name, email=mail, first_name=firstName, last_name=lastName, id_agencije=id_agencije, datum_osnivanja=datum_osnivanja)

    k1 = Korisnik(username=user_name, email=mail, first_name=firstName, last_name=lastName, id_agencije=id_agencije,
                  datum_osnivanja=datum_osnivanja)
    k1.save()
    p1 = User(username=user_name, email=mail, password=password, first_name=firstName, last_name=lastName)
    p1.save()
    a = Account(user=p1, id_agencije=id_agencije, datum_osnivanja=datum_osnivanja)
    a.save()
    return HttpResponse("Success xd")


@api_view(['POST'])
def login(request):
    mail = request.data.get('mail')
    password = request.data.get('pwd')
    print(password, mail)

    # Korisnici.objects.create(mail=mail, password=password )
    return HttpResponse("Success xd")

#
# user = User.objects.create_user(username='test3',email='test3@gmail.com', password='test3')
