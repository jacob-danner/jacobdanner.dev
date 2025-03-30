import profile from '../../assets/profile.jpg'

// TODO
// This jsx can be cleaned up, some unneeded divs.
// Make this page mobile friendly


export const ContactPage: React.FC = () => {
  return (
    <div id="wrapper" className="mt-20 mb-10 w-9/12 mx-auto p-4 bg-neutral-100 flex items-center rounded-md h-full overflow-auto shadow-2xl">

      <div id='left-wrapper' className='w-1/2 h-3/4 text-neutral-700 flex flex-col items-center justify-center'>
        <img src={profile} className="max-h-full mx-auto rounded-md"></img>
      </div>

      <div id="right-wrapper" className="flex w-1/2 h-3/4 items-center text-neutral-700" >
        <div id="container-content" className="bg-neutral-100 w-full h-full mx-10 flex flex-col shadow-2xl rounded-md p-8 overflow-auto">
          <h1 className="text-4xl font-bold text-underline">Let's Talk.</h1>

          <hr className='mt-6' />

          <div className='h-full'>
            <h2 className="text-xl font-semibold mt-6 mb-4">About me:</h2>
            <div id="about-me-paragraphs" className='space-y-4'>
              <p>I've worked professionally as a software engineer since 2022 — building agentic RAG systems, backend solutions for multiple Fortune 500 companies, and dynamic frontend web applications.</p>
              <p>Complementing this, I've independently explored advanced ML models and neural networks through personal projects and studying white papers.</p>
              <p className='font-semibold'>I'm currently seeking remote ML/AI roles where I can apply my passion for good.</p>
            </div>

            <hr className='mt-6' />

            <h2 className="text-xl font-semibold mt-6 mb-4">Based in:</h2>
            <p>Des Moines, Iowa</p>

            <hr className='mt-6' />

            <h2 className="text-xl font-semibold mt-6 mb-4">Connect with me:</h2>
            <ul id="links" className='space-y-2 list-disc list-inside pb-10'>
              <li><a href="https://github.com/jacob-danner" className='hover:text-sky-700'>GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/jacob-danner/" className='hover:text-sky-700'>LinkedIn</a></li>
              <li><a href="mailto:jacob@jacobdanner.dev" className='hover:text-sky-700'>jacob@jacobdanner.dev</a></li>
              <li><a href="https://huggingface.co/jacob-danner" className='hover:text-sky-700'>Hugging Face</a></li>
            </ul>
          </div>
        </div>
      </div>





    </div>
  )
}