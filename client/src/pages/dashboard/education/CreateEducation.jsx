import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import EducationStore from "../../../store/EducationStore";
import { HiOutlineRefresh } from "react-icons/hi";
import { useState } from "react";

const CreateEducation = () => {
  let { createEducationLoading, createEducationRequest } = EducationStore();
  const navigate = useNavigate();

  let [data, setData] = useState({
    title: "",
    institute: "",
    description: "",
    time: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    let res = await createEducationRequest(data);
    if (res) {
      navigate("/get-all-education");
    }
  };

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Create Education</h2>
              </div>

              <form
                onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    value={data?.title}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='institute'
                    className='inputBox'
                    placeholder='Institute'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.institute}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='description'
                    className='inputBox'
                    placeholder='Description'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.description}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='time'
                    className='inputBox'
                    placeholder='Time'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.time}
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn ' type='submit'>
                    {createEducationLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Create Education</>
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

export default CreateEducation;
