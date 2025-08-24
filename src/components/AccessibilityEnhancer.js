import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export function AccessibilityEnhancer() {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        screenReader: false,
        keyboardNavigation: false,
        focusIndicator: false,
    });
    useEffect(() => {
        // Load saved settings
        const savedSettings = localStorage.getItem('accessibility-settings');
        if (savedSettings) {
            try {
                const parsed = JSON.parse(savedSettings);
                setSettings(parsed);
                applySettings(parsed);
            }
            catch (error) {
                console.error('Failed to parse accessibility settings:', error);
            }
        }
    }, []);
    const applySettings = (newSettings) => {
        const root = document.documentElement;
        if (newSettings.highContrast) {
            root.classList.add('high-contrast');
        }
        else {
            root.classList.remove('high-contrast');
        }
        if (newSettings.largeText) {
            root.classList.add('large-text');
        }
        else {
            root.classList.remove('large-text');
        }
        if (newSettings.reducedMotion) {
            root.classList.add('reduced-motion');
        }
        else {
            root.classList.remove('reduced-motion');
        }
        if (newSettings.focusIndicator) {
            root.classList.add('focus-visible');
        }
        else {
            root.classList.remove('focus-visible');
        }
    };
    const handleSettingChange = (key, value) => {
        const newSettings = Object.assign(Object.assign({}, settings), { [key]: value });
        setSettings(newSettings);
        localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
        applySettings(newSettings);
    };
    const resetSettings = () => {
        const defaultSettings = {
            highContrast: false,
            largeText: false,
            reducedMotion: false,
            screenReader: false,
            keyboardNavigation: false,
            focusIndicator: false,
        };
        setSettings(defaultSettings);
        localStorage.removeItem('accessibility-settings');
        applySettings(defaultSettings);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50", children: [_jsx("a", { href: "#main-content", className: "bg-zion-cyan text-white px-4 py-2 rounded-md", children: "Skip to main content" }), _jsx("a", { href: "#navigation", className: "bg-zion-cyan text-white px-4 py-2 rounded-md ml-2", children: "Skip to navigation" })] }), _jsx("button", { onClick: () => setIsOpen(!isOpen), className: "fixed top-4 right-4 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 hover:bg-zion-cyan/10 p-2 rounded border", "aria-label": "Accessibility Settings", children: _jsx("span", { className: "text-zion-cyan", children: "A" }) }), isOpen && (_jsxs("div", { className: "fixed top-16 right-4 w-80 z-50 bg-background/95 backdrop-blur-sm border-zion-cyan/20 shadow-2xl rounded-lg border p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsxs("h3", { className: "text-lg font-semibold flex items-center gap-2", children: [_jsx("span", { className: "text-zion-cyan", children: "A" }), "Accessibility Settings"] }), _jsx("button", { onClick: () => setIsOpen(false), className: "text-foreground hover:text-zion-cyan", children: "\u00D7" })] }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-3", children: [_jsxs("h4", { className: "text-sm font-semibold flex items-center gap-2", children: [_jsx("span", { children: "\uD83D\uDC41\uFE0F" }), "Visual Enhancements"] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "high-contrast", className: "text-sm", children: "High Contrast" }), _jsx("input", { type: "checkbox", id: "high-contrast", checked: settings.highContrast, onChange: (e) => handleSettingChange('highContrast', e.target.checked), className: "rounded" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "large-text", className: "text-sm", children: "Large Text" }), _jsx("input", { type: "checkbox", id: "large-text", checked: settings.largeText, onChange: (e) => handleSettingChange('largeText', e.target.checked), className: "rounded" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "focus-indicator", className: "text-sm", children: "Enhanced Focus" }), _jsx("input", { type: "checkbox", id: "focus-indicator", checked: settings.focusIndicator, onChange: (e) => handleSettingChange('focusIndicator', e.target.checked), className: "rounded" })] })] }), _jsx("hr", { className: "border-border" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("h4", { className: "text-sm font-semibold flex items-center gap-2", children: [_jsx("span", { children: "\uD83D\uDDB1\uFE0F" }), "Navigation & Motion"] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "reduced-motion", className: "text-sm", children: "Reduced Motion" }), _jsx("input", { type: "checkbox", id: "reduced-motion", checked: settings.reducedMotion, onChange: (e) => handleSettingChange('reducedMotion', e.target.checked), className: "rounded" })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "keyboard-nav", className: "text-sm", children: "Keyboard Navigation" }), _jsx("input", { type: "checkbox", id: "keyboard-nav", checked: settings.keyboardNavigation, onChange: (e) => handleSettingChange('keyboardNavigation', e.target.checked), className: "rounded" })] })] }), _jsx("hr", { className: "border-border" }), _jsxs("div", { className: "space-y-3", children: [_jsxs("h4", { className: "text-sm font-semibold flex items-center gap-2", children: [_jsx("span", { children: "\uD83D\uDD0A" }), "Screen Reader"] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("label", { htmlFor: "screen-reader", className: "text-sm", children: "Enhanced Support" }), _jsx("input", { type: "checkbox", id: "screen-reader", checked: settings.screenReader, onChange: (e) => handleSettingChange('screenReader', e.target.checked), className: "rounded" })] })] }), _jsx("div", { className: "pt-2", children: _jsxs("button", { onClick: resetSettings, className: "w-full p-2 border border-border rounded hover:bg-muted", children: [_jsx("span", { className: "mr-2", children: "\u2699\uFE0F" }), "Reset to Defaults"] }) })] })] }))] }));
}
