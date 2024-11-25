import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useCourseStore } from '../../store/course-store';
import { Plus, Trash2 } from 'lucide-react';

export const CourseOutlineStage = () => {
  const [newTopic, setNewTopic] = useState('');
  const { title, modules, setTitle, addModule, setCurrentStage } = useCourseStore();

  const handleAddModule = () => {
    if (newTopic.trim()) {
      addModule({
        title: newTopic.trim(),
        topics: [],
      });
      setNewTopic('');
    }
  };

  const handleNext = () => {
    if (title && modules.length > 0) {
      setCurrentStage(2);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Course Outline</h2>
        <p className="text-gray-600">Start by creating your course structure</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Course Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter course title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add Module
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter module title"
            />
            <Button onClick={handleAddModule}>
              <Plus className="w-4 h-4 mr-2" />
              Add Module
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Module List</h3>
        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-900">
                    Module {index + 1}:
                  </span>{' '}
                  {module.title}
                </div>
                <Button variant="outline" size="icon">
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <Button
          onClick={handleNext}
          disabled={!title || modules.length === 0}
          className="px-8"
        >
          Next: Add Content
        </Button>
      </div>
    </div>
  );
};