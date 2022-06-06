from django.contrib import admin
from putovanja.models import Question, Korisnik, Agencija, Putovanja_Korisnik_Agencija, Putovanje

admin.site.register(Question)
admin.site.register(Korisnik)
admin.site.register(Agencija)
admin.site.register(Putovanje)
admin.site.register(Putovanja_Korisnik_Agencija)
