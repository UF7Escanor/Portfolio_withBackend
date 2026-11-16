import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function ConnectWithMe() {
  return (
    <div className="flex flex-col gap-4 mt-10">
      {/* Heading */}
      {/* <h2 className="text-2xl font-semibold text-black">Connect with Me</h2> */}

      {/* Icons */}
      <div className="flex gap-6">
        <a
          href="https://github.com/UF7Escanor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-[#00F5FF] hover:text-[#3B82F6]"
        >
          <Github size={40} />
        </a>

        <a
          href="https://www.linkedin.com/in/rahul-sen-thakuri-52556b31a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-[#00F5FF] hover:text-[#3B82F6]"
        >
          <Linkedin size={40} />
        </a>

        <a
          href="https://www.instagram.com/ra__ul_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition text-[#00F5FF] hover:text-[#3B82F6]"
        >
          <Instagram size={40} />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nameisrahulsenthakuri@gmail.com"
          className="hover:scale-110 transition text-[#00F5FF] hover:text-[#3B82F6]"
        >
          <Mail size={40} />
        </a>
      </div>
    </div>
  );
}
