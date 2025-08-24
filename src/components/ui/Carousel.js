import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Circle } from 'lucide-react';
export const Carousel = ({ items, autoPlay = true, autoPlayInterval = 5000, showArrows = true, showDots = true, showPlayPause = true, transition = 'slide', height = 400, className = '', onItemChange }) => {
    var _a;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const autoPlayRef = useRef();
    const carouselRef = useRef(null);
    const goToSlide = useCallback((index) => {
        if (index === currentIndex || isTransitioning)
            return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        onItemChange === null || onItemChange === void 0 ? void 0 : onItemChange(index, items[index]);
        // Reset transition state after animation
        setTimeout(() => setIsTransitioning(false), 500);
    }, [currentIndex, isTransitioning, items, onItemChange]);
    const nextSlide = useCallback(() => {
        goToSlide((currentIndex + 1) % items.length);
    }, [currentIndex, items.length, goToSlide]);
    const prevSlide = useCallback(() => {
        goToSlide(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
    }, [currentIndex, items.length, goToSlide]);
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    const goToSlideByDot = (index) => {
        goToSlide(index);
        // Reset autoplay when manually navigating
        if (autoPlay) {
            setIsPlaying(true);
        }
    };
    useEffect(() => {
        if (autoPlay && isPlaying) {
            autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);
        }
        else {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [autoPlay, isPlaying, autoPlayInterval, nextSlide]);
    useEffect(() => {
        // Pause autoplay when hovering over carousel
        const handleMouseEnter = () => {
            if (autoPlay) {
                setIsPlaying(false);
            }
        };
        const handleMouseLeave = () => {
            if (autoPlay) {
                setIsPlaying(true);
            }
        };
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('mouseenter', handleMouseEnter);
            carousel.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener('mouseenter', handleMouseEnter);
                carousel.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
    }, [autoPlay]);
    const getTransitionClasses = () => {
        switch (transition) {
            case 'fade':
                return 'transition-opacity duration-500';
            case 'zoom':
                return 'transition-transform duration-500 scale-100 hover:scale-105';
            case 'flip':
                return 'transition-transform duration-500 transform-style-preserve-3d';
            default:
                return 'transition-transform duration-500';
        }
    };
    const getSlideTransform = (index) => {
        if (transition === 'slide') {
            return `translateX(-${index * 100}%)`;
        }
        return 'none';
    };
    const renderSlide = (item, index) => {
        const isActive = index === currentIndex;
        if (transition === 'fade') {
            return (_jsx("div", { className: `absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'} ${getTransitionClasses()}`, style: { zIndex: isActive ? 10 : 0 }, children: item.content }, item.id));
        }
        if (transition === 'zoom' || transition === 'flip') {
            return (_jsx("div", { className: `absolute inset-0 ${isActive ? 'opacity-100' : 'opacity-0'} ${getTransitionClasses()}`, style: { zIndex: isActive ? 10 : 0 }, children: item.content }, item.id));
        }
        // Default slide transition
        return (_jsx("div", { className: "flex-shrink-0 w-full h-full", style: { transform: getSlideTransform(index) }, children: item.content }, item.id));
    };
    const renderArrows = () => {
        if (!showArrows || items.length <= 1)
            return null;
        return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: prevSlide, className: "absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110", "aria-label": "Previous slide", children: _jsx(ChevronLeft, { className: "w-6 h-6 text-gray-800" }) }), _jsx("button", { onClick: nextSlide, className: "absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110", "aria-label": "Next slide", children: _jsx(ChevronRight, { className: "w-6 h-6 text-gray-800" }) })] }));
    };
    const renderDots = () => {
        if (!showDots || items.length <= 1)
            return null;
        return (_jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2", children: items.map((_, index) => (_jsx("button", { onClick: () => goToSlideByDot(index), className: `p-1 rounded-full transition-all duration-200 ${index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'}`, "aria-label": `Go to slide ${index + 1}`, children: _jsx(Circle, { className: "w-2 h-2" }) }, index))) }));
    };
    const renderPlayPause = () => {
        if (!showPlayPause || !autoPlay)
            return null;
        return (_jsx("button", { onClick: togglePlayPause, className: "absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all duration-200", "aria-label": isPlaying ? 'Pause autoplay' : 'Start autoplay', children: isPlaying ? (_jsx(Pause, { className: "w-5 h-5 text-gray-800" })) : (_jsx(Play, { className: "w-5 h-5 text-gray-800" })) }));
    };
    const renderContent = () => {
        if (transition === 'slide') {
            return (_jsx("div", { className: "flex h-full transition-transform duration-500 ease-in-out", style: { transform: getSlideTransform(currentIndex) }, children: items.map((item, index) => renderSlide(item, index)) }));
        }
        return (_jsx("div", { className: "relative h-full", children: items.map((item, index) => renderSlide(item, index)) }));
    };
    if (items.length === 0) {
        return (_jsx("div", { className: `flex items-center justify-center bg-gray-100 rounded-lg ${className}`, style: { height }, children: _jsx("p", { className: "text-gray-500", children: "No items to display" }) }));
    }
    return (_jsxs("div", { ref: carouselRef, className: `relative overflow-hidden rounded-lg ${className}`, style: { height }, children: [_jsx("div", { className: "h-full", children: renderContent() }), renderArrows(), renderDots(), renderPlayPause(), ((_a = items[currentIndex]) === null || _a === void 0 ? void 0 : _a.title) && (_jsxs("div", { className: "absolute bottom-16 left-4 right-4 z-20 text-white", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: items[currentIndex].title }), items[currentIndex].description && (_jsx("p", { className: "text-sm opacity-90", children: items[currentIndex].description }))] })), autoPlay && isPlaying && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-white/20", children: _jsx("div", { className: "h-full bg-white transition-all duration-100 ease-linear", style: {
                        width: `${((Date.now() % autoPlayInterval) / autoPlayInterval) * 100}%`
                    } }) }))] }));
};
