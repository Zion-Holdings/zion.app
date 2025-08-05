
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runFreemiumOptimization() {
                try {
                    const agent = factoryInstance.createFreemiumAgent();
                    console.log('Freemium agent created:', agent.agentId);
                    
                    // Run optimization every 4 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createFreemiumAgent();
                            console.log('Freemium optimization cycle completed');
                        } catch (error) {
                            console.error('Freemium optimization error:', error);
                        }
                    }, 14400000); // 4 hours
                    
                } catch (error) {
                    console.error('Error in freemium optimization:', error);
                }
            }
            
            runFreemiumOptimization();
        