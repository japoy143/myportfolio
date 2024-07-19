import { projectAssets } from "../constant";
import StaggerText from "react-stagger-text";
function Projects() {
  //emphasize words by using keywords array
  const highlightKeywords = (description: string, keywords: string[]) => {
    const parts = description.split(
      new RegExp(`(${keywords.join("|")})`, "gi"),
    );
    return parts.map((part, index) =>
      keywords.includes(part) ? (
        <strong key={index} className="opacity-100">
          <StaggerText staggerDuration={2.5}>{part}</StaggerText>
        </strong>
      ) : (
        <span key={index} className="text-neutral-400">
          <StaggerText>{part}</StaggerText>
        </span>
      ),
    );
  };
  return (
    <section
      id="project"
      className="mx-8 mt-20 border-t-2 border-neutral-700/80 lg:mx-40"
    >
      <div className="mt-14 text-center sm:text-xl lg:mt-16 lg:text-3xl">
        <span className="tracking-widest">PROJECTS</span>
      </div>

      <div className="mt-4 flex w-full flex-wrap justify-between">
        {projectAssets.map((item, index) => (
          <div
            key={index}
            className="md:[46%] w-full p-4 sm:w-[46%] sm:p-8 lg:w-[40%] lg:p-12"
          >
            <div className="mb-2">
              <span>
                <StaggerText staggerType="letter" staggerDuration={1}>
                  {item.title}
                </StaggerText>
              </span>
            </div>
            <div className="w-full rounded-md border-2 border-neutral-400/80">
              <img src={item.img} className="object-contain" />
            </div>
            <div className="mt-4 text-justify indent-6">
              <span className="text-sm lg:text-base">
                {highlightKeywords(item.description, item.keywords)}
              </span>
            </div>

            <div className="mt-4 flex justify-between text-xs lg:mt-6 lg:text-sm">
              <div
                className={`rounded ${item.viewType.length === 0 ? "border-none" : "border"} px-2 py-2`}
              >
                <a href={item.view} target="_blank">
                  {item.viewType}
                </a>
              </div>
              <div className={`rounded border px-2 py-2`}>
                <a href={item.githubUrl} target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
