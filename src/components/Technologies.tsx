import {
  designToolsIcon,
  developmentIcons,
  mobileFlutterIcon,
  mobileIcons,
  webIcons,
} from "../constant";

function Technologies() {
  return (
    <section
      id="technologies"
      className="mx-8 mt-20 border-t-2 border-neutral-700/80 lg:mx-40"
    >
      <div className="mt-14 text-center sm:text-xl lg:mt-16 lg:text-3xl">
        <span className="tracking-widest">TECHNOLOGIES</span>
      </div>
      <div className="flex-wrap text-lg sm:text-xl lg:flex lg:justify-between lg:text-2xl">
        <div className="p-2 sm:p-6 lg:p-12">
          <span>Web</span>
          <div className="mt-4 flex cursor-pointer flex-wrap">
            {webIcons.map((icon, index) => (
              <ul key={index} className="px-2 py-4">
                <li className="flex flex-col items-center text-center text-xs opacity-50 duration-300 hover:opacity-100 sm:text-sm lg:text-base">
                  <div> {icon.icon}</div>
                  <p> {icon.techName}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="p-2 sm:p-6 lg:p-12">
          <span>Design Tools</span>
          <div className="mt-4 flex cursor-pointer flex-wrap">
            {designToolsIcon.map((icon, index) => (
              <ul key={index} className="px-2 py-4">
                <li className="flex flex-col items-center text-center text-xs opacity-50 duration-300 hover:opacity-100 sm:text-sm lg:text-base">
                  <div> {icon.icon}</div>
                  <p> {icon.techName}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-wrap text-lg sm:text-xl lg:flex lg:justify-between lg:text-2xl">
        <div className="p-2 sm:p-6 lg:p-12">
          <span>Mobile</span>
          <div className="mt-4 flex cursor-pointer flex-wrap">
            {mobileIcons.map((icon, index) => (
              <ul key={index} className="px-2 py-4">
                <li className="flex flex-col items-center text-center text-xs opacity-50 duration-300 hover:opacity-100 sm:text-sm lg:text-base">
                  <div> {icon.icon}</div>
                  <p> {icon.techName}</p>
                </li>
              </ul>
            ))}
          </div>

          <div className="mt-4 flex cursor-pointer flex-wrap">
            {mobileFlutterIcon.map((icon, index) => (
              <ul key={index} className="px-2 py-4">
                <li className="flex flex-col items-center text-center text-xs opacity-50 duration-300 hover:opacity-100 sm:text-sm lg:text-base">
                  <div> {icon.icon}</div>
                  <p> {icon.techName}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="p-2 sm:p-6 lg:p-12">
          <span>Development Tools</span>
          <div className="mt-4 flex cursor-pointer flex-wrap">
            {developmentIcons.map((icon, index) => (
              <ul key={index} className="px-2 py-4">
                <li className="flex flex-col items-center text-center text-xs opacity-50 duration-300 hover:opacity-100 sm:text-sm lg:text-base">
                  <div> {icon.icon}</div>
                  <p> {icon.techName}</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
