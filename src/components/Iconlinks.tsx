import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function ConnectWithMe() {
  return (
    <div className="flex flex-col items-center gap-4 pb-5">
      {/* Heading */}
      {/* <h2 className="text-2xl font-semibold text-black">Connect with Me</h2> */}

      {/* Icons */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <Github size={40} />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <Linkedin size={40} />
        </a>

        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <Twitter size={40} />
        </a>

        <a
          href="mailto:youremail@example.com"
          className="hover:scale-110 transition"
        >
          <Mail size={40} />
        </a>
      </div>
    </div>
  );
}
