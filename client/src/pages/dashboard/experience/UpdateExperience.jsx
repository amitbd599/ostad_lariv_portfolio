import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import ExperienceStore from "../../../store/ExperienceStore";
import { useEffect } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

const UpdateExperience = () => {
  let { id } = useParams();
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const company = formData.get("company");
    const description = formData.get("description");
    const time = formData.get("time");

    let res = await updateExperienceRequest(
      {
        title,
        company,
        description,
        time,
      },
      id
    );
    if (res) {
      navigate("/get-all-experience");
    }
  };

  console.log(singleExperienceData);

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
                    defaultValue={singleExperienceData?.title}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='company'
                    className='inputBox'
                    placeholder='Company'
                    required
                    type='text'
                    defaultValue={singleExperienceData?.company}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='description'
                    className='inputBox'
                    placeholder='Description'
                    required
                    type='text'
                    defaultValue={singleExperienceData?.description}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='time'
                    className='inputBox'
                    placeholder='Time'
                    required
                    type='text'
                    defaultValue={singleExperienceData?.time}
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
                      <>Create Experience</>
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
