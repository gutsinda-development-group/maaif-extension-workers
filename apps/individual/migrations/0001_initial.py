# Generated by Django 2.2.4 on 2019-08-06 11:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_extensions.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Individual',
            fields=[
                ('created', django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', django_extensions.db.fields.ModificationDateTimeField(auto_now=True, verbose_name='modified')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('firstname', models.CharField(max_length=100)),
                ('surname', models.CharField(max_length=100)),
                ('sex', models.CharField(choices=[('', '[Select Gender]'), ('Male', 'Male'), ('Female', 'Female')], max_length=6)),
                ('dob', models.DateField(blank=True, null=True)),
                ('nin', models.CharField(max_length=20)),
                ('telephone', models.CharField(max_length=12)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('postalAddress', models.TextField()),
                ('physicalAddress', models.TextField()),
            ],
            options={
                'verbose_name': 'Individual',
                'verbose_name_plural': 'Individual',
                'db_table': 'individual',
            },
        ),
    ]
