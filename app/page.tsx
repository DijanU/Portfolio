"use client"

import type React from "react"

import { useState } from "react"
import { Heart, MoreHorizontal, Clock, ChevronDown, Info, CheckCircle, Circle, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

type TechItem = {
  name: string
  logo: string | React.ReactNode
  category: string
  proficiency: "Fluent" | "Used it before" | "Learning"
  imageSrc?: string
}

const techStack: TechItem[] = [
  { name: "C", logo: "", category: "Systems", proficiency: "Fluent", imageSrc: "/images/c.png" },//
  { name: "C++", logo: "", category: "Systems", proficiency: "Fluent", imageSrc: "/images/cpp.png" },//
  { name: "C#", logo: "", category: "Backend", proficiency: "Fluent", imageSrc: "/images/csharp.svg" },//
  { name: "TypeScript", logo: "", category: "Frontend", proficiency: "Fluent", imageSrc: "/images/typescript.png" },//
  { name: "React", logo: "", category: "Frontend", proficiency: "Fluent", imageSrc: "/images/react.png" },//
  { name: "JavaScript", logo: "", category: "Frontend", proficiency: "Fluent", imageSrc: "/images/javascript.png" },//
  { name: "Next.js", logo: "", category: "Frontend", proficiency: "Learning", imageSrc: "/images/nextjs.png" },//
  { name: "HTML", logo: "", category: "Frontend", proficiency: "Fluent", imageSrc: "/images/html.png" },//
  { name: "CSS", logo: "", category: "Frontend", proficiency: "Fluent", imageSrc: "/images/css.svg" },//
  { name: "Python", logo: "", category: "Backend", proficiency: "Fluent", imageSrc: "/images/python.png" },//
  { name: "Java", logo: "", category: "Backend", proficiency: "Fluent", imageSrc: "/images/java.png" },//
  { name: "Go", logo: "", category: "Backend", proficiency: "Fluent", imageSrc: "/images/go-logo.png" },//
  { name: "Rust", logo: "", category: "Systems", proficiency: "Used it before", imageSrc: "/images/rust.png" },//
  { name: "PHP", logo: "", category: "Backend", proficiency: "Used it before", imageSrc: "/images/php.svg" },//
  { name: "SQL", logo: "", category: "Database", proficiency: "Fluent", imageSrc: "/images/sql.png" },//
  { name: "PostgreSQL", logo: "", category: "Database", proficiency: "Fluent", imageSrc: "/images/postgresql.png" },//
  { name: "MongoDB", logo: "", category: "Database", proficiency: "Learning", imageSrc: "/images/mongodb.svg" },//
  { name: "Git", logo: "", category: "Tools", proficiency: "Fluent", imageSrc: "/images/git.png" },//
  { name: "Github", logo: "", category: "Tools", proficiency: "Fluent", imageSrc: "/images/github.svg" },//
  { name: "Docker", logo: "", category: "Tools", proficiency: "Used it before", imageSrc: "/images/docker-logo.png" },//
  { name: "Bun", logo: "", category: "Runtime", proficiency: "Fluent", imageSrc: "/images/bao-logo.png" },//
  { name: "Laravel", logo: "", category: "Backend", proficiency: "Used it before", imageSrc: "/images/laravel-logo-red.png" },//
  { name: "Vite", logo: "", category: "Frontend", proficiency: "Fluent", imageSrc: "/images/vite.png" },//
  { name: "Vitest", logo: "", category: "Tools", proficiency: "Learning", imageSrc: "/images/vitest.svg" },//
  { name: "SQLite", logo: "", category: "Database", proficiency: "Used it before", imageSrc: "/images/sqlite.svg" },//
  { name: "Overleaf", logo: "", category: "Tools", proficiency: "Fluent", imageSrc: "/images/overleaf.png" },// --
  { name: "R", logo: "", category: "Data Science", proficiency: "Used it before", imageSrc: "/images/r.png" },//
  { name: "Firebase", logo: "", category: "Backend", proficiency: "Used it before", imageSrc: "/images/firebase.png" },//
  { name: "Postman", logo: "", category: "Tools", proficiency: "Used it before", imageSrc: "/images/postman.png" },//
  { name: "VS Code", logo: "", category: "Tools", proficiency: "Fluent", imageSrc: "/images/vscode.png" },//
  { name: "RabbitMQ", logo: "", category: "Tools", proficiency: "Learning", imageSrc: "/images/rabbitmq.png" },//
  { name: "Eslint", logo: "", category: "Tools", proficiency: "Fluent", imageSrc: "/images/eslint.png" },//
  { name: "Ubuntu", logo: "", category: "Systems", proficiency: "Used it before", imageSrc: "/images/ubuntu.png" },//
  { name: "CUDA", logo: "", category: "Systems", proficiency: "Used it before", imageSrc: "/images/cuda.svg" },// --
  { name: "Jira", logo: "", category: "Tools", proficiency: "Learning", imageSrc: "/images/jira.svg" },// 
  { name: "Prisma", logo: "", category: "Database", proficiency: "Learning", imageSrc: "/images/prisma.png" },// --
  { name: "ChatGPT", logo: "", category: "AI", proficiency: "Fluent", imageSrc: "/images/chatgpt.png" },//
  { name: "Gemini", logo: "", category: "AI", proficiency: "Fluent", imageSrc: "/images/gemini.png" },//
  { name: "V0", logo: "", category: "AI", proficiency: "Fluent", imageSrc: "/images/v0.png" },//
  { name: "Deepseek", logo: "", category: "AI", proficiency: "Fluent", imageSrc: "/images/deepseek.png" },//
]



const projects = [
  {
    id: 1,
    title: "Steamom - Study Case",
    description: "HCI, Next.js prototype",
    duration: "4:32",
    plays: "1,234,567",
    tech: "Next.js, React, TypeScript",
    completed: true,
    url: "https://www.canva.com/design/DAGnkGXX6DI/Dv8Ywiy9oAS3Q_jObVe0Eg/edit?utm_content=DAGnkGXX6DI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 2,
    title: "IndiePlay - Study Case",
    description: "HCI, Next.js prototype",
    duration: "3:45",
    plays: "987,653",
    tech: "Next.js, React, Game APIs",
    completed: true,
    url: "https://www.canva.com/design/DAGpWKbXMCI/N9X-UVrFsZckZj_XkY3BUA/edit?utm_content=DAGpWKbXMCI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
  {
    id: 3,
    title: "CSS-only - Barcelona Shield",
    description: "Pure CSS animations and effects",
    duration: "5:12",
    plays: "756,431",
    tech: "HTML, CSS",
    completed: true,
    url: "https://calicheoficial.lat/luis/CSS-only/",
  },
  {
    id: 4,
    title: "Pro Calculator",
    description: "iPhones calculator competition (not really)",
    duration: "6:28",
    plays: "543,209",
    tech: "Bun.js, Vite, React",
    completed: true,
    url: "https://calicheoficial.lat/luis/calcu/",
  },
  {
    id: 5,
    title: "HTML only",
    description: "Get to know my humor ina short story",
    duration: "3:56",
    plays: "432,107",
    tech: "HTML",
    completed: true,
    url: "https://calicheoficial.lat/luis/html/",
  },
    {
    id: 6,
    title: "Poolcenter",
    description: "DB & backend endpoints",
    duration: "3:56",
    plays: "79,561",
    tech: "Express.js, PostgreSQL",
    completed: false,
    url: "https://poolcenter.fun/",
  },
  {
    id: 7,
    title: "Postgres transaction Crash tests",
    description: "Github repo",
    duration: "3:56",
    plays: "24,503",
    tech: "Rust, PostgreSQL",
    completed: true,
    url: "https://github.com/nilsmuralles/Rust-Eze.git",
  },
  {
    id: 8,
    title: "Monty Hall game Monte Carlo Simulation",
    description: "Github repo",
    duration: "3:56",
    plays: "7,231",
    tech: "Python",
    completed: true,
    url: "https://github.com/DijanU/TP_Proyecto4.git",
  },
]

const aboutMeItems = [
  {
    title: "Secret Identity",
    description: "Luis Francisco Padilla — but you can call me Dijan.",
  },
  {
    title: "Vibe",
    description:
      "- Matcha-fueled, low-key developer with a taste for clean code and abstract chaos.\n" +
      "- Improvisation Expert: I like to be as surprised as the people around me are by my achievements.\n" +
      "- Dark Mode: Required\n" +
      "- Kills: 137 bugs squashed\n" +
      "- Last Save: Today, 03:14 AM",
  },
  {
    title: "Main Quests",
    description:
      "- Computer Science Engineering student\n" +
      "- Gymbro mode: Bodybuilding + aesthetics",
  },
  {
    title: "Secondary Quests",
    description:
      "- Applied Math student & algorithm optimization geek\n" +
      "- Music discovery: indiewave supporter\n" +
      "- Football Midfielder: the goal dealer",
  },
  {
    title: "Side Quests",
    description:
      "- Breaking stuff to learn fast. Optimizing for fun.\n - Exploring weird tech.\n\"- Not all bugs are enemies — some are teachers.\"",
  },
  {
    title: "Music",
    description:
      "- Alt rock, punk, grunge, metal, chillwave, and game OSTs.\n- Code flows better to rhythm.",
  },
  {
    title: "Favorite Show",
    description:
      "Cowboy Bebop — jazz, space melancholy, nonlinear perfection. Nothing tops it.",
  },
  {
    title: "Gaming Lore",
    description:
      "- Started gaming at age 3.\n- Hack & Slash and DOOM-core lover.\n- Indie game supporter with a retro soul.",
  },
  {
    title: "Dev Tools",
    description:
      "VS Code, Git, Docker, Firebase, Postman, Vercel — and a terminal I actually trust.",
  },
{
  title: "Contact",
  description:
    "Git: DijanU\nEmail: luisfran11padilla@gmail.com",
},
];


export default function SpotifyPortfolio() {
  const [currentDegree, setCurrentDegree] = useState(0)
  const [expandedAbout, setExpandedAbout] = useState<number | null>(null)
  const [isFavorited, setIsFavorited] = useState(false) //<- HERE (new state for favorite status)
  const [showBookmarkTooltip, setShowBookmarkTooltip] = useState(false) //<- HERE (new state for tooltip visibility)

  const degrees = [
    {
      name: "Computer Science",
      progress: 50,
      color: "from-blue-600 to-purple-600",
      image: "/images/computer-science.png",
    },
    {
      name: "Applied Mathematics",
      progress: 35,
      color: "from-green-600 to-blue-600",
      image: "/images/applied-math.svg",
    },
  ]

  const toggleMajor = () => {
    setCurrentDegree((prev) => (prev + 1) % 2)
  }

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited)

    // Show helpful tooltip
    setShowBookmarkTooltip(true)
    setTimeout(() => setShowBookmarkTooltip(false), 3000)

    // Try different bookmark methods based on browser
    const url = window.location.href
    const title = "Dijan__dev - Portfolio"

    // Method 1: Try the old bookmark method (works in some older browsers)
    if ((window as any).sidebar && (window as any).sidebar.addPanel) {
      ;(window as any).sidebar.addPanel(title, url, "")
    }
    // Method 2: Try Internet Explorer method
    else if ((window as any).external && (window as any).external.AddFavorite) {
      ;(window as any).external.AddFavorite(url, title)
    }
    // Method 3: Show instructions for manual bookmarking
    else {
      // For modern browsers, we can't add bookmarks directly
      // But we can copy the URL to clipboard as a helpful gesture
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(url)
          .then(() => {
            console.log("Portfolio URL copied to clipboard!")
          })
          .catch(() => {
            console.log("Could not copy URL to clipboard")
          })
      }
    }
  }

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Fluent":
        return "bg-green-600 hover:bg-green-500"
      case "Used it before":
        return "bg-amber-500 hover:bg--amber-500"
      case "Learning":
        return "bg-purple-600 hover:bg-purple-500"
      default:
        return "bg-zinc-800 hover:bg-zinc-700"
    }
  }

  const getProficiencyTextColor = (proficiency: string) => {
    switch (proficiency) {
      case "Fluent":
        return "text-green-400"
      case "Used it before":
        return "text-amber-400"
      case "Learning":
        return "text-purple-400"
      default:
        return "text-zinc-400"
    }
  }

    // Function to render text with line breaks
  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ))
  }

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .white-progress .bg-primary {
          background-color: white;
        }
        .white-progress [data-state="complete"] {
          background-color: white;
        }
      `}</style>
      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Tech Stack Icons Only */}
        <div className="w-20 bg-zinc-900 flex flex-col">
          <div className="p-4 border-b border-zinc-800 flex items-center justify-center">
            <div className="group relative cursor-help">
              <div className="flex items-center space-x-1">
                <h2 className="text-sm font-bold">Tech</h2>
                <Info className="w-3 h-3 text-zinc-400" />
              </div>

              {/* Custom tooltip that's always visible on hover */}
              <div className="absolute left-full ml-2 top-0 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-zinc-800 text-white rounded-md shadow-lg p-3 w-48">
                  <h3 className="font-semibold mb-2">Proficiency Legend</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Green → Fluent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <span className="text-sm">Amber → Used it Before</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span className="text-sm">Purple → Learning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ScrollArea className="flex-1 p-2 [&>div>div[style]]:!mr-0">
            <div className="flex flex-col items-center space-y-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="group relative">
                  <button
                    className={`w-12 h-12 flex items-center justify-center text-2xl rounded-md transition-colors ${getProficiencyColor(
                      tech.proficiency,
                    )}`}
                  >
                    {tech.imageSrc ? (
                      <Image
                        src={tech.imageSrc || "/placeholder.svg"}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      tech.logo
                    )}
                  </button>

                  {/* Custom tooltip that's always visible on hover */}
                  <div className="absolute left-full ml-2 top-0 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-zinc-800 text-white rounded-md shadow-lg p-3">
                      <p className="font-medium">{tech.name}</p>
                      <p className="text-xs text-zinc-400">{tech.category}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            tech.proficiency === "Fluent"
                              ? "bg-green-500"
                              : tech.proficiency === "Used it before"
                                ? "bg-amber-500"
                                : "bg-purple-500"
                          }`}
                        ></div>
                        <p className={`text-xs font-medium ${getProficiencyTextColor(tech.proficiency)}`}>
                          {tech.proficiency}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Main Content - Projects */}
        <div className="flex-1 bg-gradient-to-b from-zinc-800 to-black p-6 overflow-y-scroll scrollbar-hide">
          <div className="mb-8">
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-48 h-48 rounded-lg overflow-hidden">
                <Image
                  src="/images/profile.jpeg"
                  alt="Dijan Profile Picture"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-zinc-400 mb-2">Portfolio</p>
                <h1 className="text-6xl font-bold mb-4">Dijan__dev</h1>
                <p className="text-zinc-400">
                  <span className="font-semibold">Backend Developer</span> • 2025 • {projects.length} projects •
                  <span className="text-green-400"> Fluent use of AI's as tools</span>
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="text-2xl font-bold text-green-400">Projects</div>
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFavoriteClick}
                  className={`transition-colors ${isFavorited ? "text-red-500 hover:text-red-400" : "text-zinc-400 hover:text-red-500"}`}
                >
                  <Heart className={`w-6 h-6 ${isFavorited ? "fill-current" : ""}`} />
                </Button>

                {/* <- HERE (new bookmark instruction tooltip) */}
                {showBookmarkTooltip && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50">
                    <div className="bg-zinc-800 text-white rounded-md shadow-lg p-3 w-64">
                      <div className="flex items-center space-x-2 mb-2">
                        <Bookmark className="w-4 h-4 text-green-400" />
                        <span className="font-medium text-sm">Bookmark this portfolio!</span>
                      </div>
                      <p className="text-xs text-zinc-300">
                        Press <kbd className="bg-zinc-700 px-1 rounded">Ctrl+D</kbd> (or{" "}
                        <kbd className="bg-zinc-700 px-1 rounded">Cmd+D</kbd> on Mac) to bookmark this page
                      </p>
                      <p className="text-xs text-zinc-400 mt-1">URL copied to clipboard! 📋</p>
                    </div>
                  </div>
                )}
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Projects Table */}
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-4 px-4 py-2 text-sm text-zinc-400 border-b border-zinc-800">
              <div className="col-span-1">✓</div>
              <div className="col-span-5">Title</div>
              <div className="col-span-3">Technology</div>
              <div className="col-span-2">Views</div>
              <div className="col-span-1">
                <Clock className="w-4 h-4" />
              </div>
            </div>

            {projects.map((project, index) => (
              <div
                key={project.id}
                className="grid grid-cols-12 gap-4 px-4 py-3 hover:bg-zinc-800 rounded-md group cursor-pointer relative"
                onClick={() => window.open(project.url, "_blank")}
              >
                <div className="col-span-1 text-zinc-400">{project.completed ? (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  ) : (
                    <Circle className="w-4 h-4 text-zinc-500" />
                  )}</div>
                <div className="col-span-5">
                  <div className="font-medium">{project.title}</div>
                  <div className="text-sm text-zinc-400">{project.description}</div>
                </div>
                <div className="col-span-3 text-sm text-zinc-400">{project.tech}</div>
                <div className="col-span-2 text-sm text-zinc-400">{project.plays}</div>
                <div className="col-span-1 text-sm text-zinc-400">{project.duration}</div>

                {/* Hover effect to indicate clickable */}
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 rounded-md transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - About Me */}
        <div className="w-80 bg-zinc-900 p-4 overflow-y-scroll scrollbar-hide">
          <div className="mb-6">
            <div className="space-y-2">
              {aboutMeItems.map((item, index) => (
                <div key={index} className="border-b border-zinc-800 pb-2">
                  <button
                    className="w-full text-left flex items-center space-x-3 p-2 hover:bg-zinc-800 rounded-md transition-colors"
                    onClick={() => setExpandedAbout(expandedAbout === index ? null : index)}
                  >
                    <span className="text-sm font-medium flex-1">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${expandedAbout === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedAbout === index && (
                    <div className="px-3 py-2">
                      <p className="text-xs text-zinc-400 leading-relaxed">{renderTextWithLineBreaks(item.description)}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Player - Absolutely Positioned Progress Bar */}
      <div className="bg-zinc-900 border-t border-zinc-800 px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Left - Currently Studying */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-zinc-800">
              <Image
                src={degrees[currentDegree].image || "/placeholder.svg"}
                alt={`${degrees[currentDegree].name} illustration`}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-white">Currently Studying</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-zinc-300">
                  {degrees[currentDegree].name} - {degrees[currentDegree].progress}% Complete
                </span>
                <Button variant="ghost" size="sm" className="h-5 w-5 p-0 hover:bg-zinc-700" onClick={toggleMajor}>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right - Backend Switch Button */}
          <div className="flex items-center">
            <Button
              variant="secondary"
              className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105"
              onClick={() => window.open("/portfolio.html", "_blank")}
            >
              Switch to backend_dev version
            </Button>
          </div>
        </div>

        {/* Absolutely Positioned Progress Bar - Always Centered */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80">
            <Progress value={degrees[currentDegree].progress} className="h-2 bg-zinc-700 white-progress" />
            <div className="flex justify-end mt-1">
              <span className="text-xs text-zinc-400">{degrees[currentDegree].progress}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
