# Generated by Django 4.2.2 on 2023-06-12 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0015_alter_serials_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='serialseason',
            name='slug',
            field=models.SlugField(default=0, unique=True, verbose_name='Унікальна назва'),
        ),
    ]
