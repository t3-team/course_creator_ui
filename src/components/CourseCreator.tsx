import React from 'react';
import { CourseOutlineStage } from './stages/CourseOutlineStage';
import { CourseContentStage } from './stages/CourseContentStage';
import { CourseCitationStage } from './stages/CourseCitationStage';
import { CourseReviewStage } from './stages/CourseReviewStage';
import { useCourseStore } from '../store/course-store';
import { cn } from '../lib/utils';

const stages = [
  { id: 1, name: 'Course Outline', component: CourseOutlineStage },
  { id: 2, name: 'Course Content', component: CourseContentStage },
  { id: 3, name: 'Citations & Media', component: CourseCitationStage },
  { id: 4, name: 'Review & Publish', component: CourseReviewStage },
];

export const CourseCreator = () => {
  const { currentStage, setCurrentStage } = useCourseStore();
  const CurrentStageComponent = stages[currentStage - 1].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {stages.map((stage) => (
              <div key={stage.id} className="flex-1">
                <div className="relative">
                  <div 
                    className={cn(
                      "w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-semibold",
                      currentStage === stage.id 
                        ? "bg-blue-600 text-white" 
                        : currentStage > stage.id 
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    )}
                  >
                    {stage.id}
                  </div>
                  <div className="text-xs text-center mt-2 font-medium text-gray-600">
                    {stage.name}
                  </div>
                  {stage.id < stages.length && (
                    <div 
                      className={cn(
                        "absolute top-4 -translate-y-1/2 left-1/2 w-full h-0.5",
                        currentStage > stage.id ? "bg-green-500" : "bg-gray-200"
                      )}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 min-h-[600px]">
          <CurrentStageComponent />
        </div>
      </div>
    </div>
  );
};