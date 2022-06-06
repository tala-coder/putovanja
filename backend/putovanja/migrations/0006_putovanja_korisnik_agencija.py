# Generated by Django 3.2.5 on 2022-06-05 23:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('putovanja', '0005_auto_20220606_0133'),
    ]

    operations = [
        migrations.CreateModel(
            name='Putovanja_Korisnik_Agencija',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(default='Na čekanju', max_length=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('agencija_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='putovanja.agencija')),
                ('korisnik_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='putovanja.korisnik')),
            ],
        ),
    ]
