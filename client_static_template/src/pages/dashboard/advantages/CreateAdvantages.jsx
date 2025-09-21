import DashboardLayout from "../../../layout/DashboardLayout";

const CreateAdvantages = () => {
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Create Advantages</h2>
              </div>

              <form
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='subject'
                    className='inputBox'
                    placeholder='Subject'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='position'
                    className='inputBox'
                    placeholder='Position'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='percent'
                    className='inputBox'
                    placeholder='Percent'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='time'
                    className='inputBox'
                    placeholder='Time'
                    required
                    type='text'
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>Create Advantages</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default CreateAdvantages;
