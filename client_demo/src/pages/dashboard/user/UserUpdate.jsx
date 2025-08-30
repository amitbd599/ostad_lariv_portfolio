import DashboardLayout from "../../../layout/DashboardLayout";

const UserUpdate = () => {
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>User profile update</h2>
              </div>

              <form
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='email'
                    className='inputBox'
                    placeholder='Email'
                    required
                    type='email'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='firstName'
                    className='inputBox'
                    placeholder='FirstName'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='lastName'
                    className='inputBox'
                    placeholder='lastName'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='password'
                    className='inputBox'
                    placeholder='Password'
                    required
                    type='password'
                  />
                </div>

                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>User Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UserUpdate;
