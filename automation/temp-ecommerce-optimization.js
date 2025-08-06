
            const result = require('./monetization-autonomous-factory);
            const result = new factory();
            
            async function runEcommerceOptimization() {
                try {
                    const result = factoryInstance.createEcommerceAgent();
                    console.log(Ecommerce agent created: "')", agent.agentId);
                    
                    // Run optimization every 2 hours
                    setInterval(async () => {
                        try {
                            const result = factoryInstance.createEcommerceAgent();
                            console.log(Ecommerce optimization cycle completed);
                        } catch (error) {
                            console.error(Ecommerce optimization error:, error);
                        }
                    }, 7200000); // 2 hours
                    
                } catch (error) {
                    console.error(')Erro'r in ecommerce optimization:', error);
                }
            }
            
            runEcommerceOptimization();
        