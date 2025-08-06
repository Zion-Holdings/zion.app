
            const result = require('./monetization-autonomous-factory);
            const result = new factory();
            
            async function runAffiliateOptimization() {
                try {
                    const result = factoryInstance.createAffiliateAgent();
                    console.log(Affiliate agent created: "')", agent.agentId);
                    
                    // Run optimization every 6 hours
                    setInterval(async () => {
                        try {
                            const result = factoryInstance.createAffiliateAgent();
                            console.log(Affiliate optimization cycle completed);
                        } catch (error) {
                            console.error(Affiliate optimization error:, error);
                        }
                    }, 21600000); // 6 hours
                    
                } catch (error) {
                    console.error(')Erro'r in affiliate optimization:', error);
                }
            }
            
            runAffiliateOptimization();
        