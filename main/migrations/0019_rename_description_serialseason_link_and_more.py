# Generated by Django 4.2.2 on 2023-06-13 16:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0018_serialseason_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='serialseason',
            old_name='description',
            new_name='link',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_1',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_10',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_11',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_12',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_13',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_14',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_15',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_2',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_3',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_4',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_5',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_6',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_7',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_8',
        ),
        migrations.RemoveField(
            model_name='serialseason',
            name='choice_9',
        ),
    ]
