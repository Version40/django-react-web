# Generated by Django 4.2.2 on 2023-06-14 18:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0021_remove_serials_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serialseason',
            name='link',
            field=models.TextField(default=0, max_length=10000, verbose_name='Посилання'),
        ),
    ]
