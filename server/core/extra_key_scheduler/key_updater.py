from apscheduler.schedulers.background import BackgroundScheduler
from core.views import UserViewSet

# From and to can also be added. That wll be done when the dates are finalized.
def start():
  scheduler = BackgroundScheduler()
  user = UserViewSet()
  scheduler.add_job(user.addKey, "interval", minutes=60,id="addKey_001",replace_existing=True)
  scheduler.start()