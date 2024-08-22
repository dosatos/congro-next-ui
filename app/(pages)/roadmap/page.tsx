import Link from 'next/link';
import React from 'react';

interface Step {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

const roadmapSections: { title: string, steps: Step[] }[] = [
    {
        title: "Fundamentals",
        steps: [
            { id: "intro-to-db", title: 'System Requirements', description: 'Define functional and non-functional requirements', completed: true },
            { id: "intro-to-db", title: 'High-Level Design', description: 'Create a high-level architecture of the system', completed: false },
            { id: "intro-to-db", title: 'Detailed Design', description: 'Develop detailed design documents for each component', completed: false },
        ]
    },
    {
        title: "Technical Decisions",
        steps: [
            { id: "intro-to-db", title: 'Technology Stack Selection', description: 'Choose appropriate technologies and frameworks', completed: true },
            { id: "intro-to-db", title: 'Data Modeling', description: 'Design the data schema and relationships', completed: false },
            { id: "intro-to-db", title: 'API Design', description: 'Define API endpoints and protocols', completed: true },
        ]
    },
    {
        title: "Advanced Concepts",
        steps: [
            { id: "intro-to-db", title: 'Scalability Planning', description: 'Plan for horizontal and vertical scaling', completed: false },
            { id: "intro-to-db", title: 'Security Considerations', description: 'Implement security measures and best practices', completed: false },
            { id: "intro-to-db", title: 'Performance Optimization', description: 'Identify and resolve performance bottlenecks', completed: false },
            { id: "intro-to-db", title: 'Monitoring and Logging', description: 'Set up monitoring tools and logging mechanisms', completed: false },
        ]
    }
];

const TimelineStep: React.FC<{
    step: Step;
    isLast: boolean;
}> = ({ step, isLast }) => {
    const title = step.title
    const completed = step.completed
    return (
        <li className="relative">
            <hr className={completed ? "bg-primary rounded-none" : 'rounded-none'} />
            <div className={`timeline-line ${isLast ? 'hidden' : ''}`} />
            <div className={`timeline-start`}>
                <Link href={`resources/${step.id}`}><h3 className="font-bold text-grey-800">{title}</h3></Link>
            </div>
            <div className={`timeline-middle timeline-end`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={completed ? "#FFC107" : "currentColor"} className="w-5 h-5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
            </div>
            <div className={`timeline-end md:hidden`}></div>
            <hr className={completed ? "bg-primary rounded-none" : 'rounded-none'} />
        </li>
    )
};

const TimelineSection: React.FC<{
    title: string;
    steps: Step[];
}> = ({ title, steps }) => (
    <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">{title}</h2>
        <ul className="timeline timeline-vertical">
            {steps.map((step, index) => (
                <TimelineStep
                    key={index}
                    step={step}
                    isLast={index === steps.length - 1}
                />
            ))}
        </ul>
    </div>
);

const SystemsDesignRoadmap = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-amber-600 text-center">Systems Design Roadmap</h1>
            {roadmapSections.map((section, index) => (
                <TimelineSection key={index} title={section.title} steps={section.steps} />
            ))}
        </div>
    );
};

export default SystemsDesignRoadmap;
