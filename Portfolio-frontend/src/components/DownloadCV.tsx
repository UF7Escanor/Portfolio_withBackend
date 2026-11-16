import { Download } from "lucide-react"; // optional icon
import React from "react";

const DownloadCV: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // path to your CV in the public folder
    link.download = "My_CV.pdf"; // name of downloaded file
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 border-2 border-[#00F5FF] text-[#00F5FF] px-5 py-2 rounded-md hover:bg-gradient-to-r hover:from-[#00F5FF] hover:to-[#3B82F6] hover:text-[#021018] transition-all duration-200 font-medium shadow-[0_0_20px_rgba(0,245,255,0.18)]"
    >
      <Download className="w-4 h-4" />
      Download CV
    </button>
  );
};

export default DownloadCV;
