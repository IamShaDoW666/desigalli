# Generated by Django 3.2.13 on 2022-09-14 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_menu_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tabler',
            name='count',
            field=models.CharField(max_length=20, null=True),
        ),
    ]