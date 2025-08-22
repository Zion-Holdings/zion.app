export interface DesignComponent {
  id: string;
  name: string;
  category: 'button' | 'input' | 'card' | 'navigation' | 'form' | 'layout' | 'typography' | 'icon';
  variants: ComponentVariant[];
  props: ComponentProp[];
  code: {
    react: string;
    vue: string;
    html: string;
    css: string;
  };
  usage: number;
  lastUpdated: Date;
}

export interface ComponentVariant {
  id: string;
  name: string;
  description: string;
  preview: string;
  props: Record<string, any>;
}

export interface ComponentProp {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'object' | 'array';
  required: boolean;
  defaultValue?: any;
  description: string;
}

export interface DesignToken {
  id: string;
  name: string;
  category: 'color' | 'typography' | 'spacing' | 'border' | 'shadow' | 'animation';
  value: string;
  description: string;
  usage: ComponentUsage[];
}

export interface ComponentUsage {
  componentId: string;
  componentName: string;
  usageCount: number;
}

export interface DesignSystem {
  id: string;
  name: string;
  description: string;
  version: string;
  components: DesignComponent[];
  tokens: DesignToken[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
    success: string;
    warning: string;
    error: string;
  };
  createdAt: Date;
  lastUpdated: Date;
}

class DesignSystemBuilderService {
  private designSystems: DesignSystem[] = [];
  private currentSystem: DesignSystem | null = null;

  constructor() {
    this.initializeDefaultSystem();
  }

  private initializeDefaultSystem() {
    const defaultSystem: DesignSystem = {
      id: 'default-system',
      name: 'Zion Design System',
      description: 'A comprehensive design system for modern web applications',
      version: '1.0.0',
      components: this.getDefaultComponents(),
      tokens: this.getDefaultTokens(),
      theme: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#10B981',
        neutral: '#6B7280',
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626'
      },
      createdAt: new Date(),
      lastUpdated: new Date()
    };

