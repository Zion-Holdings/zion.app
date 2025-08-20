export interface JsonFormatResult {
  isValid: boolean;
  formatted: string;
  minified: string;
  errors: string[];
  warnings: string[];
  statistics: JsonStatistics;
  suggestions: string[];
}

export interface JsonStatistics {
  totalKeys: number;
  maxDepth: number;
  totalValues: number;
  stringValues: number;
  numberValues: number;
  booleanValues: number;
  nullValues: number;
  arrayValues: number;
  objectValues: number;
  estimatedSize: number; // bytes
}

export interface JsonValidationRule {
  name: string;
  description: string;
  severity: 'error' | 'warning' | 'info';
  check: (data: any, path: string) => boolean;
  message: string;
}

export interface JsonTransformResult {
  success: boolean;
  transformed: any;
  errors: string[];
  warnings: string[];
}

class JsonFormatterService {
  private readonly validationRules: JsonValidationRule[] = [
    {
      name: 'maxDepth',
      description: 'Check for excessive nesting',
      severity: 'warning',
      check: (data: any, path: string) => this.getDepth(data) <= 10,
      message: 'JSON structure is deeply nested (depth > 10)'
    },
    {
      name: 'maxKeys',
      description: 'Check for excessive number of keys',
      severity: 'warning',
      check: (data: any, path: string) => this.countKeys(data) <= 1000,
      message: 'JSON has many keys (> 1000)'
    },
    {
      name: 'maxStringLength',
      description: 'Check for extremely long strings',
      severity: 'warning',
      check: (data: any, path: string) => this.checkStringLengths(data, 10000),
      message: 'Contains very long strings (> 10,000 characters)'
    },
    {
      name: 'circularReference',
      description: 'Check for circular references',
      severity: 'error',
      check: (data: any, path: string) => !this.hasCircularReference(data),
      message: 'Circular reference detected'
    }
  ];

