
            const factory = require('./monetization-autonomous-factory');
            const factoryInstance = new factory();
            
            async function runAffiliateOptimization() {
                try {
                    const agent = factoryInstance.createAffiliateAgent();
                    console.log('Affiliat'e' agent created:', agent.agentId);
                    
                    // Run optimization every 6 hours
                    setInterval(async () => {
                        try {
                            const newAgent = factoryInstance.createAffiliateAgent();
                            console.log('Affiliat'e' optimization cycle completed');
                        } catch (error) {
                            console.error('Affiliat'e' optimization error:', error);
                        }
                    }, 21600000); // 6 hours
                    
                } catch (error) {
                    console.error('Erro'r' in affiliate optimization:', error);
                }
            }
            
            runAffiliateOptimization();
        