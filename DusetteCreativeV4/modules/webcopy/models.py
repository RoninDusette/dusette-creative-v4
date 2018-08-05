from django.db import models
from ckeditor.fields import RichTextField


class Bio(models.Model):
    body = RichTextField(name='Bio')
    avatar = models.ImageField(name='Avatar', upload_to='uploads/')
    quote = models.CharField(name='Quote', max_length=300)

    class Meta:
        verbose_name = 'Bio'

    def __str__(self):
        return 'Bio'
