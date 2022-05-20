from django.urls import path
from putovanja import views

urlpatterns = [
    # ex: /polls/
    path('', views.fun2, name='fun2'),
    # ex: /polls/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /polls/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /polls/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),

    # baza
    path('dajIzBaze/', views.povuciIzBaze, name='povuciIzBaze'),
    path('dajRedIzBaze/<int:question_id>/', views.povuciRedIzBaze, name='povuciRedIzBaze'),
    path('spasiPitanje/', views.spasiPitanje, name='spasiPitanje'),
]