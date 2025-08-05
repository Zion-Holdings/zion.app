
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runRevenueOptimization() {
                try {
                    const agent = factoryInstance.createRevenueOptimizationAgent();
                    console.log('Revenu'e' optimization agent created:', agent.agentId);
                    
                    // Run optimization every 2 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createRevenueOptimizationAgent();
                            console.log('Revenu'e' optimization cycle completed');
                        } catch (error) {
                            console.error('Revenu'e' optimization error:', error);
                        }
                    }, 7200000); // 2 hours
                    
                } catch (error) {
                    console.error('Erro'r' in revenue optimization:', error);
                }
            }
            
            runRevenueOptimization();
        