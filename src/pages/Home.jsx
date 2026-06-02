import { useState, useEffect, useRef } from "react";

const EMAILJS_SERVICE_ID = "service_scu6o2d";
const EMAILJS_TEMPLATE_ID = "template_kocbea4";
const EMAILJS_PUBLIC_KEY = "Stk0N3VxXIkqhVDX1";

const NAV_LINKS = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];

const SKILLS = [
    { name: "Laravel", pct: 95, icon: "⚙️" },
    { name: "PHP", pct: 90, icon: "🐘" },
    { name: "REST API", pct: 95, icon: "🔌" },
    { name: "MySQL", pct: 90, icon: "🗄️" },
    { name: "Auth & JWT", pct: 90, icon: "🔐" },
    { name: "HTML & CSS", pct: 85, icon: "🎨" },
    { name: "JavaScript", pct: 75, icon: "⚡" },
    { name: "Git & Postman", pct: 80, icon: "🛠️" },
];

const EXPERIENCE = [
    {
        title: "Laravel Backend Developer",
        period: "2024 – Present",
        company: "Aegiz Technologies",
        points: [
            "Developed scalable RESTful APIs using Laravel and MySQL.",
            "Built admin panels, authentication systems, and CRM modules.",
            "Worked on billing software, healthcare systems, and job portals.",
            "Integrated APIs, optimized databases, and improved backend performance.",
        ],
    },
    {
        title: "Laravel Developer Intern",
        period: "2023 – 2024",
        company: "Aegiz Technologies",
        points: [
            "Developed responsive web applications using PHP and Laravel.",
            "Worked with MySQL databases and REST API integration.",
            "Implemented authentication, debugging, and backend optimization.",
            "Collaborated with the development team on live projects.",
        ],
    },
];

const EDUCATION = [
    {
        title: "B.Sc Computer Science",
        period: "2020 – 2023",
        institution: "Karpagam Academy of Higher Education",
        desc: "Completed Bachelor's degree with strong knowledge in programming, database management, and software development.",
    },
    {
        title: "Higher Secondary Education",
        period: "2019 – 2020",
        institution: "Government Higher Secondary School",
        desc: "Completed higher secondary education with focus on computer science fundamentals.",
    },
];

