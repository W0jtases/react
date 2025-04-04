// ProjectBlock.tsx
interface ProjectBlockProps {
  title: string;
  date: string;
  description: string;
  testLink: string;
  codeLink: string;
}

export default function ProjectBlock({
  title,
  date,
  description,
  testLink,
  codeLink,
}: ProjectBlockProps) {
  return (
    <div className="w-3/4 rounded-3xl h-2/6 bg-[#3b3b3b] flex justify-center flex-col">
      <div className="w-full h-1/5 flex items-center justify-center">
        <div className="w-full h-full bg-white rounded-tl-3xl flex items-center">
          <p className="pl-3">{title}</p>
        </div>
        <div className="w-full h-full bg-white rounded-tr-3xl flex items-center justify-end pr-3">
          <p className="pl-3">{date}</p>
        </div>
      </div>
      <div className="w-full h-2/5 flex items-center justify-center">
        <p className="text-white font-bold w-full text-center">{description}</p>
      </div>
      <div className="w-full h-2/5 flex items-center justify-center gap-4">
        <a target="_blank" rel="noreferrer" href={testLink}>
          <button className="bg-white w-30 h-10 rounded-full flex flex-row gap-4 text-xl font-bold items-center justify-center hover:cursor-pointer">
            Test <img className="h-5" src="play.svg" alt="play" />
          </button>
        </a>
        <a target="_blank" rel="noreferrer" href={codeLink}>
          <button className="bg-white w-30 h-10 rounded-full flex flex-row gap-4 text-xl font-bold items-center justify-center hover:cursor-pointer">
            Code <img className="h-5" src="link.svg" alt="link" />
          </button>
        </a>
      </div>
    </div>
  );
}
