#!/bin/bash
cd /data/data/com.termux/files/home/zion-support.github.io/app
rm -rf industries/education-&-research industries/energy-&-utilities industries/financial-services-&-fintech industries/healthcare-&-life-sciences industries/legal-&-compliance industries/logistics-&-supply-chain industries/manufacturing-&-industrial industries/media-&-entertainment industries/retail-&-e-commerce industries/technology-&-saas
find industries -maxdepth 2 -type f | sort
