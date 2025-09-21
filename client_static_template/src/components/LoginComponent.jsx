const LoginComponent = () => {
  return (
    <section className=' h-[100vh] flex items-center justify-center'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-12 gap-[30px] items-center'>
          <div className='col-span-6'>
            <div>
              <img src='/assets/images/login.png' alt='' />
            </div>
          </div>

          <div className='col-span-6  '>
            <div className='border border-theme px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <img src='/assets/images/logo.svg' alt='' />
              </div>

              <form
                id='contact-form'
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='email'
                    className='inputBox'
                    placeholder='Enter Email'
                    id='website'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    className='inputBox'
                    placeholder='Enter Password'
                    id='website'
                    required
                    type='text'
                    name='website'
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
