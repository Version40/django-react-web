# Generated by Django 4.2.2 on 2023-06-10 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_allmovie'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='allmovie',
            name='films',
        ),
        migrations.RemoveField(
            model_name='allmovie',
            name='serials',
        ),
        migrations.AddField(
            model_name='allmovie',
            name='serials',
            field=models.ManyToManyField(to='main.serials'),
        ),
    ]
