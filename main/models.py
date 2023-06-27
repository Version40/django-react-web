from django.db import models


class SerialSeason(models.Model):
    title_season = models.CharField('Назва cеріалу та сезон', max_length=100, default=0)
    title_season_eng = models.CharField('Англ. назва сезону', max_length=50, default=0)
    slug = models.SlugField('Унікальна назва', unique=True, default=0)
    release_year = models.IntegerField('Рік виходу', default=0)
    description = models.TextField('Опис', max_length=1500, default=0)
    link = models.TextField('Посилання', max_length=10000, default=0)

    def __str__(self):
        return self.title_season


class Serials(models.Model):
    slug = models.SlugField('Унікальна назва', unique=True)
    type = models.CharField('Тип', max_length=50, default='serial')
    title = models.CharField('Назва серіалу', max_length=100)
    image = models.CharField('Банер серіалу', max_length=50)
    country = models.CharField('Країна', max_length=50, default=0)
    genre = models.CharField('Жанр', max_length=100, default=0)
    director = models.CharField('Режисер', max_length=50, default=0)
    actors = models.CharField('Актори', max_length=150, default=0)
    voicing = models.CharField('Озвучення', max_length=100, default=0)
    video = models.ManyToManyField(SerialSeason, null=True, blank=True)

    def __str__(self):
        return self.title

class Films(models.Model):
    slug = models.SlugField('Унікальна назва', unique=True)
    type = models.CharField('Тип', max_length=50, default='movie')
    title = models.CharField('Назва фільму', max_length=100)
    title_eng = models.CharField('Англійська назва фільму', max_length=100)
    image = models.CharField('Банер фільму', max_length=50)
    release_year = models.IntegerField('Рік виходу')
    country = models.CharField('Країна', max_length=50)
    genre = models.CharField('Жанр', max_length=100)
    director = models.CharField('Режисер', max_length=50)
    actors = models.CharField('Актори', max_length=150)
    duration = models.CharField('Тривалість', max_length=100)
    voicing = models.CharField('Озвучення', max_length=100)
    description = models.TextField('Опис', max_length=1500)
    video = models.CharField('Шлях до фільму', max_length=200)

    def __str__(self):
        return self.title









