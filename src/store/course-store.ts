import { create } from 'zustand';

interface Module {
  title: string;
  topics: string[];
}

interface CourseContent {
  moduleId: string;
  topicId: string;
  content: string;
}

interface Citation {
  moduleId: string;
  topicId: string;
  type: 'video' | 'reference';
  url: string;
  description: string;
}

interface CourseState {
  title: string;
  currentStage: number;
  modules: Module[];
  content: CourseContent[];
  citations: Citation[];
  setTitle: (title: string) => void;
  setCurrentStage: (stage: number) => void;
  addModule: (module: Module) => void;
  removeModule: (moduleTitle: string) => void;
  addContent: (content: CourseContent) => void;
  addCitation: (citation: Citation) => void;
  removeCitation: (citation: Citation) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  title: '',
  currentStage: 1,
  modules: [],
  content: [],
  citations: [],
  setTitle: (title) => set({ title }),
  setCurrentStage: (stage) => set({ currentStage: stage }),
  addModule: (module) =>
    set((state) => ({
      modules: [...state.modules, module],
    })),
  removeModule: (moduleTitle) =>
    set((state) => ({
      modules: state.modules.filter((m) => m.title !== moduleTitle),
    })),
  addContent: (content) =>
    set((state) => ({
      content: [...state.content, content],
    })),
  addCitation: (citation) =>
    set((state) => ({
      citations: [...state.citations, citation],
    })),
  removeCitation: (citationToRemove) =>
    set((state) => ({
      citations: state.citations.filter(
        (c) => 
          c.moduleId !== citationToRemove.moduleId || 
          c.topicId !== citationToRemove.topicId || 
          c.url !== citationToRemove.url
      ),
    })),
}));