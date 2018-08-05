from django.shortcuts import render
from django.views.generic.base import TemplateView


class ContactView(TemplateView):
    template_name = 'wattup/contact.html'
