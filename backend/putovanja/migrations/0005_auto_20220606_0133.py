# Generated by Django 3.2.5 on 2022-06-05 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('putovanja', '0004_putovanje'),
    ]

    operations = [
        migrations.CreateModel(
            name='Agencija',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=60)),
                ('password', models.CharField(max_length=30)),
                ('email', models.CharField(max_length=60)),
                ('id_agencije', models.IntegerField(default=1)),
                ('datum_osnivanja', models.DateField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.AlterField(
            model_name='korisnik',
            name='datum_osnivanja',
            field=models.DateField(blank=True, null=True),
        ),
    ]
