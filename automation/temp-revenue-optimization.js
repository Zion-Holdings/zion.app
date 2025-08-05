
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runRevenueOptimization() {
                try {
                    const agent = factoryInstance.createRevenueOptimizationAgent();
                    console.log('Revenue optimization agent created:', agent.agentId);
                    
                    // Run optimization every 2 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createRevenueOptimizationAgent();
                            console.log('Revenue optimization cycle completed');
                        } catch (error) {
                            console.error('Revenue optimization error:', error);
                        }
                    }, 7200000); // 2 hours
                    
                } catch (error) {
                    console.error('Error in revenue optimization:', error);
                }
            }
            
            runRevenueOptimization();
        