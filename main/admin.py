from django.contrib import admin
from .models import Serials, Films, SerialSeason, News


admin.site.register(SerialSeason)
admin.site.register(Serials)
admin.site.register(Films)
admin.site.register(News)


