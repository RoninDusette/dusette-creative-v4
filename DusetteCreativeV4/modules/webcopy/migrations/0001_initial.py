# Generated by Django 2.0.7 on 2018-08-05 18:29

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Bio', ckeditor.fields.RichTextField()),
                ('Avatar', models.ImageField(upload_to='uploads/')),
                ('Quote', models.TextField()),
            ],
            options={
                'verbose_name': 'Bio',
            },
        ),
    ]
