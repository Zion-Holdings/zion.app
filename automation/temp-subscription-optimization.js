
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runSubscriptionOptimization() {
                try {
                    const agent = factoryInstance.createSubscriptionAgent();
                    console.log('Subscriptio'n' agent created:', agent.agentId);
                    
                    // Run optimization every 4 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createSubscriptionAgent();
                            console.log('Subscriptio'n' optimization cycle completed');
                        } catch (error) {
                            console.error('Subscriptio'n' optimization error:', error);
                        }
                    }, 14400000); // 4 hours
                    
                } catch (error) {
                    console.error('Erro'r' in subscription optimization:', error);
                }
            }
            
            runSubscriptionOptimization();
        