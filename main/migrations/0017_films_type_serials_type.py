# Generated by Django 4.2.2 on 2023-06-13 13:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_serialseason_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='films',
            name='type',
            field=models.CharField(default='movie', max_length=50, verbose_name='Тип'),
        ),
        migrations.AddField(
            model_name='serials',
            name='type',
            field=models.CharField(default='serial', max_length=50, verbose_name='Тип'),
        ),
    ]
