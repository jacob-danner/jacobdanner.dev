import profile from '../../assets/profile.jpg'

// TODO
// This jsx can be cleaned up, some unneeded divs.
// Make this page mobile friendly


export const ContactPage: React.FC = () => {
    return (
     <div id="wrapper" className="mt-20 mb-10 w-9/12 mx-auto p-4 bg-neutral-100 flex items-center rounded-md h-full overflow-auto shadow-2xl">

        <div id='left-wrapper' className='w-1/2 h-3/4 text-neutral-700 flex flex-col items-center'>
            <img src={profile} className="max-h-full mx-auto rounded-md"></img>
        </div>



        <div id="content-wrapper" className="flex w-1/2 h-3/4 items-center text-neutral-700" >
          <div id="contacts" className="bg-neutral-100 w-full h-full mx-10 flex flex-col shadow-2xl rounded-md p-8">
            <h1 className="text-4xl font-bold">Let's Talk.</h1>
            
            <div id='non-header' className='flex flex-col h-full justify-around my-10'>

              <div id="email-wrapper">
                <h1 className="text-xl font-semibold">Contact:</h1>
                <ul id="links">
                <li>jacob.danner@drake.edu</li>
                </ul>
              </div>

              <div id="link-wrapper">
                <h1 className="text-xl font-semibold">Connect with me:</h1>
                <ul id="links">
                  <li><a href="https://github.com/jacob-danner" className='hover:text-sky-700'>GitHub</a></li>
                  <li><a href="https://www.linkedin.com/in/jacob-danner/" className='hover:text-sky-700'>LinkedIn</a></li>
                </ul>
              </div>

              <div id='based-in'>
                <h1 className="text-xl font-semibold">Based In:</h1>
                <h1 className="">Des Moines, IA</h1>
              </div>

            </div>


          </div>
        </div>




      </div>
    )
}