import { useState, useRef } from "react";
import axios from "axios";

const E5x = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null); // Reference to the file input element

  const updateFile = (e) => {
    setSelectedFiles(e.target.files);
    console.log(e.target.files);
  };

  const sendFiles = async () => {
    try {
      const formData = new FormData();
      Array.from(selectedFiles).forEach((file) => {
        formData.append("files", file);
      });

      const res = await axios.post("https://gathervent.axel-cal.fr/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="m-auto">
        <input
          type="file"
          multiple
          accept="image/*" // Restrict to image files
          onChange={updateFile}
          ref={fileInputRef}
          style={{ display: "none" }} // Hide the file input element
        />
        <button
          className="plus-button"
          onClick={() => fileInputRef.current.click()} // Trigger the file input click
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="red"
            class="sm:w-52 sm:h-52
                     w-full h-full m-auto"
          >
            <path
              class="animate-[move_35s_linear_infinite]"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
            Let's center our SVG in the middle of the page by giving its
            container the below classes.
          </svg>

          <p className=" text-2xl">
            cliquez pour selectionner les photos
          </p>
          <p className=" text-2xl">
            {selectedFiles.length} fichiers sélectionnés
          </p>
        </button>
      </div>

      <button className="bg-slate-400 rounded-xl p-4 m-2" onClick={sendFiles}>
        Envoyer les fichiers
      </button>
    </div>
  );
};

export default E5x;
