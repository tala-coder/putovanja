from django.urls import path
from putovanja import views
from django.contrib.auth import views as auth_views


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

    # projekat
    path('register/', views.register, name='register'),
    # path('login/', views.login, name='login'),
    # path('auth/register/', RegistrationAPIView.as_view(), name='register'),

    path('reset_password/',
         auth_views.PasswordResetView.as_view( ),
         name="reset_password"),

    path('reset_password_sent/',
         auth_views.PasswordResetDoneView.as_view( ),
         name="password_reset_done"),

    path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view( ),
         name="password_reset_confirm"),

    path('reset_password_complete/',
         auth_views.PasswordResetCompleteView.as_view( ),
         name="password_reset_complete"),
]