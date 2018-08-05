from django.db import models
from django.urls import reverse


class Contact(models.Model):

    INTEREST_CHOICES = (
        ('DEV', 'Web Development'),
        ('IT', 'IT & Networking'),
        ('SERVERS', 'Servers, Cloud, Linux, etc.'),
        ('PHOTO', 'Photography'),
        ('VIDEO', 'Video'),
    )

    name = models.CharField(name='Name', max_length=100)
    phone = models.PositiveIntegerField(name="Phone", blank=True)
    email = models.EmailField(name='Email', max_length=100, )
    service = models.CharField(name='Service', choices=INTEREST_CHOICES, max_length=50, blank=True)
    date = models.DateTimeField(auto_now_add=True, )
    message = models.TextField(name='Message', max_length=1500)

    class Meta:
        verbose_name = 'contact'
        verbose_name_plural = 'contacts'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('contact')
