# Generated by Django 3.2.5 on 2022-06-06 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('putovanja', '0010_alter_putovanje_organizator_putovanja'),
    ]

    operations = [
        migrations.AlterField(
            model_name='putovanje',
            name='slika',
            field=models.CharField(max_length=500),
        ),
    ]