const PROJECTS = [
    {
        id: "salon", title: "Salon Billing CRM",
        desc: "Billing, appointment booking, payroll, and inventory management system.",
        url: "https://zerotoherosaloon.com/", tags: ["Laravel", "MySQL", "CRM"],
        color: "#a855f7", emoji: "🏪", category: "Salon Management CRM",
        type: "Full Stack Web Application", technologies: "Laravel, PHP, MySQL, Bootstrap, JavaScript",
        features: ["Billing & Invoice Generation", "Appointment Booking", "Staff Management", "Payroll System", "Inventory Tracking"],
        detailTitle: "Salon Billing & CRM Software",
        detail1: "This Salon CRM project is a complete salon management system developed to simplify daily salon operations. The application includes customer management, appointment scheduling, billing and invoice generation, staff attendance tracking, payroll management, and product/service handling.",
        detail2: "The system helps salon owners manage their business efficiently through an easy-to-use dashboard with real-time data management and responsive UI design.",
        highlights: ["Real-time dashboard", "Multi-staff support", "Invoice PDF export", "Inventory alerts"], status: "Live", year: "2025",
    },
    {
        id: "healthcare", title: "Healthcare Management CRM",
        desc: "Patient management and appointment booking platform with secure APIs.",
        url: "https://premierhealthcenterfl.com/crm/", tags: ["Laravel", "REST API", "Healthcare"],
        color: "#7c3aed", emoji: "🏥", category: "Healthcare Management",
        type: "Full Stack Web Application", technologies: "Laravel, PHP, MySQL, Bootstrap, JavaScript",
        features: ["Appointment Booking", "Patient Management", "Doctor Details", "Responsive UI", "Contact System"],
        detailTitle: "Premier Health Center Website",
        detail1: "Premier Health Center is a modern healthcare management website developed to provide patients with an easy and seamless online experience.",
        detail2: "The project was developed using Laravel framework with a focus on performance, clean UI design, and user-friendly navigation.",
        highlights: ["HIPAA-friendly design", "Doctor availability system", "Mobile responsive", "Secure patient data"], status: "Live", year: "2026",
    },
    {
        id: "jobs", title: "Job Portal System",
        desc: "Online recruitment platform for employers and job seekers.",
        url: "https://jobportal.hummingjobs.in/", tags: ["Laravel", "MySQL", "Portal"],
        color: "#9333ea", emoji: "💼", category: "Job Portal",
        type: "Full Stack Web Application", technologies: "Laravel, PHP, MySQL, Bootstrap, JavaScript",
        features: ["Job Listings", "Candidate Registration", "Employer Dashboard", "Search & Filters", "Application Management"],
        detailTitle: "Humming Jobs Recruitment Platform",
        detail1: "Humming Jobs is a recruitment and job portal platform developed to connect employers and job seekers through a simple and modern interface.",
        detail2: "Built using Laravel with responsive UI, advanced filtering, secure authentication, and efficient database management.",
        highlights: ["Advanced job filters", "Resume upload", "Employer dashboard", "Email notifications"], status: "Live", year: "2025",
    },
    {
        id: "linkus", title: "Linkus",
        desc: "Multi-role service booking platform for real estate, advertising, tourism, and location-based services.",
        url: "https://linkusgy.com/", tags: ["Laravel", "REST API", "Service Booking"],
        color: "#6d28d9", emoji: "🔗", category: "Service Booking Platform",
        type: "Web Application", technologies: "Laravel, PHP, MySQL, REST API, Bootstrap, JavaScript",
        features: ["Multi-role User Management", "Service Search & Booking", "Vendor Dashboard", "Admin Panel", "Booking Status Tracking"],
        detailTitle: "Linkus Service Booking Platform",
        detail1: "Linkus is a multi-role service booking platform that connects users with service providers across real estate, advertising, tourism, and other location-based services.",
        detail2: "Developed using Laravel and REST APIs with dedicated user, vendor, and admin panels for booking management, vendor verification, service tracking, and business analytics.",
        highlights: ["Multi-role access", "Vendor verification", "Location-based services", "Booking analytics"], status: "Live", year: "2024",
    },
    {
        id: "friendzone", title: "Friendzone",
        desc: "Backend APIs and admin panel for a mobile app including user management, auth, and content management.",
        url: "https://friendzone.live/", tags: ["Laravel", "Admin Panel", "Auth"],
        color: "#8b5cf6", emoji: "👫", category: "Social Platform",
        type: "Full Stack Web Application", technologies: "Laravel, PHP, MySQL, Bootstrap, JavaScript",
        features: ["User Profiles", "Friend Requests", "Real-Time Chat", "Posts & Feeds", "Notifications System"],
        detailTitle: "FriendZone Social Platform",
        detail1: "FriendZone is a social networking platform developed to help users connect, communicate, and share updates with friends.",
        detail2: "Includes user authentication, profile management, friend requests, messaging system, notifications, and responsive UI.",
        highlights: ["JWT Auth", "Admin panel", "Push notifications", "Content moderation"], status: "Live", year: "2025",
    },
    {
        id: "ffdj", title: "FFDJ",
        desc: "A service marketplace platform connecting Customers, Franchise Partners, and Distributors with subscription-based service management.",
        url: "https://ffdj.in/", tags: ["Laravel", "PHP", "MySQL"],
        color: "#7e22ce", emoji: "🏢", category: "Service Marketplace Platform",
        type: "Full Stack Web Application", technologies: "Laravel, PHP, MySQL, JavaScript, Bootstrap, REST API",
        features: ["Franchise Management", "Distributor Management", "Customer Module", "Service Listings", "Subscription Plans", "Renewal Management", "Role-Based Access Control"],
        detailTitle: "FFDJ Franchise & Distributor Management Platform",
        detail1: "FFDJ is a service marketplace platform where Franchisees and Distributors can register, manage profiles, and publish services for customers.",
        detail2: "Customers can browse available services, contact service providers directly, and access services through a centralized platform with annual subscription and renewal management.",
        highlights: ["Franchise & Distributor Modules", "Annual Subscription Management", "Service Listing Platform", "Role-Based Authentication", "Admin Dashboard", "Customer Engagement System"],
        status: "Live", year: "2026",
    },
    {
        id: "joydear", title: "Joydear",
        desc: "Backend APIs and admin panel for a mobile app with secure authentication and database management.",
        url: "https://dearapp.in/", tags: ["Laravel", "MySQL", "JWT"],
        color: "#a21caf", emoji: "💝", category: "Communication Platform",
        type: "Web Application", technologies: "Laravel, PHP, MySQL, Bootstrap, JavaScript",
        features: ["User Authentication", "Messaging System", "Profile Management", "Notifications", "Responsive UI Design"],
        detailTitle: "Dear App Communication Platform",
        detail1: "Dear App is a modern communication and social interaction platform for smooth and engaging online experience.",
        detail2: "Developed using Laravel with secure authentication, efficient database management, and interactive frontend design.",
        highlights: ["Secure messaging", "Profile customization", "Notification system", "Scalable DB"], status: "Live", year: "2025",
    },
    {
        id: "gplast", title: "G-Plast",
        desc: "Corporate manufacturing website and management platform for showcasing injection moulding, die-casting, and industrial engineering services.",
        url: "https://aegiiz.us/live_gplast",
        image: "/assets/projects/gplast.png",
        tags: ["Laravel", "Manufacturing", "CMS"],
        color: "#0f766e",
        emoji: "🏭",
        category: "Manufacturing Industry",
        type: "Corporate Web Application",
        technologies: "Laravel, PHP, MySQL, Bootstrap, JavaScript",
        features: [
            "Product & Service Management",
            "Industry Solutions Showcase",
            "Client Enquiry System",
            "Responsive Website Design",
            "Admin Content Management"
        ],
        detailTitle: "G-Plast Manufacturing Solutions Platform",
        detail1: "G-Plast is a leading manufacturing company specializing in tool & die making, injection moulding, pressure die-casting, and precision engineering solutions for multiple industries.",
        detail2: "Developed and maintained a scalable Laravel-based platform with dynamic content management, service presentation modules, enquiry handling, and responsive user experience.",
        highlights: [
            "Industrial service showcase",
            "Product gallery management",
            "Customer enquiry system",
            "Responsive corporate website"
        ],
        status: "Live",
        year: "2026"
    },
    {
        id: "calltruck",
        title: "Call Truck",
        desc: "Truck booking and logistics management platform that connects customers with nearby drivers for goods transportation and delivery services.",
        url: "#",
        tags: ["Laravel", "Logistics", "Mobile App"],
        color: "#2563eb",
        emoji: "🚚",
        category: "Logistics & Transportation",
        type: "Truck Booking Platform",
        technologies: "Laravel, PHP, MySQL, Flutter, Firebase, Reverb WebSocket, REST API",
        features: [
            "Customer Truck Booking",
            "Real-Time Driver Tracking",
            "Live Trip Management",
            "Driver & Customer Mobile Apps",
            "OTP-Based Trip Verification",
            "Push Notifications",
            "Admin Management Dashboard"
        ],
        detailTitle: "Call Truck Logistics & Transport Management Platform",
        detail1: "Call Truck is a logistics and transportation platform designed to connect customers with nearby truck drivers for seamless goods transportation. The system supports real-time booking, trip tracking, driver assignment, and delivery management.",
        detail2: "Developed a scalable Laravel backend with Flutter mobile applications for customers and drivers. Implemented live location tracking, WebSocket-based real-time communication, Firebase push notifications, OTP verification, ride lifecycle management, and admin monitoring tools.",
        highlights: [
            "Real-time truck booking system",
            "Live driver location tracking",
            "OTP-based trip verification",
            "Push notification integration",
            "Driver acceptance & trip management",
            "Admin monitoring dashboard"
        ],
        status: "In Development",
        year: "2026"
    },
];

// ── STATUS BADGE ──
const getStatusBadge = (status) => {
    const styles = {
        "Live": {
            background: "rgba(22,163,74,0.08)",
            border: "1px solid rgba(22,163,74,0.25)",
            color: "#16a34a",
        },
        "In Development": {
            background: "rgba(234,179,8,0.08)",
            border: "1px solid rgba(234,179,8,0.25)",
            color: "#ca8a04",
        },
    };
    const style = styles[status] || {
        background: "rgba(100,100,100,0.08)",
        border: "1px solid rgba(100,100,100,0.25)",
        color: "#666",
    };
    const dot = status === "Live" ? "● " : "◐ ";
    return (
        <span style={{ ...style, borderRadius: 999, padding: "4px 12px", fontSize: 11.5, fontWeight: 700, letterSpacing: ".06em" }}>
            {dot}{status}
        </span>
    );
};

