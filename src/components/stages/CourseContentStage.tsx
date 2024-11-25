import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useCourseStore } from '../../store/course-store';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const CourseContentStage = () => {
  const [selectedModule, setSelectedModule] = useState('');
  const [content, setContent] = useState('');
  const { modules, addContent, setCurrentStage } = useCourseStore();

  const handleSaveContent = () => {
    if (selectedModule && content.trim()) {
      addContent({
        moduleId: selectedModule,
        topicId: '',
        content: content.trim(),
      });
      setContent('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Course Content</h2>
        <p className="text-gray-600">Add detailed content for each module</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 border-r pr-6">
          <h3 className="text-lg font-medium mb-4">Modules</h3>
          <div className="space-y-2">
            {modules.map((module) => (
              <button
                key={module.title}
                onClick={() => setSelectedModule(module.title)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  selectedModule === module.title
                    ? 'bg-blue-100 text-blue-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <h3 className="text-lg font-medium mb-4">
            {selectedModule ? `Content for: ${selectedModule}` : 'Select a module'}
          </h3>
          <div className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={!selectedModule}
              className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={
                selectedModule
                  ? 'Enter module content here...'
                  : 'Select a module to add content'
              }
            />
            <div className="flex justify-end">
              <Button
                onClick={handleSaveContent}
                disabled={!selectedModule || !content.trim()}
              >
                Save Content
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={() => setCurrentStage(1)}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Outline
        </Button>
        <Button onClick={() => setCurrentStage(3)}>
          Next: Add Citations
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};