
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runAdRevenueOptimization() {
                try {
                    const agent = factoryInstance.createAdRevenueAgent();
                    console.log('Ad revenue agent created:', agent.agentId);
                    
                    // Run optimization every 3 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createAdRevenueAgent();
                            console.log('Ad revenue optimization cycle completed');
                        } catch (error) {
                            console.error('Ad revenue optimization error:', error);
                        }
                    }, 10800000); // 3 hours
                    
                } catch (error) {
                    console.error('Error in ad revenue optimization:', error);
                }
            }
            
            runAdRevenueOptimization();
        