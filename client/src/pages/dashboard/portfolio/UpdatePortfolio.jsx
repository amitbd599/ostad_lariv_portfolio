import { useEffect, useState } from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioStore from "../../../store/PortfolioStore";
import { HiOutlineRefresh } from "react-icons/hi";

const UpdatePortfolio = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  let [data, setData] = useState({
    title: "",
    category: "",
    link: "",
    img: "",
  });
  let {
    singlePortfolioData,
    singlePortfolioRequest,
    updatePortfolioLoading,
    updatePortfolioRequest,
  } = PortfolioStore();

  useEffect(() => {
    singlePortfolioRequest(id);
  }, [id, singlePortfolioRequest]);

  useEffect(() => {
    if (singlePortfolioData) {
      setData({
        title: singlePortfolioData.title || "",
        category: singlePortfolioData.category || "",
        link: singlePortfolioData.link || "",
        img: singlePortfolioData.img || "",
      });
    }
  }, [singlePortfolioData]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    let res = await updatePortfolioRequest(data, id);
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
                <h2 className='text-[30px] font-bold'>Update Portfolio</h2>
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
                    {updatePortfolioLoading ? (
                      <span className='flex gap-2'>
                        <HiOutlineRefresh /> Processing
                      </span>
                    ) : (
                      <>Update Portfolio</>
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

export default UpdatePortfolio;
