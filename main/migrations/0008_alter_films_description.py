# Generated by Django 4.2.2 on 2023-06-12 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_alter_films_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='films',
            name='description',
            field=models.TextField(default=0, max_length=1500, verbose_name='Опис'),
        ),
    ]
