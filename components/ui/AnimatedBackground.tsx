import React, { useEffect, useRef } from 'react'
const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ children, className = ''
    const ctx = canvas.getContext('2d'
    const colors = ['#00d4ff', '#8b5cf6', '#ec4899', '#10b981'
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0'
            ctx.strokeStyle = ``${particle.color}${Math.floor((1 - distance / 100) * 0.3 * 255).toString(16).padStart(2, '0'
    window.addEventListener('resize'
      window.removeEventListener('resize'`