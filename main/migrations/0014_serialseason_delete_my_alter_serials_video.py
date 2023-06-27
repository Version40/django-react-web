# Generated by Django 4.2.2 on 2023-06-12 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_rename_my_choices_my'),
    ]

    operations = [
        migrations.CreateModel(
            name='SerialSeason',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default=0, max_length=100, verbose_name='Назва cеріалу та сезон')),
                ('choice', models.CharField(default=0, max_length=154)),
                ('choice_1', models.CharField(default=0, max_length=154)),
                ('choice_2', models.CharField(default=0, max_length=154)),
                ('choice_3', models.CharField(default=0, max_length=154)),
                ('choice_4', models.CharField(default=0, max_length=154)),
                ('choice_5', models.CharField(default=0, max_length=154)),
                ('choice_6', models.CharField(default=0, max_length=154)),
                ('choice_7', models.CharField(default=0, max_length=154)),
                ('choice_8', models.CharField(default=0, max_length=154)),
                ('choice_9', models.CharField(default=0, max_length=154)),
                ('choice_10', models.CharField(default=0, max_length=154)),
                ('choice_11', models.CharField(default=0, max_length=154)),
                ('choice_12', models.CharField(default=0, max_length=154)),
                ('choice_13', models.CharField(default=0, max_length=154)),
                ('choice_14', models.CharField(default=0, max_length=154)),
                ('choice_15', models.CharField(default=0, max_length=154)),
            ],
        ),
        migrations.DeleteModel(
            name='My',
        ),
        migrations.AlterField(
            model_name='serials',
            name='video',
            field=models.ManyToManyField(to='main.serialseason'),
        ),
    ]