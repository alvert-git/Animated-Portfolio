import { useEffect } from 'react';
// FIX: Added the explicit '.js' extension to resolve the module path correctly.
import fluidCursor from '../Hooks/useFluidCursor.js'; 

const FluidCursor = () => {
  useEffect(() => {
    // Initialize the fluid simulation/cursor effect on the canvas
    fluidCursor();
  }, []);

  return (
    // We keep the pointer-events-none and high z-index fix here
    <div className="fixed top-0 left-0 w-screen h-screen z-1 pointer-events-none">
      <canvas id="fluid" className="w-full h-full" />
    </div>
  );
};

export default FluidCursor;