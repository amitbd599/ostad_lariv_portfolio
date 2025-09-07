import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import PortfolioStore from "../../../store/PortfolioStore";
import { useState } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

const CreatePortfolio = () => {
  let { createPortfolioLoading, createPortfolioRequest } = PortfolioStore();
  const navigate = useNavigate();

  let [data, setData] = useState({
    title: "",
    category: "",
    link: "",
    img: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    let res = await createPortfolioRequest(data);
    if (res) {
      navigate("/get-all-portfolio");
    }
  };
  return (
    <DashboardLayout>
      <section className='mt-[50px]'>
        <div className='container mx-auto '>
          <div>
            <div className='border border-gray-200 px-[30px] py-[40px] rounded-[20px] '>
              <div>
                <h2 className='text-[30px] font-bold'>Create Portfolio</h2>
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
                    name='link'
                    className='inputBox'
                    placeholder='Link'
                    required
                    type='text'
                    onChange={handleChange}
                    value={data?.link}
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
                <div
                  className='wow fadeIn  animated mt-[30px]'
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <button className='btn ' type='submit'>
                    {createPortfolioLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Create Portfolio</>
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

export default CreatePortfolio;
