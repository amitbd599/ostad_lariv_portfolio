import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import ExperienceStore from "../../../store/ExperienceStore";
import { useEffect, useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

const UpdateExperience = () => {
  let { id } = useParams();
  let [data, setData] = useState({
    title: "",
    company: "",
    description: "",
    time: "",
  });
  let {
    updateExperienceRequest,
    updateExperienceLoading,
    singleExperienceRequest,
    singleExperienceData,
  } = ExperienceStore();
  const navigate = useNavigate();

  useEffect(() => {
    singleExperienceRequest(id);
  }, [id, singleExperienceRequest]);

  useEffect(() => {
    if (singleExperienceData) {
      setData({
        title: singleExperienceData.title || "",
        company: singleExperienceData.company || "",
        description: singleExperienceData.description || "",
        time: singleExperienceData.time || "",
      });
    }
  }, [singleExperienceData]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    let res = await updateExperienceRequest(data, id);
    if (res) {
      navigate("/get-all-experience");
    }
  };

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Update Experience</h2>
              </div>

              <form
                key={singleExperienceData?._id}
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
                    name='company'
                    className='inputBox'
                    placeholder='Company'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.company}
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
                    {updateExperienceLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Update Experience</>
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

export default UpdateExperience;
