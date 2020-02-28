from django.shortcuts import render
from django.views.generic.base import TemplateView


class HomeView(TemplateView):
    template_name = 'frontend/home.html'


class BioView(TemplateView):
    template_name = 'frontend/bio.html'


class PrivacyPolicyView(TemplateView):
    template_name = 'frontend/privacy_policy.html'


class TermsOfUseView(TemplateView):
    template_name = 'frontend/terms_of_use.html'
