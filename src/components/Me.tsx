import me from "../assets/me .png";
import { contactIcons } from "../constant";
import StaggerText from "react-stagger-text";

function Me() {
  return (
    <section className="container mx-auto">
      <div className="ml-6 flex items-center space-x-8">
        <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border border-neutral-700/80 lg:h-40 lg:w-40">
          <img
            src={me}
            className="h-full w-full object-cover object-left-top"
            alt="me"
          />
        </div>
        <div className="max-w-[75%] flex-col py-10 lg:max-w-[60%]">
          <span className="text-xl sm:text-4xl lg:text-6xl">
            <StaggerText staggerDuration={1.5}>
              Hello i’m Rainier Software Developer
            </StaggerText>
          </span>
          <div className="mt-4 flex items-center space-x-2">
            {contactIcons.map((icons, index) => (
              <div
                key={index}
                className="opacity-40 duration-300 hover:opacity-100"
              >
                {icons}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:text-medium ml-10 max-w-[85%] text-justify indent-2 text-sm opacity-60 md:ml-44 lg:ml-56 lg:max-w-[60%] lg:indent-8 lg:text-xl">
        <p>
          <StaggerText staggerType="word" startTreshold={1} staggerDuration={2}>
            I've been fascinated by technology and how it functions. I'm
            constantly attempting to adapt to new technologies Through this
            pastime, I've learned a few things that have helped me develop some
            new skills.
          </StaggerText>
        </p>
      </div>
    </section>
  );
}

export default Me;
