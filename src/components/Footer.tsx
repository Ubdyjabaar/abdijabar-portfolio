import { Globe, GitFork, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-xs">
          &copy; {new Date().getFullYear()} Abdijabar Mohamed Ibrahim. All
          rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: GitFork, href: "#" },
            { icon: Globe, href: "#" },
            { icon: MessageCircle, href: "#" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              className="text-zinc-500 hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
