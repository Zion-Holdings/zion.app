from app.services.scheduler import ZionScheduler
import time

if __name__ == "__main__":
    sched = ZionScheduler()
    sched.start()
    try:
        while True:
            time.sleep(3600)
    except KeyboardInterrupt:
        sched.shutdown()