// Project screenshot using microlink API (free, no key needed)
function ProjectImage({ url, color, emoji, title }) {
    const [imgSrc, setImgSrc] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
        setImgSrc(screenshotUrl);
    }, [url]);

    return (
        <div style={{
            width: "100%", aspectRatio: "16/9", borderRadius: "12px 12px 0 0",
            overflow: "hidden", position: "relative",
            background: `linear-gradient(135deg, ${color}22 0%, ${color}08 100%)`,
            border: `1px solid ${color}20`, borderBottom: "none",
            marginBottom: 0,
        }}>
            {imgSrc && !error && (
                <img
                    src={imgSrc}
                    alt={`${title} screenshot`}
                    onLoad={() => setLoaded(true)}
                    onError={() => setError(true)}
                    style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        objectPosition: "top",
                        opacity: loaded ? 1 : 0,
                        transition: "opacity 0.4s ease",
                        display: "block",
                    }}
                />
            )}
            {(!loaded || error) && (
                <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", gap: 10,
                    background: `linear-gradient(135deg, ${color}18 0%, ${color}06 100%)`,
                }}>
                    <div style={{ width: "85%", background: "rgba(255,255,255,0.12)", borderRadius: 10, overflow: "hidden", border: `1px solid ${color}30` }}>
                        <div style={{ background: "rgba(0,0,0,0.15)", padding: "7px 12px", display: "flex", alignItems: "center", gap: 6 }}>
                            {["#ff5f57", "#febc2e", "#28c840"].map(c => (
                                <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.8 }} />
                            ))}
                            <div style={{ flex: 1, background: "rgba(255,255,255,0.15)", borderRadius: 4, height: 16, marginLeft: 8, display: "flex", alignItems: "center", paddingLeft: 8 }}>
                                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{url}</span>
                            </div>
                        </div>
                        <div style={{ padding: "20px 16px", textAlign: "center" }}>
                            <div style={{ fontSize: 32, marginBottom: 8 }}>{emoji}</div>
                            <div style={{ fontSize: 13, color: color, fontWeight: 700 }}>{title}</div>
                            <div style={{ fontSize: 11, color: "rgba(100,100,100,0.7)", marginTop: 4 }}>Loading preview...</div>
                        </div>
                    </div>
                </div>
            )}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 40,
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.05))",
                pointerEvents: "none",
            }} />
        </div>
    );
}

function useScrollSpy(active) {
    const [act, setAct] = useState("hero");
    useEffect(() => {
        if (active) return;
        const observer = new IntersectionObserver(
            (entries) => { entries.forEach((e) => { if (e.isIntersecting) setAct(e.target.id); }); },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        NAV_LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, [active]);
    return act;
}

function CircleProgress({ pct, size = 80 }) {
    const [prog, setProg] = useState(0);
    const ref = useRef();
    const r = (size - 10) / 2;
    const circ = 2 * Math.PI * r;
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setProg(pct); }, { threshold: 0.3 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [pct]);
    const offset = circ - (prog / 100) * circ;
    return (
        <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(139,92,246,0.15)" strokeWidth="6" />
            <circle cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke="url(#pg)" strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)" }}
            />
            <defs>
                <linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
        </svg>
    );
}

