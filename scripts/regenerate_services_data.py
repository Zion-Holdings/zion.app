#!/usr/bin/env python3
"""
Script to regenerate servicesData.ts with all services from wave files
"""

import os
import sys
from pathlib import Path
from typing import List, Dict, Any
import json

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent.parent))

def load_services_from_wave(wave_file: str) -> List[Dict[str, Any]]:
    """Load services from a wave TypeScript file."""
    services = []
    
    try:
        with open(wave_file, 'r') as f:
            content = f.read()
        
        # Parse TypeScript file to extract service objects
        # This is a simplified parser - in production, use a proper TypeScript parser
        import re
        
        # Find all exported const declarations
        pattern = r'export const (\w+): Service\[\] = (\[[\s\S]*?\]);'
        matches = re.findall(pattern, content)
        
        for var_name, array_content in matches:
            if var_name.endswith('Services'):
                # Parse the array content
                services.extend(parse_service_array(array_content))
    
    except Exception as e:
        print(f"Error loading {wave_file}: {e}")
    
    return services

def parse_service_array(array_str: str) -> List[Dict[str, Any]]:
    """Parse a TypeScript array of service objects."""
    services = []
    
    # This is a simplified parser
    # In production, use a proper TypeScript parser
    try:
        # Remove newlines and extra spaces for easier parsing
        cleaned = array_str.replace('\n', ' ').replace('  ', ' ')
        
        # Find individual service objects
        # This regex finds objects that start with { and end with }
        # It's a simplified approach
        obj_pattern = r'\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}'
        objects = re.findall(obj_pattern, cleaned)
        
        for obj_str in objects:
            # Try to parse as JSON (after converting TypeScript to JSON)
            try:
                # Remove trailing commas
                obj_str = re.sub(r',\s*([}\]])', r'\1', obj_str)
                
                # Convert TypeScript syntax to JSON
                # This is a simplified conversion
                obj_str = obj_str.replace('true', 'true')
                obj_str = obj_str.replace('false', 'false')
                obj_str = obj_str.replace('null', 'null')
                
                # Try to parse
                obj = json.loads(obj_str)
                if isinstance(obj, dict) and 'id' in obj:
                    services.append(obj)
            except json.JSONDecodeError:
                continue
    
    except Exception as e:
        print(f"Error parsing array: {e}")
    
    return services

def regenerate_services_data():
    """Regenerate the servicesData.ts file from all wave files."""
    print("Regenerating servicesData.ts...")
    
    # Find all wave files
    wave_dir = Path(__file__).parent.parent / 'app' / 'data'
    wave_files = sorted(wave_dir.glob('wave*.ts'))
    
    all_services = []
    
    for wave_file in wave_files:
        print(f"Processing {wave_file.name}...")
        services = load_services_from_wave(str(wave_file))
        all_services.extend(services)
        print(f"  Found {len(services)} services")
    
    print(f"\nTotal services: {len(all_services)}")
    
    # Generate TypeScript file
    output = """// Auto-generated services data
export interface Service {
  id: string;
  name?: string;
  title?: string;
  category: string;
  description: string;
  price?: string;
  icon?: string;
  features?: string[];
  contactInfo?: { website?: string; phone?: string; email?: string; address?: string };
  link?: string;
  [key: string]: unknown;
}

export const allServices: Service[] = [
"""
    
    for i, service in enumerate(all_services):
        # Convert service dict to TypeScript object
        service_str = dict_to_typescript(service)
        if i < len(all_services) - 1:
            output += f"  {service_str},\n"
        else:
            output += f"  {service_str}\n"
    
    output += "];\n"
    
    # Write to file
    output_path = Path(__file__).parent.parent / 'app' / 'data' / 'servicesData.ts'
    with open(output_path, 'w') as f:
        f.write(output)
    
    print(f"Written to {output_path}")

def dict_to_typescript(obj: Dict[str, Any], indent: int = 2) -> str:
    """Convert a dictionary to TypeScript object string."""
    spaces = '  ' * indent
    result = ['{']
    
    items = list(obj.items())
    for i, (key, value) in enumerate(items):
        if isinstance(value, str):
            result.append(f'{spaces}"{key}": "{value}"')
        elif isinstance(value, bool):
            result.append(f'{spaces}"{key}": {str(value).lower()}')
        elif isinstance(value, (int, float)):
            result.append(f'{spaces}"{key}": {value}')
        elif isinstance(value, list):
            if value and isinstance(value[0], str):
                items_str = ', '.join(f'"{item}"' for item in value)
                result.append(f'{spaces}"{key}": [{items_str}]')
            elif value and isinstance(value[0], dict):
                # Nested objects
                nested = ', '.join(dict_to_typescript(item, indent + 1) for item in value)
                result.append(f'{spaces}"{key}": [{nested}]')
            else:
                result.append(f'{spaces}"{key}": []')
        elif isinstance(value, dict):
            result.append(f'{spaces}"{key}": {dict_to_typescript(value, indent + 1)}')
        else:
            result.append(f'{spaces}"{key}": "{value}"')
        
        if i < len(items) - 1:
            result[-1] += ','
    
    result.append(f'{spaces}}}')
    return '\n'.join(result)

if __name__ == '__main__':
    import re
    regenerate_services_data()