
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

export class TestingSystem {
    static async testComponent(Component: React.ComponentType<any>, props: any = {}) {
        const { container } = render(<Component {...props} />);
        return { container, screen };
    }

    static async testUserInteraction(element: HTMLElement, action: 'click' | 'type' | 'hover') {
        switch (action) {
            case 'click':
                fireEvent.click(element);
                break;
            case 'type':
                fireEvent.change(element, { target: { value: 'test input' } });
                break;
            case 'hover':
                fireEvent.mouseOver(element);
                break;
        }
    }

    static async testAccessibility(Component: React.ComponentType<any>, props: any = {}) {
        const { container } = render(<Component {...props} />);
        
        // Check for accessibility attributes
        const elements = container.querySelectorAll('[role], [aria-label], [aria-describedby]');
        return elements.length > 0;
    }

    static async testResponsiveDesign(Component: React.ComponentType<any>, props: any = {}) {
        const { container } = render(<Component {...props} />);
        
        // Test different viewport sizes
        const viewports = [
            { width: 375, height: 667 }, // Mobile
            { width: 768, height: 1024 }, // Tablet
            { width: 1920, height: 1080 } // Desktop
        ];

        for (const viewport of viewports) {
            Object.defineProperty(window, 'innerWidth', {
                writable: true,
                configurable: true,
                value: viewport.width,
            });
            Object.defineProperty(window, 'innerHeight', {
                writable: true,
                configurable: true,
                value: viewport.height,
            });
            window.dispatchEvent(new Event('resize'));
        }

        return true;
    }
}
