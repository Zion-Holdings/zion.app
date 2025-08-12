import React, { useState, useEffect } from 'react';
import { logInfo } from '@/utils/productionLogger';

// You might need to install a carousel library, e.g., react-responsive-carousel
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// For charts, you might use a library like Recharts
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, FunnelChart, Funnel, LabelList, LineChart, Line } from 'recharts';

interface Slide {
  id: string;
  title: string;
  content: string;
  type: string; // e.g., 'title', 'generic', 'data', 'cta'
  chartType?: 'bar' | 'funnel' | 'timeline'; // Optional chart type
  // chartData could be added here later
}

interface SlideEditorProps {
  initialSlides: Slide[];
  onSlidesChange: (slides: Slide[]) => void;
}

const SlideEditor: React.FC<SlideEditorProps> = ({ initialSlides, onSlidesChange }) => {
  const [slides, setSlides] = useState<Slide[]>(initialSlides);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setSlides(initialSlides);
    setCurrentIndex(0); // Reset to first slide when initialSlides change
  }, [initialSlides]);

  const handleSlideChange = (index: number, field: keyof Slide, value: string) => {
    const updatedSlides = slides.map((slide, i) =>
      i === index ? { ...slide, [field]: value } : slide
    );
    setSlides(updatedSlides);
    onSlidesChange(updatedSlides);
  };

  const handleRephrase = (index: number) => {
    // Placeholder for AI rephrase functionality
    logInfo(`Rephrasing slide ${index + 1}`);
    const currentSlide = slides[index];
    if (!currentSlide) return;
    // Example: append "(Rephrased)" to content
    const rephrasedContent = currentSlide.content + " (Rephrased by AI - placeholder)";
    handleSlideChange(index, 'content', rephrasedContent);
  };

  const handleAddSlide = () => {
    // Placeholder for AI add slide functionality
    const newSlide: Slide = {
      id: String(Date.now()),
      title: 'New AI Slide (Placeholder)',
      content: 'AI generated content for the new slide (Placeholder).',
      type: 'generic',
    };
    const updatedSlides = [...slides, newSlide];
    setSlides(updatedSlides);
    onSlidesChange(updatedSlides);
    setCurrentIndex(updatedSlides.length - 1); // Move to the new slide
  };

  const handleDeleteSlide = (index: number) => {
    if (slides.length <= 1) {
        alert("Cannot delete the last slide.");
        return;
    }
    const updatedSlides = slides.filter((_, i) => i !== index);
    setSlides(updatedSlides);
    onSlidesChange(updatedSlides);
    setCurrentIndex(prevIndex => Math.max(0, prevIndex -1));
  };

  const renderChart = (slide: Slide) => {
    // Placeholder for chart rendering
    if (!slide.chartType) return null;

    // Mock data for charts
    const barData = [
      { name: 'Metric A', value: 400 },
      { name: 'Metric B', value: 300 },
      { name: 'Metric C', value: 200 },
    ];
    const funnelData = [
      { value: 100, name: 'Step 1', fill: '#8884d8' },
      { value: 80, name: 'Step 2', fill: '#83a6ed' },
      { value: 50, name: 'Step 3', fill: '#8dd1e1' },
      { value: 40, name: 'Step 4', fill: '#82ca9d' },
      { value: 25, name: 'Step 5', fill: '#a4de6c' },
    ];
    const timelineData = [
      { name: 'Q1', value: 10 }, { name: 'Q2', value: 30 }, { name: 'Q3', value: 70 }, { name: 'Q4', value: 100 }
    ];

    const chartStyle = { width: '100%', height: 300, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '10px' };

    switch (slide.chartType) {
      case 'bar':
        return <div style={chartStyle}>Bar Chart Placeholder for {slide.title}. Data: {JSON.stringify(barData)}</div>;
      case 'funnel':
        return <div style={chartStyle}>Funnel Chart Placeholder for {slide.title}. Data: {JSON.stringify(funnelData)}</div>;
      case 'timeline':
        return <div style={chartStyle}>Timeline Chart Placeholder for {slide.title}. Data: {JSON.stringify(timelineData)}</div>;
      default:
        return <p className="text-sm text-gray-500 mt-2">Chart type '{slide.chartType}' not implemented.</p>;
    }
  };

  if (!slides || slides.length === 0) {
    return <p className="text-center text-gray-500 py-8">No slides to display. Generate a deck first.</p>;
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="slide-editor p-4 bg-gray-100 rounded-lg">
      <div className="controls mb-4 flex justify-between items-center">
        <div>
          <button
            onClick={handleAddSlide}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 text-sm"
          >
            Add Slide (AI)
          </button>
        </div>
        <div className="text-center">
            <span className="text-xl font-semibold">Slide {currentIndex + 1} of {slides.length}</span>
        </div>
        <div>
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mr-2 text-sm disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentIndex(prev => Math.min(slides.length - 1, prev + 1))}
            disabled={currentIndex === slides.length - 1}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded text-sm disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {currentSlide && (
        <div className="slide-content bg-white p-6 rounded-lg shadow">
          <div className="mb-4">
            <label htmlFor={`slide-title-${currentIndex}`} className="block text-sm font-medium text-gray-700">
              Slide Title
            </label>
            <input
              type="text"
              id={`slide-title-${currentIndex}`}
              value={currentSlide.title}
              onChange={(e) => handleSlideChange(currentIndex, 'title', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor={`slide-content-${currentIndex}`} className="block text-sm font-medium text-gray-700">
              Slide Content
            </label>
            <textarea
              id={`slide-content-${currentIndex}`}
              value={currentSlide.content}
              onChange={(e) => handleSlideChange(currentIndex, 'content', e.target.value)}
              rows={8}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
          </div>
          {renderChart(currentSlide)}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => handleRephrase(currentIndex)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Rephrase with AI
            </button>
            <button
                onClick={() => handleDeleteSlide(currentIndex)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm"
                disabled={slides.length <= 1}
            >
                Delete Slide
            </button>
          </div>
        </div>
      )}

      {/* Optional: Full carousel view if needed, but the current setup edits one slide at a time. */}
      {/* For a real carousel, you would map over slides and use the Carousel component. */}
      {/* Example:
        <Carousel showArrows={true} onChange={(index) => setCurrentIndex(index)} selectedItem={currentIndex}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="p-4 border">
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </div>
          ))}
        </Carousel>
      */}
    </div>
  );
};

export default SlideEditor;
