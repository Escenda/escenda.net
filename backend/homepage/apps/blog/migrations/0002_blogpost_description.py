# Generated by Django 4.2.1 on 2023-05-14 19:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogpost',
            name='description',
            field=models.TextField(default=None),
            preserve_default=False,
        ),
    ]