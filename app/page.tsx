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
    { "description": "Design a caching system for a social media feed", "id": "c98d9ac502af9a0b93c82167ff378f60", "scopeLevel": "Small", "title": "Caching" },
    { "description": "Design a rate limiter for a public API", "id": "a9fd2583ca9ce66a88082a0c5f27fc25", "scopeLevel": "Small", "title": "Rate Limiting" },
    { "description": "Design a push notification system for a mobile app", "id": "6b3c52b7e8774b2df91cb20190a294c0", "scopeLevel": "Small", "title": "Notification System" },
    { "description": "Design a URL shortening service like bit.ly", "id": "9299d75d930b8b4873693f7f4ea85802", "scopeLevel": "Small", "title": "URL Shortener" },
    { "description": "Design an in-memory key-value store with string keys and integer values", "id": "0b28963ebb51961a53fc031cb1ecc03c", "scopeLevel": "Small", "title": "Key-Value Store" },
    { "description": "Design a simple load balancer for a web application", "id": "f85e0af794194009b278fa36d1deedf5", "scopeLevel": "Small", "title": "Load Balancer" },
    { "description": "Design a centralized logging system for a microservices architecture", "id": "d58b82cd0c7007c26ae2500ca456fad4", "scopeLevel": "Small", "title": "Logging System" },
    { "description": "Design a real-time chat system for a small group of users", "id": "005115ac84ebd256c692e41f7faa9263", "scopeLevel": "Small", "title": "Chat System" },
    { "description": "Design an autocomplete system for a search bar", "id": "b7bd22d9838ae8479e0aaa56936d30c5", "scopeLevel": "Small", "title": "Autocomplete System" },
    { "description": "Design a simple task scheduler for a single-node system", "id": "f7fe221fcd9f36b43e960a4b9c37aba9", "scopeLevel": "Small", "title": "Task Scheduler" },
    { "description": "Design a distributed caching system for a large-scale web application", "id": "f0a3f95219854b6d435f059d02cd7250", "scopeLevel": "Medium", "title": "Distributed Cache" },
    { "description": "Design a basic content delivery network (CDN) for static assets", "id": "51c7597bf85d40877e14477bbbdce901", "scopeLevel": "Medium", "title": "Content Delivery Network" },
    { "description": "Design a distributed file system for storing and retrieving large files", "id": "25ef2c49f36e8c12919fe9743937c481", "scopeLevel": "Medium", "title": "Distributed File System" },
    { "description": "Design a movie recommendation system for a streaming platform", "id": "24142ec9920451d2cfe323d0f9670590", "scopeLevel": "Medium", "title": "Recommendation System" },
    { "description": "Design a distributed task queue system for background job processing", "id": "bbcbb6323d11cc50a25119c1cd31b414", "scopeLevel": "Medium", "title": "Distributed Task Queue" },
    { "description": "Design a distributed search engine for a large document collection", "id": "a03ad47c1b537b6d7e77222848782732", "scopeLevel": "Medium", "title": "Distributed Search Engine" },
    { "description": "Design a distributed consensus system for a cluster of servers", "id": "48ff434fe485d729cb4b93299da449ad", "scopeLevel": "Medium", "title": "Distributed Consensus" },
    { "description": "Design a real-time analytics system for a high-traffic website", "id": "f01ac23edffecbfeee45dddbe71960a9", "scopeLevel": "Medium", "title": "Real-time Analytics" },
    { "description": "Design a distributed lock manager for coordinating access to shared resources", "id": "5ed40a489fce34ff0f814ee23f1a764d", "scopeLevel": "Medium", "title": "Distributed Lock Manager" },
    { "description": "Design a time series database for storing and querying sensor data", "id": "41bbdfae7b1688a74e9c25e337cab172", "scopeLevel": "Medium", "title": "Time Series Database" },
    { "description": "Design a social networking platform like Facebook", "id": "d0cf2589f039d5dddc9e7ab28b9f1cb0", "scopeLevel": "Large", "title": "Social Network" },
    { "description": "Design an e-commerce platform like Amazon", "id": "c6e926fb2af3847c9cab68cbf3bae276", "scopeLevel": "Large", "title": "E-commerce Platform" },
    { "description": "Design a video streaming platform like Netflix", "id": "e973fb71ae393199d0acd88e7f17a54d", "scopeLevel": "Large", "title": "Video Streaming Platform" },
    { "description": "Design a ride-sharing platform like Uber", "id": "3efc5a52fc3b2c769c03783f7bfc7e26", "scopeLevel": "Large", "title": "Ride-sharing Platform" },
    { "description": "Design a distributed database system like Google Spanner", "id": "ef183c608d9152dd3f7f298d80711b8e", "scopeLevel": "Large", "title": "Distributed Database" },
    { "description": "Design a cloud storage system like Dropbox", "id": "aa74ac143fc1baa22112e3fdd607a148", "scopeLevel": "Large", "title": "Cloud Storage System" },
    { "description": "Design a messaging platform like WhatsApp", "id": "b4ef3ecd84287f8d403f769b05641dfc", "scopeLevel": "Large", "title": "Messaging Platform" },
    { "description": "Design a distributed game server for a massively multiplayer online game", "id": "3eced36752d6fe31fc71517ee02159d3", "scopeLevel": "Large", "title": "Distributed Game Server" },
    { "description": "Design an ad serving system for a large-scale advertising platform", "id": "ddeaa3416ad1f5baca62edec6d7d35f1", "scopeLevel": "Large", "title": "Ad Serving System" },
    { "description": "Design a distributed web crawler for a search engine", "id": "8eff49fa335e1a8810235661057cd8bb", "scopeLevel": "Large", "title": "Distributed Web Crawler" }
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