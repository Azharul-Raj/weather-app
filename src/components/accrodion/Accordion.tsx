import { useState } from 'react'
import { WeatherType } from '../../type';

interface AccordionProps{
  weather:WeatherType
}

function Accordion({weather}:AccordionProps) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className="rounded-t-lg border border-neutral-200 bg-white">
      <h2 className="mb-0" id="headingOne">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]text-primary-400 [box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
          type="button">
          Accordion Item #1
          <span
            className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none fill-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      <div className='transition'>
        {isOpen && <div className="px-5 py-4 transition-all">
          <strong>This is the first item's accordion body.</strong> It is
          shown by default, until the collapse plugin adds the appropriate
          classes that we use to style each element. These classes control
          the overall appearance, as well as the showing and hiding via CSS
          transitions. You can modify any of this with custom CSS or
          overriding our default variables. It's also worth noting that just
          about any HTML can go within the <code>.accordion-body</code>,
          though the transition does limit overflow.
        </div>}
      </div>
    </div>
  )
}

export default Accordion;