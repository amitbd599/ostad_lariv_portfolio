import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useEffect, useState } from "react";
import AdvantageStore from "../../../store/AdvantageStore";
import { HiOutlineRefresh } from "react-icons/hi";

const UpdateAdvantages = () => {
  let { id } = useParams();
  let [data, setData] = useState({
    title: "",
    category: "",
    percent: "",
    time: "",
  });
  let {
    singleAdvantageData,
    singleAdvantageRequest,
    updateAdvantageLoading,
    updateAdvantageRequest,
  } = AdvantageStore();
  const navigate = useNavigate();

  useEffect(() => {
    singleAdvantageRequest(id);
  }, [id, singleAdvantageRequest]);

  useEffect(() => {
    if (singleAdvantageData) {
      setData({
        title: singleAdvantageData.title || "",
        category: singleAdvantageData.category || "",
        percent: singleAdvantageData.percent || "",
        time: singleAdvantageData.time || "",
      });
    }
  }, [singleAdvantageData]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let res = await updateAdvantageRequest(data, id);
    if (res) {
      navigate("/get-all-advantages");
    }
  };
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
                    name='category'
                    className='inputBox'
                    placeholder='Category'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.category}
                  />
                </div>
                <div className='mt-[30px]'>
                  <input
                    name='percent'
                    className='inputBox'
                    placeholder='Percent'
                    required
                    type='number'
                    onChange={handleChange}
                    value={data?.percent}
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
                    {updateAdvantageLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Update Advantages</>
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

export default UpdateAdvantages;
