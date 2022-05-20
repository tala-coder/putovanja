from django.urls import path
from putovanja import views

urlpatterns = [
    # ex: /putovanja/
    path('', views.fun2, name='fun2'),
    # ex: /putovanja/5/
    path('<int:question_id>/', views.detail, name='detail'),
    # ex: /putovanja/5/results/
    path('<int:question_id>/results/', views.results, name='results'),
    # ex: /putovanja/5/vote/
    path('<int:question_id>/vote/', views.vote, name='vote'),

    # baza
    path('dajIzBaze/', views.povuciIzBaze, name='povuciIzBaze'),
    path('dajRedIzBaze/<int:question_id>/', views.povuciRedIzBaze, name='povuciRedIzBaze'),
    path('spasiPitanje/', views.spasiPitanje, name='spasiPitanje'),
]