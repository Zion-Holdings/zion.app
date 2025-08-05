import React from "react";
interface ResponsiveGridProps {
  children: React.ReactNode
  className?: string'
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  gap?: 'sm' | 'base' | 'lg' | 'xl
  items?: 'start' | 'center' | 'end' | 'stretch
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'}
const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({'
  children,
  className="'','"
  cols = 4,
  gap = 'base',
  items = 'stretch',
  justify = 'start'
}) => {'
  const $1 = {
    1: 'grid-responsive-1',
    2: 'grid-responsive-2',
    3: 'grid-responsive-3',
    4: 'grid-responsive-4',
    5: 'grid-responsive-5',
    6: 'grid-responsive-6'}
  const $1 = {
    sm: 'gap-4',
    base: 'gap-6 lg:gap-8',
    lg: 'gap-8 lg:gap-12',
    xl: 'gap-12 lg:gap-16'}
  const $1 = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch'}
  const $1 = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly'}
  const gridClass = gridClasses[cols]
  const gapClass = gapClasses[gap]
  const itemsClass = itemsClasses[items]
  const justifyClass = justifyClasses[justify]
  return (
    <div className="{`${gridClass}" ${gapClass} ${itemsClass} ${justifyClass} ${className}`}>
      {children}
    </div>
  );
};
''`
export default ResponsiveGrid ''`