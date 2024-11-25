import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useCourseStore } from '../../store/course-store';
import { ArrowLeft, ArrowRight, Plus, Trash2, Link, Video } from 'lucide-react';

export const CourseCitationStage = () => {
  const [selectedModule, setSelectedModule] = useState('');
  const [citationType, setCitationType] = useState<'video' | 'reference'>('reference');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  
  const { modules, citations, addCitation, removeCitation, setCurrentStage } = useCourseStore();

  const handleAddCitation = () => {
    if (selectedModule && url.trim() && description.trim()) {
      addCitation({
        moduleId: selectedModule,
        topicId: '',
        type: citationType,
        url: url.trim(),
        description: description.trim(),
      });
      setUrl('');
      setDescription('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Citations & Media</h2>
        <p className="text-gray-600">Add reference links and video resources</p>
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
          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant={citationType === 'reference' ? 'default' : 'outline'}
                onClick={() => setCitationType('reference')}
              >
                <Link className="w-4 h-4 mr-2" />
                Reference Link
              </Button>
              <Button
                variant={citationType === 'video' ? 'default' : 'outline'}
                onClick={() => setCitationType('video')}
              >
                <Video className="w-4 h-4 mr-2" />
                Video Link
              </Button>
            </div>

            <div className="space-y-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter URL"
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter description"
              />
              <Button
                onClick={handleAddCitation}
                disabled={!selectedModule || !url.trim() || !description.trim()}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Citation
              </Button>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Added Citations</h4>
              <div className="space-y-2">
                {citations
                  .filter((citation) => citation.moduleId === selectedModule)
                  .map((citation, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          {citation.type === 'video' ? (
                            <Video className="w-4 h-4" />
                          ) : (
                            <Link className="w-4 h-4" />
                          )}
                          <a
                            href={citation.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {citation.description}
                          </a>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeCitation(citation)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={() => setCurrentStage(2)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Content
        </Button>
        <Button onClick={() => setCurrentStage(4)}>
          Next: Review
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};