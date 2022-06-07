import datetime
import json
from datetime import date

from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core import serializers
from putovanja.models import Question, Korisnik, Agencija, Putovanje
from putovanja.models import Putovanja_Korisnik_Agencija as vezna
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
        firstName = name.split()[0] or ''

    # print('registrattiooon!')  Korisnik -> sve,    User-> Putnik,  Agencija-> agencija
    print('id_agencije', id_agencije)
    k1 = Korisnik(username=user_name, email=mail, first_name=firstName, last_name=lastName, id_agencije=id_agencije,
                  datum_osnivanja=datum_osnivanja)
    k1.save()
    if int(id_agencije) > 0:
        agencija = Agencija(username=user_name, email=mail, id_agencije=id_agencije, password=password,
                            datum_osnivanja=datum_osnivanja)
        agencija.save()

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


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def getMojaPutovanja(request):
    id = request.data.get('id')
    nizPurak = []
    id_agencije = Account.objects.get(user_id=id).id_agencije
    print(id, id_agencije)

    if id_agencije > 0:
        putovanjaAgencije = Putovanje.objects.filter(organizator_putovanja_id=id).order_by('-created_at')
        for i in putovanjaAgencije:
            p = {'id': i.id, 'grad': i.grad, 'naslov': i.naslov,
                 'slika': i.slika, 'upit': 1,
                 'opis': i.opis,
                 'tip': i.tip, 'pocetak': i.pocetak, 'kraj': i.kraj}
            nizPurak.append(p)
    else:
        mojaPutovanja = vezna.objects.filter(korisnik_id=id)
        for i in mojaPutovanja:
            p = {'id': i.putovanje_id.id, 'grad': i.putovanje_id.grad, 'naslov': i.putovanje_id.naslov,
                 'slika': i.putovanje_id.slika,
                 'opis': i.putovanje_id.opis, 'upit': 1,
                 'tip': i.putovanje_id.tip, 'pocetak': i.putovanje_id.pocetak, 'kraj': i.putovanje_id.kraj}
            nizPurak.append(p)
    return JsonResponse(nizPurak, safe=False)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def getPlaniranaPutovanja(request):
    today = date.today()
    print("Today's date:", today)
    id = request.data.get('id')
    niz = []
    id_agencije = Account.objects.get(user_id=id).id_agencije
    print(id, id_agencije)

    if id_agencije > 0:
        putovanjaAgencije = Putovanje.objects.filter(organizator_putovanja_id=id).order_by('-created_at')
        for i in putovanjaAgencije:
            if i.pocetak >= today:
                p = {'id': i.id, 'grad': i.grad, 'naslov': i.naslov,
                     'slika': i.slika, 'upit': 2,
                     'opis': i.opis,
                     'tip': i.tip, 'pocetak': i.pocetak, 'kraj': i.kraj}
                niz.append(p)
    else:
        mojaPutovanja = vezna.objects.filter(korisnik_id=id)
        for i in mojaPutovanja:
            if i.putovanje_id.pocetak >= today:
                print(i.putovanje_id.naslov)
                p = {'id': i.putovanje_id.id, 'grad': i.putovanje_id.grad, 'naslov': i.putovanje_id.naslov,
                     'slika': i.putovanje_id.slika, 'upit': 2,
                     'opis': i.putovanje_id.opis,
                     'tip': i.putovanje_id.tip, 'pocetak': i.putovanje_id.pocetak, 'kraj': i.putovanje_id.kraj}
                niz.append(p)
    return JsonResponse(niz, safe=False)


@api_view(['POST'])
def deletePutovanje(request, pk):
    id = request.data.get('id')
    id_agencije = Account.objects.get(user_id=id).id_agencije

    if id_agencije > 0:
        putovanjaAgencije = Putovanje.objects.get(id=pk)
        putovanjaAgencije.delete()
    else:
        mojaPutovanja = vezna.objects.filter(putovanje_id=pk)
        mojaPutovanja.delete()

    print('id-> ', id, 'id_agencije-> ', id_agencije, 'pk-> ', pk)

    return JsonResponse({"rez": 'obrisano'}, safe=False)
