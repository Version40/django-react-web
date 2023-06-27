from django.contrib import admin
from .models import Serials, Films, SerialSeason


admin.site.register(SerialSeason)
admin.site.register(Serials)
admin.site.register(Films)


