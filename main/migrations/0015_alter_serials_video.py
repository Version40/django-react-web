# Generated by Django 4.2.2 on 2023-06-12 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_serialseason_delete_my_alter_serials_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serials',
            name='video',
            field=models.ManyToManyField(blank=True, null=True, to='main.serialseason'),
        ),
    ]
