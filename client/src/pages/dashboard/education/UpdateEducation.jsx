import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useEffect } from "react";
import EducationStore from "../../../store/EducationStore";
import { HiOutlineRefresh } from "react-icons/hi";

const UpdateEducation = () => {
  let { id } = useParams();
  let {
    singleEducationData,
    singleEducationRequest,
    updateEducationLoading,
    updateEducationRequest,
  } = EducationStore();
  const navigate = useNavigate();

  useEffect(() => {
    singleEducationRequest(id);
  }, [id, singleEducationRequest]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const institute = formData.get("institute");
    const description = formData.get("description");
    const time = formData.get("time");

    let res = await updateEducationRequest(
      {
        title,
        institute,
        description,
        time,
      },
      id
    );
    if (res) {
      navigate("/get-all-education");
    }
  };

  console.log(singleEducationData);

  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Update Education</h2>
              </div>

              <form
                key={singleEducationData?._id}
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
                    defaultValue={singleEducationData?.title}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='institute'
                    className='inputBox'
                    placeholder='Institute'
                    required
                    type='text'
                    defaultValue={singleEducationData?.institute}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='description'
                    className='inputBox'
                    placeholder='Description'
                    required
                    type='text'
                    defaultValue={singleEducationData?.description}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='time'
                    className='inputBox'
                    placeholder='Time'
                    required
                    type='text'
                    defaultValue={singleEducationData?.time}
                  />
                </div>
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn ' type='submit'>
                    {updateEducationLoading ? (
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

export default UpdateEducation;
