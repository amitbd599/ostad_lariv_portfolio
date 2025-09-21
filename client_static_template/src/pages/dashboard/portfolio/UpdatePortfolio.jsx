import DashboardLayout from "../../../layout/DashboardLayout";

const UpdatePortfolio = () => {
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Update Advantages</h2>
              </div>

              <form
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='title'
                    className='inputBox'
                    placeholder='Title'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='category'
                    className='inputBox'
                    placeholder='Category'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='link'
                    className='inputBox'
                    placeholder='Link'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='img'
                    className='inputBox'
                    placeholder='Img CDN'
                    required
                    type='text'
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>Update Portfolio</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UpdatePortfolio;
