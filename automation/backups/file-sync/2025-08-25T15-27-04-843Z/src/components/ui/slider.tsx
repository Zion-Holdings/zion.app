interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step?: number;
  className?: string;
}

export function Slider({ value, onValueChange, min, max, step = 1, className = '' }: SliderProps) {
  return (
    <div className={`w-full ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value[0]}
        onChange={(e) => onValueChange([parseInt(e.target.value)])}
        className="w-full h-2 bg-zion-blue-light rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}