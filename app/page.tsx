import React from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

interface PracticeTask {
  id: string;
  title: string;
  scopeLevel: string;
  description: string;
}

export default function Home() {
  const practiceQuestions: PracticeTask[] = [
    { "id": "30552c76862ac6d733c8de79296757b8", "title": "Social Media Platform", "scopeLevel": "Medium", "description": "Design a database for a new social media platform." },
    { "id": "1", "title": "Sport Streaming Service", "scopeLevel": "Small", "description": "Design a backend system for live sports streaming." },
    { "id": "2", "title": "Design a Queue Service", "scopeLevel": "Small", "description": "Create a scalable queue service for message processing." },
    { "id": "3", "title": "Design a Notification Service", "scopeLevel": "Small", "description": "Develop a system to handle various types of notifications." },
    { "id": "5", "title": "Global E-commerce Platform", "scopeLevel": "Large", "description": "Design a scalable system for a worldwide e-commerce service." },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-amber-800">System Design Practice Tasks</h1>
        <div className="md:flex md:justify-center">
          <div className="overflow-hidden rounded-lg shadow-md md:w-4/5 lg:w-3/4 xl:w-2/3">
            <table className="table w-full bg-white">
              <thead className="bg-amber-400">
                <tr>
                  <th className="bg-amber-400 text-gray-800 hidden md:table-cell"></th>
                  <th className="bg-amber-400 text-gray-800">Title</th>
                  <th className="bg-amber-400 text-gray-800 hidden md:table-cell">Description</th>
                  <th className="bg-amber-400 text-gray-800">Scope</th>
                </tr>
              </thead>
              <tbody>
                {practiceQuestions.map((question, index) => (
                  <tr key={question.id} className="hover:bg-amber-100 border-b border-amber-200">
                    <th className="text-gray-600 hidden md:table-cell">{index + 1}</th>
                    <td className="font-medium">
                      <Link href={`/practice/${question.id}`} className="flex items-center text-amber-700 hover:text-amber-900">
                        <BookOpen className="w-5 h-5 mr-2" />
                        <span>{question.title}</span>
                      </Link>
                      <p className="text-sm text-gray-600 mt-1 md:hidden">{question.description}</p>
                    </td>
                    <td className="max-w-md text-gray-600 hidden md:table-cell">{question.description}</td>
                    <td>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getScopeLevelStyles(question.scopeLevel)}`}>
                        {question.scopeLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function getScopeLevelStyles(scopeLevel: string): string {
  switch (scopeLevel.toLowerCase()) {
    case 'small':
      return 'bg-green-100 text-green-800 border';
    case 'medium':
      return 'bg-amber-100 text-amber-800 border';
    case 'large':
      return 'bg-purple-100 text-purple-800 border';
    default:
      return 'bg-gray-100 text-gray-800 border';
  }
}