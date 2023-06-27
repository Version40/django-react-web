# Generated by Django 4.2.2 on 2023-06-12 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_alter_films_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='films',
            name='actors',
            field=models.CharField(max_length=150, verbose_name='Актори'),
        ),
        migrations.AlterField(
            model_name='films',
            name='country',
            field=models.CharField(max_length=50, verbose_name='Країна'),
        ),
        migrations.AlterField(
            model_name='films',
            name='description',
            field=models.TextField(max_length=1500, verbose_name='Опис'),
        ),
        migrations.AlterField(
            model_name='films',
            name='director',
            field=models.CharField(max_length=50, verbose_name='Режисер'),
        ),
        migrations.AlterField(
            model_name='films',
            name='duration',
            field=models.CharField(max_length=100, verbose_name='Тривалість'),
        ),
        migrations.AlterField(
            model_name='films',
            name='genre',
            field=models.CharField(max_length=100, verbose_name='Жанр'),
        ),
        migrations.AlterField(
            model_name='films',
            name='release_year',
            field=models.IntegerField(verbose_name='Рік виходу'),
        ),
        migrations.AlterField(
            model_name='films',
            name='title_eng',
            field=models.CharField(max_length=100, verbose_name='Англійська назва фільму'),
        ),
        migrations.AlterField(
            model_name='films',
            name='video',
            field=models.CharField(max_length=200, verbose_name='Шлях до фільму'),
        ),
        migrations.AlterField(
            model_name='films',
            name='voicing',
            field=models.CharField(max_length=100, verbose_name='Озвучення'),
        ),
    ]