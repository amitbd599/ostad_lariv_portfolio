import {
  FaBlog,
  FaClockRotateLeft,
  FaRegCircleUser,
  FaRegCommentDots,
} from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import BlogStore from "../store/BlogStore";
import { useEffect, useState } from "react";
import { formatDate } from "../helper/helper";
import CommentStore from "../store/CommentStore";
import { HiOutlineRefresh } from "react-icons/hi";

const BlogDetailsComponent = () => {
  let { id } = useParams();
  let { singleBlogRequest, singleBlogData } = BlogStore();

  let [data, setData] = useState({
    blogID: "",
    name: "",
    email: "",
    comment: "",
  });
  let {
    createCommentRequest,
    createCommentLoading,
    allCommentRequest,
    allCommentData,
  } = CommentStore();

  useEffect(() => {
    singleBlogRequest(id);
    allCommentRequest(id);
  }, [id, singleBlogRequest, allCommentRequest]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    data.blogID = id;

    let res = await createCommentRequest(data);
    if (res) {
      allCommentRequest(id);
    }
  };

  return (
    <>
      <section className='py-[30px] md:py-[80px]'>
        <div className='container'>
          <div className='menuBox' data-aos='fade-up' data-aos-delay='50'>
            <div className=' inline-block rounded-full border border-text px-[20px] py-[5px]'>
              <div className='flex items-center gap-[6px]'>
                <span>
                  <FaBlog className='fa-light fa-user text-[14px] text-white' />
                </span>
                <span className='pl-[6px] text-[14px] text-white'>
                  Blog Details
                </span>
              </div>
            </div>
          </div>
          <div className='mt-[60px]  '>
            <div>
              <div
                className='w-full overflow-hidden lg:h-[720px]'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                <img
                  src={`/api/v1/get-file/${singleBlogData?.img}`}
                  alt='Lariv - React Portfolio Template'
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
              <div
                className='title mt-[40px]'
                data-aos='fade-up'
                data-aos-delay='150'
              >
                <h2 className='text-[26px] font-semibold capitalize leading-[36px] text-white md:text-[32px] md:leading-[42px]'>
                  {singleBlogData?.category}
                </h2>
              </div>
              <div
                className='mt-[20px] flex items-center gap-[20px]'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='flex items-center gap-[10px]'>
                  <span>
                    <FaClockRotateLeft className='text-base text-theme' />
                  </span>
                  <span className='text-sm text-text'>
                    {" "}
                    {formatDate(singleBlogData?.createdAt)}
                  </span>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <span>
                    <FaRegCommentDots className='text-base text-theme' />
                  </span>
                  <span className='text-sm text-text'>
                    {!!allCommentData === false ? 0 : allCommentData?.length}{" "}
                    Comments
                  </span>
                </div>
              </div>
              <div
                className='mt-[30px]'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                {parse(singleBlogData?.description || "")}
              </div>
              <div className='mt-[30px]'>
                <div className='grid items-center justify-between md:flex'>
                  <div data-aos='fade-up' data-aos-delay='100'>
                    <p className='text-[18px] font-semibold text-white'>
                      By Alex Johan
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-[30px] md:mt-[10px]'>
                <div data-aos='fade-up' data-aos-delay='100'>
                  <h2 className='text-[22px] font-semibold text-white'>
                    {!!allCommentData === false ? 0 : allCommentData?.length}{" "}
                    Comments
                  </h2>
                </div>
                <div className='my-[15px] border-t border-[#ddd] ' />
                {!!allCommentData === true ? (
                  <>
                    <div className='parent mt-[40px] grid gap-[30px]'>
                      {allCommentData?.map((item, index) => (
                        <div
                          key={index}
                          className='flex w-full gap-[30px]'
                          data-aos='fade-up'
                          data-aos-delay='100'
                        >
                          <div className='w-[20%] md:w-auto'>
                            <FaRegCircleUser className='text-[60px]' />
                          </div>
                          <div className='w-[80%] md:w-auto'>
                            <div className='flex w-full justify-between'>
                              <div>
                                <h2 className='text-[18px] font-medium text-white'>
                                  {item?.name}
                                </h2>
                                <h2 className='text-[15px] font-medium text-white'>
                                  {item?.email}
                                </h2>
                              </div>
                            </div>
                            <div className='mt-[10px]'>
                              <p className='text-text'>{item?.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <p className='text-text'>No Comment!</p>
                  </>
                )}

                <div className='mt-[60px]'>
                  <div data-aos='fade-up' data-aos-delay='100'>
                    <h2 className='text-[22px] font-semibold text-white'>
                      Post a Comment
                    </h2>
                    <p className='mt-[2px] text-text'>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form onSubmit={handleSubmit} className='mt-[20px]'>
                      <div className='grid w-full gap-[20px] md:flex'>
                        <div className='md:w-1/2'>
                          <input
                            className='block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none '
                            type='text'
                            name='name'
                            placeholder='Full Name:'
                            onChange={handleChange}
                            value={data?.name}
                          />
                        </div>
                        <div className='md:w-1/2'>
                          <input
                            className='block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none '
                            type='text'
                            placeholder='Your Email:'
                            name='email'
                            onChange={handleChange}
                            value={data?.email}
                          />
                        </div>
                      </div>
                      <div className='mt-[20px]'>
                        <textarea
                          placeholder='Write your Comment here:'
                          cols={30}
                          rows={16}
                          className='block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none '
                          defaultValue={""}
                          name='comment'
                          onChange={handleChange}
                          value={data?.comment}
                        />
                      </div>

                      <div className='mb-[30px] mt-[20px]'>
                        <button className='btn ' type='submit'>
                          {createCommentLoading ? (
                            <span className='flex gap-2'>
                              <HiOutlineRefresh /> Processing
                            </span>
                          ) : (
                            <>Post Comment</>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;
