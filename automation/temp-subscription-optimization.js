
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runSubscriptionOptimization() {
                try {
                    const agent = factoryInstance.createSubscriptionAgent();
                    console.log('Subscription agent created:', agent.agentId);
                    
                    // Run optimization every 4 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createSubscriptionAgent();
                            console.log('Subscription optimization cycle completed');
                        } catch (error) {
                            console.error('Subscription optimization error:', error);
                        }
                    }, 14400000); // 4 hours
                    
                } catch (error) {
                    console.error('Error in subscription optimization:', error);
                }
            }
            
            runSubscriptionOptimization();
        