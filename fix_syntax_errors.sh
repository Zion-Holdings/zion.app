#!/bin/bash

echo "Fixing syntax errors in the codebase..."

# Fix common import statement issues
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/";next"/"next"/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/';@supabase\/ssr'/'@supabase\/ssr'/g"
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/';@supabase\/supabase-js'/'@supabase\/supabase-js'/g"
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/';next\/head'/'next\/head'/g"
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/';react'/'react'/g"
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/';next\/link'/'next\/link'/g"

# Fix malformed quotes in strings
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/";react;}/"react"/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/";react}/"react"/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/";react"/"react"/g'

# Fix malformed import statements
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/from ";next"/from "next"/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/from ";react"/from "react"/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/from ";react;}/from "react"/g'

# Fix malformed quotes in interface definitions
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/";string"/"string"/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/";number"/"number"/g'

# Fix malformed quotes in type definitions
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'wheat\" | corn | soybeans | 'rice' | cotton | 'vegetable's | fruits/'wheat' | 'corn' | 'soybeans' | 'rice' | 'cotton' | 'vegetables' | 'fruits'/g"

# Fix malformed quotes in status values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'growing | harvesting | dormant' | planning/'growing' | 'harvesting' | 'dormant' | 'planning'/g"

# Fix malformed quotes in growth stage values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'seedling\" | vegetativ'e | flower'ing | 'fruiting' | harvest/'seedling' | 'vegetative' | 'flowering' | 'fruiting' | 'harvest'/g"

# Fix malformed quotes in disease risk values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'low | medium' | hi'gh | critica'l/'low' | 'medium' | 'high' | 'critical'/g"

# Fix malformed quotes in soil type values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'sandy\" | clay | loamy' | silty/'sandy' | 'clay' | 'loamy' | 'silty'/g"

# Fix malformed quotes in irrigation type values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'drip\" | sprinkler | flood | smart/'drip' | 'sprinkler' | 'flood' | 'smart'/g"

# Fix malformed quotes in irrigation status values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'active | maintenance | offli'ne/'active' | 'maintenance' | 'offline'/g"

# Fix malformed quotes in equipment type values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/automated-planting | harvesting-robot | drone-monitoring | weather-station/'automated-planting' | 'harvesting-robot' | 'drone-monitoring' | 'weather-station'/g"

# Fix malformed quotes in equipment status values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'active | 'maintenance | offlin'e' | planning/'active' | 'maintenance' | 'offline' | 'planning'/g"

# Fix malformed quotes in impact values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/'positive\" | negative | 'neutral/'positive' | 'negative' | 'neutral'/g"

# Fix malformed quotes in view values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/overview | crops | so'il' | irrigatio'n | farmi'ng | analyti'cs'/overview' | 'crops' | 'soil' | 'irrigation' | 'farming' | 'analytics'/g"

# Fix malformed quotes in type values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/all'/'all'/g"

# Fix malformed quotes in wheat values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/wheat,/'wheat',/g"

# Fix malformed quotes in growing values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/growing,/'growing',/g"

# Fix malformed quotes in Kansas values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/Kansas,/'Kansas',/g"

# Fix malformed quotes in area values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/500,/'500',/g"

# Fix malformed quotes in healthScore values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/8.5,/'8.5',/g"

# Fix malformed quotes in yieldPrediction values
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' "s/85,/'85',/g"

# Fix malformed quotes in useState calls
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/useState<CropMonitoring\[\]\(\[\]<\/div>;/useState<CropMonitoring[]>([]);/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/useState<SoilAnalysis\[\]\(\[\]<\/div>;/useState<SoilAnalysis[]>([]);/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/useState<IrrigationSystem\[\]\(\[\]<\/div>;/useState<IrrigationSystem[]>([]);/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/useState<SmartFarming\[\]\(\[\]<\/div>;/useState<SmartFarming[]>([]);/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/useState<AgriculturalAnalytics \| null\(null<\/div>;/useState<AgriculturalAnalytics | null>(null);/g'

# Fix malformed quotes in mockPredictiveModels
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/PredictiveModel\[\] = \[/PredictiveModel[] = [/g'

# Fix malformed quotes in object properties
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/id: 1,;/id: 1,/g'
find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules | xargs sed -i '' 's/name: Wheat Field A,;/name: "Wheat Field A",/g'

echo "Syntax error fixes completed!" 