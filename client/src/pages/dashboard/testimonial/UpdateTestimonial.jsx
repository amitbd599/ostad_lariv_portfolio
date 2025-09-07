import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useEffect, useState } from "react";
import TestimonialStore from "../../../store/TestimonialStore";
import { HiOutlineRefresh } from "react-icons/hi";

const UpdateTestimonial = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  let [data, setData] = useState({
    clientName: "",
    address: "",
    img: "",
    feedback: "",
  });
  let {
    singleTestimonialData,
    singleTestimonialRequest,
    updateTestimonialLoading,
    updateTestimonialRequest,
  } = TestimonialStore();

  useEffect(() => {
    singleTestimonialRequest(id);
  }, [id, singleTestimonialRequest]);

  useEffect(() => {
    if (singleTestimonialData) {
      setData({
        clientName: singleTestimonialData.clientName || "",
        address: singleTestimonialData.address || "",
        img: singleTestimonialData.img || "",
        feedback: singleTestimonialData.feedback || "",
      });
    }
  }, [singleTestimonialData]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    let res = await updateTestimonialRequest(data, id);
    if (res) {
      navigate("/get-all-testimonial");
    }
  };
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Update Testimonial</h2>
              </div>

              <form
                onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    value={data?.clientName}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='address'
                    className='inputBox'
                    placeholder='Address'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.address}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='img'
                    className='inputBox'
                    placeholder='Img CDN'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.img}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='feedback'
                    className='inputBox'
                    placeholder='Feedback'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.feedback}
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn ' type='submit'>
                    {updateTestimonialLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Update Testimonial</>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default UpdateTestimonial;