function DetailPage({ project, onBack }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => { window.scrollTo(0, 0); const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);
    const techList = project.technologies.split(", ");
    return (
        <div style={{ minHeight: "100vh", background: "var(--bg)", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(18px)", transition: "opacity .5s ease, transform .5s ease" }}>
            <div style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid var(--border)", padding: "60px 0 52px", background: "var(--surface)" }}>
                <div style={{ position: "absolute", top: -80, right: "10%", width: 500, height: 300, background: `radial-gradient(ellipse, ${project.color}25 0%, transparent 65%)`, pointerEvents: "none" }} />
                <div className="container" style={{ position: "relative" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--muted)", marginBottom: 24, flexWrap: "wrap" }}>
                        <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--accent)", cursor: "pointer", fontFamily: "inherit", fontSize: 13, padding: 0, fontWeight: 600 }}>Home</button>
                        <span style={{ color: "var(--border-c)" }}>›</span><span>Portfolio</span><span style={{ color: "var(--border-c)" }}>›</span>
                        <span style={{ color: "var(--text2)" }}>{project.title}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
                        <div style={{ width: 72, height: 72, borderRadius: 18, flexShrink: 0, background: `${project.color}18`, border: `2px solid ${project.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>{project.emoji}</div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                                <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--text1)", letterSpacing: "-0.03em", lineHeight: 1.15, fontSize: "clamp(1.6rem,4vw,2.4rem)" }}>{project.title}</h1>
                                {/* ── STATUS BADGE (Detail Page) ── */}
                                {getStatusBadge(project.status)}
                            </div>
                            <p style={{ color: "var(--text3)", fontSize: 15, lineHeight: 1.7, maxWidth: 560 }}>{project.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ padding: "52px 24px 80px" }}>
                <div className="detail-grid" style={{ display: "grid", gap: 36, alignItems: "start" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                        <div style={{ borderRadius: 20, overflow: "hidden", border: `1px solid ${project.color}28` }}>
                            <ProjectImage url={project.url} color={project.color} emoji={project.emoji} title={project.title} />
                            <div style={{ background: "var(--bg)", borderTop: `1px solid ${project.color}20`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ display: "flex", gap: 5 }}>{["#ef4444", "#f59e0b", "#22c55e"].map(c => (<div key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.7 }} />))}</div>
                                <div style={{ flex: 1, height: 20, background: "var(--surface)", borderRadius: 4, border: "1px solid var(--border-c)", display: "flex", alignItems: "center", paddingLeft: 8 }}><span style={{ fontSize: 10, color: "var(--text3)" }}>{project.url}</span></div>
                            </div>
                        </div>
                        <div className="card">
                            <h2 style={{ fontSize: "1.15rem", fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text1)", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
                                <span style={{ width: 3, height: 22, background: `linear-gradient(var(--accent), var(--accent2))`, borderRadius: 2, display: "inline-block" }} />{project.detailTitle}
                            </h2>
                            <p style={{ color: "var(--text2)", lineHeight: 1.9, marginBottom: 14, fontSize: 15 }}>{project.detail1}</p>
                            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: 15 }}>{project.detail2}</p>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 18 }}>Key Highlights</h3>
                            <div className="two-col" style={{ display: "grid", gap: 10 }}>
                                {project.highlights.map((h, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--bg)", borderRadius: 10, padding: "12px 16px", border: "1px solid var(--border-c)" }}>
                                        <div style={{ width: 7, height: 7, borderRadius: "50%", background: project.color, flexShrink: 0 }} />
                                        <span style={{ fontSize: 14, color: "var(--text2)", fontWeight: 500 }}>{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                            <div style={{ height: 4, background: `linear-gradient(90deg, ${project.color}, ${project.color}55)` }} />
                            <div style={{ padding: "24px 22px 20px" }}>
                                <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--accent)", marginBottom: 18, fontFamily: "var(--font-display)" }}>Project Info</h3>
                                {[["Category", project.category, "📁"], ["Project Type", project.type, "🖥"], ["Year", project.year, "📅"]].map(([k, v, icon]) => (
                                    <div key={k} style={{ borderBottom: "1px solid var(--border-c)", padding: "12px 0", display: "flex", alignItems: "flex-start", gap: 12 }}>
                                        <span style={{ fontSize: 15, marginTop: 2 }}>{icon}</span>
                                        <div>
                                            <div style={{ fontSize: 11, color: "var(--text3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 3 }}>{k}</div>
                                            <div style={{ color: "var(--text2)", fontSize: 14, fontWeight: 500 }}>{v}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 14 }}>Tech Stack</h3>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {techList.map((t) => (<span key={t} className="tag">{t}</span>))}
                            </div>
                        </div>
                        <div className="card">
                            <h3 style={{ fontSize: 12, fontWeight: 700, color: "var(--text3)", textTransform: "uppercase", letterSpacing: ".12em", marginBottom: 14 }}>Features</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {project.features.map((f, i) => (
                                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                        <div style={{ width: 20, height: 20, borderRadius: 6, background: `${project.color}18`, border: `1px solid ${project.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5L3.5 7L8.5 2" stroke={project.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                        <span style={{ fontSize: 14, color: "var(--text2)" }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href={project.url} target="_blank" rel="noreferrer"
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: `linear-gradient(135deg, var(--accent), var(--accent2))`, color: "#fff", padding: "15px 20px", borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 24px rgba(139,92,246,0.3)", transition: "opacity .2s, transform .2s", fontFamily: "var(--font-display)", letterSpacing: ".02em" }}
                            onMouseEnter={e => { e.currentTarget.style.opacity = ".88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M8 2L13 7L8 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Visit Live Website
                        </a>
                        <button onClick={onBack} style={{ background: "transparent", border: "1px solid var(--border-c)", borderRadius: 12, padding: "13px 20px", color: "var(--text3)", fontFamily: "inherit", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, justifyContent: "center", transition: "all .2s" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text2)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-c)"; e.currentTarget.style.color = "var(--text3)"; }}>
                            ← Back to Portfolio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const active = useScrollSpy(!!selectedProject);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState("");
    const [typed, setTyped] = useState("");
    const [hirePulse, setHirePulse] = useState(false);

    useEffect(() => {
        const words = ["Developer", "Laravel Expert", "Backend Developer", "API Builder"];
        let wi = 0, ci = 0, deleting = false;
        const tick = () => {
            const word = words[wi];
            if (!deleting) { setTyped(word.slice(0, ci + 1)); ci++; if (ci === word.length) { deleting = true; setTimeout(tick, 1500); return; } }
            else { setTyped(word.slice(0, ci - 1)); ci--; if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; } }
            setTimeout(tick, deleting ? 55 : 90);
        };
        const t = setTimeout(tick, 700);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => { setHirePulse(true); setTimeout(() => setHirePulse(false), 600); }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleSend = async () => {
        if (!form.name || !form.email || !form.message) return;
        setSending(true);
        setSendError("");
        try {
            const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    service_id: EMAILJS_SERVICE_ID,
                    template_id: EMAILJS_TEMPLATE_ID,
                    user_id: EMAILJS_PUBLIC_KEY,
                    template_params: { from_name: form.name, from_email: form.email, subject: form.subject || "Portfolio Inquiry", message: form.message, name: form.name, email: form.email },
                }),
            });
            if (res.ok) { setSent(true); setForm({ name: "", email: "", subject: "", message: "" }); }
            else setSendError("Something went wrong. Please try again.");
        } catch { setSendError("Network error. Please try again."); }
        finally { setSending(false); }
    };

    const scrollTo = (id) => {
        setSelectedProject(null);
        setTimeout(() => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }, 50);
        setMenuOpen(false);
    };
    const handleHireMe = () => { setSelectedProject(null); setMenuOpen(false); setTimeout(() => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }, 50); };

    return (
        <div style={{ fontFamily: "var(--font-body)", background: "var(--bg)", color: "var(--text1)", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');

        :root {
          --font-display: 'Plus Jakarta Sans', sans-serif;
          --font-body: 'Plus Jakarta Sans', sans-serif;
          --nav-height: 68px;

          --bg: #f5f3ff;
          --surface: #ffffff;
          --surface-2: #ede9fe;
          --border-c: #ddd6fe;
          --border-hover: #c4b5fd;

          --accent: #7c3aed;
          --accent2: #a855f7;
          --accent3: #5b21b6;
          --accent-light: rgba(124,58,237,0.1);
          --accent-glow: rgba(124,58,237,0.2);

          --text1: #1e1b4b;
          --text2: #4c1d95;
          --text3: #7c3aed;
          --muted: #8b5cf6;

          --green: #16a34a;
          --green-bg: rgba(22,163,74,0.08);
          --green-border: rgba(22,163,74,0.25);

          --hero-bg: #3b0764;
          --hero-bg2: #581c87;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: var(--accent); color: #fff; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--accent2); border-radius: 3px; }
        a { text-decoration: none; color: inherit; }
        section { padding: 96px 0; }

        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .section-title { text-align: center; margin-bottom: 68px; }
        .section-title .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 12px; font-weight: 700;
          color: var(--accent); letter-spacing: .16em; text-transform: uppercase;
          background: var(--accent-light); border: 1px solid rgba(124,58,237,.25);
          border-radius: 999px; padding: 5px 16px; margin-bottom: 16px;
        }
        .section-title h2 {
          font-family: var(--font-display); font-size: clamp(2rem, 4vw, 2.9rem);
          font-weight: 800; color: var(--text1); letter-spacing: -0.03em; margin-bottom: 14px;
        }
        .section-title p { color: #6d28d9; max-width: 600px; margin: 0 auto; line-height: 1.8; font-size: 16px; }

        .card {
          background: var(--surface);
          border: 1px solid var(--border-c);
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 2px 20px rgba(124,58,237,0.06);
        }

        .glow-btn {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          color: #fff; border: none; border-radius: 11px;
          padding: 14px 32px; font-family: var(--font-display);
          font-size: 15px; font-weight: 700; cursor: pointer;
          transition: opacity .2s, transform .2s, box-shadow .2s;
          box-shadow: 0 4px 20px rgba(124,58,237,0.3);
          letter-spacing: .02em;
        }
        .glow-btn:hover { opacity: .92; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,58,237,0.4); }

        .tag {
          background: var(--accent-light);
          border: 1px solid rgba(124,58,237,.2);
          color: var(--accent3);
          padding: 5px 13px; border-radius: 7px;
          font-size: 12.5px; font-weight: 600; display: inline-block;
          margin: 3px 3px 0 0; letter-spacing: .02em;
        }

        input, textarea {
          width: 100%; background: var(--bg);
          border: 1.5px solid var(--border-c); border-radius: 11px;
          padding: 14px 18px; color: var(--text1);
          font-family: var(--font-body); font-size: 15px;
          outline: none; transition: border-color .2s, box-shadow .2s;
        }
        input:focus, textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
        }
        input::placeholder, textarea::placeholder { color: #a78bfa; }
        textarea { resize: vertical; }
        label { font-size: 13px; color: var(--text2); display: block; margin-bottom: 8px; font-weight: 600; letter-spacing: .03em; }

        @keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)} }
        @keyframes dotBlink { 0%,100%{opacity:1}50%{opacity:0.2} }
        @keyframes shimmer { 0%{background-position:-200% center}100%{background-position:200% center} }
        @keyframes hirePulse { 0%{box-shadow:0 0 0 0 rgba(124,58,237,.5)}70%{box-shadow:0 0 0 12px rgba(124,58,237,0)}100%{box-shadow:0 0 0 0 rgba(124,58,237,0)} }
        @keyframes waveIn { from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)} }
        @keyframes rotateRing { from{transform:rotate(0deg)}to{transform:rotate(360deg)} }
        @keyframes bgFloat { 0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-20px) scale(1.03)} }

        .animate-fade-up { animation: fadeUp .8s cubic-bezier(.22,1,.36,1) forwards; }
        .stagger-1 { animation-delay: .1s; opacity: 0; }
        .stagger-2 { animation-delay: .22s; opacity: 0; }
        .stagger-3 { animation-delay: .38s; opacity: 0; }
        .stagger-4 { animation-delay: .55s; opacity: 0; }

        .topnav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          height: var(--nav-height);
          transition: background .3s, border-color .3s, backdrop-filter .3s;
        }
        .topnav-inner {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          height: 100%;
          display: flex; align-items: center; justify-content: space-between;
        }
        .topnav.scrolled {
          background: rgba(245,243,255,0.92);
          border-bottom: 1px solid var(--border-c);
          backdrop-filter: blur(20px);
          box-shadow: 0 2px 20px rgba(124,58,237,0.08);
        }
        .topnav.top { background: rgba(59,7,100,0.15); border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); }

        .nav-logo { display: flex; align-items: center; gap: 12px; cursor: pointer; }
        .nav-logo-dot {
          width: 40px; height: 40px; border-radius: 11px;
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 18px; font-weight: 800; color: #fff;
          box-shadow: 0 4px 16px rgba(124,58,237,0.35); flex-shrink: 0;
        }
        .nav-logo-text { font-family: var(--font-display); font-size: 16px; font-weight: 800; }
        .nav-logo-sub { font-size: 11px; margin-top: 1px; font-weight: 500; }

        .topnav.top .nav-logo-text { color: #fff; }
        .topnav.top .nav-logo-sub { color: rgba(255,255,255,0.6); }
        .topnav.scrolled .nav-logo-text { color: var(--text1); }
        .topnav.scrolled .nav-logo-sub { color: var(--text3); }

        .nav-links { display: flex; align-items: center; gap: 2px; }
        .nav-link-btn {
          background: none; border: none;
          font-family: var(--font-body); font-size: 14.5px; font-weight: 600;
          cursor: pointer; padding: 9px 16px; border-radius: 9px;
          transition: color .2s, background .2s; position: relative;
        }
        .topnav.top .nav-link-btn { color: rgba(255,255,255,0.75); }
        .topnav.top .nav-link-btn:hover { color: #fff; background: rgba(255,255,255,.1); }
        .topnav.scrolled .nav-link-btn { color: #6d28d9; }
        .topnav.scrolled .nav-link-btn:hover { color: var(--accent); background: var(--accent-light); }
        .nav-link-btn.active { color: var(--accent) !important; font-weight: 700; }
        .nav-link-btn.active::after {
          content: ''; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 16px; height: 2.5px; background: var(--accent); border-radius: 2px;
        }

        .nav-right { display: flex; align-items: center; gap: 14px; flex-shrink: 0; }
        .available-badge {
          display: flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2);
          border-radius: 999px; padding: 6px 14px;
          font-size: 12px; color: #fff; font-weight: 600; white-space: nowrap;
        }
        .topnav.scrolled .available-badge {
          background: var(--green-bg); border-color: var(--green-border); color: var(--green);
        }
        .hire-btn {
          background: linear-gradient(135deg, var(--accent), var(--accent2));
          border: none; border-radius: 10px;
          padding: 10px 22px; color: #fff;
          font-family: var(--font-display); font-size: 14px; font-weight: 700;
          cursor: pointer; letter-spacing: .03em; white-space: nowrap;
          box-shadow: 0 3px 16px rgba(124,58,237,0.35);
          transition: opacity .2s, transform .2s;
        }
        .hire-btn:hover { opacity: .9; transform: translateY(-1px); box-shadow: 0 5px 24px rgba(124,58,237,0.45); }

        .mob-menu-btn {
          display: none; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.2);
          border-radius: 9px; color: #fff; font-size: 20px;
          width: 42px; height: 42px; cursor: pointer;
          align-items: center; justify-content: center; flex-shrink: 0;
        }
        .topnav.scrolled .mob-menu-btn { background: var(--accent-light); border-color: var(--border-c); color: var(--accent); }

        .hero-section {
          min-height: 100vh; display: flex; align-items: center;
          background: linear-gradient(160deg, var(--hero-bg) 0%, var(--hero-bg2) 45%, #6b21a8 75%, #7e22ce 100%);
          position: relative; overflow: hidden;
        }
        .hero-overlay-pattern {
          position: absolute; inset: 0; opacity: 0.06;
          background-image: radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px);
          background-size: 30px 30px; pointer-events: none;
        }
        .hero-glow-1 {
          position: absolute; width: 600px; height: 600px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(168,85,247,0.3) 0%, transparent 65%);
          top: -100px; right: -100px; pointer-events: none;
          animation: bgFloat 8s ease-in-out infinite;
        }
        .hero-glow-2 {
          position: absolute; width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 65%);
          bottom: -80px; left: 10%; pointer-events: none;
          animation: bgFloat 10s ease-in-out infinite reverse;
        }
        .hero-ring {
          position: absolute; border-radius: 50%; pointer-events: none;
          border: 1px solid rgba(255,255,255,.06);
          animation: rotateRing 40s linear infinite;
        }

        .stat-chip {
          background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px; padding: 18px 24px; text-align: center;
          backdrop-filter: blur(8px);
        }
        .stat-chip .num { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: #fff; }
        .stat-chip .lbl { font-size: 12px; color: rgba(255,255,255,0.65); margin-top: 4px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase; }

        .about-grid { grid-template-columns: 240px 1fr; }

        .skill-card {
          background: var(--surface); border: 1.5px solid var(--border-c);
          border-radius: 16px; padding: 22px 24px;
          transition: border-color .2s, box-shadow .2s;
        }
        .skill-card:hover { border-color: var(--accent2); box-shadow: 0 4px 24px rgba(124,58,237,0.1); }

        .timeline-dot {
          width: 12px; height: 12px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0; margin-top: 5px;
          box-shadow: 0 0 0 4px rgba(124,58,237,0.15);
        }

        .project-card {
          background: var(--surface); border: 1.5px solid var(--border-c);
          border-radius: 20px; overflow: hidden;
          transition: transform .25s, border-color .25s, box-shadow .25s;
          cursor: pointer; position: relative;
          display: flex; flex-direction: column;
        }
        .project-card:hover { transform: translateY(-6px); border-color: var(--accent2); box-shadow: 0 20px 60px rgba(124,58,237,0.12); }
        .project-card-body { padding: 22px 24px 24px; flex: 1; display: flex; flex-direction: column; }

        .contact-grid { grid-template-columns: 1fr 1.7fr; }
        .contact-card { background: var(--surface); border: 1.5px solid var(--border-c); border-radius: 16px; padding: 18px 22px; display: flex; gap: 18px; align-items: center; transition: border-color .2s, box-shadow .2s; }
        .contact-card:hover { border-color: var(--accent2); box-shadow: 0 4px 20px rgba(124,58,237,0.08); }

        .two-col { grid-template-columns: 1fr 1fr; }
        .detail-grid { grid-template-columns: 1fr 320px; }

        @media (max-width: 1024px) {
          .container { padding: 0 28px; }
          .topnav-inner { padding: 0 28px; }
        }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .available-badge { display: none; }
          .mob-menu-btn { display: flex; }
        }
        @media (max-width: 1024px) {
          .resume-three-col { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 768px) {
          .resume-three-col { grid-template-columns: 1fr !important; }
          .two-col, .about-grid, .detail-grid, .contact-grid { grid-template-columns: 1fr !important; }
          section { padding: 72px 0; }
          .section-title { margin-bottom: 48px; }
          .container { padding: 0 16px; }
          .topnav-inner { padding: 0 16px; }
          .card { padding: 22px; }
          .hero-section { min-height: auto; padding: 120px 0 80px; }
        }
      `}</style>

            {/* ── NAVBAR ── */}
            <nav className={`topnav ${scrolled ? "scrolled" : "top"}`}>
                <div className="topnav-inner">
                    <div className="nav-logo" onClick={() => scrollTo("hero")}>
                        <div className="nav-logo-dot">T</div>
                        <div>
                            <div className="nav-logo-text">Tharani T</div>
                            <div className="nav-logo-sub">Laravel Developer</div>
                        </div>
                    </div>
                    <div className="nav-links">
                        {NAV_LINKS.map(({ id, label }) => (
                            <button key={id} className={`nav-link-btn${!selectedProject && active === id ? " active" : ""}`} onClick={() => scrollTo(id)}>{label}</button>
                        ))}
                    </div>
                    <div className="nav-right">
                        <div className="available-badge">
                            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "dotBlink 1.5s infinite" }} />
                            Available for hire
                        </div>
                        <button className="hire-btn" style={{ animation: hirePulse ? "hirePulse .6s ease-out" : "none" }} onClick={handleHireMe}>✉ Hire Me</button>
                        <button className="mob-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div style={{ position: "fixed", inset: 0, background: "rgba(59,7,100,0.97)", zIndex: 300, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28, backdropFilter: "blur(20px)" }}>
                    <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: 22, right: 22, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 10, color: "#fff", fontSize: 20, width: 44, height: 44, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
                    {NAV_LINKS.map(({ id, label }) => (
                        <button key={id} onClick={() => scrollTo(id)} style={{ background: "none", border: "none", color: "#fff", fontSize: 24, fontFamily: "var(--font-display)", fontWeight: 700, cursor: "pointer", letterSpacing: "-.01em" }}>{label}</button>
                    ))}
                    <button onClick={handleHireMe} style={{ marginTop: 14, padding: "16px 48px", background: "linear-gradient(135deg, var(--accent), var(--accent2))", border: "none", borderRadius: 14, color: "#fff", fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, cursor: "pointer" }}>✉ Hire Me</button>
                </div>
            )}

            {selectedProject ? (
                <div style={{ paddingTop: 68 }}>
                    <DetailPage project={selectedProject} onBack={() => { setSelectedProject(null); setTimeout(() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), 50); }} />
                </div>
            ) : (
                <main style={{ paddingTop: 68 }}>

                    {/* ── HERO ── */}
                    <section id="hero" className="hero-section">
                        <div className="hero-overlay-pattern" />
                        <div className="hero-glow-1" />
                        <div className="hero-glow-2" />
                        <div className="hero-ring" style={{ width: 520, height: 520, top: "50%", right: "-80px", marginTop: "-260px" }} />
                        <div className="hero-ring" style={{ width: 720, height: 720, top: "50%", right: "-180px", marginTop: "-360px", animationDirection: "reverse", animationDuration: "60s" }} />

                        <div className="container" style={{ position: "relative", zIndex: 1 }}>
                            <div className="animate-fade-up stagger-1" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 999, padding: "7px 16px", marginBottom: 26 }}>
                                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "dotBlink 1.5s infinite" }} />
                                <span style={{ fontSize: 12.5, color: "#4ade80", fontWeight: 700, letterSpacing: ".07em" }}>OPEN TO WORK · Available for hire</span>
                            </div>

                            <div className="animate-fade-up stagger-1" style={{ fontSize: 13, color: "rgba(216,180,254,0.9)", fontWeight: 600, letterSpacing: ".16em", textTransform: "uppercase", marginBottom: 16 }}>
                                👋 Hello, I'm
                            </div>

                            <h1 className="animate-fade-up stagger-2" style={{ fontFamily: "var(--font-display)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", marginBottom: 20, fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: 1.02 }}>
                                Tharani T
                            </h1>

                            <div className="animate-fade-up stagger-2" style={{ fontWeight: 600, color: "rgba(233,213,255,0.9)", marginBottom: 30, minHeight: 48, fontSize: "clamp(1.25rem, 3vw, 1.8rem)", fontFamily: "var(--font-display)" }}>
                                I'm a{" "}
                                <span style={{ background: "linear-gradient(135deg, #e9d5ff, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{typed}</span>
                                <span style={{ animation: "blink 1s infinite", color: "#c4b5fd" }}>|</span>
                            </div>

                            <p className="animate-fade-up stagger-3" style={{ color: "rgba(216,180,254,0.8)", maxWidth: 520, lineHeight: 1.9, marginBottom: 48, fontSize: 16.5 }}>
                                Passionate Backend Developer focused on building secure, scalable, and high-performance web applications with{" "}
                                <strong style={{ color: "#e9d5ff" }}>Laravel, PHP, and MySQL</strong>.
                            </p>

                            <div className="animate-fade-up stagger-3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 60 }}>
                                <button className="glow-btn" style={{ background: "#fff", color: "var(--accent)", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }} onClick={() => scrollTo("portfolio")}>
                                    View Projects →
                                </button>
                                <button onClick={handleHireMe} style={{ background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 11, padding: "14px 32px", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all .2s", backdropFilter: "blur(8px)", letterSpacing: ".02em" }}
                                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}>✉ Hire Me</button>
                                <button onClick={() => scrollTo("contact")} style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.18)", borderRadius: 11, padding: "14px 32px", color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all .2s" }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>Contact Me</button>
                            </div>

                            <div className="animate-fade-up stagger-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                {[["2+", "Years Experience"], ["7+", "Live Projects"], ["4+", "Industries Served"]].map(([n, l]) => (
                                    <div key={l} className="stat-chip">
                                        <div className="num">{n}</div>
                                        <div className="lbl">{l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── ABOUT ── */}
                    <section id="about" style={{ background: "var(--bg)" }}>
                        <div className="container">
                            <div className="section-title">
                                <div className="eyebrow">Who I Am</div>
                                <h2>About Me</h2>
                                <p>Dedicated Laravel Backend Developer building secure, scalable web applications with a focus on clean code and performance.</p>
                            </div>
                            <div className="card about-grid" style={{ display: "grid", gap: 52, alignItems: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ width: 160, height: 160, borderRadius: "50%", margin: "0 auto 22px", background: "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, fontFamily: "var(--font-display)", fontWeight: 800, color: "#fff", animation: "float 3s ease-in-out infinite", boxShadow: "0 16px 48px rgba(124,58,237,0.3)" }}>T</div>
                                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20, color: "var(--text1)" }}>Tharani T</div>
                                    <div style={{ color: "var(--accent)", fontSize: 14, fontWeight: 600, marginTop: 6 }}>Laravel Backend Developer</div>
                                    <div style={{ marginTop: 16, display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
                                        {["PHP", "Laravel", "MySQL"].map(t => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 800, color: "var(--text1)", marginBottom: 16 }}>Building the web's backbone — one API at a time.</h3>
                                    <p style={{ color: "#5b21b6", lineHeight: 1.9, marginBottom: 30, fontSize: 16 }}>I am a dedicated Laravel Backend Developer with experience in developing secure, scalable, and efficient web applications. Passionate about backend architecture, API development, database management, and performance optimization with a strong focus on clean and maintainable code.</p>
                                    <div className="two-col" style={{ display: "grid", gap: "16px 32px" }}>
                                        {[["Location", "Ramanathapuram, TN"], ["Phone", "+91 90806 75142"], ["Degree", "B.Sc. Computer Science"], ["Email", "tharanimunees07@gmail.com"], ["Experience", "2 Years"], ["LinkedIn", "tharani-t-2729b422b"]].map(([k, v]) => (
                                            <div key={k} style={{ fontSize: 14 }}>
                                                <span style={{ color: "var(--text3)", fontWeight: 700, letterSpacing: ".04em", fontSize: 11.5, textTransform: "uppercase" }}>{k}</span>
                                                <div style={{ color: "var(--text1)", fontWeight: 500, marginTop: 3, fontSize: 15 }}>{v}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── SKILLS ── */}
                    <section id="skills" style={{ background: "var(--surface-2)" }}>
                        <div className="container">
                            <div className="section-title">
                                <div className="eyebrow">What I Know</div>
                                <h2>Skills</h2>
                                <p>Experienced in backend development, REST API creation, database management, and building scalable web applications.</p>
                            </div>
                            <div className="two-col" style={{ display: "grid", gap: 16 }}>
                                {SKILLS.map(({ name, pct, icon }) => (
                                    <div key={name} className="skill-card" style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                        <div style={{ position: "relative", flexShrink: 0 }}>
                                            <CircleProgress pct={pct} size={80} />
                                            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{icon}</div>
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                                <span style={{ fontSize: 15.5, fontWeight: 700, color: "var(--text1)", fontFamily: "var(--font-display)" }}>{name}</span>
                                                <span style={{ fontSize: 15, color: "var(--accent)", fontWeight: 800 }}>{pct}%</span>
                                            </div>
                                            <div style={{ background: "var(--border-c)", borderRadius: 999, height: 6, overflow: "hidden" }}>
                                                <div style={{ height: "100%", width: `${pct}%`, background: "linear-gradient(90deg, var(--accent), var(--accent2))", borderRadius: 999 }} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── RESUME ── */}
                    <section id="resume" style={{ background: "var(--bg)" }}>
                        <div className="container">
                            <div className="section-title">
                                <div className="eyebrow">My Journey</div>
                                <h2>Resume</h2>
                                <p>Passionate Laravel Backend Developer with experience in secure, scalable, and high-performance web applications.</p>
                            </div>
                            {/* Education + Experience: 2 col */}
                            <div className="two-col" style={{ display: "grid", gap: 44, marginBottom: 52 }}>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30 }}>
                                        <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--accent-light)", border: "1.5px solid rgba(124,58,237,.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
                                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "var(--text1)" }}>Education</h3>
                                    </div>
                                    {EDUCATION.map((ed, i) => (
                                        <div key={i} style={{ display: "flex", gap: 20, marginBottom: 30 }}>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <div className="timeline-dot" />
                                                {i < EDUCATION.length - 1 && <div style={{ flex: 1, width: 2, background: "var(--border-c)", marginTop: 6 }} />}
                                            </div>
                                            <div style={{ paddingBottom: 10 }}>
                                                <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: ".07em", marginBottom: 6, textTransform: "uppercase" }}>{ed.period}</div>
                                                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text1)", fontSize: 16, marginBottom: 4 }}>{ed.title}</div>
                                                <div style={{ color: "var(--accent2)", fontSize: 14, marginBottom: 10, fontWeight: 600 }}>{ed.institution}</div>
                                                <p style={{ color: "#5b21b6", fontSize: 14.5, lineHeight: 1.8 }}>{ed.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 30 }}>
                                        <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--accent-light)", border: "1.5px solid rgba(124,58,237,.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💼</div>
                                        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "var(--text1)" }}>Experience</h3>
                                    </div>
                                    {EXPERIENCE.map((ex, i) => (
                                        <div key={i} style={{ display: "flex", gap: 20, marginBottom: 30 }}>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                                <div className="timeline-dot" />
                                                {i < EXPERIENCE.length - 1 && <div style={{ flex: 1, width: 2, background: "var(--border-c)", marginTop: 6 }} />}
                                            </div>
                                            <div style={{ paddingBottom: 10 }}>
                                                <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: ".07em", marginBottom: 6, textTransform: "uppercase" }}>{ex.period}</div>
                                                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--text1)", fontSize: 16, marginBottom: 4 }}>{ex.title}</div>
                                                <div style={{ color: "var(--accent2)", fontSize: 14, marginBottom: 12, fontWeight: 600 }}>{ex.company}</div>
                                                <ul style={{ color: "#5b21b6", fontSize: 14.5, lineHeight: 1.9, paddingLeft: 18 }}>
                                                    {ex.points.map((p, j) => <li key={j} style={{ marginBottom: 5 }}>{p}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* ── ACHIEVEMENTS: full width, 4-col cards ── */}
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--accent-light)", border: "1.5px solid rgba(124,58,237,.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏆</div>
                                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "var(--text1)" }}>Achievements</h3>
                                </div>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                                    {[
                                        { icon: "🚀", label: "4+ Apps", text: "Developed and maintained production-level web applications." },
                                        { icon: "🔌", label: "30+ APIs", text: "Built and integrated REST APIs for web and mobile platforms." },
                                        { icon: "⚡", label: "Performance", text: "Optimized database queries and improved app performance." },
                                        { icon: "🔐", label: "Security", text: "Implemented secure auth and role-based access control systems." },
                                    ].map((item, i) => (
                                        <div key={i} style={{ background: "var(--surface)", border: "1px solid var(--border-c)", borderRadius: 16, padding: "22px 20px", display: "flex", flexDirection: "column", gap: 12, boxShadow: "0 2px 12px rgba(124,58,237,0.05)", transition: "border-color .2s, transform .2s, box-shadow .2s" }}
                                            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent2)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,58,237,0.12)"; }}
                                            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-c)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(124,58,237,0.05)"; }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                <div style={{ width: 40, height: 40, borderRadius: 11, background: "var(--accent-light)", border: "1.5px solid rgba(124,58,237,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
                                                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, color: "var(--accent)" }}>{item.label}</span>
                                            </div>
                                            <p style={{ color: "#5b21b6", fontSize: 13.5, lineHeight: 1.75, margin: 0 }}>{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── PORTFOLIO ── */}
                    <section id="portfolio" style={{ background: "var(--surface-2)" }}>
                        <div className="container">
                            <div className="section-title">
                                <div className="eyebrow">My Work</div>
                                <h2>Portfolio</h2>
                                <p>Scalable web apps, REST APIs, CRM systems, billing software, healthcare platforms, and admin dashboards.</p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
                                {PROJECTS.map((p) => (
                                    <div key={p.id} className="project-card"
                                        style={{ borderTop: `4px solid ${p.color}` }}
                                        onClick={() => { setSelectedProject(p); window.scrollTo(0, 0); }}>
                                        <ProjectImage url={p.url} color={p.color} emoji={p.emoji} title={p.title} />
                                        <div className="project-card-body">
                                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                                                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}12`, border: `1.5px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{p.emoji}</div>
                                                {/* ── STATUS BADGE (Project Card) ── */}
                                                {getStatusBadge(p.status)}
                                            </div>
                                            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "var(--text1)", fontSize: 17, marginBottom: 8 }}>{p.title}</div>
                                            <p style={{ color: "#5b21b6", fontSize: 14, lineHeight: 1.8, marginBottom: 16, flex: 1 }}>{p.desc}</p>
                                            <div style={{ marginBottom: 16 }}>{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                                            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, color: p.color, fontWeight: 700 }}>
                                                View Details
                                                <svg width="13" height="13" viewBox="0 0 12 12" fill="none"><path d="M2 6H10M7 3L10 6L7 9" stroke={p.color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ── CONTACT ── */}
                    <section id="contact" style={{ background: "var(--bg)" }}>
                        <div className="container">
                            <div className="section-title">
                                <div className="eyebrow">Let's Connect</div>
                                <h2>Contact</h2>
                                <p>Feel free to reach out for backend development projects, Laravel applications, REST API development, or collaboration.</p>
                            </div>
                            <div className="contact-grid" style={{ display: "grid", gap: 44, alignItems: "start" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    {[{ icon: "📍", label: "Location", val: "Ramanathapuram, Tamil Nadu, India" }, { icon: "📞", label: "Phone", val: "+91 9080675142" }, { icon: "✉️", label: "Email", val: "tharanimunees07@gmail.com" }, { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/tharani-t-2729b422b" }].map(({ icon, label, val }) => (
                                        <div key={label} className="contact-card">
                                            <div style={{ width: 46, height: 46, borderRadius: 13, background: "var(--accent-light)", border: "1.5px solid rgba(124,58,237,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                                            <div>
                                                <div style={{ fontSize: 11.5, color: "var(--text3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>{label}</div>
                                                <div style={{ color: "var(--text1)", fontSize: 15, marginTop: 3, fontWeight: 600, wordBreak: "break-word" }}>{val}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="card">
                                    {sent ? (
                                        <div style={{ textAlign: "center", padding: "52px 0" }}>
                                            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(22,163,74,0.1)", border: "1.5px solid rgba(22,163,74,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, margin: "0 auto 22px" }}>✅</div>
                                            <div style={{ fontFamily: "var(--font-display)", color: "#16a34a", fontWeight: 800, fontSize: 22 }}>Message Sent!</div>
                                            <div style={{ color: "#5b21b6", marginTop: 10, fontSize: 15 }}>Thank you for reaching out. I'll get back to you soon.</div>
                                        </div>
                                    ) : (
                                        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                                            <div className="two-col" style={{ display: "grid", gap: 16 }}>
                                                <div><label>Your Name</label><input placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
                                                <div><label>Your Email</label><input type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
                                            </div>
                                            <div><label>Subject</label><input placeholder="Project Inquiry" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} /></div>
                                            <div><label>Message</label><textarea rows={6} placeholder="Hi Tharani, I'd like to discuss..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></div>
                                            {sendError && <div style={{ color: "#dc2626", fontSize: 14, background: "rgba(220,38,38,0.06)", border: "1px solid rgba(220,38,38,0.18)", borderRadius: 9, padding: "11px 16px" }}>{sendError}</div>}
                                            <button className="glow-btn" onClick={handleSend} disabled={sending} style={{ alignSelf: "flex-start", opacity: sending ? .7 : 1, cursor: sending ? "not-allowed" : "pointer" }}>
                                                {sending ? "Sending..." : "Send Message →"}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer style={{ background: "var(--hero-bg)", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "36px 0", textAlign: "center" }}>
                        <div style={{ color: "rgba(216,180,254,0.7)", fontSize: 14 }}>
                            © 2026 <span style={{ color: "#c4b5fd", fontWeight: 700, fontFamily: "var(--font-display)" }}>Tharani T</span> · Built with precision & passion
                        </div>
                    </footer>
                </main>
            )}
        </div>
    );
}