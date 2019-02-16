from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.

class QuickView(TemplateView):
    template_name = 'core/quick.html'
