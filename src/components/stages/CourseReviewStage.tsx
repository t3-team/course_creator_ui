import React from 'react';
import { Button } from '../ui/button';
import { useCourseStore } from '../../store/course-store';
import { ArrowLeft, BookOpen, Link, Video } from 'lucide-react';

export const CourseReviewStage = () => {
  const { title, modules, content, citations, setCurrentStage } = useCourseStore();

  const handlePublish = () => {
    // Here you would typically make an API call to publish the course
    console.log('Publishing course:', {
      title,
      modules,
      content,
      citations,
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Review Course</h2>
        <p className="text-gray-600">Review and publish your course</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>

        <div className="space-y-8">
          {modules.map((module) => {
            const moduleContent = content.find((c) => c.moduleId === module.title);
            const moduleCitations = citations.filter(
              (c) => c.moduleId === module.title
            );

            return (
              <div key={module.title} className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {module.title}
                </h3>

                {moduleContent && (
                  <div className="pl-6 border-l-2 border-gray-200">
                    <p className="text-gray-700 whitespace-pre-wrap">
                      {moduleContent.content}
                    </p>
                  </div>
                )}

                {moduleCitations.length > 0 && (
                  <div className="pl-6 space-y-2">
                    <h4 className="font-medium text-gray-700">Resources:</h4>
                    {moduleCitations.map((citation, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
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
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <Button variant="outline" onClick={() => setCurrentStage(3)}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Citations
        </Button>
        <Button onClick={handlePublish}>Publish Course</Button>
      </div>
    </div>
  );
};