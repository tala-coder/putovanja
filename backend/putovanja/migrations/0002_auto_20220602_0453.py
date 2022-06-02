# Generated by Django 3.2.5 on 2022-06-02 02:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('putovanja', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Korisnik',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60)),
                ('first_name', models.CharField(max_length=60)),
                ('password', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=60)),
                ('id_agencije', models.IntegerField(default=0)),
                ('datum_osnivanja', models.CharField(default='14/7/2008', max_length=60)),
            ],
        ),
        migrations.DeleteModel(
            name='Korisnici',
        ),
    ]
