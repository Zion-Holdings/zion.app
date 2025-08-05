
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runEcommerceOptimization() {
                try {
                    const agent = factoryInstance.createEcommerceAgent();
                    console.log('Ecommerce agent created:', agent.agentId);
                    
                    // Run optimization every 2 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createEcommerceAgent();
                            console.log('Ecommerce optimization cycle completed');
                        } catch (error) {
                            console.error('Ecommerce optimization error:', error);
                        }
                    }, 7200000); // 2 hours
                    
                } catch (error) {
                    console.error('Error in ecommerce optimization:', error);
                }
            }
            
            runEcommerceOptimization();
        