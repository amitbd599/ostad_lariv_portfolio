import DashboardLayout from "../../../layout/DashboardLayout";

const CreateBlog = () => {
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Create Blog</h2>
              </div>

              <form
                id='contact-form'
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
                    name='sortDescription'
                    className='inputBox'
                    placeholder='Sort Description'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <textarea
                    name='longDescription'
                    className='inputBox'
                    placeholder='Long Description'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='featureImg'
                    className='inputBox'
                    placeholder='Feature Img CDN'
                    required
                    type='text'
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>Create Blog</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default CreateBlog;
