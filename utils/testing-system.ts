import React from 'react';;;''
    static async testUserInteraction(element: HTMLElement, action: 'click' | 'type' | 'hover''')
            case 'click'''
            case 'type'''
            case 'hover'''
            if (typeof window !== 'undefined''')
                Object.defineProperty(window, 'innerWidth''')
                Object.defineProperty(window, 'innerHeight''')
                window.dispatchEvent(new Event('resize''')