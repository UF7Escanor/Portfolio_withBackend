import React from "react";
import { Download } from "lucide-react"; // optional icon

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
      className="flex items-center gap-2 border-2 border-green-500 text-green-500 px-5 py-2 rounded-md hover:bg-green-500 hover:text-white transition-all duration-200 font-medium"
    >
      <Download className="w-4 h-4" />
      Download CV
    </button>
  );
};

export default DownloadCV;