  async formatJson(input: string, options?: {
    indentSize?: number;
    sortKeys?: boolean;
    removeComments?: boolean;
    validate?: boolean;
  }): Promise<JsonFormatResult> {
    const result: JsonFormatResult = {
      isValid: false,
      formatted: '',
      minified: '',
      errors: [],
      warnings: [],
      statistics: {
        totalKeys: 0,
        maxDepth: 0,
        totalValues: 0,
        stringValues: 0,
        numberValues: 0,
        booleanValues: 0,
        nullValues: 0,
        arrayValues: 0,
        objectValues: 0,
        estimatedSize: 0
      },
      suggestions: []
    };

    try {
      // Clean input
      let cleanedInput = input.trim();
      if (options?.removeComments) {
        cleanedInput = this.removeComments(cleanedInput);
      }

      // Parse JSON
      const parsed = JSON.parse(cleanedInput);
      result.isValid = true;

      // Generate formatted and minified versions
      const indentSize = options?.indentSize || 2;
      const sortKeys = options?.sortKeys || false;
      
      if (sortKeys) {
        result.formatted = JSON.stringify(parsed, null, indentSize);
      } else {
        result.formatted = JSON.stringify(parsed, null, indentSize);
      }
      
      result.minified = JSON.stringify(parsed);

      // Calculate statistics
      result.statistics = this.calculateStatistics(parsed);

      // Validate if requested
      if (options?.validate) {
        const validation = await this.validateJson(parsed);
        result.errors.push(...validation.errors);
        result.warnings.push(...validation.warnings);
      }

      // Generate suggestions
      result.suggestions = this.generateSuggestions(result.statistics, result.errors, result.warnings);

    } catch (error) {
      result.errors.push(`JSON parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      result.suggestions.push('Check JSON syntax and ensure all brackets, braces, and quotes are properly closed');
    }

    return result;
  }

  async validateJson(data: any): Promise<{ errors: string[]; warnings: string[] }> {
    const errors: string[] = [];
    const warnings: string[] = [];

    for (const rule of this.validationRules) {
      if (!rule.check(data, '')) {
        if (rule.severity === 'error') {
          errors.push(rule.message);
        } else {
          warnings.push(rule.message);
        }
      }
    }

    return { errors, warnings };
  }

  async transformJson(data: any, transformations: {
    flatten?: boolean;
    sortKeys?: boolean;
    removeNulls?: boolean;
    removeEmptyArrays?: boolean;
    removeEmptyObjects?: boolean;
    convertDates?: boolean;
    normalizeNumbers?: boolean;
  }): Promise<JsonTransformResult> {
    const result: JsonTransformResult = {
      success: false,
      transformed: null,
      errors: [],
      warnings: []
    };

    try {
      let transformed = JSON.parse(JSON.stringify(data)); // Deep clone

      if (transformations.flatten) {
        transformed = this.flattenObject(transformed);
      }

      if (transformations.sortKeys) {
        transformed = this.sortObjectKeys(transformed);
      }

      if (transformations.removeNulls) {
        transformed = this.removeNullValues(transformed);
      }

      if (transformations.removeEmptyArrays) {
        transformed = this.removeEmptyArrays(transformed);
      }

      if (transformations.removeEmptyObjects) {
        transformed = this.removeEmptyObjects(transformed);
      }

      if (transformations.convertDates) {
        transformed = this.convertDateStrings(transformed);
      }

      if (transformations.normalizeNumbers) {
        transformed = this.normalizeNumbers(transformed);
      }

      result.success = true;
      result.transformed = transformed;

    } catch (error) {
      result.errors.push(`Transformation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }

    return result;
  }

  async compareJson(json1: string, json2: string): Promise<{
    areEqual: boolean;
    differences: string[];
    similarity: number;
  }> {
    try {
      const obj1 = JSON.parse(json1);
      const obj2 = JSON.parse(json2);

      const differences: string[] = [];
      const similarity = this.calculateSimilarity(obj1, obj2);

      if (similarity < 1.0) {
        this.findDifferences(obj1, obj2, '', differences);
      }

      return {
        areEqual: similarity === 1.0,
        differences,
        similarity
      };

    } catch (error) {
      return {
        areEqual: false,
        differences: [`Error parsing JSON: ${error instanceof Error ? error.message : 'Unknown error'}`],
        similarity: 0
      };
    }
  }

  async generateJsonSchema(json: string): Promise<string> {
    try {
      const data = JSON.parse(json);
      const schema = this.inferSchema(data);
      return JSON.stringify(schema, null, 2);
    } catch (error) {
      throw new Error(`Error generating schema: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async beautifyJson(input: string, options?: {
    indentSize?: number;
    maxLineLength?: number;
    wrapArrays?: boolean;
    wrapObjects?: boolean;
  }): Promise<string> {
    try {
      const data = JSON.parse(input);
      const indentSize = options?.indentSize || 2;
      const maxLineLength = options?.maxLineLength || 80;
      
      return this.beautify(data, indentSize, maxLineLength, options?.wrapArrays || false, options?.wrapObjects || false);
    } catch (error) {
      throw new Error(`Error beautifying JSON: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private removeComments(input: string): string {
    // Remove single-line comments (// ...)
    input = input.replace(/\/\/.*$/gm, '');
    // Remove multi-line comments (/* ... */)
    input = input.replace(/\/\*[\s\S]*?\*\//g, '');
    return input;
  }

  private calculateStatistics(data: any): JsonStatistics {
    const stats: JsonStatistics = {
      totalKeys: 0,
      maxDepth: 0,
      totalValues: 0,
      stringValues: 0,
      numberValues: 0,
      booleanValues: 0,
      nullValues: 0,
      arrayValues: 0,
      objectValues: 0,
      estimatedSize: 0
    };

    this.analyzeData(data, stats, 0);
    stats.estimatedSize = JSON.stringify(data).length;

    return stats;
  }

  private analyzeData(data: any, stats: JsonStatistics, depth: number): void {
    stats.maxDepth = Math.max(stats.maxDepth, depth);
    stats.totalValues++;

    if (data === null) {
      stats.nullValues++;
    } else if (Array.isArray(data)) {
      stats.arrayValues++;
      data.forEach(item => this.analyzeData(item, stats, depth + 1));
    } else if (typeof data === 'object') {
      stats.objectValues++;
      stats.totalKeys += Object.keys(data).length;
      Object.values(data).forEach(value => this.analyzeData(value, stats, depth + 1));
    } else if (typeof data === 'string') {
      stats.stringValues++;
    } else if (typeof data === 'number') {
      stats.numberValues++;
    } else if (typeof data === 'boolean') {
      stats.booleanValues++;
    }
  }

  private getDepth(data: any, currentDepth: number = 0): number {
    if (data === null || typeof data !== 'object') {
      return currentDepth;
    }

    if (Array.isArray(data)) {
      return Math.max(currentDepth, ...data.map(item => this.getDepth(item, currentDepth + 1)));
    }

    const depths = Object.values(data).map(value => this.getDepth(value, currentDepth + 1));
    return Math.max(currentDepth, ...depths);
  }

  private countKeys(data: any): number {
    if (data === null || typeof data !== 'object') {
      return 0;
    }

    if (Array.isArray(data)) {
      return data.reduce((count: number, item: any) => count + this.countKeys(item), 0);
    }

    const values = Object.values(data) as any[];
    return Object.keys(data).length + values.reduce((count: number, value: any) => count + this.countKeys(value), 0);
  }

  private checkStringLengths(data: any, maxLength: number): boolean {
    if (typeof data === 'string') {
      return data.length <= maxLength;
    }

    if (Array.isArray(data)) {
      return data.every(item => this.checkStringLengths(item, maxLength));
    }

    if (data !== null && typeof data === 'object') {
      return Object.values(data).every(value => this.checkStringLengths(value, maxLength));
    }

    return true;
  }

  private hasCircularReference(data: any, seen: WeakSet<any> = new WeakSet()): boolean {
    if (data === null || typeof data !== 'object') {
      return false;
    }

    if (seen.has(data)) {
      return true;
    }

    seen.add(data);

    if (Array.isArray(data)) {
      return data.some(item => this.hasCircularReference(item, seen));
    }

    return Object.values(data).some(value => this.hasCircularReference(value, seen));
  }

  private generateSuggestions(stats: JsonStatistics, errors: string[], warnings: string[]): string[] {
    const suggestions: string[] = [];

    if (stats.maxDepth > 8) {
      suggestions.push('Consider flattening deeply nested structures for better readability');
    }

    if (stats.totalKeys > 500) {
      suggestions.push('Large number of keys detected. Consider splitting into smaller objects');
    }

    if (stats.estimatedSize > 1024 * 1024) {
      suggestions.push('Large JSON detected (>1MB). Consider compression or chunking');
    }

    if (errors.length > 0) {
      suggestions.push('Fix validation errors before using this JSON in production');
    }

    if (warnings.length > 0) {
      suggestions.push('Review warnings to improve JSON quality and performance');
    }

    return suggestions;
  }

  private flattenObject(obj: any, prefix: string = '', result: any = {}): any {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (obj[key] !== null && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          this.flattenObject(obj[key], newKey, result);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
    
    return result;
  }

  private sortObjectKeys(obj: any): any {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.sortObjectKeys(item));
    }

    const sorted: any = {};
    Object.keys(obj).sort().forEach(key => {
      sorted[key] = this.sortObjectKeys(obj[key]);
    });

    return sorted;
  }

  private removeNullValues(data: any): any {
    if (data === null) {
      return undefined;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.removeNullValues(item)).filter(item => item !== undefined);
    }

    if (data !== null && typeof data === 'object') {
      const cleaned: any = {};
      for (const [key, value] of Object.entries(data)) {
        const cleanedValue = this.removeNullValues(value);
        if (cleanedValue !== undefined) {
          cleaned[key] = cleanedValue;
        }
      }
      return cleaned;
    }

    return data;
  }

  private removeEmptyArrays(data: any): any {
    if (Array.isArray(data)) {
      const filtered = data.map(item => this.removeEmptyArrays(item)).filter(item => 
        item !== null && item !== undefined && 
        !(Array.isArray(item) && item.length === 0) &&
        !(typeof item === 'object' && Object.keys(item).length === 0)
      );
      return filtered.length > 0 ? filtered : undefined;
    }

    if (data !== null && typeof data === 'object') {
      const cleaned: any = {};
      for (const [key, value] of Object.entries(data)) {
        const cleanedValue = this.removeEmptyArrays(value);
        if (cleanedValue !== undefined) {
          cleaned[key] = cleanedValue;
        }
      }
      return Object.keys(cleaned).length > 0 ? cleaned : undefined;
    }

    return data;
  }

  private removeEmptyObjects(data: any): any {
    if (data !== null && typeof data === 'object' && !Array.isArray(data)) {
      const cleaned: any = {};
      for (const [key, value] of Object.entries(data)) {
        const cleanedValue = this.removeEmptyObjects(value);
        if (cleanedValue !== null && cleanedValue !== undefined) {
          cleaned[key] = cleanedValue;
        }
      }
      return Object.keys(cleaned).length > 0 ? cleaned : undefined;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.removeEmptyObjects(item)).filter(item => 
        item !== null && item !== undefined
      );
    }

    return data;
  }

  private convertDateStrings(data: any): any {
    if (typeof data === 'string') {
      const date = new Date(data);
      if (!isNaN(date.getTime()) && data.match(/^\d{4}-\d{2}-\d{2}/)) {
        return date.toISOString();
      }
      return data;
    }

    if (Array.isArray(data)) {
      return data.map(item => this.convertDateStrings(item));
    }

    if (data !== null && typeof data === 'object') {
      const converted: any = {};
      for (const [key, value] of Object.entries(data)) {
        converted[key] = this.convertDateStrings(value);
      }
      return converted;
    }

    return data;
  }

  private normalizeNumbers(data: any): any {
    if (typeof data === 'number') {
      return Number.isInteger(data) ? data : Number(data.toFixed(6));
    }

    if (Array.isArray(data)) {
      return data.map(item => this.normalizeNumbers(item));
    }

    if (data !== null && typeof data === 'object') {
      const normalized: any = {};
      for (const [key, value] of Object.entries(data)) {
        normalized[key] = this.normalizeNumbers(value);
      }
      return normalized;
    }

    return data;
  }

  private calculateSimilarity(obj1: any, obj2: any): number {
    if (obj1 === obj2) return 1.0;
    if (obj1 === null || obj2 === null) return 0.0;
    if (typeof obj1 !== typeof obj2) return 0.0;

    if (typeof obj1 === 'object') {
      if (Array.isArray(obj1) !== Array.isArray(obj2)) return 0.0;
      
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      
      if (keys1.length !== keys2.length) return 0.0;
      
      let totalSimilarity = 0;
      for (const key of keys1) {
        if (keys2.includes(key)) {
          totalSimilarity += this.calculateSimilarity(obj1[key], obj2[key]);
        }
      }
      
      return totalSimilarity / keys1.length;
    }

    return obj1 === obj2 ? 1.0 : 0.0;
  }

  private findDifferences(obj1: any, obj2: any, path: string, differences: string[]): void {
    if (obj1 === obj2) return;
    if (obj1 === null || obj2 === null) {
      differences.push(`${path}: ${obj1} vs ${obj2}`);
      return;
    }
    if (typeof obj1 !== typeof obj2) {
      differences.push(`${path}: type mismatch (${typeof obj1} vs ${typeof obj2})`);
      return;
    }

    if (typeof obj1 === 'object') {
      if (Array.isArray(obj1) !== Array.isArray(obj2)) {
        differences.push(`${path}: array vs object mismatch`);
        return;
      }

      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      
      for (const key of keys1) {
        const newPath = path ? `${path}.${key}` : key;
        if (keys2.includes(key)) {
          this.findDifferences(obj1[key], obj2[key], newPath, differences);
        } else {
          differences.push(`${newPath}: missing in second object`);
        }
      }

      for (const key of keys2) {
        if (!keys1.includes(key)) {
          const newPath = path ? `${path}.${key}` : key;
          differences.push(`${newPath}: missing in first object`);
        }
      }
    } else {
      differences.push(`${path}: ${obj1} vs ${obj2}`);
    }
  }

  private inferSchema(data: any, path: string = ''): any {
    if (data === null) {
      return { type: 'null' };
    }

    if (Array.isArray(data)) {
      if (data.length === 0) {
        return { type: 'array', items: {} };
      }
      
      const itemSchemas = data.map((item, index) => 
        this.inferSchema(item, `${path}[${index}]`)
      );
      
      const uniqueSchemas = this.mergeSchemas(itemSchemas);
      return { type: 'array', items: uniqueSchemas };
    }

    if (typeof data === 'object') {
      const properties: any = {};
      const required: string[] = [];
      
      for (const [key, value] of Object.entries(data)) {
        properties[key] = this.inferSchema(value, `${path}.${key}`);
        if (value !== null && value !== undefined) {
          required.push(key);
        }
      }
      
      return {
        type: 'object',
        properties,
        required: required.length > 0 ? required : undefined
      };
    }

    if (typeof data === 'string') {
      if (data.match(/^\d{4}-\d{2}-\d{2}/)) {
        return { type: 'string', format: 'date' };
      }
      if (data.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)) {
        return { type: 'string', format: 'date-time' };
      }
      if (data.match(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i)) {
        return { type: 'string', format: 'uuid' };
      }
      return { type: 'string' };
    }

    if (typeof data === 'number') {
      return Number.isInteger(data) ? { type: 'integer' } : { type: 'number' };
    }

    if (typeof data === 'boolean') {
      return { type: 'boolean' };
    }

    return { type: 'string' };
  }

  private mergeSchemas(schemas: any[]): any {
    if (schemas.length === 0) return {};
    if (schemas.length === 1) return schemas[0];

    const firstSchema = schemas[0];
    const allSame = schemas.every(schema => 
      JSON.stringify(schema) === JSON.stringify(firstSchema)
    );

    if (allSame) return firstSchema;

    // Try to merge as union types
    const types = [...new Set(schemas.map(s => s.type))];
    if (types.length === 1) {
      return { type: types[0] };
    }

    return { oneOf: schemas };
  }

  private beautify(data: any, indentSize: number, maxLineLength: number, wrapArrays: boolean, wrapObjects: boolean): string {
    const indent = ' '.repeat(indentSize);
    
    if (Array.isArray(data)) {
      if (data.length === 0) return '[]';
      
      const items = data.map(item => this.beautify(item, indentSize, maxLineLength, wrapArrays, wrapObjects));
      const totalLength = items.join(', ').length;
      
      if (wrapArrays || totalLength > maxLineLength) {
        return '[\n' + items.map(item => indent + item).join(',\n') + '\n]';
      } else {
        return '[' + items.join(', ') + ']';
      }
    }
    
    if (data !== null && typeof data === 'object') {
      const keys = Object.keys(data);
      if (keys.length === 0) return '{}';
      
      const items = keys.map(key => {
        const value = this.beautify(data[key], indentSize, maxLineLength, wrapArrays, wrapObjects);
        return `"${key}": ${value}`;
      });
      
      const totalLength = items.join(', ').length;
      
      if (wrapObjects || totalLength > maxLineLength) {
        return '{\n' + items.map(item => indent + item).join(',\n') + '\n}';
      } else {
        return '{' + items.join(', ') + '}';
      }
    }
    
    if (typeof data === 'string') {
      return `"${data.replace(/"/g, '\\"')}"`;
    }
    
    return String(data);
  }
}

export default new JsonFormatterService();