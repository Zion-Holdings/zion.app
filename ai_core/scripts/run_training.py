from app.services.training_orchestrator import TrainingOrchestrator

if __name__ == "__main__":
    orchestrator = TrainingOrchestrator()
    result = orchestrator.start_training(tenant_id=None, reason="manual-script")
    print("Training result:", result)