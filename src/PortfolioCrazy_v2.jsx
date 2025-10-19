import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Menu,
  X,
  Briefcase,
  Award,
  FileCheck,
  Rocket,
  ExternalLink,
  Globe,
  Sparkles,
  MonitorSmartphone,
  Instagram,
} from "lucide-react";

export default function PortfolioCrazyV2() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => setMounted(true), []);

  const projects = useMemo(
    () => [
      {
        title: "YOC.ai - Personal Interview Coach",
        blurb:
          "Personalized AI Coach for Interview Trainings helping improve your confidence.",
        tags: ["Next.js", "Typescript", "VAPI", "ShadCN"],
        links: [
          { href: "https://yoc-ai.vercel.app/", label: "Live", icon: Globe },
          { href: "https://github.com/KeshavDeploys/YOC.ai", label: "Code", icon: Github },
        ],
        stats: { accuracy: "80%", downtime: "< 120ms" },
      },
      {
        title: "Serverless Feedback Collector",
        blurb:
          "Built and deployed on AWS with no server management, with access to admin dashboard.",
        tags: ["AWS Lambda", "CSS", "Javascript", "DynamoDB"],
        links: [
          { href: "https://github.com/KeshavDeploys/Serverless-Feedback-Collector-AWS", label: "Code", icon: Github },
        ],
        stats: { accuracy: "99%", downtime: "<1.1s" },
      },
      {
        title: "Serverless Attendence System.",
        blurb:
          "Attendence System with realtime image processing using AWS Rekognition with 99% accuracy.",
        tags: ["AWS Rekognition", "DynamoDB", "Amazon S3", "API Gateway"],
        links: [
          { href: "https://github.com/KeshavDeploys/Serverless-Attendance-System-using-AWS", label: "Code", icon: Github },
        ],
        stats: { downtime: "< 80ms", cost: "↓37%" },
      },
    ],
    []
  );

  const experiences = [
    {
      role: "AWS Engineer Intern",
      company: "F13 Technologies Ltd.",
      period: "June 2025 – Sept 2025",
      description:
        "Built a real-time attendance system on AWS, processing 200+ daily logs via Rekognition.Migrated a multi-vendor e-commerce  platform to AWS, cutting costs by 25% with zero downtime.\n Developed a serverless feedback app handling 100+ submissions weekly using AWS Lambda.",
      technologies: ["AWS", "Node.js", "Docker", "React"],
    },
    {
      role: "Cloud Intern",
      company: "WorRisGo",
      period: "March 2025 – April 2025",
      description:
        "Deployed a full-stack app on AWS Elastic Beanstalk.Built a serverless To-Do app with AWS Lambda + API Gateway.Implemented a login system using AWS Cognito + LAMP stack.",
      technologies: ["AWS", "Python", "Azure VM", "PostmanAPI"],
    },
    {
      role: "Project Intern",
      company: "TekNavigators Staffing",
      period: "July 2023 – Sept 2023",
      description: "Integration of robotic platforms with IoT systems.Participation in cloud-based IoT application development.",
      technologies: ["IOT", "Javascript", "Robotics"],
    },
  ];

  const responsibilties = [
    {
      title: "Cloud Lead",
      organization: "The Victors Club",
      year: "2025",
      description: "Taught 200+ students about AWS and Cloud Career Options.",
    },
    {
      title: "Technical Lead",
      organization: "The CyberSapiens",
      year: "2025",
      description: "Just the responsible technical lead + and handling the website for the club.",
    },
    {
      title: "Social Media Manager",
      organization: "E-Cell - DCE Gurugram",
      year: "2025",
      description: "Managing the socials for the club and enjoying connecting with new people.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services(AWS)",
      date: "July 2025",
      credentialId: "70c346eb4d3e4951a4044f20241fa52f",
    },
    {
      name: "AWS Partner: Cloud Economics",
      issuer: "Amazon Web Services(AWS)",
      date: "2025",
      credentialId: "be19466b-d654-4fd5-8f14-262e0f752da8",
    },
    {
      name: "AWS Partner: Digital Sovereignty on AWS (Technical)",
      issuer: "Amazon Web Services(AWS)",
      date: "2025",
      credentialId: "4336ce8b-b2b0-4a96-a5e4-eae8858fd9f6",
    },
    {
      name: "AWS Partner: Generative AI Essentials",
      issuer: "Amazon Web Services(AWS)",
      date: "2025",
      credentialId: "b6ba12c4-eeff-4dd3-86d9-9a43f3434d29",
    },
    {
      name: "AI/ML Workshop Participation",
      issuer: "IIT Roorkee",
      date: "2024",
      credentialId: "7412a5cd-2385-4f64-aff7-21e35c3b6529",
    },
    {
      name: "AWS Partner: Technical Accredited",
      issuer: "Amazon Web Services(AWS)",
      date: "2025",
      credentialId: "86ee59ca-01e7-4088-ba3a-f6d911ce301a",
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono selection:bg-purple-600/40">
      <Background prefersReducedMotion={prefersReducedMotion} />

      {/* NAV */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-black/50 border-b border-purple-900/30">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 blur-xl opacity-60 bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 rounded-full" />
              <span className="relative w-9 h-9 sm:w-10 sm:h-10 grid place-items-center rounded-full border border-purple-400/40">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
            <span className="text-base sm:text-xl tracking-widest uppercase text-purple-300">
              Keshav<span className="text-fuchsia-400">.Deploys</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm">
            {['about', 'rig', 'experience', 'projects', 'responsibilties', 'certifications', 'skills'].map((s) => (
              <a key={s} href={`#${s}`} className="text-gray-400 hover:text-purple-300 transition-colors">
                {s}
              </a>
            ))}

            {/* Resume button (desktop) */}
            {/* <a
              href="/Portfolio-v2/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white transition-all min-h-[44px]"
              aria-label="Open resume"
            >
              <FileCheck className="w-4 h-4" />
              <span className="hidden sm:inline">resume</span>
            </a> */}

            {/* Contact button (desktop) */}
            <a href="mailto:keshavdeploys@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-purple-900/60 text-gray-300 hover:border-purple-500 hover:text-purple-200 transition-all min-h-[44px]">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">contact</span>
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-purple-900/40 text-purple-300 hover:bg-purple-900/20 transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Drawer */}
        {open && (
          <div className="md:hidden border-t border-purple-900/30 bg-black/70 backdrop-blur py-4 px-4 space-y-3">
            {['about', 'rig', 'experience', 'projects', 'responsibilties', 'certifications', 'skills'].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="block py-2 px-3 rounded-lg border border-purple-900/30 text-purple-200 hover:bg-purple-900/20"
              >
                {s}
              </a>
            ))}

            {/* Resume link (mobile) */}
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-3 rounded-lg border border-purple-900/30 text-purple-200 hover:bg-purple-900/20"
              aria-label="Open resume"
              onClick={() => setOpen(false)}
            >
              <FileCheck className="w-4 h-4" />
              <span>resume</span>
            </a>

            {/* Contact (mobile) */}
            <a href="mailto:keshavdeploys@gmail.com" onClick={() => setOpen(false)} className="flex items-center gap-2 py-2 px-3 rounded-lg border border-purple-900/30 text-purple-200 hover:bg-purple-900/20">
              <Mail className="w-4 h-4" />
              <span>contact</span>
            </a>
          </div>
        )}
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* HERO */}
        <section id="about" className="py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h1 className="text-[clamp(1.75rem,6vw,3.5rem)] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-400 to-indigo-400">
                from code to cloud.
              </h1>
              <p className="mt-4 text-[clamp(0.85rem,2.3vw,1.125rem)] text-gray-400 leading-relaxed">
                Hey! i'm <span className="text-purple-300 font-semibold">keshav</span>. I design resilient, cost-efficient, and aws-driven solutions. i love modular stacks, smooth scaling, and performance that slaps in every region.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white transition-all min-h-[44px]">
                  <Rocket className="w-4 h-4" />
                  <span>see projects</span>
                </a>
                {/* Small resume CTA inside hero for mobile users */}
                <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-xl border-2 border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white transition-all min-h-[44px]">
                  <FileCheck className="w-4 h-4" />
                  <span>resume</span>
                </a>
              </div>

              <div className="mt-6 flex gap-4">
                <IconLink href="https://www.linkedin.com/in/keshav-kumar-3649812b5/" icon={Linkedin} label="LinkedIn" />
                <IconLink href="https://github.com/KeshavDeploys" icon={Github} label="GitHub" />
                <IconLink href="https://www.instagram.com/_keshav.exe/" icon={Instagram} label="Twitter" />
              </div>
            </div>

            {/* System Panel (ASCII logo) */}
            <div className="relative">
              <Panel prefersReducedMotion={prefersReducedMotion} />
            </div>
          </div>
        </section>

        {/* ASCII PC / RIG */}
        <section id="rig" className="py-10 sm:py-14 lg:py-18">
          <div className="flex items-center gap-3 mb-5 sm:mb-7">
            <MonitorSmartphone className="text-purple-300" size={22} />
            <h2 className="text-2xl sm:text-3xl text-purple-300 font-bold">{'<'} MechaMon {'/>'}</h2>
          </div>
          <ASCIIPC />
        </section>

        {/* EXPERIENCE (Horizontal Rows) */}
        <section id="experience" className="py-10 sm:py-14 lg:py-18">
          <SectionTitle icon={Briefcase} title="< experience />" />
          <div className="space-y-4">
            {experiences.map((e, idx) => (
              <ExperienceRow key={idx} data={e} disableHover={isTouch} />
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-10 sm:py-14 lg:py-18">
          <SectionTitle icon={Rocket} title="< projects />" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-7">
            {projects.map((p) => (
              <CardHover key={p.title} disableHover={isTouch}>
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl text-purple-200 font-semibold">{p.title}</h3>
                  <span className="text-[10px] text-purple-400/70 border border-purple-800/40 rounded px-2 py-0.5">
                    featured
                  </span>
                </div>
                <p className="mt-2 text-gray-400 text-sm sm:text-base">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-purple-900/30 text-purple-300 text-xs border border-purple-800/50">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {p.links.map(({ href, label, icon: Icon }) => (
                    <a key={label} href={href} className="inline-flex items-center gap-1 text-sm text-purple-300 hover:text-white transition-colors underline-offset-4 hover:underline">
                      <Icon className="w-4 h-4" /> {label}
                    </a>
                  ))}
                </div>
                <div className="mt-4 text-[11px] text-gray-500">
                  {Object.entries(p.stats).map(([k, v]) => (
                    <span key={k} className="mr-3">{`${k}: ${v}`}</span>
                  ))}
                </div>
              </CardHover>
            ))}
          </div>
        </section>

        {/* responsibilties */}
        <section id="responsibilties" className="py-10 sm:py-14 lg:py-18">
          <SectionTitle icon={Award} title="< responsibilties />" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {responsibilties.map((a) => (
              <CardHover key={a.title} disableHover={isTouch}>
                <div className="flex items-start justify-between mb-2">
                  <Award className="text-purple-300" size={20} />
                  <span className="text-purple-400 text-xs">{a.year}</span>
                </div>
                <h3 className="text-purple-200 font-semibold">{a.title}</h3>
                <p className="text-gray-500 text-xs">{a.organization}</p>
                <p className="mt-2 text-gray-400 text-sm">{a.description}</p>
              </CardHover>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-10 sm:py-14 lg:py-18">
          <SectionTitle icon={FileCheck} title="< certifications />" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
            {certifications.map((c) => (
              <CardHover key={c.name} disableHover={isTouch}>
                <div className="flex items-start justify-between">
                  <FileCheck className="text-purple-300" size={20} />
                  <span className="text-purple-400 text-xs">{c.date}</span>
                </div>
                <h3 className="text-purple-200 font-semibold mt-1">{c.name}</h3>
                <p className="text-gray-400 text-sm">{c.issuer}</p>
                <p className="text-gray-500 text-xs mt-2">ID: {c.credentialId}</p>
              </CardHover>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-10 sm:py-14 lg:py-18">
          <h2 className="text-2xl sm:text-3xl text-purple-300 font-bold mb-6 sm:mb-8">
            {"<"} skills {"/>"}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3 sm:gap-4">
            {[
              "AWS","React","S3","Python","EC2","Azure VM","Kubernetes","Docker","VPC","Git","Next.js","Tailwind CSS","DynamoDB","AWS Lambda",
            ].map((skill) => (
              <div
                key={skill}
                className="px-3 sm:px-4 py-3 rounded-lg bg-gray-900/70 border border-purple-900/40 text-center hover:border-purple-500 hover:bg-gray-900 transition-all"
              >
                <span className="text-purple-200 text-xs sm:text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="py-10 border-t border-purple-900/30 text-center text-gray-500">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} Keshav Kumar. built with 💕 & ton of ai.
          </p>
        </footer>
      </main>
    </div>
  );
}

/* ---------- Components ---------- */

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6 sm:mb-8">
      <Icon className="text-purple-300" size={22} />
      <h2 className="text-2xl sm:text-3xl text-purple-300 font-bold">{title}</h2>
    </div>
  );
}

function IconLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-purple-900/40 text-purple-300 hover:bg-purple-900/20 transition-colors"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}

function CardHover({ children, disableHover }) {
  return (
    <div
      className={
        "transition-transform duration-200 bg-gray-900/70 border border-purple-900/40 rounded-2xl p-5 relative overflow-hidden " +
        (disableHover ? "" : "hover:-translate-y-0.5 hover:border-purple-500")
      }
    >
      <div aria-hidden className="pointer-events-none absolute -inset-1 opacity-0 hover:opacity-30 transition-opacity blur-2xl bg-gradient-to-br from-purple-600/40 via-fuchsia-500/30 to-indigo-500/30" />
      {children}
    </div>
  );
}

function ExperienceRow({ data, disableHover }) {
  return (
    <div
      className={
        "w-full bg-gray-900/70 border border-purple-900/40 rounded-2xl p-5 sm:p-6 " +
        (disableHover ? "" : "hover:border-purple-500 transition-colors")
      }
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl text-purple-200 font-semibold">{data.role}</h3>
          <p className="text-gray-400 text-sm">{data.company}</p>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">{data.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {data.technologies.map((t) => (
              <span key={t} className="px-2 py-1 rounded bg-purple-900/30 text-purple-300 text-xs border border-purple-800/50">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="md:text-right shrink-0">
          <span className="inline-block text-purple-400 text-xs sm:text-sm border border-purple-800/40 rounded px-2 py-1">
            {data.period}
          </span>
        </div>
      </div>
    </div>
  );
}

function Panel({ prefersReducedMotion }) {
  const ascii = useMemo(
    () => [
      "██╗  ██╗███████╗███████╗██╗  ██╗ █████╗ ██╗   ██╗",
      "██║ ██╔╝██╔════╝██╔════╝██║  ██║██╔══██╗██║   ██║",
      "█████╔╝ █████╗  ███████╗███████║███████║██║   ██║",
      "██╔═██╗ ██╔══╝  ╚════██║██╔══██║██╔══██║╚██╗ ██╔╝",
      "██║  ██╗███████╗███████║██║  ██║██║  ██║ ╚████╔╝ ",
      "╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝  ╚═══╝  ",
    ],
    []
  );
  return (
    <div className="relative rounded-2xl border border-purple-900/40 bg-gray-950/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(147,51,234,0.06),transparent_40%)]" />
      <div className="p-5 lg:p-7">
        <pre className="text-[10px] sm:text-xs leading-tight text-purple-300/90 overflow-x-auto">{ascii.join("\n")}</pre>
        <div className="mt-4 grid grid-cols-2 gap-3 text-[11px] sm:text-xs">
          <SystemRow k="Status" v="Active ✓" />
          <SystemRow k="Latency" v="~0ms" />
          <SystemRow k="Mode" v="Cloud Engineer" />
          <SystemRow k="Efficiency" v="99.99%" />
        </div>
      </div>
      {!prefersReducedMotion && (
        <div className="absolute -inset-1 animate-scanline pointer-events-none" aria-hidden />
      )}
    </div>
  );
}

function ASCIIPC() {
  const rig = [
    "        ___________________________",
    "       |  _______________________  |",
    "       | |   __   __   __   __   | |   ┌───────────────┐",
    "       | |  |__| |__| |__| |__|  | |   │  SERVER  ON   │",
    "       | |   ____  ____  ____    | |   └───────────────┘",
    "       | |  |____||____||____|   | |",
    "       | |   __   __   __   _    | |   Provider : AWS",
    "       | |  |__| |__| |__| |__|  | |   Region   : ap-south-1 (Mumbai)",
    "       | |   __   __   __   __   | |   Infra    : EC2 + S3 + RDS",
    "       | |  |__| |__| |__| |__|  | |   Runtime  : Docker / K8s",
    "       | |_______________________| |   OS       : Linux",
    "       |___________________________|",
    "             /             \\",
    "            /_______________\\",
  ].join("\n");

  return (
    <div className="rounded-2xl border border-purple-900/40 bg-gray-950/60 p-4 sm:p-6 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
        <pre className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm leading-tight text-purple-300/90 overflow-x-auto md:overflow-hidden">{rig}</pre>
        <div className="space-y-3 text-xs sm:text-sm text-gray-300">
          <p className="text-gray-400">
            Hi welcome to my portfolio server :)
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {["Quiet Builds", "DevOps Learner", "99.9% uptime", "CI/CD Ready", "Scalable Person", "AWS Gekko"].map((f) => (
              <li key={f} className="px-2 py-1 rounded bg-black/40 border border-purple-900/30">{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SystemRow({ k, v }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 rounded bg-black/40 border border-purple-900/30">
      <span className="text-gray-400">{k}</span>
      <span className="text-purple-300">{v}</span>
    </div>
  );
}

function Background({ prefersReducedMotion }) {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 opacity-70 bg-[linear-gradient(to_right,transparent_0,transparent_95%,rgba(168,85,247,0.08)_95%),linear-gradient(to_bottom,transparent_0,transparent_95%,rgba(168,85,247,0.08)_95%)] bg-[length:18px_18px]" />
      <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] md:w-[40rem] md:h-[40rem] rounded-full bg-purple-600/20 blur-[90px]" />
      <div className="absolute top-1/3 -right-20 w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem] rounded-full bg-fuchsia-500/20 blur-[80px]" />
      {!prefersReducedMotion && (
        <div className="absolute inset-0 animate-scanline pointer-events-none" />
      )}
    </div>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

function useIsTouchDevice() {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setTouch(hasTouch);
  }, []);
  return touch;
}

const _inject = typeof document !== "undefined" && (() => {
  const id = "crazy-inline-styles-v2";
  if (!document.getElementById(id)) {
    const root = document.createElement("style");
    root.id = id;
    root.innerHTML = `
      @keyframes scanline { 0% {transform: translateY(-100%)} 100% {transform: translateY(100%)} }
      .animate-scanline {
        background: linear-gradient(to bottom, rgba(168,85,247,0), rgba(168,85,247,0.12), rgba(168,85,247,0));
        animation: scanline 3.4s linear infinite;
        mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
      }
    `;
    document.head.appendChild(root);
  }
})();