    this.designSystems.push(defaultSystem);
    this.currentSystem = defaultSystem;
  }

  private getDefaultComponents(): DesignComponent[] {
    return [
      {
        id: 'button-primary',
        name: 'Primary Button',
        category: 'button',
        variants: [
          {
            id: 'default',
            name: 'Default',
            description: 'Standard primary button',
            preview: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded',
            props: { size: 'medium', disabled: false }
          },
          {
            id: 'small',
            name: 'Small',
            description: 'Compact button for tight spaces',
            preview: 'bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm',
            props: { size: 'small', disabled: false }
          },
          {
            id: 'large',
            name: 'Large',
            description: 'Prominent button for CTAs',
            preview: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg',
            props: { size: 'large', disabled: false }
          }
        ],
        props: [
          { name: 'size', type: 'string', required: false, defaultValue: 'medium', description: 'Button size variant' },
          { name: 'disabled', type: 'boolean', required: false, defaultValue: false, description: 'Whether button is disabled' },
          { name: 'onClick', type: 'object', required: true, description: 'Click handler function' }
        ],
        code: {
          react: `const Button = ({ size = 'medium', disabled = false, onClick, children }) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg rounded-lg'
  };
  
  return (
    <button
      className={\`bg-blue-600 hover:bg-blue-700 text-white rounded \${sizeClasses[size]}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};`,
          vue: `<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: false }
  },
  computed: {
    buttonClasses() {
      const sizeClasses = {
        small: 'px-3 py-1 text-sm',
        medium: 'px-4 py-2',
        large: 'px-6 py-3 text-lg rounded-lg'
      };
      return \`bg-blue-600 hover:bg-blue-700 text-white rounded \${sizeClasses[this.size]}\`;
    }
  }
};
</script>`,
          html: `<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
  Button Text
</button>`,
          css: `.btn-primary {
  background-color: #3B82F6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #2563EB;
}

.btn-primary:disabled {
  background-color: #9CA3AF;
  cursor: not-allowed;
}`
        },
        usage: 0,
        lastUpdated: new Date()
      },
      {
        id: 'card-basic',
        name: 'Basic Card',
        category: 'card',
        variants: [
          {
            id: 'default',
            name: 'Default',
            description: 'Standard card with shadow',
            preview: 'bg-white rounded-lg shadow-md p-6',
            props: { padding: 'medium', shadow: 'medium' }
          },
          {
            id: 'elevated',
            name: 'Elevated',
            description: 'Card with stronger shadow',
            preview: 'bg-white rounded-lg shadow-xl p-6',
            props: { padding: 'medium', shadow: 'large' }
          }
        ],
        props: [
          { name: 'padding', type: 'string', required: false, defaultValue: 'medium', description: 'Card padding size' },
          { name: 'shadow', type: 'string', required: false, defaultValue: 'medium', description: 'Shadow intensity' }
        ],
        code: {
          react: `const Card = ({ padding = 'medium', shadow = 'medium', children }) => {
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const shadowClasses = {
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-xl'
  };
  
  return (
    <div className={\`bg-white rounded-lg \${shadowClasses[shadow]} \${paddingClasses[padding]}\`}>
      {children}
    </div>
  );
};`,
          vue: `<template>
  <div :class="cardClasses">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    padding: { type: String, default: 'medium' },
    shadow: { type: String, default: 'medium' }
  },
  computed: {
    cardClasses() {
      const paddingClasses = {
        small: 'p-4',
        medium: 'p-6',
        large: 'p-8'
      };
      
      const shadowClasses = {
        small: 'shadow-sm',
        medium: 'shadow-md',
        large: 'shadow-xl'
      };
      
      return \`bg-white rounded-lg \${shadowClasses[this.shadow]} \${paddingClasses[this.padding]}\`;
    }
  }
};
</script>`,
          html: `<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here...</p>
</div>`,
          css: `.card {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.card.elevated {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}`
        },
        usage: 0,
        lastUpdated: new Date()
      }
    ];
  }

  private getDefaultTokens(): DesignToken[] {
    return [
      {
        id: 'color-primary',
        name: 'Primary Color',
        category: 'color',
        value: '#3B82F6',
        description: 'Main brand color used for primary actions',
        usage: [
          { componentId: 'button-primary', componentName: 'Primary Button', usageCount: 1 }
        ]
      },
      {
        id: 'color-secondary',
        name: 'Secondary Color',
        category: 'color',
        value: '#8B5CF6',
        description: 'Secondary brand color for supporting elements',
        usage: []
      },
      {
        id: 'spacing-xs',
        name: 'Extra Small Spacing',
        category: 'spacing',
        value: '0.25rem',
        description: '4px spacing for tight layouts',
        usage: []
      },
      {
        id: 'spacing-sm',
        name: 'Small Spacing',
        category: 'spacing',
        value: '0.5rem',
        description: '8px spacing for compact layouts',
        usage: []
      },
      {
        id: 'spacing-md',
        name: 'Medium Spacing',
        category: 'spacing',
        value: '1rem',
        description: '16px standard spacing',
        usage: []
      },
      {
        id: 'spacing-lg',
        name: 'Large Spacing',
        category: 'spacing',
        value: '1.5rem',
        description: '24px spacing for comfortable layouts',
        usage: []
      },
      {
        id: 'spacing-xl',
        name: 'Extra Large Spacing',
        category: 'spacing',
        value: '2rem',
        description: '32px spacing for spacious layouts',
        usage: []
      },
      {
        id: 'typography-heading',
        name: 'Heading Font',
        category: 'typography',
        value: 'Inter, system-ui, sans-serif',
        description: 'Primary font family for headings',
        usage: []
      },
      {
        id: 'typography-body',
        name: 'Body Font',
        category: 'typography',
        value: 'Inter, system-ui, sans-serif',
        description: 'Primary font family for body text',
        usage: []
      },
      {
        id: 'border-radius',
        name: 'Border Radius',
        category: 'border',
        value: '0.25rem',
        description: 'Standard border radius for components',
        usage: [
          { componentId: 'button-primary', componentName: 'Primary Button', usageCount: 1 },
          { componentId: 'card-basic', componentName: 'Basic Card', usageCount: 1 }
        ]
      }
    ];
  }

  async createDesignSystem(name: string, description: string): Promise<DesignSystem> {
    const newSystem: DesignSystem = {
      id: `system_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      description,
      version: '1.0.0',
      components: [],
      tokens: [],
      theme: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#10B981',
        neutral: '#6B7280',
        success: '#059669',
        warning: '#D97706',
        error: '#DC2626'
      },
      createdAt: new Date(),
      lastUpdated: new Date()
    };

    this.designSystems.push(newSystem);
    return newSystem;
  }

  async getDesignSystems(): Promise<DesignSystem[]> {
    return this.designSystems;
  }

  async getDesignSystem(id: string): Promise<DesignSystem | null> {
    return this.designSystems.find(system => system.id === id) || null;
  }

  async setCurrentSystem(id: string): Promise<boolean> {
    const system = await this.getDesignSystem(id);
    if (system) {
      this.currentSystem = system;
      return true;
    }
    return false;
  }

  async getCurrentSystem(): Promise<DesignSystem | null> {
    return this.currentSystem;
  }

  async addComponent(component: Omit<DesignComponent, 'id' | 'usage' | 'lastUpdated'>): Promise<DesignComponent> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const newComponent: DesignComponent = {
      ...component,
      id: `comp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      usage: 0,
      lastUpdated: new Date()
    };

    this.currentSystem.components.push(newComponent);
    this.currentSystem.lastUpdated = new Date();
    return newComponent;
  }

  async updateComponent(id: string, updates: Partial<DesignComponent>): Promise<DesignComponent | null> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const componentIndex = this.currentSystem.components.findIndex(comp => comp.id === id);
    if (componentIndex === -1) {
      return null;
    }

    this.currentSystem.components[componentIndex] = {
      ...this.currentSystem.components[componentIndex],
      ...updates,
      lastUpdated: new Date()
    };

    this.currentSystem.lastUpdated = new Date();
    return this.currentSystem.components[componentIndex];
  }

  async deleteComponent(id: string): Promise<boolean> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const componentIndex = this.currentSystem.components.findIndex(comp => comp.id === id);
    if (componentIndex === -1) {
      return false;
    }

    this.currentSystem.components.splice(componentIndex, 1);
    this.currentSystem.lastUpdated = new Date();
    return true;
  }

  async addToken(token: Omit<DesignToken, 'id' | 'usage'>): Promise<DesignToken> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const newToken: DesignToken = {
      ...token,
      id: `token_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      usage: []
    };

    this.currentSystem.tokens.push(newToken);
    this.currentSystem.lastUpdated = new Date();
    return newToken;
  }

  async updateToken(id: string, updates: Partial<DesignToken>): Promise<DesignToken | null> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const tokenIndex = this.currentSystem.tokens.findIndex(token => token.id === id);
    if (tokenIndex === -1) {
      return null;
    }

    this.currentSystem.tokens[tokenIndex] = {
      ...this.currentSystem.tokens[tokenIndex],
      ...updates
    };

    this.currentSystem.lastUpdated = new Date();
    return this.currentSystem.tokens[tokenIndex];
  }

  async deleteToken(id: string): Promise<boolean> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const tokenIndex = this.currentSystem.tokens.findIndex(token => token.id === id);
    if (tokenIndex === -1) {
      return false;
    }

    this.currentSystem.tokens.splice(tokenIndex, 1);
    this.currentSystem.lastUpdated = new Date();
    return true;
  }

  async generateCode(componentId: string, framework: 'react' | 'vue' | 'html' | 'css'): Promise<string> {
    if (!this.currentSystem) {
      throw new Error('No design system selected');
    }

    const component = this.currentSystem.components.find(comp => comp.id === componentId);
    if (!component) {
      throw new Error('Component not found');
    }

    return component.code[framework] || 'Code not available for this framework';
  }

  async exportDesignSystem(id: string, format: 'json' | 'css' | 'scss'): Promise<string> {
    const system = await this.getDesignSystem(id);
    if (!system) {
      throw new Error('Design system not found');
    }

    switch (format) {
      case 'json':
        return JSON.stringify(system, null, 2);
      case 'css':
        return this.generateCSS(system);
      case 'scss':
        return this.generateSCSS(system);
      default:
        throw new Error('Unsupported export format');
    }
  }

  private generateCSS(system: DesignSystem): string {
    let css = `/* ${system.name} Design System */\n`;
    css += `/* Generated on ${new Date().toISOString()} */\n\n`;

    // Generate CSS variables for tokens
    css += `:root {\n`;
    system.tokens.forEach(token => {
      if (token.category === 'color') {
        css += `  --${token.name.toLowerCase().replace(/\s+/g, '-')}: ${token.value};\n`;
      }
    });
    css += `}\n\n`;

    // Generate component styles
    system.components.forEach(component => {
      css += `/* ${component.name} */\n`;
      css += component.code.css;
      css += '\n\n';
    });

    return css;
  }

  private generateSCSS(system: DesignSystem): string {
    let scss = `// ${system.name} Design System\n`;
    scss += `// Generated on ${new Date().toISOString()}\n\n`;

    // Generate SCSS variables for tokens
    scss += `// Design Tokens\n`;
    system.tokens.forEach(token => {
      if (token.category === 'color') {
        scss += `$${token.name.toLowerCase().replace(/\s+/g, '-')}: ${token.value};\n`;
      }
    });
    scss += '\n';

    // Generate component styles
    system.components.forEach(component => {
      scss += `// ${component.name}\n`;
      scss += component.code.css.replace(/\./g, '&.');
      scss += '\n\n';
    });

    return scss;
  }

  async getComponentUsageStats(): Promise<Array<{ component: DesignComponent; usage: number }>> {
    if (!this.currentSystem) {
      return [];
    }

    return this.currentSystem.components.map(component => ({
      component,
      usage: component.usage
    })).sort((a, b) => b.usage - a.usage);
  }

  async incrementComponentUsage(componentId: string): Promise<void> {
    if (!this.currentSystem) {
      return;
    }

    const component = this.currentSystem.components.find(comp => comp.id === componentId);
    if (component) {
      component.usage++;
      component.lastUpdated = new Date();
    }
  }
}

export const designSystemBuilderService = new DesignSystemBuilderService();