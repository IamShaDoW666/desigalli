# Generated by Django 4.0.1 on 2022-04-15 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_tabler_count'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tabler',
            name='count',
            field=models.IntegerField(null=True),
        ),
    ]
