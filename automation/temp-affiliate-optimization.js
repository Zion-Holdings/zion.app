
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runAffiliateOptimization() {
                try {
                    const agent = factoryInstance.createAffiliateAgent();
                    console.log('Affiliate agent created:', agent.agentId);
                    
                    // Run optimization every 6 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createAffiliateAgent();
                            console.log('Affiliate optimization cycle completed');
                        } catch (error) {
                            console.error('Affiliate optimization error:', error);
                        }
                    }, 21600000); // 6 hours
                    
                } catch (error) {
                    console.error('Error in affiliate optimization:', error);
                }
            }
            
            runAffiliateOptimization();
        