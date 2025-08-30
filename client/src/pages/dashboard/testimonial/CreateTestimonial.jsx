import DashboardLayout from "../../../layout/DashboardLayout";

const CreateTestimonial = () => {
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Create Testimonial</h2>
              </div>

              <form
                className='contact-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='mt-[30px]'>
                  <input
                    name='clientName'
                    className='inputBox'
                    placeholder='Client Name'
                    required
                    type='text'
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='address'
                    className='inputBox'
                    placeholder='Address'
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
                <div className='mt-[30px]'>
                  <textarea
                    cols={5}
                    name='reviewText'
                    className='inputBox'
                    placeholder='Review Text'
                    required
                    type='text'
                  />
                </div>

                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn'>Create Testimonial</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default CreateTestimonial;
