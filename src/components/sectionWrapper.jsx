
import corner from '/images/corner.svg'
function SectionWrapper({ id,sectionHeading, children }) {
  return (
    <section className="w-full min-h-fit mx-auto my-12 p-4 md:p-12" id={id}>
    { sectionHeading && <div className="flex w-fit mx-auto items-center mb-24">
        <img
          className="rotate-[180deg] translate-x-7 translate-y-1"
          src={corner}
          width={35}
        />
        <h1 className=" font-bold text-xl md:text-3xl  p-1 w-fit      ">
          {sectionHeading}
        </h1>
        <img
          className='-translate-x-7 translate-y-1"'
          src={"/images/corner.svg"}
          width={35}
        />
      </div>}

      {children}
    </section>
  );
}

export default SectionWrapper