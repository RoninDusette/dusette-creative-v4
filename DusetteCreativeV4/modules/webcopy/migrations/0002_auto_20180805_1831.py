# Generated by Django 2.0.7 on 2018-08-05 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webcopy', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bio',
            name='Quote',
            field=models.CharField(max_length=300),
        ),
    ]
