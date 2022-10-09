from django.contrib import admin
from .models import *

# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'current_level', 'hidden_on_leaderboard')
    fieldsets = (
        (None, {
            "fields": (
                ('username', 'current_level'), ('first_name', 'last_name'), ('email', 'hidden_on_leaderboard'), ('paidHintTaken', 'keys'), 'is_active'
            ),
        }),
    )
    

admin.site.register(User, UserAdmin)
admin.site.register(Question)
admin.site.register(Timer)
