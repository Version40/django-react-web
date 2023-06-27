# Generated by Django 4.2.2 on 2023-06-12 15:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_films_actors_alter_films_country_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='MY_CHOICES',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('choice', models.CharField(choices=[('a', 'Hola'), ('b', 'Hello'), ('c', 'Bonjour'), ('d', 'Boas')], max_length=1)),
            ],
        ),
        migrations.AddField(
            model_name='serials',
            name='actors',
            field=models.CharField(default=0, max_length=150, verbose_name='Актори'),
        ),
        migrations.AddField(
            model_name='serials',
            name='country',
            field=models.CharField(default=0, max_length=50, verbose_name='Країна'),
        ),
        migrations.AddField(
            model_name='serials',
            name='description',
            field=models.TextField(default=0, max_length=1500, verbose_name='Опис'),
        ),
        migrations.AddField(
            model_name='serials',
            name='director',
            field=models.CharField(default=0, max_length=50, verbose_name='Режисер'),
        ),
        migrations.AddField(
            model_name='serials',
            name='genre',
            field=models.CharField(default=0, max_length=100, verbose_name='Жанр'),
        ),
        migrations.AddField(
            model_name='serials',
            name='release_year',
            field=models.IntegerField(default=0, verbose_name='Рік виходу'),
        ),
        migrations.AddField(
            model_name='serials',
            name='title_season',
            field=models.CharField(default=0, max_length=50, verbose_name='Назва сезону'),
        ),
        migrations.AddField(
            model_name='serials',
            name='title_season_eng',
            field=models.CharField(default=0, max_length=50, verbose_name='Англ. назва сезону'),
        ),
        migrations.AddField(
            model_name='serials',
            name='voicing',
            field=models.CharField(default=0, max_length=100, verbose_name='Озвучення'),
        ),
        migrations.AddField(
            model_name='serials',
            name='video',
            field=models.ManyToManyField(to='main.my_choices'),
        ),
    ]
