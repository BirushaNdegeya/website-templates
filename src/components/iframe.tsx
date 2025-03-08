import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IframeProps {
  template?: {
    id: number;
    title: string;
    demoUrl: string;
    description?: string;
    category?: string;
  };
}

type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop';

export default function Iframe({ template }: IframeProps) {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const deviceSizes = {
    mobile: { width: '375px', height: '667px' },
    tablet: { width: '768px', height: '1024px' },
    laptop: { width: '1366px', height: '800px' },
    desktop: { width: '100%', height: '800px' }
  };

  useEffect(() => {
    if (iframeRef.current) {
      const { width, height } = deviceSizes[device];
      iframeRef.current.style.width = width;
      iframeRef.current.style.height = height;
    }
  }, [device]);

  if (!template) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full min-h-[900px] bg-gray-50 rounded-2xl p-8"
    >
      {/* Header with controls */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-white via-white to-transparent p-6 rounded-t-2xl z-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {template.title}
            </h3>
            {template.description && (
              <p className="text-gray-600">{template.description}</p>
            )}
          </div>
          
          {/* Device switcher */}
          <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-full">
            {(Object.keys(deviceSizes) as DeviceType[]).map((deviceType) => (
              <button
                key={deviceType}
                onClick={() => setDevice(deviceType)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  device === deviceType
                    ? 'bg-white shadow-lg scale-110 text-blue-600'
                    : 'hover:bg-white/50 text-gray-600'
                }`}
              >
                {deviceType === 'mobile' && '📱'}
                {deviceType === 'tablet' && '📱'}
                {deviceType === 'laptop' && '💻'}
                {deviceType === 'desktop' && '🖥️'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Iframe container with device frame */}
      <div className="relative mt-24 flex justify-center">
        <div className={`
          relative rounded-2xl shadow-2xl bg-white
          ${device !== 'desktop' ? 'border-8 border-gray-800' : ''}
          transition-all duration-500 ease-in-out
        `}>
          {/* Loading overlay */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white z-10 flex items-center justify-center"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <p className="mt-4 text-gray-600">Chargement du template...</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Browser chrome for desktop view */}
          {device === 'desktop' && (
            <div className="bg-gray-100 border-b border-gray-200 p-2 rounded-t-lg flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 truncate">
                  {template.demoUrl}
                </div>
              </div>
            </div>
          )}

          <iframe
            ref={iframeRef}
            title={template.title}
            src={template.demoUrl}
            className="transition-all duration-500 ease-in-out"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Device specific decorations */}
        {device === 'mobile' && (
          <div className="absolute -right-4 top-1/3 h-12 w-1 bg-gray-800 rounded-r-lg" />
        )}
      </div>

      {/* Template info footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent p-6 rounded-b-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            {template.category && (
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {template.category}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
              Voir le code source
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors">
              Utiliser ce template
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
