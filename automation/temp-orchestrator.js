
            const MonetizationOrchestrator = require('./monetization-orchestrator');
            const orchestrator = new MonetizationOrchestrator();
            
            orchestrator.initialize().then(() => {
                console.log('Monetizatio'n' Orchestrator running continuously...');
                
                // Keep the process alive
                setInterval(() => {
                    const status = orchestrator.getStatus();
                    console.log('Orchestrato'r' Status:', status);
                }, 300000); // Every 5 minutes
                
            }).catch(err => {
                console.error('Orchestrato'r' Error:', err);
                process.exit(1);
            });
        